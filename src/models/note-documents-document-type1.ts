import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The purpose of the document upload.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `general` - **General use for unspecified type.**
 * - `personalId` - **An identification document for a person.**
 * - `companyId` - **An identification document for a company.**
 * - `voidCheck` - **A voided check for bank account verification.**
 * - `bankStatement` - **A bank statement.**
 * - `bankLetter` - **A bank letter for verification.**
 * - `contract` - **A contract for goods or services.**
 * - `taxDocument` - **A tax document for verification.**
 *
 * </details>
 */
export const NoteDocumentsDocumentType1 = {
  General: "general",
  PersonalId: "personalId",
  CompanyId: "companyId",
  VoidCheck: "voidCheck",
  BankStatement: "bankStatement",
  BankLetter: "bankLetter",
  Contract: "contract",
  TaxDocument: "taxDocument",
} as const;
export type NoteDocumentsDocumentType1 =
  | (typeof NoteDocumentsDocumentType1)[keyof typeof NoteDocumentsDocumentType1]
  | (string & {});

export const noteDocumentsDocumentType1Schema: EnumSchema<NoteDocumentsDocumentType1> =
  s.enumOf<NoteDocumentsDocumentType1>(NoteDocumentsDocumentType1);
