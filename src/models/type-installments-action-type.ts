import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the specific action taken. */
export const TypeInstallmentsActionType = {
  InstallmentQuery: "INSTALLMENT_QUERY",
  InstallmentSingle: "INSTALLMENT_SINGLE",
  InstallmentList: "INSTALLMENT_LIST",
} as const;
export type TypeInstallmentsActionType =
  | (typeof TypeInstallmentsActionType)[keyof typeof TypeInstallmentsActionType]
  | (string & {});

export const typeInstallmentsActionTypeSchema: EnumSchema<TypeInstallmentsActionType> =
  s.enumOf<TypeInstallmentsActionType>(TypeInstallmentsActionType);
