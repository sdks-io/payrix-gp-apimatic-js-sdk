import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates if you want to capture the customers shipping information on the hosted payment page.
 * If you enable this field you can also set an optional shipping fee in the shipping_amount.
 */
export const ShippableLinksShippable = {
  Yes: "YES",
  No: "NO",
} as const;
export type ShippableLinksShippable =
  | (typeof ShippableLinksShippable)[keyof typeof ShippableLinksShippable]
  | (string & {});

export const shippableLinksShippableSchema: EnumSchema<ShippableLinksShippable> =
  s.enumOf<ShippableLinksShippable>(ShippableLinksShippable);
