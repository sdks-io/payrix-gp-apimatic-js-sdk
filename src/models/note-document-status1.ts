import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the document upload.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `created` - **The database record has been created.**
 * - `processed` - **The document upload for this record was processed successfully.**
 * - `failed` - **The document upload for this record could not be processed.**
 *
 * </details>
 */
export const NoteDocumentStatus1 = {
  Created: "created",
  Processed: "processed",
  Failed: "failed",
} as const;
export type NoteDocumentStatus1 =
  | (typeof NoteDocumentStatus1)[keyof typeof NoteDocumentStatus1]
  | (string & {});

export const noteDocumentStatus1Schema: EnumSchema<NoteDocumentStatus1> =
  s.enumOf<NoteDocumentStatus1>(NoteDocumentStatus1);
