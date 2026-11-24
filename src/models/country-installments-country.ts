import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This is the country the merchant is domiciled in. For example, If if the merchant is based in
 * Canada it must be set to CA.If if the merchant is based in England it must be set to GB.If if the
 * merchant is based in USA it must be set to US.The country in ISO-3166-1(alpha-2 code) format.
 */
export const CountryInstallmentsCountry = {
  Us: "US",
  Bg: "BG",
  Ca: "CA",
  Hk: "HK",
  Etc: "etc.",
} as const;
export type CountryInstallmentsCountry =
  | (typeof CountryInstallmentsCountry)[keyof typeof CountryInstallmentsCountry]
  | (string & {});

export const countryInstallmentsCountrySchema: EnumSchema<CountryInstallmentsCountry> =
  s.enumOf<CountryInstallmentsCountry>(CountryInstallmentsCountry);
