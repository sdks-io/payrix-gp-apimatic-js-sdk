import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the delivery method of the link notification */
export const MessageTypeLinksMessageType = {
  Email: "EMAIL",
  Sms: "SMS",
  EmailAndSms: "EMAIL_AND_SMS",
} as const;
export type MessageTypeLinksMessageType =
  | (typeof MessageTypeLinksMessageType)[keyof typeof MessageTypeLinksMessageType]
  | (string & {});

export const messageTypeLinksMessageTypeSchema: EnumSchema<MessageTypeLinksMessageType> =
  s.enumOf<MessageTypeLinksMessageType>(MessageTypeLinksMessageType);
