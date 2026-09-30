import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityCheckStage = {
  CreateEntity: "createEntity",
  Underwriting: "underwriting",
  Preboard: "preboard",
  Postboard: "postboard",
  Txn: "txn",
  TxnVolume: "txnVolume",
  Payout: "payout",
  PayoutVolume: "payoutVolume",
} as const;
export type EntityCheckStage = (typeof EntityCheckStage)[keyof typeof EntityCheckStage] | (string & {});

export const entityCheckStageSchema: EnumSchema<EntityCheckStage> =
  s.enumOf<EntityCheckStage>(EntityCheckStage);
