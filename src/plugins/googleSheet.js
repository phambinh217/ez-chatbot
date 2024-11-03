import { isQuestionScript } from "@/helpers/script";

const GOOGLE_SHEET_API_URL =
  "https://script.google.com/macros/s/AKfycbxPp0oSxDWLM_jDn85fGc4dEAe0AtgaeYNZJixO49LJfBMSKlDicu2zm2qgzz49-UM9/exec";

/**
 * Gửi tất cả thông tin lên Google Sheets thông qua API
 * @param {Array} scripts - Mảng đối tượng script cần lưu
 */
async function saveScriptsToGoogleSheet(scripts) {
  const id = 1;

  const data = { id };
  const where = { id };

  for (let i = 0; i < scripts.length; i++) {
    const script = scripts[i];

    if (!isQuestionScript(script)) {
      continue;
    }

    data[script.name] = script.answer.content;
  }

  const payload = {
    command: "UPDATE_OR_CREATE_COMMAND",
    sheet_title: "default",
    data,
    where,
  };

  try {
    const response = await fetch(GOOGLE_SHEET_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const responseData = await response.json();
    console.log("Data saved:", responseData);
  } catch (error) {
    console.error("Error saving data:", error);
  }
}

export default function ({ app }) {
  app.onFinished((data) => {
    const scripts = data.scripts;
    saveScriptsToGoogleSheet(scripts);
  });
}
