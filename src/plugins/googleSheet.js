export default function ({ app }) {
  app.onFinished((data) => {
    console.log(data)
  })
}
