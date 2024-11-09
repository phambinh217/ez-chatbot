import { isQuestionScript } from "@/helpers/script";

async function saveScriptsToGoogleSheet(
  id,
  scripts,
  metadata,
  googleSheetConfig
) {
  const data = { id };
  const where = { id };

  /**
   * Add metadata to the data object
   */
  if (metadata && metadata?.length) {
    for (let i = 0; i < metadata.length; i++) {
      const meta = metadata[i];
      data[meta.name] = meta.value;
    }
  }

  /**
   * Add answer to the data object
   */
  for (let i = 0; i < scripts.length; i++) {
    const script = scripts[i];

    if (!isQuestionScript(script)) {
      continue;
    }

    data[script.name] = script.answer.content?.value || script.answer.content;
  }

  const payload = {
    command: "UPDATE_OR_CREATE_COMMAND",
    sheet_title: googleSheetConfig.sheet || "default",
    data,
    where,
  };

  try {
    const response = await fetch(googleSheetConfig.url, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error saving data:", error);
  }
}

export default function ({ app, options, metadata }) {
  const googleSheetConfig = options.plugins.googleSheet;

  let sessionId = app.initSessionId;

  app.onChangedSession((newSessionId) => {
    sessionId = newSessionId;
  });

  app.onFinished(({ scripts }) => {
    saveScriptsToGoogleSheet(sessionId, scripts, metadata, googleSheetConfig);
  });

  app.onAnswered((script) => {
    saveScriptsToGoogleSheet(sessionId, [script], metadata, googleSheetConfig);
  });
}
