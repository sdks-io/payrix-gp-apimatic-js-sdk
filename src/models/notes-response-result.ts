import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { notesResponseItemSchema, type NotesResponseItem } from "./notes-response-item.js";

export type NotesResponseResult = {
  response?: NotesResponseItem;
};

export const notesResponseResultSchema: Schema<NotesResponseResult> = s.object<NotesResponseResult>({
  response: s.optional(s.lazy(() => notesResponseItemSchema)),
});
