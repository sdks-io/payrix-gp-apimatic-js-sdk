import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  colorDepthAuthenticationsBrowserDateColorDepthSchema,
  type ColorDepthAuthenticationsBrowserDateColorDepth,
} from "./color-depth-authentications-browser-date-color-depth.js";
import {
  javaEnabledAuthenticationsBrowserDateJavaEnabledSchema,
  type JavaEnabledAuthenticationsBrowserDateJavaEnabled,
} from "./java-enabled-authentications-browser-date-java-enabled.js";
import {
  javascriptEnabledAuthenticationsBrowserDateJavascriptEnabledSchema,
  type JavascriptEnabledAuthenticationsBrowserDateJavascriptEnabled,
} from "./javascript-enabled-authentications-browser-date-javascript-enabled.js";

export type BrowserData = {
  /** The language the browser is set to. */
  language?: string;
  /** HTTP accept headers as sent by the browser. */
  acceptHeader?: string;
  /** Exact content of the HTTP user-agent header sent by the browser. */
  userAgent?: string;
  /**
   * Browser color depth.
   * * `ONE_BIT`
   * * `TWO_BITS`
   * * `FOUR_BITS`
   * * `EIGHT_BITS`
   * * `FIFTEEN_BITS`
   * * `SIXTEEN_BITS`
   * * `TWENTY_FOUR_BITS`
   * * `THIRTY_TWO_BITS`
   * * `FORTY_EIGHT_BITS`
   */
  colorDepth?: ColorDepthAuthenticationsBrowserDateColorDepth;
  /**
   * Exact content of the HTTP user-agent header sent by the browser. Note for European merchants:
   * This field is mandatory for SCA.
   */
  ip?: string;
  /** whether the browser can execute Java. */
  javaEnabled?: JavaEnabledAuthenticationsBrowserDateJavaEnabled;
  /** whether the browser can execute JavaScript. */
  javascriptEnabled?: JavascriptEnabledAuthenticationsBrowserDateJavascriptEnabled;
  /**
   * Total height of the customer's screen in pixels. Note for European merchants: This field is
   * mandatory for SCA.
   */
  screenHeight?: string;
  /** Total width of the customer's screen in pixels. */
  screenWidth?: string;
  /**
   * Dimensions of the challenge window that has been displayed to the customer. The ACS shall reply
   * with content that is formatted to appropriately.
   * * `WINDOWED_250X400`
   * * `WINDOWED_390X400`
   * * `WINDOWED_500X600`
   * * `WINDOWED_600X400`
   * * `FULL_SCREEN`
   */
  challengeWindowSize?: string;
  /** Time difference between UTC time and the customer's browser local time, in minutes. */
  timezone?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const browserDataProperties: s.Shape<BrowserData> = {
  language: s.optional(s.string()),
  acceptHeader: s.optional(s.string()),
  userAgent: s.optional(s.string()),
  colorDepth: s.optional(s.lazy(() => colorDepthAuthenticationsBrowserDateColorDepthSchema)),
  ip: s.optional(s.string()),
  javaEnabled: s.optional(s.lazy(() => javaEnabledAuthenticationsBrowserDateJavaEnabledSchema)),
  javascriptEnabled: s.optional(
    s.lazy(() => javascriptEnabledAuthenticationsBrowserDateJavascriptEnabledSchema),
  ),
  screenHeight: s.optional(s.string()),
  screenWidth: s.optional(s.string()),
  challengeWindowSize: s.optional(s.string()),
  timezone: s.optional(s.string()),
  _keysMap: {
    acceptHeader: "accept_header",
    userAgent: "user_agent",
    colorDepth: "color_depth",
    javaEnabled: "java_enabled",
    javascriptEnabled: "javascript_enabled",
    screenHeight: "screen_height",
    screenWidth: "screen_width",
    challengeWindowSize: "challenge_window_size",
  },
};

export const browserDataInternalSchema: Schema<BrowserData> = s.object<BrowserData>(browserDataProperties, {
  additionalProperties: s.json(),
});

export const browserDataSchema: Schema<BrowserData> = s.lazySchema(() =>
  s.object<BrowserData>(
    {
      ...browserDataProperties,
      language: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      acceptHeader: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      userAgent: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      ip: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      screenHeight: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      screenWidth: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      challengeWindowSize: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      timezone: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
