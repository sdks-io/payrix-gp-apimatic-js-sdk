import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates if the purchased items were verified against IIAS (Inventory Information Approval
 * System) as qualified for healthcare.
 */
export const IiasQualifiedTransactionsHealthcareIiasQualified = {
  Yes: "YES",
  No: "NO",
  Exempted: "EXEMPTED",
} as const;
export type IiasQualifiedTransactionsHealthcareIiasQualified =
  | (typeof IiasQualifiedTransactionsHealthcareIiasQualified)[keyof typeof IiasQualifiedTransactionsHealthcareIiasQualified]
  | (string & {});

export const iiasQualifiedTransactionsHealthcareIiasQualifiedSchema: EnumSchema<IiasQualifiedTransactionsHealthcareIiasQualified> =
  s.enumOf<IiasQualifiedTransactionsHealthcareIiasQualified>(
    IiasQualifiedTransactionsHealthcareIiasQualified,
  );
