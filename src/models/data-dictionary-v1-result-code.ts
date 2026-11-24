import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The result of the action executed. */
export const DataDictionaryV1ResultCode = {
  Success: "SUCCESS",
  Decline: "DECLINE",
} as const;
export type DataDictionaryV1ResultCode =
  | (typeof DataDictionaryV1ResultCode)[keyof typeof DataDictionaryV1ResultCode]
  | (string & {});

export const dataDictionaryV1ResultCodeSchema: EnumSchema<DataDictionaryV1ResultCode> =
  s.enumOf<DataDictionaryV1ResultCode>(DataDictionaryV1ResultCode);
