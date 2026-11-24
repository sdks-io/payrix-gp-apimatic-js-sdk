import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PaymentProcessingStatistics1 = {
  /** The total monthly sales of the merchant. */
  totalMonthlySalesAmount?: string;
  /** The average sales amount of a merchant. */
  averageTicketSalesAmount?: string;
  /** The merchants highest ticket amount. */
  highestTicketSalesAmount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentProcessingStatistics1Schema: Schema<PaymentProcessingStatistics1> =
  s.object<PaymentProcessingStatistics1>(
    {
      totalMonthlySalesAmount: s.optional(s.string()),
      averageTicketSalesAmount: s.optional(s.string()),
      highestTicketSalesAmount: s.optional(s.string()),
      _keysMap: {
        totalMonthlySalesAmount: "total_monthly_sales_amount",
        averageTicketSalesAmount: "average_ticket_sales_amount",
        highestTicketSalesAmount: "highest_ticket_sales_amount",
      },
    },
    { additionalProperties: s.json() },
  );
