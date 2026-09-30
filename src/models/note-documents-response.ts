import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { noteDocumentStatus1Schema, type NoteDocumentStatus1 } from "./note-document-status1.js";
import { noteDocumentType1Schema, type NoteDocumentType1 } from "./note-document-type1.js";
import {
  noteDocumentsDocumentType1Schema,
  type NoteDocumentsDocumentType1,
} from "./note-documents-document-type1.js";
import { noteSchema, type Note } from "./note.js";

export type NoteDocumentsResponse = {
  /** The ID of this resource. */
  id?: string;
  /**
   * The date and time at which this resource was created. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  created?: string;
  /**
   * The date and time at which this resource was modified. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  modified?: string;
  creator?: Creator18;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  note?: Note;
  /** The identifier of the Custom that relates to this notes resource. */
  custom?: string;
  type?: NoteDocumentType1;
  documentType?: NoteDocumentsDocumentType1;
  /** The name of the document on the referenced NoteDocument. */
  name?: string;
  /** A brief description of the document. */
  description?: string;
  status?: NoteDocumentStatus1;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const noteDocumentsResponseSchema: Schema<NoteDocumentsResponse> = s.object<NoteDocumentsResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  note: s.optional(s.lazy(() => noteSchema)),
  custom: s.optional(s.string()),
  type: s.optional(s.lazy(() => noteDocumentType1Schema)),
  documentType: s.optional(s.lazy(() => noteDocumentsDocumentType1Schema)),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  status: s.optional(s.lazy(() => noteDocumentStatus1Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
