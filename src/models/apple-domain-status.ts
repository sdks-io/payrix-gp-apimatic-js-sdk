import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AppleDomainStatus = {
  RegistrationRequested: "registration_requested",
  Registering: "registering",
  Registered: "registered",
  FailedRegistration: "failed_registration",
  UnregistrationRequested: "unregistration_requested",
  Unregistering: "unregistering",
  Unregistered: "unregistered",
} as const;
export type AppleDomainStatus = (typeof AppleDomainStatus)[keyof typeof AppleDomainStatus] | (string & {});

export const appleDomainStatusSchema: EnumSchema<AppleDomainStatus> =
  s.enumOf<AppleDomainStatus>(AppleDomainStatus);
