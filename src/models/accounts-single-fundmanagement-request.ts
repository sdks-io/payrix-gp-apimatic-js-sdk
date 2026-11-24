import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cardReplacementReasonAccountsCardReplacmentReason5Schema,
  type CardReplacementReasonAccountsCardReplacmentReason5,
} from "./card-replacement-reason-accounts-card-replacment-reason5.js";
import { notificationsInternalSchema, notificationsSchema, type Notifications } from "./notifications.js";
import { payerInternalSchema, payerSchema, type Payer } from "./payer.js";

export type AccountsSingleFundmanagementRequest = {
  payer?: Payer;
  /**
   * Indicates the reason why a Prepaied card needs to be replaced.
   * * `LOST` - The card has either been lost or stolen. This will immediately disable the
   *   currently-assigned card and issue a new card with a new number. The card PIN number will be
   *   mailed to the account's shipping address.
   */
  cardReplacementReason?: CardReplacementReasonAccountsCardReplacmentReason5;
  notifications?: Notifications;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const accountsSingleFundmanagementRequestProperties: s.Shape<AccountsSingleFundmanagementRequest> = {
  payer: s.optional(s.lazy(() => payerInternalSchema)),
  cardReplacementReason: s.optional(s.lazy(() => cardReplacementReasonAccountsCardReplacmentReason5Schema)),
  notifications: s.optional(s.lazy(() => notificationsInternalSchema)),
  _keysMap: {
    cardReplacementReason: "card_replacement_reason",
  },
};

export const accountsSingleFundmanagementRequestInternalSchema: Schema<AccountsSingleFundmanagementRequest> =
  s.object<AccountsSingleFundmanagementRequest>(accountsSingleFundmanagementRequestProperties, {
    additionalProperties: s.json(),
  });

export const accountsSingleFundmanagementRequestSchema: Schema<AccountsSingleFundmanagementRequest> =
  s.lazySchema(() =>
    s.object<AccountsSingleFundmanagementRequest>(
      {
        ...accountsSingleFundmanagementRequestProperties,
        payer: s.optional(s.lazy(() => payerSchema)),
        notifications: s.optional(s.lazy(() => notificationsSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
