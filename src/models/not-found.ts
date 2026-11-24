import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detailedErrorCode123Schema, type DetailedErrorCode123 } from "./detailed-error-code123.js";
import { errorCode123Schema, type ErrorCode123 } from "./error-code123.js";

export type NotFound = {
  errorCode?: ErrorCode123;
  detailedErrorCode?: DetailedErrorCode123;
  detailedErrorDescription?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notFoundSchema: Schema<NotFound> = s.object<NotFound>(
  {
    errorCode: s.optional(s.lazy(() => errorCode123Schema)),
    detailedErrorCode: s.optional(s.lazy(() => detailedErrorCode123Schema)),
    detailedErrorDescription: s.optional(s.string()),
    _keysMap: {
      errorCode: "error_code",
      detailedErrorCode: "detailed_error_code",
      detailedErrorDescription: "detailed_error_description",
    },
  },
  { additionalProperties: s.json() },
);
