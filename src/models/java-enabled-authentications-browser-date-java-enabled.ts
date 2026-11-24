import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** whether the browser can execute Java. */
export const JavaEnabledAuthenticationsBrowserDateJavaEnabled = {
  Yes: "YES",
  No: "NO",
} as const;
export type JavaEnabledAuthenticationsBrowserDateJavaEnabled =
  | (typeof JavaEnabledAuthenticationsBrowserDateJavaEnabled)[keyof typeof JavaEnabledAuthenticationsBrowserDateJavaEnabled]
  | (string & {});

export const javaEnabledAuthenticationsBrowserDateJavaEnabledSchema: EnumSchema<JavaEnabledAuthenticationsBrowserDateJavaEnabled> =
  s.enumOf<JavaEnabledAuthenticationsBrowserDateJavaEnabled>(
    JavaEnabledAuthenticationsBrowserDateJavaEnabled,
  );
