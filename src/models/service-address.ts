import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ServiceAddress = {
  /**
   * The city where the cardholder received the services, only applicable if it is different from
   * the merchants business location.
   */
  city?: string;
  /**
   * The state or region where the cardholder received the services, only applicable if it is
   * different from the merchants business location. ISO 3166-2 minus the country code itself. For
   * example, US Illinois = IL, or in the case of GB counties Wiltshire = WI or Aberdeenshire = ABD
   */
  state?: string;
  /**
   * The country where the cardholder recieved the services. For example, if the transaction occured
   * in Canada it must be set to CA.The country in ISO-3166-1(alpha-2 code) format. Only applicable
   * if it is different from the merchants business location.
   */
  country?: string;
  /**
   * The postal code where the cardholder received the services, only applicable if it is different
   * from the merchants business location.
   */
  postalCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const serviceAddressProperties: s.Shape<ServiceAddress> = {
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  country: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  _keysMap: {
    postalCode: "postal_code",
  },
};

export const serviceAddressInternalSchema: Schema<ServiceAddress> = s.object<ServiceAddress>(
  serviceAddressProperties,
  { additionalProperties: s.json() },
);

export const serviceAddressSchema: Schema<ServiceAddress> = s.lazySchema(() =>
  s.object<ServiceAddress>(
    {
      ...serviceAddressProperties,
      city: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      state: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      country: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      postalCode: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
