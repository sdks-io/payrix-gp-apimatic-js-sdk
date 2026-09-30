import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of logic to apply with this ProfitShare Rule.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `less` - **The ProfitShare applies only if the entry amount is lower than the amount set in the
 *   'value' field of the ProfitShare Rule.**
 * - `equal` - **The ProfitShare applies only if the entry amount is exactly the same as the amount
 *   set in the 'value' field of the ProfitShare Rule.**
 * - `notEqual` - **The ProfitShare applies only if the entry amount is not exactly equal to the
 *   amount set in the 'value' field of the ProfitShare Rule.**
 * - `greater` - **The ProfitShare applies only if the entry amount is higher than the amount set in
 *   the 'value' field of the ProfitShare Rule.**
 * - `event` - **The ProfitShare applies only if the entry event is exactly the same as the event
 *   set in the 'value' field of the ProfitShare Rule.**
 * - `notEvent` - **The ProfitShare applies only if the entry event is not exactly equal to the
 *   event set in the 'value' field of the ProfitShare Rule.**
 * - `fee` - **The ProfitShare applies only if the entry fee is exactly the same as the fee set in
 *   the 'value' field of the ProfitShare Rule.**
 * - `notFee` - **The ProfitShare applies only if the entry fee is not exactly equal to the fee set
 *   in the 'value' field of the ProfitShare Rule.**
 * - `fromentity` - **The ProfitShare applies only if the entry fromentity (or
 *   opposingEntryfromentity) is exactly the same as the entity set in the 'value' field of the
 *   ProfitShare Rule.**
 * - `notFromentity` - **The ProfitShare applies only if the entry fromentity (or
 *   opposingEntryfromentity) is not exactly equal to the entity set in the 'value' field of the
 *   ProfitShare Rule.**
 *
 * </details>
 */
export const ProfitShareRuleType2 = {
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
export type ProfitShareRuleType2 =
  | (typeof ProfitShareRuleType2)[keyof typeof ProfitShareRuleType2]
  | (string & {});

export const profitShareRuleType2Schema: EnumSchema<ProfitShareRuleType2> =
  s.enumOf<ProfitShareRuleType2>(ProfitShareRuleType2);
