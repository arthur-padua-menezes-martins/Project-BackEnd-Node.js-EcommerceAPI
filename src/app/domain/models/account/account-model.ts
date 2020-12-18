export interface AccountModelInterface {
  [field: string]: string | boolean | object | undefined
  id: string
  individual: {
    [field: string]: string | object
    name: string
    email: string
    password: string
    cpf: string
    phone: string[]
    birthDay: string
    address: {
      [field: string]: string
      cep: string
      number: string
      street: string
      neighborhood: string
      city: string
      state: string
    }
  }
  accessToken?: string
  enabled: boolean
}
