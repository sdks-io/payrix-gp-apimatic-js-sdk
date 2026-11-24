import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detailedErrorCodeSchema, type DetailedErrorCode } from "./detailed-error-code.js";
import { errorCodeSchema, type ErrorCode } from "./error-code.js";

/** Not Authenticated */
export type DisputesAcceptance401Error = {
  /** This action failed as token in the request is not valid. */
  errorCode?: ErrorCode;
  /** Unique reference to identify the error. */
  detailedErrorCode?: DetailedErrorCode;
  /** Unique Text describing the specific error. */
  detailedErrorDescription?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disputesAcceptance401ErrorSchema: Schema<DisputesAcceptance401Error> =
  s.object<DisputesAcceptance401Error>(
    {
      errorCode: s.optional(s.lazy(() => errorCodeSchema)),
      detailedErrorCode: s.optional(s.lazy(() => detailedErrorCodeSchema)),
      detailedErrorDescription: s.optional(s.string()),
      _keysMap: {
        errorCode: "error_code",
        detailedErrorCode: "detailed_error_code",
        detailedErrorDescription: "detailed_error_description",
      },
    },
    { additionalProperties: s.json() },
  );
