import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { orgsResponseSchema, type OrgsResponse } from "../orgs-response.js";

/** If this currency rate relates to an org, then this field stores the identifier of the Org. */
export type CurrencyRatesModelOrg = string | OrgsResponse;

export const currencyRatesModelOrgSchema: Schema<CurrencyRatesModelOrg> = s.of<CurrencyRatesModelOrg>(
  s.union([s.string(), s.lazy(() => orgsResponseSchema)]),
);
