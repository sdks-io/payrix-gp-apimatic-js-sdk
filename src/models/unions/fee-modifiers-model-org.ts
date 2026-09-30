import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsResponseSchema, type OrgsResponse } from "../orgs-response.js";

/**
 * The identifier of the Org this Fee Modifiers should apply for on behalf of the Entity identified
 * in the value of the 'entity' field. This field is optional. If it is set, then the Fee Modifier
 * is applied to this Org instead.
 */
export type FeeModifiersModelOrg = string | OrgsResponse;

export const feeModifiersModelOrgSchema: Schema<FeeModifiersModelOrg> = s.of<FeeModifiersModelOrg>(
  s.union([s.string(), s.lazy(() => orgsResponseSchema)]),
);
