import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detailedErrorCode4Schema, type DetailedErrorCode4 } from "./detailed-error-code4.js";
import { errorCode4Schema, type ErrorCode4 } from "./error-code4.js";

/** Bad Gateway */
export type TransactionsReversal502Error = {
  /** This is an error indicating there was an issue connecting to a partner system.. */
  errorCode?: ErrorCode4;
  /** Unique reference to identify the error. */
  detailedErrorCode?: DetailedErrorCode4;
  /** Authentication error—Verify and correct credentials. */
  detailedErrorDescription?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transactionsReversal502ErrorSchema: Schema<TransactionsReversal502Error> =
  s.object<TransactionsReversal502Error>(
    {
      errorCode: s.optional(s.lazy(() => errorCode4Schema)),
      detailedErrorCode: s.optional(s.lazy(() => detailedErrorCode4Schema)),
      detailedErrorDescription: s.optional(s.string()),
      _keysMap: {
        errorCode: "error_code",
        detailedErrorCode: "detailed_error_code",
        detailedErrorDescription: "detailed_error_description",
      },
    },
    { additionalProperties: s.json() },
  );
