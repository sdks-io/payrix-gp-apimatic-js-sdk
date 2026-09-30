import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { vasOptOutMethod1Schema, type VasOptOutMethod1 } from "./vas-opt-out-method1.js";

export type VasOptOutPostRequestModel = {
  method?: VasOptOutMethod1;
  /** The reason for opting out from the VAS. */
  reason?: string;
};

export const vasOptOutPostRequestModelSchema: Schema<VasOptOutPostRequestModel> =
  s.object<VasOptOutPostRequestModel>({
    method: s.optional(s.lazy(() => vasOptOutMethod1Schema)),
    reason: s.optional(s.string()),
  });
