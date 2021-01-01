import { I18nString } from "./common";

export interface Category {
  id: number;
  name: I18nString;
  parentId: number;
  productsCount: number;
  treeNodeLevel: number;
}
