import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { disbursement2Schema, type Disbursement2 } from "./disbursement2.js";
import { entity3Schema, type Entity3 } from "./entity3.js";
import { entriesResponseSchema, type EntriesResponse } from "./entries-response.js";
import { entryOriginsResponseSchema, type EntryOriginsResponse } from "./entry-origins-response.js";
import { fromentitySchema, type Fromentity } from "./fromentity.js";
import { fundingSchema, type Funding } from "./funding.js";
import { login2Schema, type Login2 } from "./login2.js";
import { onentitySchema, type Onentity } from "./onentity.js";
import { pendingEntriesResponseSchema, type PendingEntriesResponse } from "./pending-entries-response.js";

export type Adjustment = {
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
  login?: Login2;
  entity?: Entity3;
  fromentity?: Fromentity;
  onentity?: Onentity;
  disbursement?: Disbursement2;
  /**
   * The description of this Decision Rule. This field is stored as a text string and must be
   * between 0 and 100 characters long.
   */
  description?: string;
  /** The amount of the Adjustment, This field is specified in cents(up to three decimal points). */
  amount?: number;
  currency?: Record<string, unknown>;
  funding?: Funding;
  /**
   * The processor that issued this terminalTxnRef.
   *
   * <details> <summary>Valid Values</summary>
   *
   * - `APPLE` - **Apple Payment Processor**
   * - `ELAVON` - **ELAVON Payment Processor**
   * - `FIRSTDATA` - **FirstData Payment Processor**
   * - `GOOGLE` - **Google Payment Processor**
   * - `VANTIV` - **WorldPay / Vantiv eComm Payment Processor (VAP)**
   * - `VCORE` - **WorldPay / Vantiv Core Payment Processor**
   * - `WELLSACH` - **Wells Fargo Merchant Services Payment Processor (ACH)**
   * - `WELLSFARGO` - **Wells Fargo Merchant Services Payment Processor**
   * - `WFSINGLE` - **Wells Fargo Single Payment Processor**
   * - `WORLDPAY` - **WORLDPAY**
   * - `TDBANKCA` - **TDBANKCA** </details>
   */
  platform?: string;
  /** FBO account (For-Benefit-Of account) identifier. */
  fbo?: string;
  entry?: EntriesResponse;
  entryOrigins?: EntryOriginsResponse[];
  pendingEntry?: PendingEntriesResponse;
};

export const adjustmentSchema: Schema<Adjustment> = s.object<Adjustment>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.lazy(() => login2Schema)),
  entity: s.optional(s.lazy(() => entity3Schema)),
  fromentity: s.optional(s.lazy(() => fromentitySchema)),
  onentity: s.optional(s.lazy(() => onentitySchema)),
  disbursement: s.optional(s.lazy(() => disbursement2Schema)),
  description: s.optional(s.string()),
  amount: s.optional(s.number()),
  currency: s.optional(s.record(s.string(), s.unknown())),
  funding: s.optional(s.lazy(() => fundingSchema)),
  platform: s.optional(s.string()),
  fbo: s.optional(s.string()),
  entry: s.optional(s.lazy(() => entriesResponseSchema)),
  entryOrigins: s.optional(s.array(s.lazy(() => entryOriginsResponseSchema))),
  pendingEntry: s.optional(s.lazy(() => pendingEntriesResponseSchema)),
});
