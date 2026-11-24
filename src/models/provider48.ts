import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Provider48 = {
  GooglePay: "GOOGLE_PAY",
  ApplePay: "APPLE_PAY",
  ClickToPay: "CLICK_TO_PAY",
} as const;
export type Provider48 = (typeof Provider48)[keyof typeof Provider48] | (string & {});

export const provider48Schema: EnumSchema<Provider48> = s.enumOf<Provider48>(Provider48);
