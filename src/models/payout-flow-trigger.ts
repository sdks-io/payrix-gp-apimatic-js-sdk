import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PayoutFlowTrigger = {
  AccountCreate: "accountCreate",
  Board: "board",
} as const;
export type PayoutFlowTrigger = (typeof PayoutFlowTrigger)[keyof typeof PayoutFlowTrigger] | (string & {});

export const payoutFlowTriggerSchema: EnumSchema<PayoutFlowTrigger> =
  s.enumOf<PayoutFlowTrigger>(PayoutFlowTrigger);
