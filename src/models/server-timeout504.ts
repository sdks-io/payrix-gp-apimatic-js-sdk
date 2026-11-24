import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detailedErrorCode3Schema, type DetailedErrorCode3 } from "./detailed-error-code3.js";
import { errorCode3Schema, type ErrorCode3 } from "./error-code3.js";

/** Timeout */
export type ServerTimeout504 = {
  /** This is an error indicating there was a timeout issue to another system. */
  errorCode?: ErrorCode3;
  /** Unique reference to identify the error. */
  detailedErrorCode?: DetailedErrorCode3;
  /** No response from payment method provider. */
  detailedErrorDescription?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serverTimeout504Schema: Schema<ServerTimeout504> = s.object<ServerTimeout504>(
  {
    errorCode: s.optional(s.lazy(() => errorCode3Schema)),
    detailedErrorCode: s.optional(s.lazy(() => detailedErrorCode3Schema)),
    detailedErrorDescription: s.optional(s.string()),
    _keysMap: {
      errorCode: "error_code",
      detailedErrorCode: "detailed_error_code",
      detailedErrorDescription: "detailed_error_description",
    },
  },
  { additionalProperties: s.json() },
);
