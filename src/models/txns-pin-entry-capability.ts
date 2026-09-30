import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TxnsPinEntryCapability = {
  Unknown: "unknown",
  Capable: "capable",
  NotCapable: "notCapable",
  PinPadDown: "pinPadDown",
} as const;
export type TxnsPinEntryCapability =
  | (typeof TxnsPinEntryCapability)[keyof typeof TxnsPinEntryCapability]
  | (string & {});

export const txnsPinEntryCapabilitySchema: EnumSchema<TxnsPinEntryCapability> =
  s.enumOf<TxnsPinEntryCapability>(TxnsPinEntryCapability);
