import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Provider13 = {
  /** A string used to identify the payment method brand being used to execute this transaction. */
  name?: string;
  /**
   * This field indicates the payment method brand product name being used to execute this
   * transaction
   */
  brandProductName?: string;
  /** The result given by the APM Provider */
  result?: string;
  /** The Message returned by the APM Provider */
  messsage?: string;
  status?: string;
  /** This is the provider's indicator for the action being taken */
  action?: string;
  actionReference?: string;
  /** This field indicates the transaction time given by the apm provider */
  timeCreatedReference?: string;
  redirectUrl?: string;
  payerReference?: string;
  payerName?: string;
  payerAccountReference?: string;
  sponsorReference?: string;
  acquirerReference?: string;
  /** Merchant Number returned by the apm provider for this transaction */
  merchantIdentifier?: string;
  /** The brand of the APM Provider */
  brand?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const provider13Properties: s.Shape<Provider13> = {
  name: s.optional(s.string()),
  brandProductName: s.optional(s.string()),
  result: s.optional(s.string()),
  messsage: s.optional(s.string()),
  status: s.optional(s.string()),
  action: s.optional(s.string()),
  actionReference: s.optional(s.string()),
  timeCreatedReference: s.optional(s.string()),
  redirectUrl: s.optional(s.string()),
  payerReference: s.optional(s.string()),
  payerName: s.optional(s.string()),
  payerAccountReference: s.optional(s.string()),
  sponsorReference: s.optional(s.string()),
  acquirerReference: s.optional(s.string()),
  merchantIdentifier: s.optional(s.string()),
  brand: s.optional(s.string()),
  _keysMap: {
    brandProductName: "brand_product_name",
    actionReference: "action_reference",
    timeCreatedReference: "time_created_reference",
    redirectUrl: "redirect_url",
    payerReference: "payer_reference",
    payerName: "payer_name",
    payerAccountReference: "payer_account_reference",
    sponsorReference: "sponsor_reference",
    acquirerReference: "acquirer_reference",
    merchantIdentifier: "merchant_identifier",
  },
};

export const provider13InternalSchema: Schema<Provider13> = s.object<Provider13>(provider13Properties, {
  additionalProperties: s.json(),
});

export const provider13Schema: Schema<Provider13> = s.lazySchema(() =>
  s.object<Provider13>(
    {
      ...provider13Properties,
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      brandProductName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      result: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      messsage: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      status: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      action: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      actionReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      timeCreatedReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      redirectUrl: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      payerReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      payerName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      payerAccountReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      sponsorReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      acquirerReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      merchantIdentifier: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      brand: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
