import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProfitShareRuleType = {
  Less: "less",
  Equal: "equal",
  NotEqual: "notEqual",
  Greater: "greater",
  Event: "event",
  NotEvent: "notEvent",
  Fee: "fee",
  NotFee: "notFee",
  Fromentity: "fromentity",
  NotFromentity: "notFromentity",
} as const;
export type ProfitShareRuleType =
  | (typeof ProfitShareRuleType)[keyof typeof ProfitShareRuleType]
  | (string & {});

export const profitShareRuleTypeSchema: EnumSchema<ProfitShareRuleType> =
  s.enumOf<ProfitShareRuleType>(ProfitShareRuleType);
