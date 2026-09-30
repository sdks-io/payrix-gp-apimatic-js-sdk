import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsResponseSchema, type OrgsResponse } from "../orgs-response.js";

/** The identifier of the Org associated with this invoiceParameter. */
export type InvoiceParametersModelOrg = string | OrgsResponse;

export const invoiceParametersModelOrgSchema: Schema<InvoiceParametersModelOrg> =
  s.of<InvoiceParametersModelOrg>(s.union([s.string(), s.lazy(() => orgsResponseSchema)]));
