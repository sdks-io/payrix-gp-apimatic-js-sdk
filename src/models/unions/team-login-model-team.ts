import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { teamsResponseSchema, type TeamsResponse } from "../teams-response.js";

/**
 * The identifier of the Team resource that the Login identified in the 'login' field should be
 * marked as part of.
 */
export type TeamLoginModelTeam = string | TeamsResponse;

export const teamLoginModelTeamSchema: Schema<TeamLoginModelTeam> = s.of<TeamLoginModelTeam>(
  s.union([s.string(), s.lazy(() => teamsResponseSchema)]),
);
