import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The last stage completed for risk.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `createAccount` - **Create Account**
 *
 * </details>
 */
export const AccountCheckStage1 = {
  CreateAccount: "createAccount",
} as const;
export type AccountCheckStage1 = (typeof AccountCheckStage1)[keyof typeof AccountCheckStage1] | (string & {});

export const accountCheckStage1Schema: EnumSchema<AccountCheckStage1> =
  s.enumOf<AccountCheckStage1>(AccountCheckStage1);
