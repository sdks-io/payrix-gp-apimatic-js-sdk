import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DecisionsTarget = {
  Activation: "activation",
  Auth: "auth",
  Postauth: "postauth",
  Capture: "capture",
  Refund: "refund",
  CreateEntity: "createEntity",
  Underwriting: "underwriting",
  Preboard: "preboard",
  Postboard: "postboard",
  Txn: "txn",
  TxnVolume: "txnVolume",
  Payout: "payout",
  PayoutVolume: "payoutVolume",
} as const;
export type DecisionsTarget = (typeof DecisionsTarget)[keyof typeof DecisionsTarget] | (string & {});

export const decisionsTargetSchema: EnumSchema<DecisionsTarget> = s.enumOf<DecisionsTarget>(DecisionsTarget);
