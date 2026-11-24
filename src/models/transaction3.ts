import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { order18Schema, type Order18 } from "./order18.js";
import {
  paymentMethod19InternalSchema,
  paymentMethod19Schema,
  type PaymentMethod19,
} from "./payment-method19.js";
import { providerSchema, type Provider } from "./provider.js";
import {
  typeDisputesTransactionTypeSchema,
  type TypeDisputesTransactionType,
} from "./type-disputes-transaction-type.js";

/** Information about the original Sale Transaction the Dispute relates to. */
export type Transaction3 = {
  /** The time that the transaction related to the dispute was created in ISO-8601 format. */
  timeCreated?: Date;
  /**
   * Describes whether the transaction is a SALE, that moves funds from Payer to Merchant, or a
   * REFUND where funds move from Merchant to Payer .
   * * `SALE` - indicates the movement, or the attempt to move, funds from payer to a merchant.
   * * `REFUND` - indicates the movement, or the attempt to move, funds from merchant to the payer.
   */
  type?: TypeDisputesTransactionType;
  /**
   * The amount to transfer between Payer and Merchant for a SALE or a REFUND. It is always
   * represented in the lowest denomination of the related currency.
   */
  amount?: string;
  /** The currency of the amount in ISO-4217(alpha-3) */
  currency?: string;
  /** Merchant defined field to reference the transaction. */
  reference?: string;
  /** Merchant field to document remarks about the original Transaction. */
  remarks?: string;
  /**
   * Indicates the card data input, the Cardholder Verification Method (CVM), and the security
   * capabilities supported by the terminal
   */
  terminalCapabilityCode?: string;
  /** A four-digit number used to classify the merchant into an industry or market segment. */
  merchantCategoryCode?: string;
  provider?: Provider;
  paymentMethod?: PaymentMethod19;
  order?: Order18;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transaction3Properties: s.Shape<Transaction3> = {
  timeCreated: s.optional(s.dateTime()),
  type: s.optional(s.lazy(() => typeDisputesTransactionTypeSchema)),
  amount: s.optional(s.string()),
  currency: s.optional(s.string()),
  reference: s.optional(s.string()),
  remarks: s.optional(s.string()),
  terminalCapabilityCode: s.optional(s.string()),
  merchantCategoryCode: s.optional(s.string()),
  provider: s.optional(s.lazy(() => providerSchema)),
  paymentMethod: s.optional(s.lazy(() => paymentMethod19InternalSchema)),
  order: s.optional(s.lazy(() => order18Schema)),
  _keysMap: {
    timeCreated: "time_created",
    terminalCapabilityCode: "terminal_capability_code",
    merchantCategoryCode: "merchant_category_code",
    paymentMethod: "payment_method",
  },
};

export const transaction3InternalSchema: Schema<Transaction3> = s.object<Transaction3>(
  transaction3Properties,
  { additionalProperties: s.json() },
);

export const transaction3Schema: Schema<Transaction3> = s.lazySchema(() =>
  s.object<Transaction3>(
    {
      ...transaction3Properties,
      currency: s.optional(s.string().check(s.minLength(3), s.maxLength(3))),
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      paymentMethod: s.optional(s.lazy(() => paymentMethod19Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
