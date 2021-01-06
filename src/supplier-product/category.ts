import { I18nString } from "../common";

export interface SPCategory {
  _id: number,
  name: I18nString,
  productsCount: number,
  treeNodeLevel: number,
  updated: Date
}