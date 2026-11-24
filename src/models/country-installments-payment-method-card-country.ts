import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This is the country the card is issued in. It represents the country the card's bank is based.The
 * country in ISO-3166-1(alpha-2 code) format.
 */
export const CountryInstallmentsPaymentMethodCardCountry = {
  Us: "US",
  Bg: "BG",
  Ca: "CA",
  Hk: "HK",
  Etc: "etc.",
} as const;
export type CountryInstallmentsPaymentMethodCardCountry =
  | (typeof CountryInstallmentsPaymentMethodCardCountry)[keyof typeof CountryInstallmentsPaymentMethodCardCountry]
  | (string & {});

export const countryInstallmentsPaymentMethodCardCountrySchema: EnumSchema<CountryInstallmentsPaymentMethodCardCountry> =
  s.enumOf<CountryInstallmentsPaymentMethodCardCountry>(CountryInstallmentsPaymentMethodCardCountry);
