import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** This is an error indicating there was an issue connecting to a partner system.. */
export const ErrorCode4 = {
  UnauthorizedDownstream: "UNAUTHORIZED_DOWNSTREAM",
} as const;
export type ErrorCode4 = (typeof ErrorCode4)[keyof typeof ErrorCode4] | (string & {});

export const errorCode4Schema: EnumSchema<ErrorCode4> = s.enumOf<ErrorCode4>(ErrorCode4);
