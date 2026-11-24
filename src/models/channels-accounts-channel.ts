import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChannelsAccountsChannel = {
  Cp: "CP",
  Cnp: "CNP",
} as const;
export type ChannelsAccountsChannel =
  | (typeof ChannelsAccountsChannel)[keyof typeof ChannelsAccountsChannel]
  | (string & {});

export const channelsAccountsChannelSchema: EnumSchema<ChannelsAccountsChannel> =
  s.enumOf<ChannelsAccountsChannel>(ChannelsAccountsChannel);
