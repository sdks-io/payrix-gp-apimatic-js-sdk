import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The currency for which this entity will be funded on.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `USD` - **US Dollar.**
 * - `CAD` - **Canadian Dollar.**
 *
 * </details>
 */
export const EntityRoutesFundingCurrency2 = {
  Usd: "USD",
  Cad: "CAD",
} as const;
export type EntityRoutesFundingCurrency2 =
  | (typeof EntityRoutesFundingCurrency2)[keyof typeof EntityRoutesFundingCurrency2]
  | (string & {});

export const entityRoutesFundingCurrency2Schema: EnumSchema<EntityRoutesFundingCurrency2> =
  s.enumOf<EntityRoutesFundingCurrency2>(EntityRoutesFundingCurrency2);
