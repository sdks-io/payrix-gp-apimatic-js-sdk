import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the specific action taken. */
export const TypeMerchantsActionType = {
  MerchantCreate: "MERCHANT_CREATE",
  MerchantEdit: "MERCHANT_EDIT",
  MerchantSingle: "MERCHANT_SINGLE",
  MerchantList: "MERCHANT_LIST",
  MerchantCreateStatusNotification: "MERCHANT_CREATE_STATUS_NOTIFICATION",
} as const;
export type TypeMerchantsActionType =
  | (typeof TypeMerchantsActionType)[keyof typeof TypeMerchantsActionType]
  | (string & {});

export const typeMerchantsActionTypeSchema: EnumSchema<TypeMerchantsActionType> =
  s.enumOf<TypeMerchantsActionType>(TypeMerchantsActionType);
