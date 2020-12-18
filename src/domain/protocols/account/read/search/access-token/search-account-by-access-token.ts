import {
  AccountModelInterface
} from '../../../../../generic/protocols'

/** **specific** search account by access token */
export interface SearchAccountByAccessTokenInterface {
  /**
  * search account by access token
  * @param {string} token searched token
  * @param {string} role searched role
  * @returns {AccountModelInterface | null} account
  */
  searchByAccessToken: (token: string, role?: string) => Promise<AccountModelInterface | null>
}
