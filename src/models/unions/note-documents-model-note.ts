import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { notesResponseSchema, type NotesResponse } from "../notes-response.js";

/** The identifier of the Note that owns this note documents resource. */
export type NoteDocumentsModelNote = string | NotesResponse;

export const noteDocumentsModelNoteSchema: Schema<NoteDocumentsModelNote> = s.of<NoteDocumentsModelNote>(
  s.union([s.string(), s.lazy(() => notesResponseSchema)]),
);
