import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  accountTypeConsentsPayerAccountTypeSchema,
  type AccountTypeConsentsPayerAccountType,
} from "./account-type-consents-payer-account-type.js";
import { mobilePhone1InternalSchema, mobilePhone1Schema, type MobilePhone1 } from "./mobile-phone1.js";

export type Payer2 = {
  /** The first name of the Payer */
  firstName?: string;
  /** The last name of the Payer */
  lastName?: string;
  /** Email addresses of the payer, */
  email?: string;
  mobilePhone?: MobilePhone1;
  /**
   * The type of user within provider system.
   * * `GUEST`' - Payer chose to proceed as guest without creating profile.
   * * `REGISTERED` - Payer is a registered user within provider system.
   */
  accountType?: AccountTypeConsentsPayerAccountType;
  /** Age of the Payer. */
  age?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const payer2Properties: s.Shape<Payer2> = {
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  email: s.optional(s.string()),
  mobilePhone: s.optional(s.lazy(() => mobilePhone1InternalSchema)),
  accountType: s.optional(s.lazy(() => accountTypeConsentsPayerAccountTypeSchema)),
  age: s.optional(s.float64()),
  _keysMap: {
    firstName: "first_name",
    lastName: "last_name",
    mobilePhone: "mobile_phone",
    accountType: "account_type",
  },
};

export const payer2InternalSchema: Schema<Payer2> = s.object<Payer2>(payer2Properties, {
  additionalProperties: s.json(),
});

export const payer2Schema: Schema<Payer2> = s.lazySchema(() =>
  s.object<Payer2>(
    {
      ...payer2Properties,
      firstName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      lastName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      email: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      mobilePhone: s.optional(s.lazy(() => mobilePhone1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
