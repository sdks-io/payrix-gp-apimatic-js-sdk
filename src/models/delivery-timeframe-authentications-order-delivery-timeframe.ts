import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the delivery timeframe for the order.
 * * `ELECTRONIC_DELIVERY`
 * * `SAME_DAY`
 * * `OVERNIGHT`
 * * `TWO_DAYS_OR_MORE`
 */
export const DeliveryTimeframeAuthenticationsOrderDeliveryTimeframe = {
  ElectronicDelivery: "ELECTRONIC_DELIVERY",
  SameDay: "SAME_DAY",
  Overnight: "OVERNIGHT",
  TwoDaysOrMore: "TWO_DAYS_OR_MORE",
} as const;
export type DeliveryTimeframeAuthenticationsOrderDeliveryTimeframe =
  | (typeof DeliveryTimeframeAuthenticationsOrderDeliveryTimeframe)[keyof typeof DeliveryTimeframeAuthenticationsOrderDeliveryTimeframe]
  | (string & {});

export const deliveryTimeframeAuthenticationsOrderDeliveryTimeframeSchema: EnumSchema<DeliveryTimeframeAuthenticationsOrderDeliveryTimeframe> =
  s.enumOf<DeliveryTimeframeAuthenticationsOrderDeliveryTimeframe>(
    DeliveryTimeframeAuthenticationsOrderDeliveryTimeframe,
  );
