import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detailedErrorCode6Schema, type DetailedErrorCode6 } from "./detailed-error-code6.js";
import { errorCode6Schema, type ErrorCode6 } from "./error-code6.js";

/** Bad Request */
export type Batches400Error = {
  /** This indicates an issue with the API request. */
  errorCode?: ErrorCode6;
  /** Unique reference to identify the error. */
  detailedErrorCode?: DetailedErrorCode6;
  /** Unique Text describing the specific error. */
  detailedErrorDescription?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batches400ErrorSchema: Schema<Batches400Error> = s.object<Batches400Error>(
  {
    errorCode: s.optional(s.lazy(() => errorCode6Schema)),
    detailedErrorCode: s.optional(s.lazy(() => detailedErrorCode6Schema)),
    detailedErrorDescription: s.optional(s.string()),
    _keysMap: {
      errorCode: "error_code",
      detailedErrorCode: "detailed_error_code",
      detailedErrorDescription: "detailed_error_description",
    },
  },
  { additionalProperties: s.json() },
);
