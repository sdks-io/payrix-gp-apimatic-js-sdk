import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This field sets the trigger that determines when this orgFlow runs. <details> <summary>Valid
 * Values</summary>
 * - `create` - **Entity creation.**
 * - `low` - **Entity verification through decisions hits a configured low score.**
 * - `high` - **Entity verification through decisions hits a configured high score.**
 * - `board` - **Merchant boarding.** </details>
 */
export const OrgFlowTrigger1 = {
  Create: "create",
  Low: "low",
  High: "high",
  Board: "board",
} as const;
export type OrgFlowTrigger1 = (typeof OrgFlowTrigger1)[keyof typeof OrgFlowTrigger1] | (string & {});

export const orgFlowTrigger1Schema: EnumSchema<OrgFlowTrigger1> = s.enumOf<OrgFlowTrigger1>(OrgFlowTrigger1);
