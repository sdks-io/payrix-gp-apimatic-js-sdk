import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the specific action taken. */
export const TypePayersActionType = {
  PayerCreate: "PAYER_CREATE",
  PayerEdit: "PAYER_EDIT",
  PayerSingle: "PAYER_SINGLE",
  PayerList: "PAYER_LIST",
  PayerDelete: "PAYER_DELETE",
} as const;
export type TypePayersActionType =
  | (typeof TypePayersActionType)[keyof typeof TypePayersActionType]
  | (string & {});

export const typePayersActionTypeSchema: EnumSchema<TypePayersActionType> =
  s.enumOf<TypePayersActionType>(TypePayersActionType);
