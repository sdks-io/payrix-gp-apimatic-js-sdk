import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { notifications7InternalSchema, notifications7Schema, type Notifications7 } from "./notifications7.js";

/** Request body used to create a File Processing resource and obtain a signed upload URL. */
export type CreateUrlRequest2 = {
  /** A meaningful label that better identifies the account. */
  accountName: string;
  /**
   * Indicates to Global Payments where the merchant wants to receive notifications of certain
   * events that occur on the platform.
   */
  notifications: Notifications7;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createUrlRequest2Properties: s.Shape<CreateUrlRequest2> = {
  accountName: s.string(),
  notifications: notifications7InternalSchema,
  _keysMap: {
    accountName: "account_name",
  },
};

export const createUrlRequest2InternalSchema: Schema<CreateUrlRequest2> = s.object<CreateUrlRequest2>(
  createUrlRequest2Properties,
  { additionalProperties: s.json() },
);

export const createUrlRequest2Schema: Schema<CreateUrlRequest2> = s.lazySchema(() =>
  s.object<CreateUrlRequest2>(
    {
      ...createUrlRequest2Properties,
      notifications: notifications7Schema,
    },
    { additionalProperties: s.json() },
  ),
);
