import {
  AccountModelInterface
} from '../../../../../models/account/account-model'

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
