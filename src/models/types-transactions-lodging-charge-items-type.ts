import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypesTransactionsLodgingChargeItemsType = {
  Restaurant: "RESTAURANT",
  GiftShop: "GIFT_SHOP",
  MiniBar: "MINI_BAR",
  Phone: "PHONE",
  Laundry: "LAUNDRY",
  NoShow: "NO_SHOW",
  Other: "OTHER",
} as const;
export type TypesTransactionsLodgingChargeItemsType =
  | (typeof TypesTransactionsLodgingChargeItemsType)[keyof typeof TypesTransactionsLodgingChargeItemsType]
  | (string & {});

export const typesTransactionsLodgingChargeItemsTypeSchema: EnumSchema<TypesTransactionsLodgingChargeItemsType> =
  s.enumOf<TypesTransactionsLodgingChargeItemsType>(TypesTransactionsLodgingChargeItemsType);
