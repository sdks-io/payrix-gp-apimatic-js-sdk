import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { formatDocumentsFormatSchema, type FormatDocumentsFormat } from "./format-documents-format.js";
import {
  functionDocumentsFunctionSchema,
  type FunctionDocumentsFunction,
} from "./function-documents-function.js";

export type DocumentsRequest2 = {
  /**
   * This is the intended function of the document being uploaded.
   *      * `IDENTITY_VERIFICATION` indicates a document that is used to validate the identity of
   *        applicant. Generally, this would only be required if the automated validation fails.
   *      * `RISK_REVIEW` indicates a document that has been requested by the risk or fraud
   *        prevention team of the platform.
   *      * `UNDERWRITING` indicates documentation related to a processing volume increase request.
   */
  function?: FunctionDocumentsFunction;
  /** The document to be uploaded in base64 format. */
  b64Content?: string;
  /** This is the format of the file being uploaded. */
  format?: FormatDocumentsFormat;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const documentsRequest2Properties: s.Shape<DocumentsRequest2> = {
  function: s.optional(s.lazy(() => functionDocumentsFunctionSchema)),
  b64Content: s.optional(s.string()),
  format: s.optional(s.lazy(() => formatDocumentsFormatSchema)),
  _keysMap: {
    b64Content: "b64_content",
  },
};

export const documentsRequest2InternalSchema: Schema<DocumentsRequest2> = s.object<DocumentsRequest2>(
  documentsRequest2Properties,
  { additionalProperties: s.json() },
);

export const documentsRequest2Schema: Schema<DocumentsRequest2> = s.lazySchema(() =>
  s.object<DocumentsRequest2>(
    {
      ...documentsRequest2Properties,
      b64Content: s.optional(s.string().check(s.minLength(1), s.maxLength(250))),
    },
    { additionalProperties: s.json() },
  ),
);
