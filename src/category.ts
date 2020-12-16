import { I18nString } from "./common";

export interface Category {
  id: number;
  name: I18nString;
  treeNodeLevel: number;
  productsCount: number;
  parentId: number;
}
