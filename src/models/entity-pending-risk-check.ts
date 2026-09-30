import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityPendingRiskCheck = {
  Pending: "pending",
  Successful: "successful",
  Failed: "failed",
  Manual: "manual",
} as const;
export type EntityPendingRiskCheck =
  | (typeof EntityPendingRiskCheck)[keyof typeof EntityPendingRiskCheck]
  | (string & {});

export const entityPendingRiskCheckSchema: EnumSchema<EntityPendingRiskCheck> =
  s.enumOf<EntityPendingRiskCheck>(EntityPendingRiskCheck);
