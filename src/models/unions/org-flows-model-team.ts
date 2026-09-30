import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { teamsResponseSchema, type TeamsResponse } from "../teams-response.js";

/** The identifier of the Team resource for which this orgFlows resource is triggered. */
export type OrgFlowsModelTeam = string | TeamsResponse;

export const orgFlowsModelTeamSchema: Schema<OrgFlowsModelTeam> = s.of<OrgFlowsModelTeam>(
  s.union([s.string(), s.lazy(() => teamsResponseSchema)]),
);
