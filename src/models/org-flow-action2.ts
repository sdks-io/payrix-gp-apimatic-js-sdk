import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The action to take in relation to the Entity being processed.
 *
 * <details> <summary>Valid Values</summary>
 *
 *   - `add` - **Add the referenced Entity to the referenced Org.**
 *   - `remove` - **Remove the referenced Entity from the referenced Org.**
 *
 * </details>
 */
export const OrgFlowAction2 = {
  Add: "add",
  Remove: "remove",
} as const;
export type OrgFlowAction2 = (typeof OrgFlowAction2)[keyof typeof OrgFlowAction2] | (string & {});

export const orgFlowAction2Schema: EnumSchema<OrgFlowAction2> = s.enumOf<OrgFlowAction2>(OrgFlowAction2);
