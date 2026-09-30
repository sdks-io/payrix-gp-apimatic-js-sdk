import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsResponseSchema, type OrgsResponse } from "../orgs-response.js";

/** The identifier of the Org (group) that omniTokens is associated to. */
export type OmniTokensModelOrg = string | OrgsResponse;

export const omniTokensModelOrgSchema: Schema<OmniTokensModelOrg> = s.of<OmniTokensModelOrg>(
  s.union([s.string(), s.lazy(() => orgsResponseSchema)]),
);
