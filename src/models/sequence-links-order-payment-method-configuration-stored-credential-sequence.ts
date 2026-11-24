import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the order of this transaction in the sequence of a planned, repeating transaction
 * processing model.
 */
export const SequenceLinksOrderPaymentMethodConfigurationStoredCredentialSequence = {
  First: "FIRST",
  Subsequent: "SUBSEQUENT",
} as const;
export type SequenceLinksOrderPaymentMethodConfigurationStoredCredentialSequence =
  | (typeof SequenceLinksOrderPaymentMethodConfigurationStoredCredentialSequence)[keyof typeof SequenceLinksOrderPaymentMethodConfigurationStoredCredentialSequence]
  | (string & {});

export const sequenceLinksOrderPaymentMethodConfigurationStoredCredentialSequenceSchema: EnumSchema<SequenceLinksOrderPaymentMethodConfigurationStoredCredentialSequence> =
  s.enumOf<SequenceLinksOrderPaymentMethodConfigurationStoredCredentialSequence>(
    SequenceLinksOrderPaymentMethodConfigurationStoredCredentialSequence,
  );
