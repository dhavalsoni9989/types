interface I18nStringBase {
  ar: string;
  en: string;
  fr: string;
  tr: string;
}
type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];
export type I18nString = AtLeastOne<I18nStringBase>;
export interface Address {
  address_1: string;
  address_2: string;
  city: string;
  company: string;
  country: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  postcode: string;
  state: string;
}

/**
 * Pass template depend on store or supplier
 *
 * @export
 * @interface RoleUser
 * @template T
 */
export interface RoleUser<T> {
  email: string;
  first_name?: string;
  last_name?: string;
  roles: T[];
}
