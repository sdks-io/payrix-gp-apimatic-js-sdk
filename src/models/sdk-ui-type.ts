import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SdkUiType = {
  Text: "TEXT",
  SingleSelect: "SINGLE_SELECT",
  MultiSelect: "MULTI_SELECT",
  OutOfBand: "OUT_OF_BAND",
  HtmlOther: "HTML_OTHER",
} as const;
export type SdkUiType = (typeof SdkUiType)[keyof typeof SdkUiType] | (string & {});

export const sdkUiTypeSchema: EnumSchema<SdkUiType> = s.enumOf<SdkUiType>(SdkUiType);
