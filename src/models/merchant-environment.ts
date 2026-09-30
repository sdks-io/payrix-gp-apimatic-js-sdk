import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MerchantEnvironment = {
  Supermarket: "supermarket",
  Moto: "moto",
  CardPresent: "cardPresent",
  Fuel: "fuel",
  ServiceStation: "serviceStation",
  Restaurant: "restaurant",
  Ecommerce: "ecommerce",
} as const;
export type MerchantEnvironment =
  | (typeof MerchantEnvironment)[keyof typeof MerchantEnvironment]
  | (string & {});

export const merchantEnvironmentSchema: EnumSchema<MerchantEnvironment> =
  s.enumOf<MerchantEnvironment>(MerchantEnvironment);
