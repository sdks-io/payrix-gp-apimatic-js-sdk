import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AlertActionsMaxAttemptsTempDisabled = {
  _0: 0,
  _1: 1,
} as const;
export type AlertActionsMaxAttemptsTempDisabled =
  | (typeof AlertActionsMaxAttemptsTempDisabled)[keyof typeof AlertActionsMaxAttemptsTempDisabled]
  | (number & {});

export const alertActionsMaxAttemptsTempDisabledSchema: EnumSchema<AlertActionsMaxAttemptsTempDisabled> =
  s.enumOf<AlertActionsMaxAttemptsTempDisabled>(AlertActionsMaxAttemptsTempDisabled);
