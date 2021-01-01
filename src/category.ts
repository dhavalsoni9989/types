import { I18nString } from "./common";

/**
 * MP Categories
 *
 * @export
 * @interface Category
 */
export interface Category {
  id: number;
  name: I18nString;
  parentId: number;
  productsCount: number;
  treeNodeLevel: number;
}
