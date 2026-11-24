import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PaymentFacilitator = {
  /**
   * This field identifies the specific third-party merchant (i.e., the sub-merchant) that is
   * submitting the transaction. A facilitator/payment facilitator acts as an aggregator on behalf
   * of multiple third-party merchants. Merchants that process transactions under another merchant’s
   * (facilitator’s) account are considered third-party merchants. Length limits Visa / Mastercard /
   * Discover: maximum 11 characters American Express: maximum 20 characters
   */
  reference?: string;
  /**
   * The business name of the third-party merchant (sub-merchant) submitting the transaction. A
   * facilitator acts as an aggregator for multiple third-party merchants; merchants processing
   * under a facilitator’s account are considered third-party merchants.
   */
  name?: string;
  /**
   * The identifier of the third-party merchant (sub-merchant) submitting the transaction.
   * Note:Field is not supported by Discover card brand.
   */
  subMerchantReference?: string;
  /** The name of the third-party merchant (sub-merchant) submitting the transaction. */
  subMerchantName?: string;
  /** The ISO country code for the third-party merchant’s address. */
  subMerchantCountry?: string;
  /** The state or province code for the third-party merchant’s address. */
  subMerchantState?: string;
  /** The city for the third-party merchant’s address. */
  subMerchantCity?: string;
  /** The postal/ZIP code for the third-party merchant’s address. */
  subMerchantPostalCode?: string;
  /** The third-party merchant’s phone number. */
  subMerchantBusinessPhone?: string;
  /**
   * The unique identifier of the Independent Sales Organization (ISO) associated with the merchant.
   */
  isoReference?: string;
  /** The third-party merchant’s email address. */
  merchantEmail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentFacilitatorProperties: s.Shape<PaymentFacilitator> = {
  reference: s.optional(s.string()),
  name: s.optional(s.string()),
  subMerchantReference: s.optional(s.string()),
  subMerchantName: s.optional(s.string()),
  subMerchantCountry: s.optional(s.string()),
  subMerchantState: s.optional(s.string()),
  subMerchantCity: s.optional(s.string()),
  subMerchantPostalCode: s.optional(s.string()),
  subMerchantBusinessPhone: s.optional(s.string()),
  isoReference: s.optional(s.string()),
  merchantEmail: s.optional(s.string()),
  _keysMap: {
    subMerchantReference: "sub_merchant_reference",
    subMerchantName: "sub_merchant_name",
    subMerchantCountry: "sub_merchant_country",
    subMerchantState: "sub_merchant_state",
    subMerchantCity: "sub_merchant_city",
    subMerchantPostalCode: "sub_merchant_postal_code",
    subMerchantBusinessPhone: "sub_merchant_business_phone",
    isoReference: "iso_reference",
    merchantEmail: "merchant_email",
  },
};

export const paymentFacilitatorInternalSchema: Schema<PaymentFacilitator> = s.object<PaymentFacilitator>(
  paymentFacilitatorProperties,
  { additionalProperties: s.json() },
);

export const paymentFacilitatorSchema: Schema<PaymentFacilitator> = s.lazySchema(() =>
  s.object<PaymentFacilitator>(
    {
      ...paymentFacilitatorProperties,
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      subMerchantReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      subMerchantName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      subMerchantCountry: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      subMerchantState: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      subMerchantCity: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      subMerchantPostalCode: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      subMerchantBusinessPhone: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      isoReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      merchantEmail: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
