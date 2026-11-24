import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SdkUiTypeAuthenticationsMobileDataSdkUiType = {
  Text: "TEXT",
  SingleSelect: "SINGLE_SELECT",
  MultiSelect: "MULTI_SELECT",
  OutOfBand: "OUT_OF_BAND",
  HtmlOther: "HTML_OTHER",
} as const;
export type SdkUiTypeAuthenticationsMobileDataSdkUiType =
  | (typeof SdkUiTypeAuthenticationsMobileDataSdkUiType)[keyof typeof SdkUiTypeAuthenticationsMobileDataSdkUiType]
  | (string & {});

export const sdkUiTypeAuthenticationsMobileDataSdkUiTypeSchema: EnumSchema<SdkUiTypeAuthenticationsMobileDataSdkUiType> =
  s.enumOf<SdkUiTypeAuthenticationsMobileDataSdkUiType>(SdkUiTypeAuthenticationsMobileDataSdkUiType);
