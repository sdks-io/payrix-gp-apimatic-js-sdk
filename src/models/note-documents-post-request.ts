import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { noteDocumentStatus1Schema, type NoteDocumentStatus1 } from "./note-document-status1.js";
import { noteDocumentType1Schema, type NoteDocumentType1 } from "./note-document-type1.js";
import {
  noteDocumentsDocumentType1Schema,
  type NoteDocumentsDocumentType1,
} from "./note-documents-document-type1.js";

export type NoteDocumentsPostRequest = {
  /** The identifier of the Note that owns this note documents resource. */
  note: string;
  type?: NoteDocumentType1;
  /** The name of the document on the referenced NoteDocument. */
  name?: string;
  /** The identifier of the Custom that relates to this notes resource. */
  custom?: string;
  /** A brief description of the document. */
  description?: string;
  status?: NoteDocumentStatus1;
  documentType?: NoteDocumentsDocumentType1;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const noteDocumentsPostRequestSchema: Schema<NoteDocumentsPostRequest> =
  s.object<NoteDocumentsPostRequest>({
    note: s.string(),
    type: s.optional(s.lazy(() => noteDocumentType1Schema)),
    name: s.optional(s.string()),
    custom: s.optional(s.string()),
    description: s.optional(s.string()),
    status: s.optional(s.lazy(() => noteDocumentStatus1Schema)),
    documentType: s.optional(s.lazy(() => noteDocumentsDocumentType1Schema)),
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
  });
