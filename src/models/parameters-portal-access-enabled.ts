import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersPortalAccessEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersPortalAccessEnabled =
  | (typeof ParametersPortalAccessEnabled)[keyof typeof ParametersPortalAccessEnabled]
  | (number & {});

export const parametersPortalAccessEnabledSchema: EnumSchema<ParametersPortalAccessEnabled> =
  s.enumOf<ParametersPortalAccessEnabled>(ParametersPortalAccessEnabled);
