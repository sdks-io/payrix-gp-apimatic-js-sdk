import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The integration related to this Watchlist.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `APPLE` - **APPLE integration.**
 * - `ELAVON` - **ELAVON integration.**
 * - `FEDACH` - **FEDACH integration.**
 * - `FIRSTDATA` - **FIRSTDATA integration.**
 * - `NEUTRINO` - **NEUTRINO integration.**
 * - `OFAC` - **OFAC integration.**
 * - `PAYRIX` - **PAYRIX integration.**
 * - `PLAID` - **PLAID integration.**
 * - `SIFT` - **SIFT integration.**
 * - `SOCURE` - **SOCURE integration.**
 * - `SOUNDPAYMENTS` - **SOUNDPAYMENTS integration.**
 * - `TDBANK` - **TDBANK integration.**
 * - `TDBANKCA` - **TDBANKCA integration.**
 * - `VANTIV` - **VANTIV integration.**
 * - `VCORE` - **VCORE integration.**
 * - `WEBSHIELD` - **WEBSHIELD integration.**
 * - `WELLSACH` - **WELLSACH integration.**
 * - `WELLSFARGO` - **WELLSFARGO integration.**
 * - `WFSINGLE` - **WFSINGLE integration.**
 * - `WORLDPAY` - **WORLDPAY integration.**
 *
 * </details>
 */
export const WatchlistIntegration2 = {
  Apple: "APPLE",
  Elavon: "ELAVON",
  Fedach: "FEDACH",
  Firstdata: "FIRSTDATA",
  Neutrino: "NEUTRINO",
  Ofac: "OFAC",
  Payrix: "PAYRIX",
  Plaid: "PLAID",
  Sift: "SIFT",
  Socure: "SOCURE",
  Soundpayments: "SOUNDPAYMENTS",
  Tdbank: "TDBANK",
  Tdbankca: "TDBANKCA",
  Vantiv: "VANTIV",
  Vcore: "VCORE",
  Webshield: "WEBSHIELD",
  Wellsach: "WELLSACH",
  Wellsfargo: "WELLSFARGO",
  Wfsingle: "WFSINGLE",
  Worldpay: "WORLDPAY",
} as const;
export type WatchlistIntegration2 =
  | (typeof WatchlistIntegration2)[keyof typeof WatchlistIntegration2]
  | (string & {});

export const watchlistIntegration2Schema: EnumSchema<WatchlistIntegration2> =
  s.enumOf<WatchlistIntegration2>(WatchlistIntegration2);
