import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalsCloudEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type TerminalsCloudEnabled =
  | (typeof TerminalsCloudEnabled)[keyof typeof TerminalsCloudEnabled]
  | (number & {});

export const terminalsCloudEnabledSchema: EnumSchema<TerminalsCloudEnabled> =
  s.enumOf<TerminalsCloudEnabled>(TerminalsCloudEnabled);
