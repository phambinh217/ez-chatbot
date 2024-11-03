import messageTypeProviders from "@/message-type-providers";

const GOOGLE_SHEET_API_URL =
  "https://script.google.com/macros/s/AKfycbxPp0oSxDWLM_jDn85fGc4dEAe0AtgaeYNZJixO49LJfBMSKlDicu2zm2qgzz49-UM9/exec";

const isQuestionScript = (script) => {
  const scriptType = script.type;
  const messageProvider = messageTypeProviders[scriptType] || null;

  if (!messageProvider) {
    return false;
  }

  /**
   * !! to force convert to boolean
   */
  return !!messageProvider?.isQuestion;
};

/**
 * Gửi tất cả thông tin lên Google Sheets thông qua API
 * @param {Array} scripts - Mảng đối tượng script cần lưu
 */
async function saveScriptsToGoogleSheet(scripts) {
  const id = 1;

  // Tạo đối tượng data trống
  const data = {};

  // Sử dụng vòng lặp for để đảm bảo tuần tự
  for (let i = 0; i < scripts.length; i++) {
    const script = scripts[i];
    if (isQuestionScript(script)) {
      // Thêm cặp key-value từ script.name và script.answer.content
      data[script.name] = script.answer.content;
    }
  }

  // Tạo payload để gửi toàn bộ dữ liệu một lần
  const payload = {
    command: "UPDATE_OR_CREATE_COMMAND",
    sheet_title: "default",
    data: {
      id,
      ...data,
    },
    where: {
      id,
    },
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

// Hàm chính để sử dụng với dữ liệu
export default function ({ app }) {
  app.onFinished((data) => {
    const scripts = data.scripts;
    saveScriptsToGoogleSheet(scripts);
  });
}
