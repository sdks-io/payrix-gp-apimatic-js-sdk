import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
export const ColorDepthAuthenticationsBrowserDateColorDepth = {
  OneBit: "ONE_BIT",
  TwoBits: "TWO_BITS",
  FourBits: "FOUR_BITS",
  EightBits: "EIGHT_BITS",
  FifteenBits: "FIFTEEN_BITS",
  SixteenBits: "SIXTEEN_BITS",
  TwentyFourBits: "TWENTY_FOUR_BITS",
  ThirtyTwoBits: "THIRTY_TWO_BITS",
  FortyEightBits: "FORTY_EIGHT_BITS",
} as const;
export type ColorDepthAuthenticationsBrowserDateColorDepth =
  | (typeof ColorDepthAuthenticationsBrowserDateColorDepth)[keyof typeof ColorDepthAuthenticationsBrowserDateColorDepth]
  | (string & {});

export const colorDepthAuthenticationsBrowserDateColorDepthSchema: EnumSchema<ColorDepthAuthenticationsBrowserDateColorDepth> =
  s.enumOf<ColorDepthAuthenticationsBrowserDateColorDepth>(ColorDepthAuthenticationsBrowserDateColorDepth);
