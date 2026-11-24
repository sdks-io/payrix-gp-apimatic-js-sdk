import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** This field determines whether DCC is activated or not */
export const CurrencyConversionModeLinksOrderTransactionConfigurationCurrencyConversionMode = {
  Yes: "YES",
  No: "NO",
} as const;
export type CurrencyConversionModeLinksOrderTransactionConfigurationCurrencyConversionMode =
  | (typeof CurrencyConversionModeLinksOrderTransactionConfigurationCurrencyConversionMode)[keyof typeof CurrencyConversionModeLinksOrderTransactionConfigurationCurrencyConversionMode]
  | (string & {});

export const currencyConversionModeLinksOrderTransactionConfigurationCurrencyConversionModeSchema: EnumSchema<CurrencyConversionModeLinksOrderTransactionConfigurationCurrencyConversionMode> =
  s.enumOf<CurrencyConversionModeLinksOrderTransactionConfigurationCurrencyConversionMode>(
    CurrencyConversionModeLinksOrderTransactionConfigurationCurrencyConversionMode,
  );
