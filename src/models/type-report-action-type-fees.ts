import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the specific action taken. */
export const TypeReportActionTypeFees = {
  MonthlyFeesList: "MONTHLY_FEES_LIST",
} as const;
export type TypeReportActionTypeFees =
  | (typeof TypeReportActionTypeFees)[keyof typeof TypeReportActionTypeFees]
  | (string & {});

export const typeReportActionTypeFeesSchema: EnumSchema<TypeReportActionTypeFees> =
  s.enumOf<TypeReportActionTypeFees>(TypeReportActionTypeFees);
