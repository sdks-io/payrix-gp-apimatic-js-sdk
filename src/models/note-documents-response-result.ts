import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  noteDocumentsResponseItemSchema,
  type NoteDocumentsResponseItem,
} from "./note-documents-response-item.js";

export type NoteDocumentsResponseResult = {
  response?: NoteDocumentsResponseItem;
};

export const noteDocumentsResponseResultSchema: Schema<NoteDocumentsResponseResult> =
  s.object<NoteDocumentsResponseResult>({
    response: s.optional(s.lazy(() => noteDocumentsResponseItemSchema)),
  });
