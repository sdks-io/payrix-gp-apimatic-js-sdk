import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of action that was executed that initialed the activity this notification is providing
 * an update on.
 */
export const TypeDocumentsActionType = {
  DocumentUpload: "DOCUMENT_UPLOAD",
} as const;
export type TypeDocumentsActionType =
  | (typeof TypeDocumentsActionType)[keyof typeof TypeDocumentsActionType]
  | (string & {});

export const typeDocumentsActionTypeSchema: EnumSchema<TypeDocumentsActionType> =
  s.enumOf<TypeDocumentsActionType>(TypeDocumentsActionType);
