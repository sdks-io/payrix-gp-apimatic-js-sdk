import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detailedErrorCode2Schema, type DetailedErrorCode2 } from "./detailed-error-code2.js";
import { errorCode2Schema, type ErrorCode2 } from "./error-code2.js";

/** Internal Server Error */
export type DisputesDocuments500Error = {
  /** This indicates an unexpected issue occurred on the Global Payments system. */
  errorCode?: ErrorCode2;
  /** Unique reference to identify the error. */
  detailedErrorCode?: DetailedErrorCode2;
  /** Unique Text describing the specific error. */
  detailedErrorDescription?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disputesDocuments500ErrorSchema: Schema<DisputesDocuments500Error> =
  s.object<DisputesDocuments500Error>(
    {
      errorCode: s.optional(s.lazy(() => errorCode2Schema)),
      detailedErrorCode: s.optional(s.lazy(() => detailedErrorCode2Schema)),
      detailedErrorDescription: s.optional(s.string()),
      _keysMap: {
        errorCode: "error_code",
        detailedErrorCode: "detailed_error_code",
        detailedErrorDescription: "detailed_error_description",
      },
    },
    { additionalProperties: s.json() },
  );
