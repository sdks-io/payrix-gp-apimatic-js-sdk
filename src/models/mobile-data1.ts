import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MobileData1 = {
  /**
   * Contains the following data necessary to present the challenge to the customer: ACS URL ACS
   * Ephemeral Public Key (QT) SDK Ephemeral Public Key (QC)
   */
  acsSignedContent?: string;
  /** Identifies the ACS UI Template that the ACS will first present to the consumer. */
  acsRenderingType?: string;
  /**
   * The ACS interface that the challenge will present to the cardholder. Possible values: NATIVE
   * HTML
   */
  acsInterface?: string;
  /**
   * Identifies the UI Template format that the ACS first presents to the consumer. Possible values
   * TEXT SINGLE_SELECT MULTI_SELECT OOB HTML_OTHER
   */
  acsUiTemplate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mobileData1Schema: Schema<MobileData1> = s.object<MobileData1>(
  {
    acsSignedContent: s.optional(s.string()),
    acsRenderingType: s.optional(s.string()),
    acsInterface: s.optional(s.string()),
    acsUiTemplate: s.optional(s.string()),
    _keysMap: {
      acsSignedContent: "acs_signed_content",
      acsRenderingType: "acs_rendering_type",
      acsInterface: "acs_interface",
      acsUiTemplate: "acs_ui_template",
    },
  },
  { additionalProperties: s.json() },
);
