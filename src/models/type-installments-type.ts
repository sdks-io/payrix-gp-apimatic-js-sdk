import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of installment request. */
export const TypeInstallmentsType = {
  InstallmentQuery: "INSTALLMENT_QUERY",
} as const;
export type TypeInstallmentsType =
  | (typeof TypeInstallmentsType)[keyof typeof TypeInstallmentsType]
  | (string & {});

export const typeInstallmentsTypeSchema: EnumSchema<TypeInstallmentsType> =
  s.enumOf<TypeInstallmentsType>(TypeInstallmentsType);
