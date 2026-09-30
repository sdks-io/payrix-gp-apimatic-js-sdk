import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assessmentsResponseSchema, type AssessmentsResponse } from "./assessments-response.js";
import {
  chargebackDocumentsResponseSchema,
  type ChargebackDocumentsResponse,
} from "./chargeback-documents-response.js";
import {
  chargebackMessageResponseSchema,
  type ChargebackMessageResponse,
} from "./chargeback-message-response.js";
import {
  chargebackPaymentMethod1Schema,
  type ChargebackPaymentMethod1,
} from "./chargeback-payment-method1.js";
import { chargebackPlatform1Schema, type ChargebackPlatform1 } from "./chargeback-platform1.js";
import { chargebackStatus1Schema, type ChargebackStatus1 } from "./chargeback-status1.js";
import {
  chargebackStatusesResponseSchema,
  type ChargebackStatusesResponse,
} from "./chargeback-statuses-response.js";
import { chargebacksActionable1Schema, type ChargebacksActionable1 } from "./chargebacks-actionable1.js";
import { chargebacksShadow1Schema, type ChargebacksShadow1 } from "./chargebacks-shadow1.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { cycle1Schema, type Cycle1 } from "./cycle1.js";
import { entriesResponseSchema, type EntriesResponse } from "./entries-response.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { merchant1Schema, type Merchant1 } from "./merchant1.js";
import { pendingEntriesResponseSchema, type PendingEntriesResponse } from "./pending-entries-response.js";
import { txn1Schema, type Txn1 } from "./txn1.js";

export type Chargeback = {
  /** The ID of this resource. */
  id?: string;
  /**
   * The date and time at which this resource was created. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  created?: string;
  /**
   * The date and time at which this resource was modified. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  modified?: string;
  creator?: Creator18;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  merchant?: Merchant1;
  txn?: Txn1;
  /** The Merchant's processing MID. */
  mid?: string;
  /** Description of the chargeback. */
  description?: string;
  /** The total amount of the Chargeback. */
  total?: number;
  /** The representedTotal for this Chargeback if it has been represented. */
  representedTotal?: number;
  cycle?: Cycle1;
  currency?: Record<string, unknown>;
  platform?: ChargebackPlatform1;
  paymentMethod?: ChargebackPaymentMethod1;
  /** The processing reference number for this Chargeback. */
  ref?: string;
  /** The reason description for this Chargeback. */
  reason?: string;
  /** The reason code for this Chargeback. */
  reasonCode?: string;
  /** The date when the Chargeback was issued. */
  issued?: number;
  /** The date when the Chargeback was received. */
  received?: number;
  /** The deadline to submit a reply for the Chargeback. */
  reply?: number;
  /** The issuing bank's reference number for this Chargeback. */
  bankRef?: string;
  /** Chargeback reference number. */
  chargebackRef?: string;
  status?: ChargebackStatus1;
  lastStatusChange?: ChargebackStatusesResponse;
  actionable?: ChargebacksActionable1;
  shadow?: ChargebacksShadow1;
  inactive?: Inactive1;
  frozen?: Frozen1;
  assessments?: AssessmentsResponse[];
  chargebackDocuments?: ChargebackDocumentsResponse[];
  chargebackMessages?: ChargebackMessageResponse[];
  chargebackStatuses?: ChargebackStatusesResponse[];
  entries?: EntriesResponse[];
  pendingEntry?: PendingEntriesResponse;
};

export const chargebackSchema: Schema<Chargeback> = s.object<Chargeback>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  merchant: s.optional(s.lazy(() => merchant1Schema)),
  txn: s.optional(s.lazy(() => txn1Schema)),
  mid: s.optional(s.string()),
  description: s.optional(s.string()),
  total: s.optional(s.number()),
  representedTotal: s.optional(s.number()),
  cycle: s.optional(s.lazy(() => cycle1Schema)),
  currency: s.optional(s.record(s.string(), s.unknown())),
  platform: s.optional(s.lazy(() => chargebackPlatform1Schema)),
  paymentMethod: s.optional(s.lazy(() => chargebackPaymentMethod1Schema)),
  ref: s.optional(s.string()),
  reason: s.optional(s.string()),
  reasonCode: s.optional(s.string()),
  issued: s.optional(s.number()),
  received: s.optional(s.number()),
  reply: s.optional(s.number()),
  bankRef: s.optional(s.string()),
  chargebackRef: s.optional(s.string()),
  status: s.optional(s.lazy(() => chargebackStatus1Schema)),
  lastStatusChange: s.optional(s.lazy(() => chargebackStatusesResponseSchema)),
  actionable: s.optional(s.lazy(() => chargebacksActionable1Schema)),
  shadow: s.optional(s.lazy(() => chargebacksShadow1Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  assessments: s.optional(s.array(s.lazy(() => assessmentsResponseSchema))),
  chargebackDocuments: s.optional(s.array(s.lazy(() => chargebackDocumentsResponseSchema))),
  chargebackMessages: s.optional(s.array(s.lazy(() => chargebackMessageResponseSchema))),
  chargebackStatuses: s.optional(s.array(s.lazy(() => chargebackStatusesResponseSchema))),
  entries: s.optional(s.array(s.lazy(() => entriesResponseSchema))),
  pendingEntry: s.optional(s.lazy(() => pendingEntriesResponseSchema)),
});
