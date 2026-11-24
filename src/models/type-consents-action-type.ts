import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the specific action taken. */
export const TypeConsentsActionType = {
  ConsentCreate: "CONSENT_CREATE",
  ConsentCancel: "CONSENT_CANCEL",
  ConsentSingle: "CONSENT_SINGLE",
} as const;
export type TypeConsentsActionType =
  | (typeof TypeConsentsActionType)[keyof typeof TypeConsentsActionType]
  | (string & {});

export const typeConsentsActionTypeSchema: EnumSchema<TypeConsentsActionType> =
  s.enumOf<TypeConsentsActionType>(TypeConsentsActionType);
