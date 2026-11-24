import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Transfer = {
  /**
   * A unique identifier that is used to identify and reference an instance of this resource. This
   * id is used when actioning or referencing a specific account. Begins with the three letters,
   * TRA.
   */
  accountId?: string;
  /** The account identifier for the account that received a transfer. */
  recipientAccountId?: string;
  /**
   * A label on the GP API platform that further identifies the instance of the resource. This is
   * intended to be unique but GP API does not polic its uniqueness.
   */
  reference?: string;
  /**
   * The amount that is being transferred. Represented in the lowest denomination of the currency
   * (i.e. $100.00 = 10000
   */
  amount?: string;
  /** The description of the transfer */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transferProperties: s.Shape<Transfer> = {
  accountId: s.optional(s.string()),
  recipientAccountId: s.optional(s.string()),
  reference: s.optional(s.string()),
  amount: s.optional(s.string()),
  description: s.optional(s.string()),
  _keysMap: {
    accountId: "account_id",
    recipientAccountId: "recipient_account_id",
  },
};

export const transferInternalSchema: Schema<Transfer> = s.object<Transfer>(transferProperties, {
  additionalProperties: s.json(),
});

export const transferSchema: Schema<Transfer> = s.lazySchema(() =>
  s.object<Transfer>(
    {
      ...transferProperties,
      accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      recipientAccountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      description: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
