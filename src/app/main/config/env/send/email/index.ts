export default {
  from: process.env.SEND_EMAIL_FROM ?? 'arthur.software.developer@gmail.com',
  host: process.env.SEND_EMAIL_HOST ?? 'smtp.gmail.com',
  port: process.env.SEND_EMAIL_PORT ?? 465,
  secure: process.env.SEND_EMAIL_SECURE ?? true,
  auth: {
    user: process.env.SEND_EMAIL_AUTH_USER ?? 'arthur.software.developer@gmail.com',
    password: process.env.SEND_EMAIL_AUTH_PASS ?? 'software123456789'
  }
}
