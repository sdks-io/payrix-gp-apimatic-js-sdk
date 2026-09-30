import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The environment which the Merchant is in, if applicable.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `supermarket` - **Supermarkets / Grocery**
 * - `moto` - **Mail Order / Telephone Order**
 * - `cardPresent` - **Card Present Environment**
 * - `fuel` - **Fuel / Gas Stations**
 * - `serviceStation` - **Service Stations**
 * - `restaurant` - **Restaurants**
 * - `ecommerce` - **eCommerce / Online Sales**
 *
 * </details>
 */
export const MerchantEnvironment1 = {
  Supermarket: "supermarket",
  Moto: "moto",
  CardPresent: "cardPresent",
  Fuel: "fuel",
  ServiceStation: "serviceStation",
  Restaurant: "restaurant",
  Ecommerce: "ecommerce",
} as const;
export type MerchantEnvironment1 =
  | (typeof MerchantEnvironment1)[keyof typeof MerchantEnvironment1]
  | (string & {});

export const merchantEnvironment1Schema: EnumSchema<MerchantEnvironment1> =
  s.enumOf<MerchantEnvironment1>(MerchantEnvironment1);
