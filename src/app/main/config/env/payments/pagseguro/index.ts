import application from '../../application'

export default {
  mode: process.env.PAYMENTS_PAGSEGURO_MODE ?? 'sandbox',
  sandbox: process.env.PAYMENTS_PAGSEGURO_SANDBOX ?? true,
  sandbox_email: process.env.PAYMENTS_PAGSEGURO_SANDBOX_EMAIL ?? 'c76133911878857715129@sandbox.pagseguro.com.br',
  email: process.env.PAYMENTS_PAGSEGURO_EMAIL ?? 'arthur.software.developer@gmail.com',
  token: process.env.PAYMENTS_PAGSEGURO_TOKEN ?? '2A55405B3EC54186947492599537F02B',
  notificationURL: process.env.PAYMENTS_PAGSEGURO_NOTIFICATION_URL ?? `http://localhost:${application.port}/payments/notifications`
}
