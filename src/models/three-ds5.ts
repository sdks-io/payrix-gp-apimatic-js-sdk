import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ThreeDs5 = {
  /**
   * The value retrieved from the ACS once 3DS authentication step completed and is needed to obtain
   * the result of the authentication.
   */
  challengeResultValue?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const threeDs5Properties: s.Shape<ThreeDs5> = {
  challengeResultValue: s.optional(s.string()),
  _keysMap: {
    challengeResultValue: "challenge_result_value",
  },
};

export const threeDs5InternalSchema: Schema<ThreeDs5> = s.object<ThreeDs5>(threeDs5Properties, {
  additionalProperties: s.json(),
});

export const threeDs5Schema: Schema<ThreeDs5> = s.lazySchema(() =>
  s.object<ThreeDs5>(
    {
      ...threeDs5Properties,
      challengeResultValue: s.optional(s.string().check(s.maxLength(10000))),
    },
    { additionalProperties: s.json() },
  ),
);
