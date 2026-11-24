import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** This action failed as token in the request is not valid. */
export const ErrorCode = {
  NotAuthenticated: "NOT_AUTHENTICATED",
} as const;
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode] | (string & {});

export const errorCodeSchema: EnumSchema<ErrorCode> = s.enumOf<ErrorCode>(ErrorCode);
