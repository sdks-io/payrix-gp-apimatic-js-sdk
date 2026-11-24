import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** whether the browser can execute JavaScript. */
export const JavascriptEnabledAuthenticationsBrowserDateJavascriptEnabled = {
  Yes: "YES",
  No: "NO",
} as const;
export type JavascriptEnabledAuthenticationsBrowserDateJavascriptEnabled =
  | (typeof JavascriptEnabledAuthenticationsBrowserDateJavascriptEnabled)[keyof typeof JavascriptEnabledAuthenticationsBrowserDateJavascriptEnabled]
  | (string & {});

export const javascriptEnabledAuthenticationsBrowserDateJavascriptEnabledSchema: EnumSchema<JavascriptEnabledAuthenticationsBrowserDateJavascriptEnabled> =
  s.enumOf<JavascriptEnabledAuthenticationsBrowserDateJavascriptEnabled>(
    JavascriptEnabledAuthenticationsBrowserDateJavascriptEnabled,
  );
