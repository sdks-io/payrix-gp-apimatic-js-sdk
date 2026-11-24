import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** This is an error not yet handled or mapped properly. */
export const ErrorCode5 = {
  UnknownResponse: "UNKNOWN_RESPONSE",
} as const;
export type ErrorCode5 = (typeof ErrorCode5)[keyof typeof ErrorCode5] | (string & {});

export const errorCode5Schema: EnumSchema<ErrorCode5> = s.enumOf<ErrorCode5>(ErrorCode5);
