import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Describes whether the transaction was processed in a face to face(CP) scenario or a Customer Not
 * Present (CNP) scenario.
 */
export const ChannelConsentsChannel = {
  Cp: "CP",
  Cnp: "CNP",
} as const;
export type ChannelConsentsChannel =
  | (typeof ChannelConsentsChannel)[keyof typeof ChannelConsentsChannel]
  | (string & {});

export const channelConsentsChannelSchema: EnumSchema<ChannelConsentsChannel> =
  s.enumOf<ChannelConsentsChannel>(ChannelConsentsChannel);
