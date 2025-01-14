import { toSnakeCase, toCamelCase } from "./object"

export const sendRequest = (url, payload) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(toSnakeCase(payload)),
  })
  .then(async (response) => {
    if (response.ok) {
      const json = await response.json();
      return toCamelCase(json)
    }
  })
}
