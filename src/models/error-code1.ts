import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** This action is not authorized with the credentials being used. */
export const ErrorCode1 = {
  ActionNotAuthorized: "ACTION_NOT_AUTHORIZED",
} as const;
export type ErrorCode1 = (typeof ErrorCode1)[keyof typeof ErrorCode1] | (string & {});

export const errorCode1Schema: EnumSchema<ErrorCode1> = s.enumOf<ErrorCode1>(ErrorCode1);
