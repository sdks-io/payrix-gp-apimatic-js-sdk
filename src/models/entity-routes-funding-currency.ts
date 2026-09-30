import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRoutesFundingCurrency = {
  Usd: "USD",
  Cad: "CAD",
} as const;
export type EntityRoutesFundingCurrency =
  | (typeof EntityRoutesFundingCurrency)[keyof typeof EntityRoutesFundingCurrency]
  | (string & {});

export const entityRoutesFundingCurrencySchema: EnumSchema<EntityRoutesFundingCurrency> =
  s.enumOf<EntityRoutesFundingCurrency>(EntityRoutesFundingCurrency);
