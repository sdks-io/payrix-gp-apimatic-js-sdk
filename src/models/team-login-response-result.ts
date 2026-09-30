import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { teamLoginResponseItemSchema, type TeamLoginResponseItem } from "./team-login-response-item.js";

export type TeamLoginResponseResult = {
  response?: TeamLoginResponseItem;
};

export const teamLoginResponseResultSchema: Schema<TeamLoginResponseResult> =
  s.object<TeamLoginResponseResult>({
    response: s.optional(s.lazy(() => teamLoginResponseItemSchema)),
  });
