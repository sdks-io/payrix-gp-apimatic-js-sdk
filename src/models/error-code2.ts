import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** This indicates an unexpected issue occurred on the Global Payments system. */
export const ErrorCode2 = {
  SystemErrorDownstream: "SYSTEM_ERROR_DOWNSTREAM",
} as const;
export type ErrorCode2 = (typeof ErrorCode2)[keyof typeof ErrorCode2] | (string & {});

export const errorCode2Schema: EnumSchema<ErrorCode2> = s.enumOf<ErrorCode2>(ErrorCode2);
