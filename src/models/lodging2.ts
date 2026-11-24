import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  lodgingChargeItemInternalSchema,
  lodgingChargeItemSchema,
  type LodgingChargeItem,
} from "./lodging-charge-item.js";

export type Lodging2 = {
  /**
   * An alphanumeric reference to identify the booking for a lodging stay. Please note that special
   * characters are not allowed.
   */
  bookingReference?: string;
  /**
   * The total number of days of the lodging stay. For authorization requests this value indicates
   * the number of days covered by the advance payment. For incremental authorization requests this
   * value indicates the number of additional days added to the auto rental or hotel stay. Please
   * note the following conditions for this field: *This is mandatory for all US Visa CPS Hotel or
   * Auto Rental transactions *This is optional for all US Visa CPS Hotel or Auto Rental incremental
   * authorizations. *If checkin / checkout is the same day send value as 1
   */
  durationDays?: number;
  /** The total amount of tax charges for the room. */
  roomTaxAmount?: string;
  /** The check in date for a lodging stay. */
  dateCheckedIn?: string;
  /** The check out date for a lodging stay. */
  dateCheckedOut?: string;
  /** The amount charged for one nights lodging. */
  dailyRateAmount?: Date;
  /** The name of the lodging establishment. */
  establishmentName?: string;
  /** The time of the day of the check in. */
  timeCheckedIn?: Date;
  /** The time of the day of the check out. */
  timeCheckedOut?: Date;
  chargeItems?: LodgingChargeItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const lodging2Properties: s.Shape<Lodging2> = {
  bookingReference: s.optional(s.string()),
  durationDays: s.optional(s.float64()),
  roomTaxAmount: s.optional(s.string()),
  dateCheckedIn: s.optional(s.string()),
  dateCheckedOut: s.optional(s.string()),
  dailyRateAmount: s.optional(s.dateTime()),
  establishmentName: s.optional(s.string()),
  timeCheckedIn: s.optional(s.dateTime()),
  timeCheckedOut: s.optional(s.dateTime()),
  chargeItems: s.optional(s.array(s.lazy(() => lodgingChargeItemInternalSchema))),
  _keysMap: {
    bookingReference: "booking_reference",
    durationDays: "duration_days",
    roomTaxAmount: "room_tax_amount",
    dateCheckedIn: "date_checked_in",
    dateCheckedOut: "date_checked_out",
    dailyRateAmount: "daily_rate_amount",
    establishmentName: "establishment_name",
    timeCheckedIn: "time_checked_in",
    timeCheckedOut: "time_checked_out",
    chargeItems: "charge_items",
  },
};

export const lodging2InternalSchema: Schema<Lodging2> = s.object<Lodging2>(lodging2Properties, {
  additionalProperties: s.json(),
});

export const lodging2Schema: Schema<Lodging2> = s.lazySchema(() =>
  s.object<Lodging2>(
    {
      ...lodging2Properties,
      bookingReference: s.optional(s.string().check(s.minLength(1), s.maxLength(25))),
      durationDays: s.optional(s.float64().check(s.gte(1), s.lte(99))),
      roomTaxAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      dateCheckedIn: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      dateCheckedOut: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      establishmentName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      chargeItems: s.optional(s.array(s.lazy(() => lodgingChargeItemSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
