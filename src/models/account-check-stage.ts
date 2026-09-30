import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccountCheckStage = {
  CreateAccount: "createAccount",
} as const;
export type AccountCheckStage = (typeof AccountCheckStage)[keyof typeof AccountCheckStage] | (string & {});

export const accountCheckStageSchema: EnumSchema<AccountCheckStage> =
  s.enumOf<AccountCheckStage>(AccountCheckStage);
