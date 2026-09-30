import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SubscriptionOrigin = {
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
  _6: 6,
  _8: 8,
} as const;
export type SubscriptionOrigin = (typeof SubscriptionOrigin)[keyof typeof SubscriptionOrigin] | (number & {});

export const subscriptionOriginSchema: EnumSchema<SubscriptionOrigin> =
  s.enumOf<SubscriptionOrigin>(SubscriptionOrigin);
