import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This field is used to ask whether or not the cardholder's CVV on the HPP form. By default this is
 * a YES value
 */
export const CvvLinksDisplayConfigurationCvv = {
  Yes: "YES",
  No: "NO",
} as const;
export type CvvLinksDisplayConfigurationCvv =
  | (typeof CvvLinksDisplayConfigurationCvv)[keyof typeof CvvLinksDisplayConfigurationCvv]
  | (string & {});

export const cvvLinksDisplayConfigurationCvvSchema: EnumSchema<CvvLinksDisplayConfigurationCvv> =
  s.enumOf<CvvLinksDisplayConfigurationCvv>(CvvLinksDisplayConfigurationCvv);
