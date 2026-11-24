import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of supplementary data to be submitted */
export const TypeTransactionsOrderSupplementaryDataType = {
  Prm: "PRM",
  VisaDirectAft: "VISA_DIRECT_AFT",
} as const;
export type TypeTransactionsOrderSupplementaryDataType =
  | (typeof TypeTransactionsOrderSupplementaryDataType)[keyof typeof TypeTransactionsOrderSupplementaryDataType]
  | (string & {});

export const typeTransactionsOrderSupplementaryDataTypeSchema: EnumSchema<TypeTransactionsOrderSupplementaryDataType> =
  s.enumOf<TypeTransactionsOrderSupplementaryDataType>(TypeTransactionsOrderSupplementaryDataType);
