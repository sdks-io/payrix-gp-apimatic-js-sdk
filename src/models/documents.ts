import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { formatDocumentsFormatSchema, type FormatDocumentsFormat } from "./format-documents-format.js";

export type Documents = {
  /** The documents content to be uploaded in base64 format. */
  b64Content?: string;
  /** This is the format of the file being uploaded. */
  fileFormat?: FormatDocumentsFormat;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentsSchema: Schema<Documents> = s.object<Documents>(
  {
    b64Content: s.optional(s.string()),
    fileFormat: s.optional(s.lazy(() => formatDocumentsFormatSchema)),
    _keysMap: {
      b64Content: "b64_content",
      fileFormat: "file_format",
    },
  },
  { additionalProperties: s.json() },
);
