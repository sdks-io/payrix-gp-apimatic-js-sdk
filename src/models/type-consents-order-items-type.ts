import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of item */
export const TypeConsentsOrderItemsType = {
  GiftCard: "GIFT_CARD",
  CryptoCurrency: "CRYPTO_CURRENCY",
  TopUp: "TOP_UP",
  Other: "OTHER",
} as const;
export type TypeConsentsOrderItemsType =
  | (typeof TypeConsentsOrderItemsType)[keyof typeof TypeConsentsOrderItemsType]
  | (string & {});

export const typeConsentsOrderItemsTypeSchema: EnumSchema<TypeConsentsOrderItemsType> =
  s.enumOf<TypeConsentsOrderItemsType>(TypeConsentsOrderItemsType);
