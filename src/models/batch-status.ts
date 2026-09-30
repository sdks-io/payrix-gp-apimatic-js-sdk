import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BatchStatus = {
  Open: "open",
  Closed: "closed",
} as const;
export type BatchStatus = (typeof BatchStatus)[keyof typeof BatchStatus] | (string & {});

export const batchStatusSchema: EnumSchema<BatchStatus> = s.enumOf<BatchStatus>(BatchStatus);
