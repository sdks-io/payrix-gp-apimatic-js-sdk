import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RiskAssessment2 = {
  mode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const riskAssessment2Schema: Schema<RiskAssessment2> = s.object<RiskAssessment2>(
  {
    mode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
