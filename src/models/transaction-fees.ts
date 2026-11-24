import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  transactionFeesAssessmentNInternalSchema,
  transactionFeesAssessmentNSchema,
  type TransactionFeesAssessmentN,
} from "./transaction-fees-assessment-n.js";
import {
  transactionFeesDiscountInternalSchema,
  transactionFeesDiscountSchema,
  type TransactionFeesDiscount,
} from "./transaction-fees-discount.js";
import {
  transactionFeesInterchangeInternalSchema,
  transactionFeesInterchangeSchema,
  type TransactionFeesInterchange,
} from "./transaction-fees-interchange.js";
import {
  transactionFeesMarkUpInternalSchema,
  transactionFeesMarkUpSchema,
  type TransactionFeesMarkUp,
} from "./transaction-fees-mark-up.js";

/** A breakdown of the fees associated with the transaction. */
export type TransactionFees = {
  /**
   * The total fee amount for this transaction. The value can contain precision lower than the
   * lowest denomination of the currency. For example 1298.67 USD means $12.98 and 0.67 of a penny.
   */
  totalAmountDecimal?: string;
  /**
   * The total amount of other fees for this transaction that don't fit into assessment,
   * interchange, discount or markup. The value can contain precision lower than the lowest
   * denomination of the currency. For example 1298.67 USD means $12.98 and 0.67 of a penny.
   */
  otherFeesAmountDecimal?: string;
  /**
   * The fixed amount that is charged per transaction. Applicable for BNPL transactions only. The
   * value can contain precision lower than the lowest denomination of the currency. For example
   * 1298.67 USD means $12.98 and 0.67 of a penny.
   */
  fixedAmountDecimal?: string;
  /**
   * Tax on merchant fees. Applicable for BNPL transactions only. The value can contain precision
   * lower than the lowest denomination of the currency. For example 1298.67 USD means $12.98 and
   * 0.67 of a penny.
   */
  taxAmountDecimal?: string;
  /**
   * The total assessment fee amount for this transaction. The value can contain precision lower
   * than the lowest denomination of the currency. For example 1298.67 USD means $12.98 and 0.67 of
   * a penny.
   */
  assessmentTotalAmountDecimal?: string;
  /**
   * This is a code that indicates the Global Payments charge that was applied to this transaction.
   */
  chargeType?: string;
  /**
   * This is a description that explains the Global Payments charge that was applied to this
   * transaction.
   */
  chargeTypeDescription?: string;
  /**
   * This is the region the card used for the transaction was issued in and geographically
   * associated with cardholders region
   */
  chargeTypeRegion?: string;
  /**
   * The exchange rate used to convert the total fee amount in one currency to the currency of the
   * merchant.
   */
  exchangeRate?: string;
  /** a breakdown of the interchange fees associated with the transaction. */
  interchange?: TransactionFeesInterchange;
  /** a breakdown of the interchange fees associated with the transaction. */
  discount?: TransactionFeesDiscount;
  /**
   * a breakdown of a specific type of assessment charge for the transaction. There can be more than
   * one assessment charge associated with a transaction.
   */
  assessment1?: TransactionFeesAssessmentN;
  /**
   * a breakdown of a specific type of assessment charge for the transaction. There can be more than
   * one assessment charge associated with a transaction.
   */
  assessment2?: TransactionFeesAssessmentN;
  /**
   * a breakdown of a specific type of assessment charge for the transaction. There can be more than
   * one assessment charge associated with a transaction.
   */
  assessment3?: TransactionFeesAssessmentN;
  /**
   * a breakdown of a specific type of assessment charge for the transaction. There can be more than
   * one assessment charge associated with a transaction.
   */
  assessment4?: TransactionFeesAssessmentN;
  /**
   * a breakdown of a specific type of assessment charge for the transaction. There can be more than
   * one assessment charge associated with a transaction.
   */
  assessment5?: TransactionFeesAssessmentN;
  /** A list of percentage mark ups on any currency conversion services for this transaction. */
  markUp?: TransactionFeesMarkUp;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transactionFeesProperties: s.Shape<TransactionFees> = {
  totalAmountDecimal: s.optional(s.string()),
  otherFeesAmountDecimal: s.optional(s.string()),
  fixedAmountDecimal: s.optional(s.string()),
  taxAmountDecimal: s.optional(s.string()),
  assessmentTotalAmountDecimal: s.optional(s.string()),
  chargeType: s.optional(s.string()),
  chargeTypeDescription: s.optional(s.string()),
  chargeTypeRegion: s.optional(s.string()),
  exchangeRate: s.optional(s.string()),
  interchange: s.optional(s.lazy(() => transactionFeesInterchangeInternalSchema)),
  discount: s.optional(s.lazy(() => transactionFeesDiscountInternalSchema)),
  assessment1: s.optional(s.lazy(() => transactionFeesAssessmentNInternalSchema)),
  assessment2: s.optional(s.lazy(() => transactionFeesAssessmentNInternalSchema)),
  assessment3: s.optional(s.lazy(() => transactionFeesAssessmentNInternalSchema)),
  assessment4: s.optional(s.lazy(() => transactionFeesAssessmentNInternalSchema)),
  assessment5: s.optional(s.lazy(() => transactionFeesAssessmentNInternalSchema)),
  markUp: s.optional(s.lazy(() => transactionFeesMarkUpInternalSchema)),
  _keysMap: {
    totalAmountDecimal: "total_amount_decimal",
    otherFeesAmountDecimal: "other_fees_amount_decimal",
    fixedAmountDecimal: "fixed_amount_decimal",
    taxAmountDecimal: "tax_amount_decimal",
    assessmentTotalAmountDecimal: "assessment_total_amount_decimal",
    chargeType: "charge_type",
    chargeTypeDescription: "charge_type_description",
    chargeTypeRegion: "charge_type_region",
    exchangeRate: "exchange_rate",
    assessment1: "assessment_1",
    assessment2: "assessment_2",
    assessment3: "assessment_3",
    assessment4: "assessment_4",
    assessment5: "assessment_5",
    markUp: "mark_up",
  },
};

export const transactionFeesInternalSchema: Schema<TransactionFees> = s.object<TransactionFees>(
  transactionFeesProperties,
  { additionalProperties: s.json() },
);

export const transactionFeesSchema: Schema<TransactionFees> = s.lazySchema(() =>
  s.object<TransactionFees>(
    {
      ...transactionFeesProperties,
      totalAmountDecimal: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      otherFeesAmountDecimal: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      assessmentTotalAmountDecimal: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      chargeType: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      chargeTypeDescription: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      chargeTypeRegion: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      exchangeRate: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      interchange: s.optional(s.lazy(() => transactionFeesInterchangeSchema)),
      discount: s.optional(s.lazy(() => transactionFeesDiscountSchema)),
      assessment1: s.optional(s.lazy(() => transactionFeesAssessmentNSchema)),
      assessment2: s.optional(s.lazy(() => transactionFeesAssessmentNSchema)),
      assessment3: s.optional(s.lazy(() => transactionFeesAssessmentNSchema)),
      assessment4: s.optional(s.lazy(() => transactionFeesAssessmentNSchema)),
      assessment5: s.optional(s.lazy(() => transactionFeesAssessmentNSchema)),
      markUp: s.optional(s.lazy(() => transactionFeesMarkUpSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
