import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  accountAgeAuthenticationsPayerAccountAgeSchema,
  type AccountAgeAuthenticationsPayerAccountAge,
} from "./account-age-authentications-payer-account-age.js";
import {
  accountChangeIndicatorAuthenticationsPayerAccountChangeIndicatorSchema,
  type AccountChangeIndicatorAuthenticationsPayerAccountChangeIndicator,
} from "./account-change-indicator-authentications-payer-account-change-indicator.js";
import { acctInfoSchema, type AcctInfo } from "./acct-info.js";
import {
  billingAddress1InternalSchema,
  billingAddress1Schema,
  type BillingAddress1,
} from "./billing-address1.js";
import { homePhoneInternalSchema, homePhoneSchema, type HomePhone } from "./home-phone.js";
import { mobilePhoneInternalSchema, mobilePhoneSchema, type MobilePhone } from "./mobile-phone.js";
import {
  paymentAccountAgeIndicatorAuthenticationsPayerPaymentAccountAgeIndicatorSchema,
  type PaymentAccountAgeIndicatorAuthenticationsPayerPaymentAccountAgeIndicator,
} from "./payment-account-age-indicator-authentications-payer-payment-account-age-indicator.js";
import {
  suspiciousAccountActivityAuthenticationsPayerSuspiciousAccountActivitySchema,
  type SuspiciousAccountActivityAuthenticationsPayerSuspiciousAccountActivity,
} from "./suspicious-account-activity-authentications-payer-suspicious-account-activity.js";
import { workPhoneInternalSchema, workPhoneSchema, type WorkPhone } from "./work-phone.js";

