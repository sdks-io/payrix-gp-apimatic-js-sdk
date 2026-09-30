import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsResponseSchema, type OrgsResponse } from "../orgs-response.js";

/** The identifier of the Org (group) that saferPayments is associated to. */
export type SaferPaymentsModelOrg = string | OrgsResponse;

export const saferPaymentsModelOrgSchema: Schema<SaferPaymentsModelOrg> = s.of<SaferPaymentsModelOrg>(
  s.union([s.string(), s.lazy(() => orgsResponseSchema)]),
);
