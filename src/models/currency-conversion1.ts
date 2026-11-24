import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  payerCurrencyTransactionsCurrencyConversionPayerCurrencySchema,
  type PayerCurrencyTransactionsCurrencyConversionPayerCurrency,
} from "./payer-currency-transactions-currency-conversion-payer-currency.js";

export type CurrencyConversion1 = {
  /** The amount that will affect the payer's account. */
  payerAmount?: string;
  /** The currency of the amount that will affect the payer's account in ISO-4217(alpha-3). */
  payerCurrency?: PayerCurrencyTransactionsCurrencyConversionPayerCurrency;
  /** The exchange rate used to convert one currency to another. */
  conversionRate?: string;
  /** The foreign exchange markup in relation to a base rate. */
  marginRatePercentage?: string;
  /** The percentage commission taken for providing the currency conversion. */
  commissionPercentage?: string;
  /** The source of the base exchange rate was obtained to execute the currency conversion. */
  exchangeRateSource?: string;
  /** The time the base exchange rate was obtained from the source. */
  exchangeSourceTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const currencyConversion1Properties: s.Shape<CurrencyConversion1> = {
  payerAmount: s.optional(s.string()),
  payerCurrency: s.optional(s.lazy(() => payerCurrencyTransactionsCurrencyConversionPayerCurrencySchema)),
  conversionRate: s.optional(s.string()),
  marginRatePercentage: s.optional(s.string()),
  commissionPercentage: s.optional(s.string()),
  exchangeRateSource: s.optional(s.string()),
  exchangeSourceTime: s.optional(s.string()),
  _keysMap: {
    payerAmount: "payer_amount",
    payerCurrency: "payer_currency",
    conversionRate: "conversion_rate",
    marginRatePercentage: "margin_rate_percentage",
    commissionPercentage: "commission_percentage",
    exchangeRateSource: "exchange_rate_source",
    exchangeSourceTime: "exchange_source_time",
  },
};

export const currencyConversion1InternalSchema: Schema<CurrencyConversion1> = s.object<CurrencyConversion1>(
  currencyConversion1Properties,
  { additionalProperties: s.json() },
);

export const currencyConversion1Schema: Schema<CurrencyConversion1> = s.lazySchema(() =>
  s.object<CurrencyConversion1>(
    {
      ...currencyConversion1Properties,
      payerAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      conversionRate: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      marginRatePercentage: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      commissionPercentage: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      exchangeRateSource: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      exchangeSourceTime: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
