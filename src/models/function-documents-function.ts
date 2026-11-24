import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This is the intended function of the document being uploaded.
 *      * `IDENTITY_VERIFICATION` indicates a document that is used to validate the identity of
 *        applicant. Generally, this would only be required if the automated validation fails.
 *      * `RISK_REVIEW` indicates a document that has been requested by the risk or fraud prevention
 *        team of the platform.
 *      * `UNDERWRITING` indicates documentation related to a processing volume increase request.
 */
export const FunctionDocumentsFunction = {
  IdentityVerification: "IDENTITY_VERIFICATION",
  RiskReview: "RISK_REVIEW",
  Underwriting: "UNDERWRITING",
} as const;
export type FunctionDocumentsFunction =
  | (typeof FunctionDocumentsFunction)[keyof typeof FunctionDocumentsFunction]
  | (string & {});

export const functionDocumentsFunctionSchema: EnumSchema<FunctionDocumentsFunction> =
  s.enumOf<FunctionDocumentsFunction>(FunctionDocumentsFunction);
