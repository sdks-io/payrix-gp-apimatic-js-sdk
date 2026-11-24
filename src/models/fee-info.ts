import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeInstallmentsTermsFeesFeeInfoTypeSchema,
  type TypeInstallmentsTermsFeesFeeInfoType,
} from "./type-installments-terms-fees-fee-info-type.js";

export type FeeInfo = {
  /** Fee type(s) with the associated cost percentage or flat fee. */
  type?: TypeInstallmentsTermsFeesFeeInfoType;
  /** Interest fee rate in percentage applied on Installment payment. */
  interestRate?: string;
  /** Flat fee applied on the first installment payment in Issuer currency. */
  flatAmount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const feeInfoSchema: Schema<FeeInfo> = s.object<FeeInfo>(
  {
    type: s.optional(s.lazy(() => typeInstallmentsTermsFeesFeeInfoTypeSchema)),
    interestRate: s.optional(s.string()),
    flatAmount: s.optional(s.string()),
    _keysMap: {
      interestRate: "interest_rate",
      flatAmount: "flat_amount",
    },
  },
  { additionalProperties: s.json() },
);
