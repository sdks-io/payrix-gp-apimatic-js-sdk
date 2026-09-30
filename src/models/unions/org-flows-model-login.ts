import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The Login that owns this resource. */
export type OrgFlowsModelLogin = string | LoginsResponse;

export const orgFlowsModelLoginSchema: Schema<OrgFlowsModelLogin> = s.of<OrgFlowsModelLogin>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);
