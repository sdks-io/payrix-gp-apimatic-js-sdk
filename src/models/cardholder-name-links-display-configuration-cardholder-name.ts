import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** This field is used to hide or display the cardholder's full name on the HPP form. */
export const CardholderNameLinksDisplayConfigurationCardholderName = {
  Yes: "YES",
  No: "NO",
} as const;
export type CardholderNameLinksDisplayConfigurationCardholderName =
  | (typeof CardholderNameLinksDisplayConfigurationCardholderName)[keyof typeof CardholderNameLinksDisplayConfigurationCardholderName]
  | (string & {});

export const cardholderNameLinksDisplayConfigurationCardholderNameSchema: EnumSchema<CardholderNameLinksDisplayConfigurationCardholderName> =
  s.enumOf<CardholderNameLinksDisplayConfigurationCardholderName>(
    CardholderNameLinksDisplayConfigurationCardholderName,
  );
