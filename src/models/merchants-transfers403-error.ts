import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detailedErrorCode1Schema, type DetailedErrorCode1 } from "./detailed-error-code1.js";
import { errorCode1Schema, type ErrorCode1 } from "./error-code1.js";

/** Forbidden */
export type MerchantsTransfers403Error = {
  /** This action is not authorized with the credentials being used. */
  errorCode?: ErrorCode1;
  /** Unique reference to identify the error. */
  detailedErrorCode?: DetailedErrorCode1;
  /** Unique Text describing the specific error. */
  detailedErrorDescription?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const merchantsTransfers403ErrorSchema: Schema<MerchantsTransfers403Error> =
  s.object<MerchantsTransfers403Error>(
    {
      errorCode: s.optional(s.lazy(() => errorCode1Schema)),
      detailedErrorCode: s.optional(s.lazy(() => detailedErrorCode1Schema)),
      detailedErrorDescription: s.optional(s.string()),
      _keysMap: {
        errorCode: "error_code",
        detailedErrorCode: "detailed_error_code",
        detailedErrorDescription: "detailed_error_description",
      },
    },
    { additionalProperties: s.json() },
  );
