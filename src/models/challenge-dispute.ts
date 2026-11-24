import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { documentsSchema, type Documents } from "./documents.js";

/** This method allows documents to be uploaded to challenge a disputed transaction. */
export type ChallengeDispute = {
  documents?: Documents;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const challengeDisputeSchema: Schema<ChallengeDispute> = s.object<ChallengeDispute>(
  {
    documents: s.optional(s.lazy(() => documentsSchema)),
  },
  { additionalProperties: s.json() },
);
