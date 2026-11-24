import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataDictionaryV1TransactionChannelSchema,
  type DataDictionaryV1TransactionChannel,
} from "./data-dictionary-v1-transaction-channel.js";
import {
  paymentMethodRequestCurrencyConversionInternalSchema,
  paymentMethodRequestCurrencyConversionSchema,
  type PaymentMethodRequestCurrencyConversion,
} from "./payment-method-request-currency-conversion.js";
import { TransactionType2, transactionType2Schema } from "./transaction-type2.js";

export type CreateRequestCurrencyConversion = {
  /** A meaningful label for the merchant account set by Global Payments. */
  accountName: string;
  /**
   * Describes whether the transaction is a SALE, that moves funds from Payer to Merchant, or a
   * REFUND where funds move from Merchant to Payer.
   *   * SALE - indicates the movement, or the attempt to move, funds from payer to a merchant.
   *   * REFUND - indicates the movement, or the attempt to move, funds from merchant to the payer.
   *
   * @default TransactionType2.Sale
   */
  transactionType?: TransactionType2;
  /**
   * Describes whether the transaction was processed in a face to face(CP) scenario or a Customer
   * Not Present (CNP) scenario.
   *   * CP - A Customer Present transaction is when the payer and the merchant are in direct face
   *     to face contact when exchanging payment method information to fulfill a transaction. e.g.
   *     in a store and paying at the counter that is attended by a clerk.
   *   * CNP - A Customer NOT Present transaction is when the payer and the merchant are not
   *     together when exchanging payment method information to fulfill a transaction. e.g. a
   *     transaction executed from a merchant's website or over the phone
   */
  channel: DataDictionaryV1TransactionChannel;
  /** The country in ISO-3166-1(alpha-2 code) format. */
  country: string;
  /**
   * The amount to transfer between Payer and Merchant for a SALE or a REFUND. It is always
   * represented in the lowest denomiation of the related currency.
   */
  amount: string;
  /** The currency of the amount in ISO-4217(alpha-3) */
  currency: string;
  /** Merchant defined field to reference the transaction. */
  reference: string;
  paymentMethod: PaymentMethodRequestCurrencyConversion;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createRequestCurrencyConversionProperties: s.Shape<CreateRequestCurrencyConversion> = {
  accountName: s.string(),
  transactionType: s.defaulted(transactionType2Schema, TransactionType2.Sale),
  channel: dataDictionaryV1TransactionChannelSchema,
  country: s.string(),
  amount: s.string(),
  currency: s.string(),
  reference: s.string(),
  paymentMethod: paymentMethodRequestCurrencyConversionInternalSchema,
  _keysMap: {
    accountName: "account_name",
    transactionType: "transaction_type",
    paymentMethod: "payment_method",
  },
};

export const createRequestCurrencyConversionInternalSchema: Schema<CreateRequestCurrencyConversion> =
  s.object<CreateRequestCurrencyConversion>(createRequestCurrencyConversionProperties, {
    additionalProperties: s.json(),
  });

export const createRequestCurrencyConversionSchema: Schema<CreateRequestCurrencyConversion> = s.lazySchema(
  () =>
    s.object<CreateRequestCurrencyConversion>(
      {
        ...createRequestCurrencyConversionProperties,
        accountName: s.string().check(s.minLength(1), s.maxLength(50)),
        country: s.string().check(s.minLength(1), s.maxLength(255)),
        currency: s.string().check(s.minLength(3), s.maxLength(3)),
        reference: s.string().check(s.minLength(8), s.maxLength(50)),
        paymentMethod: paymentMethodRequestCurrencyConversionSchema,
      },
      { additionalProperties: s.json() },
    ),
);
