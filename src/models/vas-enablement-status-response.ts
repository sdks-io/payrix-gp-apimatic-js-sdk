import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status11Schema, type Status11 } from "./status11.js";

export type VasEnablementStatusResponse = {
  status?: Status11;
};

export const vasEnablementStatusResponseSchema: Schema<VasEnablementStatusResponse> =
  s.object<VasEnablementStatusResponse>({
    status: s.optional(s.lazy(() => status11Schema)),
  });
