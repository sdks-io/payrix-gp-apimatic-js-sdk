import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AcsDecoupledResponseIndicatorAuthenticationsThreeDsAcsDecoupledResponseIndicator = {
  DecoupledAuthenticationUtilised: "DECOUPLED_AUTHENTICATION_UTILISED",
  DecoupledAuthenticationNotUtilised: "DECOUPLED_AUTHENTICATION_NOT_UTILISED",
} as const;
export type AcsDecoupledResponseIndicatorAuthenticationsThreeDsAcsDecoupledResponseIndicator =
  | (typeof AcsDecoupledResponseIndicatorAuthenticationsThreeDsAcsDecoupledResponseIndicator)[keyof typeof AcsDecoupledResponseIndicatorAuthenticationsThreeDsAcsDecoupledResponseIndicator]
  | (string & {});

export const acsDecoupledResponseIndicatorAuthenticationsThreeDsAcsDecoupledResponseIndicatorSchema: EnumSchema<AcsDecoupledResponseIndicatorAuthenticationsThreeDsAcsDecoupledResponseIndicator> =
  s.enumOf<AcsDecoupledResponseIndicatorAuthenticationsThreeDsAcsDecoupledResponseIndicator>(
    AcsDecoupledResponseIndicatorAuthenticationsThreeDsAcsDecoupledResponseIndicator,
  );
