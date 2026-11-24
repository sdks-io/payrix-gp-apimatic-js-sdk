import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the specific action taken. */
export const TypeVerificationsActionType = {
  Verify: "VERIFY",
} as const;
export type TypeVerificationsActionType =
  | (typeof TypeVerificationsActionType)[keyof typeof TypeVerificationsActionType]
  | (string & {});

export const typeVerificationsActionTypeSchema: EnumSchema<TypeVerificationsActionType> =
  s.enumOf<TypeVerificationsActionType>(TypeVerificationsActionType);
