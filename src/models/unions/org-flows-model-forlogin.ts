import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The identifier of the Login resource for which this orgFlows resource is triggered. */
export type OrgFlowsModelForlogin = string | LoginsResponse;

export const orgFlowsModelForloginSchema: Schema<OrgFlowsModelForlogin> = s.of<OrgFlowsModelForlogin>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
