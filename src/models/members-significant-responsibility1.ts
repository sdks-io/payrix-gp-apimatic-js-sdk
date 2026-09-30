import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * 'A controlling authority', or 'Control Prong'. Includes, but is not limited to:
 *
 *   * Chief Executive Officer,
 *
 *   * Chief Financial Officer,
 *
 *   * Chief Operating Officer,
 *
 *   * Managing Member,
 *
 *   * General Partner,
 *
 *   * President,
 *
 *   * Vice Presidents, or
 *
 *   * An individual with significant legal authority to enter the Legal Entity into a commercial
 *     relationship.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **No significant responsibility.**
 *
 * - `1` - **Significant reponsibility.**
 *
 * </details>
 */
export const MembersSignificantResponsibility1 = {
  _0: 0,
  _1: 1,
} as const;
export type MembersSignificantResponsibility1 =
  | (typeof MembersSignificantResponsibility1)[keyof typeof MembersSignificantResponsibility1]
  | (number & {});

export const membersSignificantResponsibility1Schema: EnumSchema<MembersSignificantResponsibility1> =
  s.enumOf<MembersSignificantResponsibility1>(MembersSignificantResponsibility1);
