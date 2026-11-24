import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detailedErrorCode5Schema, type DetailedErrorCode5 } from "./detailed-error-code5.js";
import { errorCode5Schema, type ErrorCode5 } from "./error-code5.js";

/** Not implemented */
export type TransactionsCapture501Error = {
  /** This is an error not yet handled or mapped properly. */
  errorCode?: ErrorCode5;
  /** Unique reference to identify the error. */
  detailedErrorCode?: DetailedErrorCode5;
  /** Unique Text describing the specific error not yet handled. */
  detailedErrorDescription?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transactionsCapture501ErrorSchema: Schema<TransactionsCapture501Error> =
  s.object<TransactionsCapture501Error>(
    {
      errorCode: s.optional(s.lazy(() => errorCode5Schema)),
      detailedErrorCode: s.optional(s.lazy(() => detailedErrorCode5Schema)),
      detailedErrorDescription: s.optional(s.string()),
      _keysMap: {
        errorCode: "error_code",
        detailedErrorCode: "detailed_error_code",
        detailedErrorDescription: "detailed_error_description",
      },
    },
    { additionalProperties: s.json() },
  );
