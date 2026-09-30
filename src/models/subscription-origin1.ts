import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The origin of the Txn that will be created through this Subscription.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `2` - **Customer will be subscribing through eCommerce.**
 * - `3` - **Customer will be subscribing by Mail Order/Telephone.**
 * - `4` - **Originated with Apple Pay.**
 * - `5` - **Originated as a Successful 3D Secure transaction.**
 * - `6` - **Originated as an Attempted 3D Secure transaction.**
 * - `8` - **Originated in a Payframe.**
 *
 * </details>
 */
export const SubscriptionOrigin1 = {
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
  _6: 6,
  _8: 8,
} as const;
export type SubscriptionOrigin1 =
  | (typeof SubscriptionOrigin1)[keyof typeof SubscriptionOrigin1]
  | (number & {});

export const subscriptionOrigin1Schema: EnumSchema<SubscriptionOrigin1> =
  s.enumOf<SubscriptionOrigin1>(SubscriptionOrigin1);
