import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MerchantsExpressBatchCloseMethod = {
  TimeInitiated: "TimeInitiated",
  MerchantInitiated: "MerchantInitiated",
} as const;
export type MerchantsExpressBatchCloseMethod =
  | (typeof MerchantsExpressBatchCloseMethod)[keyof typeof MerchantsExpressBatchCloseMethod]
  | (string & {});

export const merchantsExpressBatchCloseMethodSchema: EnumSchema<MerchantsExpressBatchCloseMethod> =
  s.enumOf<MerchantsExpressBatchCloseMethod>(MerchantsExpressBatchCloseMethod);
