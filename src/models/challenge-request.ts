import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { document2InternalSchema, document2Schema, type Document2 } from "./document2.js";

export type ChallengeRequest = {
  /** A list of evidence provided by the Merchant that relate to the Dispute. */
  documents?: Document2[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const challengeRequestProperties: s.Shape<ChallengeRequest> = {
  documents: s.optional(s.array(s.lazy(() => document2InternalSchema))),
};

export const challengeRequestInternalSchema: Schema<ChallengeRequest> = s.object<ChallengeRequest>(
  challengeRequestProperties,
  { additionalProperties: s.json() },
);

export const challengeRequestSchema: Schema<ChallengeRequest> = s.lazySchema(() =>
  s.object<ChallengeRequest>(
    {
      ...challengeRequestProperties,
      documents: s.optional(s.array(s.lazy(() => document2Schema))),
    },
    { additionalProperties: s.json() },
  ),
);
