import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { noteType1Schema, type NoteType1 } from "./note-type1.js";

export type NotesPutRequest = {
  /** The identifier of the Login that owns this notes resource. */
  login?: string;
  /**
   * The identifier of the Txn that relates to this notes resource, Only one of txn, hold, entity,
   * terminalTxn may be set.
   */
  txn?: string;
  /**
   * The identifier of the TerminalTxn that relates to this notes resource, Only one of txn, hold,
   * entity, terminalTxn may be set.
   */
  terminalTxn?: string;
  /**
   * The identifier of the Hold that relates to this notes resource, Only one of txn, hold, entity,
   * terminalTxn may be set.
   */
  hold?: string;
  /**
   * The identifier of the Entity that relates to this notes resource, Only one of txn, hold,
   * entity, terminalTxn may be set.
   */
  entity?: string;
  type?: NoteType1;
  /**
   * Free-form text for adding a message along with the type , required in case of type value is in
   * one of these - amexSales, businessSales, consumerSales, deliverySchedule,
   * immediateDeliveryPercent, sevenDayDeliveryPercent, fourteenDayDeliveryPercent,
   * thirtyDayDeliveryPercent, cardPresentSales, motoSales, ecommerceSales, siteVisit, goodsSold,
   * authorizationFlatFee, capturePercentFee, captureFlatFee else null
   */
  data?: string;
  /** A Message/Note regarding this notes resource. This field is stored as a text string. */
  note?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const notesPutRequestSchema: Schema<NotesPutRequest> = s.object<NotesPutRequest>({
  login: s.optional(s.string()),
  txn: s.optional(s.string()),
  terminalTxn: s.optional(s.string()),
  hold: s.optional(s.string()),
  entity: s.optional(s.string()),
  type: s.optional(s.lazy(() => noteType1Schema)),
  data: s.optional(s.string()),
  note: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});
