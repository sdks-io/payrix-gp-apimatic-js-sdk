import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { documents3InternalSchema, documents3Schema, type Documents3 } from "./documents3.js";

export type DisputesChallengeRequest = {
  /** A list of evidence provided by the Merchant that relate to the Dispute. */
  documents?: Documents3[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const disputesChallengeRequestProperties: s.Shape<DisputesChallengeRequest> = {
  documents: s.optional(s.array(s.lazy(() => documents3InternalSchema))),
};

export const disputesChallengeRequestInternalSchema: Schema<DisputesChallengeRequest> =
  s.object<DisputesChallengeRequest>(disputesChallengeRequestProperties, { additionalProperties: s.json() });

export const disputesChallengeRequestSchema: Schema<DisputesChallengeRequest> = s.lazySchema(() =>
  s.object<DisputesChallengeRequest>(
    {
      ...disputesChallengeRequestProperties,
      documents: s.optional(s.array(s.lazy(() => documents3Schema))),
    },
    { additionalProperties: s.json() },
  ),
);
