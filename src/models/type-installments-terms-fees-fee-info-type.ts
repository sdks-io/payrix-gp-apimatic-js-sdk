import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Fee type(s) with the associated cost percentage or flat fee. */
export const TypeInstallmentsTermsFeesFeeInfoType = {
  Consumer: "CONSUMER",
  ConsumerUpfront: "CONSUMER_UPFRONT",
  MerchantFunding: "MERCHANT_FUNDING",
  MerchantService: "MERCHANT_SERVICE",
} as const;
export type TypeInstallmentsTermsFeesFeeInfoType =
  | (typeof TypeInstallmentsTermsFeesFeeInfoType)[keyof typeof TypeInstallmentsTermsFeesFeeInfoType]
  | (string & {});

export const typeInstallmentsTermsFeesFeeInfoTypeSchema: EnumSchema<TypeInstallmentsTermsFeesFeeInfoType> =
  s.enumOf<TypeInstallmentsTermsFeesFeeInfoType>(TypeInstallmentsTermsFeesFeeInfoType);
