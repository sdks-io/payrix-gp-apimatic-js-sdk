import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrgFlowTrigger = {
  Create: "create",
  Low: "low",
  High: "high",
  Board: "board",
} as const;
export type OrgFlowTrigger = (typeof OrgFlowTrigger)[keyof typeof OrgFlowTrigger] | (string & {});

export const orgFlowTriggerSchema: EnumSchema<OrgFlowTrigger> = s.enumOf<OrgFlowTrigger>(OrgFlowTrigger);
