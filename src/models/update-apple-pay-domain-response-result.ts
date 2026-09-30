import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateApplePayDomainResponseResult = {
  responses?: Record<string, unknown>[];
};

export const updateApplePayDomainResponseResultSchema: Schema<UpdateApplePayDomainResponseResult> =
  s.object<UpdateApplePayDomainResponseResult>({
    responses: s.optional(s.array(s.record(s.string(), s.unknown()))),
  });
