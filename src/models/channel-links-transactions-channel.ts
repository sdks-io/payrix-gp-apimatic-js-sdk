import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Describes whether the transaction was processed in a face to face(CP) scenario or a Customer Not
 * Present (CNP) scenario. * CP - A Customer Present transaction is when the payer and the merchant
 * are in direct face to face contact when exchanging payment method information to fulfill a
 * transaction. e.g. in a store and paying at the counter that is attended by a clerk. * CNP - A
 * Customer NOT Present transaction is when the payer and the merchant are not together when
 * exchanging payment method information to fulfill a transaction. e.g. a transaction executed from
 * a merchant's website or over the phone
 */
export const ChannelLinksTransactionsChannel = {
  Cp: "CP",
  Cnp: "CNP",
} as const;
export type ChannelLinksTransactionsChannel =
  | (typeof ChannelLinksTransactionsChannel)[keyof typeof ChannelLinksTransactionsChannel]
  | (string & {});

export const channelLinksTransactionsChannelSchema: EnumSchema<ChannelLinksTransactionsChannel> =
  s.enumOf<ChannelLinksTransactionsChannel>(ChannelLinksTransactionsChannel);
