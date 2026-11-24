import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of action executed for the Link. */
export const TypeLinksActionType = {
  LinkCreate: "LINK_CREATE",
  LinkEdit: "LINK_EDIT",
  LinkSingle: "LINK_SINGLE",
  LinkList: "LINK_LIST",
} as const;
export type TypeLinksActionType =
  | (typeof TypeLinksActionType)[keyof typeof TypeLinksActionType]
  | (string & {});

export const typeLinksActionTypeSchema: EnumSchema<TypeLinksActionType> =
  s.enumOf<TypeLinksActionType>(TypeLinksActionType);
