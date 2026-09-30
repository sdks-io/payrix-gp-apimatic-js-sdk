import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator12Schema, type Creator12 } from "./creator12.js";
import { entity28Schema, type Entity28 } from "./entity28.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { holdSchema, type Hold } from "./hold.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { login2Schema, type Login2 } from "./login2.js";
import { noteDocumentsResponseSchema, type NoteDocumentsResponse } from "./note-documents-response.js";
import { noteType1Schema, type NoteType1 } from "./note-type1.js";
import { terminalTxnSchema, type TerminalTxn } from "./terminal-txn.js";
import { txn1Schema, type Txn1 } from "./txn1.js";

export type Note = {
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
  creator?: Creator12;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  login?: Login2;
  hold?: Hold;
  txn?: Txn1;
  terminalTxn?: TerminalTxn;
  entity?: Entity28;
  type?: NoteType1;
  /** A Message/Note regarding this notes resource. This field is stored as a text string. */
  note?: string;
  /** Free-form text for adding a message along with the type. */
  data?: string;
  /** Flag to determine if a note has been pinned or not.. */
  pinned?: number;
  /**
   * The timestamp indicating the date and time when a note was pinned. The format should be
   * YYYY-MM-DD HH:MM:SS.
   */
  pinnedDate?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
  noteDocuments?: NoteDocumentsResponse[];
};

export const noteSchema: Schema<Note> = s.object<Note>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator12Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.lazy(() => login2Schema)),
  hold: s.optional(s.lazy(() => holdSchema)),
  txn: s.optional(s.lazy(() => txn1Schema)),
  terminalTxn: s.optional(s.lazy(() => terminalTxnSchema)),
  entity: s.optional(s.lazy(() => entity28Schema)),
  type: s.optional(s.lazy(() => noteType1Schema)),
  note: s.optional(s.string()),
  data: s.optional(s.string()),
  pinned: s.optional(s.number()),
  pinnedDate: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  noteDocuments: s.optional(s.array(s.lazy(() => noteDocumentsResponseSchema))),
});
