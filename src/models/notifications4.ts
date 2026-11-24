import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Notifications4 = {
  /**
   * The merchant URL that will receive the notification when the customer has completed the
   * authentication challenge process. Please note that local URLs are not allowed. The URL provided
   * has to be valid
   */
  challengeReturnUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const notifications4Properties: s.Shape<Notifications4> = {
  challengeReturnUrl: s.optional(s.string()),
  _keysMap: {
    challengeReturnUrl: "challenge_return_url",
  },
};

export const notifications4InternalSchema: Schema<Notifications4> = s.object<Notifications4>(
  notifications4Properties,
  { additionalProperties: s.json() },
);

export const notifications4Schema: Schema<Notifications4> = s.lazySchema(() =>
  s.object<Notifications4>(
    {
      ...notifications4Properties,
      challengeReturnUrl: s.optional(s.string().check(s.minLength(1), s.maxLength(256))),
    },
    { additionalProperties: s.json() },
  ),
);
