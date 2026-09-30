import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NoteDocumentStatus = {
  Created: "created",
  Processed: "processed",
  Failed: "failed",
} as const;
export type NoteDocumentStatus = (typeof NoteDocumentStatus)[keyof typeof NoteDocumentStatus] | (string & {});

export const noteDocumentStatusSchema: EnumSchema<NoteDocumentStatus> =
  s.enumOf<NoteDocumentStatus>(NoteDocumentStatus);
