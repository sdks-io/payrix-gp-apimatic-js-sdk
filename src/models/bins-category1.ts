import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The category of the account product.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `classic` - **Classic credit or debit card.**
 * - `business` - **Business credit or debit card.**
 * - `corporate` - **Corporate credit or debit card.**
 * - `fleet` - **Fleet card for transportation-related expenses.**
 * - `hsaFsa` - **HSA (Health Savings Account) or FSA (Flexible Spending Account) card.**
 * - `platinum` - **Platinum credit card.**
 * - `prepaid` - **Prepaid card.**
 * - `coreCard` - **Core card.**
 * - `personal` - **Personal account.**
 * - `standard` - **Standard account.**
 * - `other` - **Other type of account.**
 * - `international` - **International account.**
 *
 * </details>
 */
export const BinsCategory1 = {
  Classic: "classic",
  Business: "business",
  Corporate: "corporate",
  Fleet: "fleet",
  HsaFsa: "hsaFsa",
  Platinum: "platinum",
  Prepaid: "prepaid",
  CoreCard: "coreCard",
  Personal: "personal",
  Standard: "standard",
  Other: "other",
  International: "international",
} as const;
export type BinsCategory1 = (typeof BinsCategory1)[keyof typeof BinsCategory1] | (string & {});

export const binsCategory1Schema: EnumSchema<BinsCategory1> = s.enumOf<BinsCategory1>(BinsCategory1);
