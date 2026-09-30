import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { teamsPostRequestSchema, type TeamsPostRequest } from "../teams-post-request.js";

/**
 * The identifier (ID) of the team that this Alert relates to. The Alert is triggered based on the
 * activity of this Team.
 */
export type AlertsPostRequestModelTeam = string | TeamsPostRequest;

export const alertsPostRequestModelTeamSchema: Schema<AlertsPostRequestModelTeam> =
  s.of<AlertsPostRequestModelTeam>(s.union([s.string(), s.lazy(() => teamsPostRequestSchema)]));
