export interface I18nString {
  ar: string;
  en: string;
  fr: string;
  tr: string;
}

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
