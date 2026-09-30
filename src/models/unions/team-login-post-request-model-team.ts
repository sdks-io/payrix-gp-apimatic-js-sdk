import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { teamsPostRequestSchema, type TeamsPostRequest } from "../teams-post-request.js";

/**
 * The identifier of the Team resource that the Login identified in the 'login' field should be
 * marked as part of.
 */
export type TeamLoginPostRequestModelTeam = string | TeamsPostRequest;

export const teamLoginPostRequestModelTeamSchema: Schema<TeamLoginPostRequestModelTeam> =
  s.of<TeamLoginPostRequestModelTeam>(s.union([s.string(), s.lazy(() => teamsPostRequestSchema)]));
