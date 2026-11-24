import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Shipping method for the product. */
export const DeliveryTimeframeConsentsOrderDeliveryTimeframe = {
  Standard: "STANDARD",
  Express: "EXPRESS",
} as const;
export type DeliveryTimeframeConsentsOrderDeliveryTimeframe =
  | (typeof DeliveryTimeframeConsentsOrderDeliveryTimeframe)[keyof typeof DeliveryTimeframeConsentsOrderDeliveryTimeframe]
  | (string & {});

export const deliveryTimeframeConsentsOrderDeliveryTimeframeSchema: EnumSchema<DeliveryTimeframeConsentsOrderDeliveryTimeframe> =
  s.enumOf<DeliveryTimeframeConsentsOrderDeliveryTimeframe>(DeliveryTimeframeConsentsOrderDeliveryTimeframe);
