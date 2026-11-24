import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataDictionaryV1AccountsCapabilitiesSchema,
  type DataDictionaryV1AccountsCapabilities,
} from "./data-dictionary-v1-accounts-capabilities.js";
import {
  dataDictionaryV1MerchantStatusChangeReasonSchema,
  type DataDictionaryV1MerchantStatusChangeReason,
} from "./data-dictionary-v1-merchant-status-change-reason.js";
import { notificationsInternalSchema, notificationsSchema, type Notifications } from "./notifications.js";
import { processingLimitsSchema, type ProcessingLimits } from "./processing-limits.js";

export type AccountsSingleUpdateCapabilities = {
  capabilities?: DataDictionaryV1AccountsCapabilities[];
  processingLimits?: ProcessingLimits;
  /**
   * This is the reason or nature of the status.
   *   * ACTIVE - The merchant is in good standing.
   *   * CLOSED_BY_MERCHANT - The merchant has been closed at the request of the merchant or
   *     partner.
   *   * CLOSED_BY_RISK - The merchant has been closed by a Global Payments Risk Team.
   *   * APPLICATION_DENIED - The merchant application has been denied by the Global Payments Risk
   *     Team.
   *   * PENDING_REVIEW - The merchant application is pending review from the Global Payments Risk
   *     Team.
   *   * PENDING_MERCHANT_CONSENT - The merchant must agree to terms and conditions prior to
   *     accepting payments.
   *   * PENDING_IDENTITY_VALIDATION - The applicant's identity and/or business documents must be
   *     reviewed by the Global Payments Risk Team.
   *   * PENDING_IDENTITY_VALIDATION_AND_PAYMENT - The applicant's identity and/or business
   *     documents must be reviewed by the Global Payments Risk Team and submit payment.
   *   * PENDING_PAYMENT - The merchant must submit payment.
   *   * UNKNOWN_STATUS - Contact your relationship manager for more details.
   *   * REMOVE_PARTNERSHIP - The partner has requested to disassociate the merchant from the
   *     partner program.
   */
  statusChangeReason?: DataDictionaryV1MerchantStatusChangeReason;
  notifications?: Notifications;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const accountsSingleUpdateCapabilitiesProperties: s.Shape<AccountsSingleUpdateCapabilities> = {
  capabilities: s.optional(s.array(s.lazy(() => dataDictionaryV1AccountsCapabilitiesSchema))),
  processingLimits: s.optional(s.lazy(() => processingLimitsSchema)),
  statusChangeReason: s.optional(s.lazy(() => dataDictionaryV1MerchantStatusChangeReasonSchema)),
  notifications: s.optional(s.lazy(() => notificationsInternalSchema)),
  _keysMap: {
    processingLimits: "processing_limits",
    statusChangeReason: "status_change_reason",
  },
};

export const accountsSingleUpdateCapabilitiesInternalSchema: Schema<AccountsSingleUpdateCapabilities> =
  s.object<AccountsSingleUpdateCapabilities>(accountsSingleUpdateCapabilitiesProperties, {
    additionalProperties: s.json(),
  });

export const accountsSingleUpdateCapabilitiesSchema: Schema<AccountsSingleUpdateCapabilities> = s.lazySchema(
  () =>
    s.object<AccountsSingleUpdateCapabilities>(
      {
        ...accountsSingleUpdateCapabilitiesProperties,
        notifications: s.optional(s.lazy(() => notificationsSchema)),
      },
      { additionalProperties: s.json() },
    ),
);
