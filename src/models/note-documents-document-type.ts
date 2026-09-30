import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NoteDocumentsDocumentType = {
  General: "general",
  PersonalId: "personalId",
  CompanyId: "companyId",
  VoidCheck: "voidCheck",
  BankStatement: "bankStatement",
  BankLetter: "bankLetter",
  Contract: "contract",
  TaxDocument: "taxDocument",
} as const;
export type NoteDocumentsDocumentType =
  | (typeof NoteDocumentsDocumentType)[keyof typeof NoteDocumentsDocumentType]
  | (string & {});

export const noteDocumentsDocumentTypeSchema: EnumSchema<NoteDocumentsDocumentType> =
  s.enumOf<NoteDocumentsDocumentType>(NoteDocumentsDocumentType);
