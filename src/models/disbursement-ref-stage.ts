import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DisbursementRefStage = {
  Create: "create",
  Approve: "approve",
  Split: "split",
  Failed: "failed",
} as const;
export type DisbursementRefStage =
  | (typeof DisbursementRefStage)[keyof typeof DisbursementRefStage]
  | (string & {});

export const disbursementRefStageSchema: EnumSchema<DisbursementRefStage> =
  s.enumOf<DisbursementRefStage>(DisbursementRefStage);
