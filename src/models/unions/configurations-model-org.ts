import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsResponseSchema, type OrgsResponse } from "../orgs-response.js";

/** The identifier of the Org associated with this configuration resource. */
export type ConfigurationsModelOrg = string | OrgsResponse;

export const configurationsModelOrgSchema: Schema<ConfigurationsModelOrg> = s.of<ConfigurationsModelOrg>(
  s.union([s.string(), s.lazy(() => orgsResponseSchema)]),
);
