import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { teamsResponseSchema, type TeamsResponse } from "../teams-response.js";

/** The identifier of the Team that this Aggregation applies to. */
export type AggregationsModelTeam = string | TeamsResponse;

export const aggregationsModelTeamSchema: Schema<AggregationsModelTeam> = s.of<AggregationsModelTeam>(
  s.union([s.string(), s.lazy(() => teamsResponseSchema)]),
);
