import { I18nString } from "./common";

export interface SPCategory {
  _id: number;
  name: I18nString;
  parentId: number;
  productsCount: number;
  treeNodeLevel: number;
  updated: Date;
}