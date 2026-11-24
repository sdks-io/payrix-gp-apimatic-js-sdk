import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the card brand that issued the card. */
export const BrandConsentsPaymentMethodDigitalWalletBrand = {
  Visa: "VISA",
  Mastercard: "MASTERCARD",
  Amex: "AMEX",
  Discover: "DISCOVER",
  Diner: "DINER",
  Jcb: "JCB",
  Cup: "CUP",
} as const;
export type BrandConsentsPaymentMethodDigitalWalletBrand =
  | (typeof BrandConsentsPaymentMethodDigitalWalletBrand)[keyof typeof BrandConsentsPaymentMethodDigitalWalletBrand]
  | (string & {});

export const brandConsentsPaymentMethodDigitalWalletBrandSchema: EnumSchema<BrandConsentsPaymentMethodDigitalWalletBrand> =
  s.enumOf<BrandConsentsPaymentMethodDigitalWalletBrand>(BrandConsentsPaymentMethodDigitalWalletBrand);
