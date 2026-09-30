import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { teamsResponseSchema, type TeamsResponse } from "../teams-response.js";

/**
 * The identifier (ID) of the team that this Alert relates to. The Alert is triggered based on the
 * activity of this Team.
 */
export type AlertsModelTeam = string | TeamsResponse;

export const alertsModelTeamSchema: Schema<AlertsModelTeam> = s.of<AlertsModelTeam>(
  s.union([s.string(), s.lazy(() => teamsResponseSchema)]),
);
