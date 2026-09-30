import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { holdsResponseSchema, type HoldsResponse } from "../holds-response.js";

/** The identifier of the Hold that relates to this notes resource. */
export type NotesModelHold = string | HoldsResponse;

export const notesModelHoldSchema: Schema<NotesModelHold> = s.of<NotesModelHold>(
  s.union([s.string(), s.lazy(() => holdsResponseSchema)]),
);
