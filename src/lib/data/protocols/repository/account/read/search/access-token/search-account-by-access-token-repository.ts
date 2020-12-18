import {
  AccountModelInterface
} from '../../../../../../generic/protocols'

/** **specific** search account repository by access token */
export interface SearchAccountByAccessTokenInterfacenRepository {
  /**
  * search account repository by access token
  * @param {string} token searched token
  * @param {string} role searched role
  * @returns {AccountModelInterface | null} account repository
  */
  searchByAccessToken: (token: string, role?: string) => Promise<AccountModelInterface | null>
}
