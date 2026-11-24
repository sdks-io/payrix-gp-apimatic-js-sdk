import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  CardholderNameLinksDisplayConfigurationCardholderName,
  cardholderNameLinksDisplayConfigurationCardholderNameSchema,
} from "./cardholder-name-links-display-configuration-cardholder-name.js";
import {
  CvvLinksDisplayConfigurationCvv,
  cvvLinksDisplayConfigurationCvvSchema,
} from "./cvv-links-display-configuration-cvv.js";

export type DisplayConfiguration = {
  /**
   * This field must contain the domain of the application hosting the iFrame or WebView. This will
   * tell the HPP to post back the height and width any time it changes, for example if an input
   * warning is displayed.
   */
  iframeDimensionsDomain?: string;
  /**
   * This field must contain the domain of the application hosting the iFrame or WebView. This will
   * tell the HPP to post back the transaction response to the parent frame or window. The response
   * is posted back as a name/value pair JSON string with the values Base64 encoded. (string)
   */
  iframeResponseDomain?: string;
  /**
   * This field is used to hide or display the cardholder's full name on the HPP form.
   *
   * @default CardholderNameLinksDisplayConfigurationCardholderName.Yes
   */
  cardholderName?: CardholderNameLinksDisplayConfigurationCardholderName;
  /**
   * This field is used to ask whether or not the cardholder's CVV on the HPP form. By default this
   * is a YES value
   *
   * @default CvvLinksDisplayConfigurationCvv.Yes
   */
  cvv?: CvvLinksDisplayConfigurationCvv;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const displayConfigurationSchema: Schema<DisplayConfiguration> = s.object<DisplayConfiguration>(
  {
    iframeDimensionsDomain: s.optional(s.string()),
    iframeResponseDomain: s.optional(s.string()),
    cardholderName: s.defaulted(
      cardholderNameLinksDisplayConfigurationCardholderNameSchema,
      CardholderNameLinksDisplayConfigurationCardholderName.Yes,
    ),
    cvv: s.defaulted(cvvLinksDisplayConfigurationCvvSchema, CvvLinksDisplayConfigurationCvv.Yes),
    _keysMap: {
      iframeDimensionsDomain: "iframe_dimensions_domain",
      iframeResponseDomain: "iframe_response_domain",
      cardholderName: "cardholder_name",
    },
  },
  { additionalProperties: s.json() },
);
