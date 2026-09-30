import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsResponseSchema, type OrgsResponse } from "../orgs-response.js";

/** The identifier of the Org associated with this invoiceParameter. */
export type BillingsModelOrg = string | OrgsResponse;

export const billingsModelOrgSchema: Schema<BillingsModelOrg> = s.of<BillingsModelOrg>(
  s.union([s.string(), s.lazy(() => orgsResponseSchema)]),
);
