import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the PIN entry capability of the device, which can be unknown, capable, notCapable, or
 * pinPadDown.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `unknown` - **Unknown PIN Entry Capability.**
 * - `capable` - **Terminal can accept PINs.**
 * - `notCapable` - **Terminal cannot accept entry of PINs.**
 * - `pinPadDown` - **Terminal PIN Pad is down.**
 *
 * </details>
 */
export const TxnsPinEntryCapability1 = {
  Unknown: "unknown",
  Capable: "capable",
  NotCapable: "notCapable",
  PinPadDown: "pinPadDown",
} as const;
export type TxnsPinEntryCapability1 =
  | (typeof TxnsPinEntryCapability1)[keyof typeof TxnsPinEntryCapability1]
  | (string & {});

export const txnsPinEntryCapability1Schema: EnumSchema<TxnsPinEntryCapability1> =
  s.enumOf<TxnsPinEntryCapability1>(TxnsPinEntryCapability1);