export type Payer1 = {
  /** The full name of the payer. */
  name?: string;
  /** An integrator's reference to the payer. */
  reference?: string;
  /**
   * The date of birth of the payer Note for European merchants: This field is recommended for SCA.
   */
  dateOfBirth?: string;
  /**
   * Length of time the customer has had an account with the merchant. Note for European merchants:
   * This field is recommended for SCA.
   * * `NO_ACCOUNT`
   * * `THIS_TRANSACTION`
   * * `LESS_THAN_THIRTY_DAYS`
   * * `THIRTY_TO_SIXTY_DAYS`
   * * `MORE_THAN_SIXTY_DAYS`
   */
  accountAge?: AccountAgeAuthenticationsPayerAccountAge;
  /** Date the customer opened their account with the merchant. */
  accountCreationDate?: string;
  /**
   * Date the customer's account with the merchant was last changed. For example, if the billing or
   * shipping details changed, new payment account or new users added.
   */
  accountChangeDate?: string;
  /**
   * Length of time since the account has changed.
   * * `THIS_TRANSACTION`
   * * `LESS_THAN_THIRTY_DAYS`
   * * `THIRTY_TO_SIXTY_DAYS`
   * * `MORE_THAN_SIXTY_DAYS`
   */
  accountChangeIndicator?: AccountChangeIndicatorAuthenticationsPayerAccountChangeIndicator;
  /** Date the customer's account with the merchant had a password change or account reset. */
  accountPasswordChangeDate?: string;
  /**
   * Length of time since the account has changed.
   * * `THIS_TRANSACTION`
   * * `LESS_THAN_THIRTY_DAYS`
   * * `THIRTY_TO_SIXTY_DAYS`
   * * `MORE_THAN_SIXTY_DAYS`
   */
  accountPasswordChangeIndicator?: AccountChangeIndicatorAuthenticationsPayerAccountChangeIndicator;
  /** The email of the Payer */
  email?: string;
  /**
   * The billing address of the payer. Note for European merchants- All billing fields are
   * recommended for SCA.
   */
  billingAddress?: BillingAddress1;
  homePhone?: HomePhone;
  workPhone?: WorkPhone;
  mobilePhone?: MobilePhone;
  /** Date the payment account was associated with the customer's account. */
  paymentAccountCreationDate?: string;
  /**
   * Length of time the customer has had an account with the merchant.
   * * `NO_ACCOUNT`
   * * `THIS_TRANSACTION`
   * * `LESS_THAN_THIRTY_DAYS`
   * * `THIRTY_TO_SIXTY_DAYS`
   * * `MORE_THAN_SIXTY_DAYS`
   */
  paymentAccountAgeIndicator?: PaymentAccountAgeIndicatorAuthenticationsPayerPaymentAccountAgeIndicator;
  /**
   * Indicates whether there has been suspicious activity on this customer's account, including
   * fraudulent activity. Note for European merchants: This field is recommended for SCA.
   * * `SUSPICIOUS_ACTIVITY`
   * * `NO_SUSPICIOUS_ACTIVITY`
   */
  suspiciousAccountActivity?: SuspiciousAccountActivityAuthenticationsPayerSuspiciousAccountActivity;
  /**
   * Number of purchases with this customer's account during the previous six months. Note for
   * European merchants: This field is recommended for SCA.
   */
  purchasesLast6MonthsCount?: number;
  /**
   * Number of transactions (successful and abandoned) for this customer account with the merchant
   * in the previous 24 hours. Note for European merchants: This field is recommended for SCA.
   */
  transactionsLast24HoursCount?: number;
  /** Date the shipping address was first used with the merchant. */
  shippingAddressTimeCreatedReference?: string;
  acctInfo?: AcctInfo;
  /**
   * Number of transactions (successful and abandoned) for this customer account with the merchant
   * in the previous year.
   */
  transactionLastYearCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const payer1Properties: s.Shape<Payer1> = {
  name: s.optional(s.string()),
  reference: s.optional(s.string()),
  dateOfBirth: s.optional(s.string()),
  accountAge: s.optional(s.lazy(() => accountAgeAuthenticationsPayerAccountAgeSchema)),
  accountCreationDate: s.optional(s.string()),
  accountChangeDate: s.optional(s.string()),
  accountChangeIndicator: s.optional(
    s.lazy(() => accountChangeIndicatorAuthenticationsPayerAccountChangeIndicatorSchema),
  ),
  accountPasswordChangeDate: s.optional(s.string()),
  accountPasswordChangeIndicator: s.optional(
    s.lazy(() => accountChangeIndicatorAuthenticationsPayerAccountChangeIndicatorSchema),
  ),
  email: s.optional(s.string()),
  billingAddress: s.optional(s.lazy(() => billingAddress1InternalSchema)),
  homePhone: s.optional(s.lazy(() => homePhoneInternalSchema)),
  workPhone: s.optional(s.lazy(() => workPhoneInternalSchema)),
  mobilePhone: s.optional(s.lazy(() => mobilePhoneInternalSchema)),
  paymentAccountCreationDate: s.optional(s.string()),
  paymentAccountAgeIndicator: s.optional(
    s.lazy(() => paymentAccountAgeIndicatorAuthenticationsPayerPaymentAccountAgeIndicatorSchema),
  ),
  suspiciousAccountActivity: s.optional(
    s.lazy(() => suspiciousAccountActivityAuthenticationsPayerSuspiciousAccountActivitySchema),
  ),
  purchasesLast6MonthsCount: s.optional(s.float64()),
  transactionsLast24HoursCount: s.optional(s.float64()),
  shippingAddressTimeCreatedReference: s.optional(s.string()),
  acctInfo: s.optional(s.lazy(() => acctInfoSchema)),
  transactionLastYearCount: s.optional(s.float64()),
  _keysMap: {
    dateOfBirth: "date_of_birth",
    accountAge: "account_age",
    accountCreationDate: "account_creation_date",
    accountChangeDate: "account_change_date",
    accountChangeIndicator: "account_change_indicator",
    accountPasswordChangeDate: "account_password_change_date",
    accountPasswordChangeIndicator: "account_password_change_indicator",
    billingAddress: "billing_address",
    homePhone: "home_phone",
    workPhone: "work_phone",
    mobilePhone: "mobile_phone",
    paymentAccountCreationDate: "payment_account_creation_date",
    paymentAccountAgeIndicator: "payment_account_age_indicator",
    suspiciousAccountActivity: "suspicious_account_activity",
    purchasesLast6MonthsCount: "purchases_last_6months_count",
    transactionsLast24HoursCount: "transactions_last_24hours_count",
    shippingAddressTimeCreatedReference: "shipping_address_time_created_reference",
    acctInfo: "acct_info",
    transactionLastYearCount: "transaction_last_year_count",
  },
};

export const payer1InternalSchema: Schema<Payer1> = s.object<Payer1>(payer1Properties, {
  additionalProperties: s.json(),
});

export const payer1Schema: Schema<Payer1> = s.lazySchema(() =>
  s.object<Payer1>(
    {
      ...payer1Properties,
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      email: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      billingAddress: s.optional(s.lazy(() => billingAddress1Schema)),
      homePhone: s.optional(s.lazy(() => homePhoneSchema)),
      workPhone: s.optional(s.lazy(() => workPhoneSchema)),
      mobilePhone: s.optional(s.lazy(() => mobilePhoneSchema)),
      transactionLastYearCount: s.optional(s.float64().check(s.gte(1), s.lte(50))),
    },
    { additionalProperties: s.json() },
  ),
);
