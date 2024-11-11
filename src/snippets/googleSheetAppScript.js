
/**
 * --------------------------------
 * COMMANDS
 * --------------------------------
 */
const commands = [];

/**
 * Update or create row
 * @param {Sheet} sheet, the sheet where you want to update or add
 * @param {Object} data, the data you want to update or add, eg: {name: "John"}
 * @param {Object} where, the condition to find an existing row, eg: {id: 1}
 */
const UPDATE_OR_CREATE_COMMAND = ({ sheet, data, where }) => {
  const lastRow = sheet.getLastRow();
  const lastColumn = sheet.getLastColumn();

  if (lastRow === 0 && lastColumn === 0) {
    const headers = Object.keys(data);
    sheet.appendRow(headers);
  }

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

  addNewColumnsIfNeeded(sheet, headers, data);

  const columnIndex = headers.map(header => header.toLowerCase());
  const targetColumnIndex = columnIndex.indexOf(Object.keys(where)[0].toLowerCase());

  if (targetColumnIndex === -1) {
    return responseJson({
      message: `Column ${Object.keys(where)[0]} not found in headers`,
    });
  }

  const lastRowWithData = sheet.getLastRow();

  if (lastRowWithData <= 1) {
    const rowData = arrCombine(headers, data);
    sheet.appendRow(rowData);
    return responseJson({
      message: "Row created successfully",
    });
  }

  const range = sheet.getRange(2, targetColumnIndex + 1, lastRowWithData - 1, 1);
  const values = range.getValues();

  let rowIndex = -1;
  const searchValue = Object.values(where)[0];

  for (let i = 0; i < values.length; i++) {
    if (values[i][0] === searchValue) {
      rowIndex = i + 2;
      break;
    }
  }

  if (rowIndex !== -1) {
    const existingRow = sheet.getRange(rowIndex, 1, 1, headers.length).getValues()[0];
    const rowData = arrCombine(headers, data, existingRow);
    sheet.getRange(rowIndex, 1, 1, rowData.length).setValues([rowData]);
    return responseJson({
      message: "Row updated successfully",
    });
  } else {
    const rowData = arrCombine(headers, data);
    sheet.appendRow(rowData);
    return responseJson({
      message: "Row created successfully",
    });
  }
};

commands.push({
  name: "UPDATE_OR_CREATE_COMMAND",
  command: UPDATE_OR_CREATE_COMMAND,
  actionType: "update_or_create",
});

/**
 * List rows
 * @param {Sheet} sheet, the sheet you want to get
 * @param {*} where, the where you want to get
 */
const LIST_ROWS_COMMAND = ({ sheet, where }) => {
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const rows = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).getValues();
  const matchingRows = [];

  for (let i = 0; i < rows.length; i++) {
    let match = true;
    for (let key in where) {
      const colIndex = headers.indexOf(key);
      if (colIndex === -1 || rows[i][colIndex] != where[key]) {
        match = false;
        break;
      }
    }

    if (match) {
      matchingRows.push(objectCombine(headers, rows[i]));
    }
  }

  if (matchingRows.length > 0) {
    return responseJson({
      message: "Rows found",
      data: matchingRows,
    });
  } else {
    return responseJson({
      message: "No matching rows found",
    });
  }
};

commands.push({
  name: "LIST_ROWS_COMMAND",
  command: LIST_ROWS_COMMAND,
  actionType: "list",
});


/**
 * --------------------------------
 * Helpers
 * --------------------------------
 */

/**
 * Check for new fields in data and add columns if they do not exist in headers
 * @param {Sheet} sheet - The Google Sheet object
 * @param {Array} headers - The current headers of the sheet
 * @param {Object} data - The data object containing possible new fields
 */
const addNewColumnsIfNeeded = (sheet, headers, data) => {
  const columnIndex = headers.map(header => header.toLowerCase());

  for (const key in data) {
    if (!columnIndex.includes(key.toLowerCase())) {
      const newColumnIndex = headers.length + 1; // The new column index
      sheet.getRange(1, newColumnIndex).setValue(key); // Add new header to the first row
      headers.push(key); // Update headers array
      columnIndex.push(key.toLowerCase()); // Update the column index
    }
  }
};

/**
 * Create an array from headers and data
 * The order of items in the array will be the same as headers
 * @param {Array} headers
 * @param {Object} data
 * @param {Array} existingRow - The existing row data
 */
const arrCombine = (headers, data, existingRow = []) => {
  const formattedData = [];

  for (let i = 0; i < headers.length; i++) {
    const column = headers[i].toLowerCase();
    // Nếu data chứa giá trị cho cột hiện tại, sử dụng giá trị từ data
    // Nếu không, giữ nguyên giá trị từ dòng hiện tại
    formattedData.push(data[column] !== undefined ? data[column] : existingRow[i]);
  }

  return formattedData;
};

/**
 * Create an object from headers and data
 * key will take from headers
 * value will take from data
 *
 * @param {Array} headers
 * @param {Array} data
 * @returns
 */
const objectCombine = (headers, data) => {
  const formattedData = {};

  for (let i = 0; i < headers.length; i++) {
    const column = headers[i].toLowerCase();
    formattedData[column] = data[i];
  }

  return formattedData;
};


/**
 * Send a JSON response
 * @param {Object} object
 * @returns {ContentService}
 */
const responseJson = (object) => {
  return ContentService.createTextOutput(JSON.stringify(object)).setMimeType(
    ContentService.MimeType.JSON
  );
};

/**
 * --------------------------------
 * Routing
 * --------------------------------
 */
function doGet(e) {
  return ContentService.createTextOutput("Use POST request to submit data.");
}

function doPost(e) {
  const params = JSON.parse(e.postData.contents) || e.parameter;
  const commandName = params?.command;

  if (!commandName) {
    return responseJson({
      message: "Missing command param",
      debug: {
        e,
        params,
      },
    });
  }

  const command = commands.find((c) => c.name === commandName);

  if (!command) {
    return responseJson({
      message: `Command ${commandName} not found`,
    });
  }

  const sheetTitle = params.sheet_title;
  if (!sheetTitle) {
    return responseJson({
      message: "Missing sheet_title param",
    });
  }

  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(sheetTitle);

  if (!sheet) {
    return responseJson({
      message: `Sheet ${sheetTitle} not found`,
    });
  }

  const commandCallback = command.command;

  return commandCallback({
    sheet,
    data: params.data || {},
    where: params?.where || {},
  });
}
