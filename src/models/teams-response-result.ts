import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { teamsResponseItemSchema, type TeamsResponseItem } from "./teams-response-item.js";

export type TeamsResponseResult = {
  response?: TeamsResponseItem;
};

export const teamsResponseResultSchema: Schema<TeamsResponseResult> = s.object<TeamsResponseResult>({
  response: s.optional(s.lazy(() => teamsResponseItemSchema)),
});
