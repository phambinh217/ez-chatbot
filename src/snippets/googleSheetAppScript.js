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
  // Kiểm tra nếu sheet trống, thêm tiêu đề từ `data`
  const lastRow = sheet.getLastRow();
  const lastColumn = sheet.getLastColumn();

  if (lastRow === 0 && lastColumn === 0) {
    // Lấy danh sách tiêu đề từ khóa của `data`
    const headers = Object.keys(data);
    sheet.appendRow(headers); // Thêm tiêu đề vào hàng đầu tiên
  }

  // Lấy tiêu đề sau khi đã khởi tạo (nếu cần)
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

  // Gọi hàm helper để kiểm tra và thêm cột mới nếu cần
  addNewColumnsIfNeeded(sheet, headers, data);

  const columnIndex = headers.map(header => header.toLowerCase());
  const targetColumnIndex = columnIndex.indexOf(Object.keys(where)[0].toLowerCase());

  if (targetColumnIndex === -1) {
    return responseJson({
      message: `Column ${Object.keys(where)[0]} not found in headers`,
    });
  }

  const lastRowWithData = sheet.getLastRow();

  // Kiểm tra nếu chỉ có hàng tiêu đề
  if (lastRowWithData <= 1) {
    // Thêm mới hàng vì không có dữ liệu nào để cập nhật
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

  const rowData = arrCombine(headers, data);

  if (rowIndex !== -1) {
    sheet.getRange(rowIndex, 1, 1, rowData.length).setValues([rowData]);
    return responseJson({
      message: "Row updated successfully",
    });
  } else {
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
 */
const arrCombine = (headers, data) => {
  const formattedData = [];

  for (let i = 0; i < headers.length; i++) {
    const column = headers[i].toLowerCase();
    formattedData.push(data[column]);
  }

  return formattedData;
};

/**
 * Create an object from headers and data
 * The key will be taken from headers, and the value from data
 *
 * @param {Array} headers
 * @param {Array} data
 * @returns {Object}
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
