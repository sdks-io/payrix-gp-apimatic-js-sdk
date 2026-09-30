import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WatchlistIntegration = {
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
export type WatchlistIntegration =
  | (typeof WatchlistIntegration)[keyof typeof WatchlistIntegration]
  | (string & {});

export const watchlistIntegrationSchema: EnumSchema<WatchlistIntegration> =
  s.enumOf<WatchlistIntegration>(WatchlistIntegration);
