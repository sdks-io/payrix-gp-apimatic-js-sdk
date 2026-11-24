import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  accountTypeTransactionsHealthcareAccountTypeSchema,
  type AccountTypeTransactionsHealthcareAccountType,
} from "./account-type-transactions-healthcare-account-type.js";
import {
  iiasQualifiedTransactionsHealthcareIiasQualifiedSchema,
  type IiasQualifiedTransactionsHealthcareIiasQualified,
} from "./iias-qualified-transactions-healthcare-iias-qualified.js";

export type Healthcare = {
  /** Identifies the type of health care account being used. */
  accountType?: AccountTypeTransactionsHealthcareAccountType;
  /**
   * The amount of the health care transaction attributed to prescription expenses. Available for
   * MasterCard and Visa transactions.
   */
  prescriptionAmount?: string;
  /**
   * The amount of the health care transaction attributed to vision or optical expenses. Available
   * for Visa transactions.
   */
  visionAmount?: string;
  /**
   * The amount of the health care transaction attributed to dental expenses. Available for Visa
   * transactions.
   */
  dentalAmount?: string;
  /**
   * The amount of the health care transaction attributed to clinical expenses. Available for Visa
   * transactions.
   */
  clinicAmount?: string;
  /**
   * Indicates if the purchased items were verified against IIAS (Inventory Information Approval
   * System) as qualified for healthcare.
   */
  iiasQualified?: IiasQualifiedTransactionsHealthcareIiasQualified;
  /** The unique number or customer ID assigned by the healthcare provider. */
  prescriptionNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const healthcareProperties: s.Shape<Healthcare> = {
  accountType: s.optional(s.lazy(() => accountTypeTransactionsHealthcareAccountTypeSchema)),
  prescriptionAmount: s.optional(s.string()),
  visionAmount: s.optional(s.string()),
  dentalAmount: s.optional(s.string()),
  clinicAmount: s.optional(s.string()),
  iiasQualified: s.optional(s.lazy(() => iiasQualifiedTransactionsHealthcareIiasQualifiedSchema)),
  prescriptionNumber: s.optional(s.string()),
  _keysMap: {
    accountType: "account_type",
    prescriptionAmount: "prescription_amount",
    visionAmount: "vision_amount",
    dentalAmount: "dental_amount",
    clinicAmount: "clinic_amount",
    iiasQualified: "iias_qualified",
    prescriptionNumber: "prescription_number",
  },
};

export const healthcareInternalSchema: Schema<Healthcare> = s.object<Healthcare>(healthcareProperties, {
  additionalProperties: s.json(),
});

export const healthcareSchema: Schema<Healthcare> = s.lazySchema(() =>
  s.object<Healthcare>(
    {
      ...healthcareProperties,
      prescriptionAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      visionAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      dentalAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      clinicAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      prescriptionNumber: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
