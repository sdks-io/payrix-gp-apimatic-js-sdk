import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Configurable data to be used to enhance security. */
export type TxnSessionsConfigurations = {
  /**
   * duration refers to How many minutes this key should live (automated voided when tried to use
   * after expired).
   */
  duration?: number;
  /** maxTimesApproved refers to how many approved transactions related it can be used. */
  maxTimesApproved?: number;
  /** maxTimesUse refers to how many times we can make request with this key. */
  maxTimesUse?: number;
};

export const txnSessionsConfigurationsSchema: Schema<TxnSessionsConfigurations> =
  s.object<TxnSessionsConfigurations>({
    duration: s.optional(s.number()),
    maxTimesApproved: s.optional(s.number()),
    maxTimesUse: s.optional(s.number()),
  });
