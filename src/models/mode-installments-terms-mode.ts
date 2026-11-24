import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** This is the type of Installment Plan. */
export const ModeInstallmentsTermsMode = {
  IssuerPromotion: "ISSUER_PROMOTION",
  BiLateral: "BI_LATERAL",
  IssuerDefault: "ISSUER_DEFAULT",
  NoPromotion: "NO_PROMOTION",
  NoInterest: "NO_INTEREST",
  Interest: "INTEREST",
  Bnpl: "BNPL",
} as const;
export type ModeInstallmentsTermsMode =
  | (typeof ModeInstallmentsTermsMode)[keyof typeof ModeInstallmentsTermsMode]
  | (string & {});

export const modeInstallmentsTermsModeSchema: EnumSchema<ModeInstallmentsTermsMode> =
  s.enumOf<ModeInstallmentsTermsMode>(ModeInstallmentsTermsMode);
