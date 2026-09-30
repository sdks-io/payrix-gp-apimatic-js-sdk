import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { divisionsResponseSchema, type DivisionsResponse } from "../divisions-response.js";

/** The identifier of the Division resource that this Host belongs to. */
export type HostsModelDivision = string | DivisionsResponse;

export const hostsModelDivisionSchema: Schema<HostsModelDivision> = s.of<HostsModelDivision>(
  s.union([s.string(), s.lazy(() => divisionsResponseSchema)]),
);
