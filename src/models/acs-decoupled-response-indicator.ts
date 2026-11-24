import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AcsDecoupledResponseIndicator = {
  DecoupledAuthenticationUtilised: "DECOUPLED_AUTHENTICATION_UTILISED",
  DecoupledAuthenticationNotUtilised: "DECOUPLED_AUTHENTICATION_NOT_UTILISED",
} as const;
export type AcsDecoupledResponseIndicator =
  | (typeof AcsDecoupledResponseIndicator)[keyof typeof AcsDecoupledResponseIndicator]
  | (string & {});

export const acsDecoupledResponseIndicatorSchema: EnumSchema<AcsDecoupledResponseIndicator> =
  s.enumOf<AcsDecoupledResponseIndicator>(AcsDecoupledResponseIndicator);
