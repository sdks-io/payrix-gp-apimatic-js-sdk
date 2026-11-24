import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates how the merchandise will be shipped to the customer. */
export const ShippingTypeConsentsOrderShippingType = {
  Single: "SINGLE",
  Split: "SPLIT",
  None: "NONE",
} as const;
export type ShippingTypeConsentsOrderShippingType =
  | (typeof ShippingTypeConsentsOrderShippingType)[keyof typeof ShippingTypeConsentsOrderShippingType]
  | (string & {});

export const shippingTypeConsentsOrderShippingTypeSchema: EnumSchema<ShippingTypeConsentsOrderShippingType> =
  s.enumOf<ShippingTypeConsentsOrderShippingType>(ShippingTypeConsentsOrderShippingType);
