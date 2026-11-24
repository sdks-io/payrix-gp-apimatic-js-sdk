import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ErrorCode123 = {
  ResourceNotFound: "RESOURCE_NOT_FOUND",
} as const;
export type ErrorCode123 = (typeof ErrorCode123)[keyof typeof ErrorCode123] | (string & {});

export const errorCode123Schema: EnumSchema<ErrorCode123> = s.enumOf<ErrorCode123>(ErrorCode123);
