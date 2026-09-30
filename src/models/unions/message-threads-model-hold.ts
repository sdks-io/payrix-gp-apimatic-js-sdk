import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { holdsResponseSchema, type HoldsResponse } from "../holds-response.js";

/** The identifier of the Hold that is related to this messageThread. */
export type MessageThreadsModelHold = string | HoldsResponse;

export const messageThreadsModelHoldSchema: Schema<MessageThreadsModelHold> = s.of<MessageThreadsModelHold>(
  s.union([s.string(), s.lazy(() => holdsResponseSchema)]),
);
