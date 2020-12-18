const port = process.env.PORT ?? 5050

export default {
  host: process.env.API ?? `http://localhost:${port}/api`,
  port
}
