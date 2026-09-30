import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParametersDiscoverAcquiredEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ParametersDiscoverAcquiredEnabled =
  | (typeof ParametersDiscoverAcquiredEnabled)[keyof typeof ParametersDiscoverAcquiredEnabled]
  | (number & {});

export const parametersDiscoverAcquiredEnabledSchema: EnumSchema<ParametersDiscoverAcquiredEnabled> =
  s.enumOf<ParametersDiscoverAcquiredEnabled>(ParametersDiscoverAcquiredEnabled);
