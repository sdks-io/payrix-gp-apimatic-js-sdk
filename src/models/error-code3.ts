import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** This is an error indicating there was a timeout issue to another system. */
export const ErrorCode3 = {
  TimeoutDownstream: "TIMEOUT_DOWNSTREAM",
} as const;
export type ErrorCode3 = (typeof ErrorCode3)[keyof typeof ErrorCode3] | (string & {});

export const errorCode3Schema: EnumSchema<ErrorCode3> = s.enumOf<ErrorCode3>(ErrorCode3);
