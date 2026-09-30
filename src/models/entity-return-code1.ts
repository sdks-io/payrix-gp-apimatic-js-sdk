import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The code that is received from the platform.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `R01` - **R01.** Insufficient funds in account.
 * - `R02` - **R02.** Account is closed.
 * - `R03` - **R03.** No account on file.
 * - `R04` - **R04.** Invalid account number.
 * - `R05` - **R05.** Unauthorized debit to consumer account.
 * - `R06` - **R06.** Returned at request of ODFI.
 * - `R07` - **R07.** Authorization revoked by customer.
 * - `R08` - **R08.** Payment stopped.
 * - `R09` - **R09.** Insufficient collected funds in account being charged
 * - `R10` - **R10.** Customer advises not Authorized, notice not provided, improper source
 *   document, or amount of entry not accurately obtained from source document.
 * - `R11` - **R11.** Check truncation return.
 * - `R12` - **R12.** Account sold to another financial institution.
 * - `R13` - **R13.** Invalid ACH routing number.
 * - `R14` - **R14.** Representative payee is deceased or cannot continue in that capacity.
 * - `R15` - **R15.** Beneficiary or account holder other than representative payee deceased.
 * - `R16` - **R16.** Account funds have been frozen.
 * - `R17` - **R17.** Item returned because of invalid data; refer to addenda for information.
 * - `R18` - **R18.** Improper effective date.
 * - `R19` - **R19.** Amount error.
 * - `R20` - **R20.** Account does not allow ACH transactions or limit for transactions has been
 *   exceeded.
 * - `R21` - **R21.** Invalid company identification.
 * - `R22` - **R22.** Invalid individual ID.
 * - `R23` - **R23.** Credit entry refused by receiver.
 * - `R24` - **R24.** Duplicate entry.
 * - `R25` - **R25.** Addenda record error.
 * - `R26` - **R26.** Mandatory field error.
 * - `R27` - **R27.** Trace number error.
 * - `R28` - **R28.** Routing/transit number check digit error.
 * - `R29` - **R29.** Corporate customer advised not authorized.
 * - `R30` - **R30.** RDFI not participant in check truncation program.
 * - `R31` - **R31.** Permissible return entry.
 * - `R32` - **R32.** RDFI non-settlement.
 * - `R33` - **R33.** Return of item.
 * - `R34` - **R34.** Limited participation ODFI.
 * - `R35` - **R35.** Return of improper debit entry.
 * - `R36` - **R36.** Return of improper credit entry.
 * - `R37` - **R37.** Source document presented for payment.
 * - `R38` - **R38.** Stop payment on source document.
 * - `R39` - **R39.** Improper source document.
 * - `R40` - **R40.** Return of item by government agency.
 * - `R41` - **R41.** Invalid Transaction Code.
 * - `R42` - **R42.** Routing/transit number check digit error.
 * - `R43` - **R43.** Invalid account number.
 * - `R44` - **R44.** Invalid individual ID.
 * - `R45` - **R45.** Invalid individual name or company name.
 * - `R46` - **R46.** Invalid representative payee indicator code.
 * - `R47` - **R47.** Duplicate enrollment.
 * - `R50` - **R50.** State law affecting RCK acceptance.
 * - `R51` - **R51.** Item is ineligible, notice not provided, signature not genuine, or original
 *   item altered for adjustment entry.
 * - `R52` - **R52.** Stop payment on item.
 * - `R53` - **R53.** Item and ACH entry presented for payment.
 * - `R61` - **R61.** Misrouted return - RDFI for original entry has placed incorrect
 *   routing/transit number in RDFI identification field.
 * - `R62` - **R62.** Incorrect trace number.
 * - `R63` - **R63.** Incorrect dollar amount.
 * - `R64` - **R64.** Incorrect individual identification.
 * - `R65` - **R65.** Incorrect transaction code.
 * - `R66` - **R66.** Incorrect company identification.
 * - `R67` - **R67.** Duplicate return.
 * - `R68` - **R68.** Untimely return - return was not sent within the established timeframe.
 * - `R69` - **R69.** Field errors.
 * - `R70` - **R70.** Permissible return entry not accepted.
 * - `R71` - **R71.** Misrouted dishonored return -incorrect routing/transit number in RDFI
 *   identification field.
 * - `R72` - **R72.** Untimely return - dishonored return was not sent within the established
 *   timeframe.
 * - `R73` - **R73.** Timely original return - RDFI certifies the original return entry was sent
 *   within established timeframe for original returns.
 * - `R74` - **R74.** Corrected return - RDFI is correcting a previous return entry that was
 *   dishonored because it contained incomplete or incorrect information.
 * - `R75` - **R75.** Original return not a duplicate.
 * - `R76` - **R76.** No errors found.
 * - `R80` - **R80.** Cross-border payment coding error
 * - `R81` - **R81.** Non-participant in cross-border program.
 * - `R82` - **R82.** Invalid foreign RDFI identification.
 * - `R83` - **R83.** Foreign RDFI unable to settle.
 * - `R84` - **R84.** Cross-border entry not processed by originating gateway operator.
 * - `R94` - **R94.** Administrative return item was processed and resubmitted as a photocopy.
 * - `R95` - **R95.** Administrative return item was processed and resubmitted as a MICR-Split.
 * - `R97` - **R97.** Administrative return item was processed and resubmitted with corrected dollar
 *   amount.
 * - `R98` - **R98.** Indicates a return PAC (pre-authorized check); RDFI provides a text reason and
 *   indicated a new account number on the PAC itself.
 * - `R99` - **R99.** Indicates a return PAC (pre-authorized check); RDFI provides a text reason on
 *   the PAC itself for which there is no equivalent return reason code.
 * - `C01` - **C01.** Incorrect DFI Account Number.
 * - `C02` - **C02.** Incorrect Transit/Routing Number.
 * - `C03` - **C03.** Incorrect Transit/Routing Number and Incorrect DFI Account Number.
 * - `C04` - **C04.** Incorrect Individual Name.
 * - `C05` - **C05.** Incorrect Transaction Code.
 * - `C06` - **C06.** Incorrect DFI Account Number and Incorrect Transaction Code.
 * - `C07` - **C07.** Incorrect Transit/Routing Number, Incorrect DFI Account Number, and Incorrect
 *   Transaction Code.
 * - `C08` - **C08.** Reserved.
 * - `C09` - **C09.** Incorrect Individual Identification Number.
 * - `C10` - **C10.** Incorrect Company Name.
 * - `C11` - **C11.** Incorrect Company Identification.
 * - `C12` - **C12.** Incorrect Company Name and Company Identification.
 * - `C13` - **C13.** Addenda Format Error.
 * - `C61` - **C61.** Misrouted Notification of Change.
 * - `C62` - **C62.** Incorrect Trace Number.
 * - `C63` - **C63.** Incorrect Company Identification Number.
 * - `C64` - **C64.** Incorrect Individual Identification Number.
 * - `C65` - **C65.** Incorrectly Formatted Corrected Data.
 * - `C66` - **C66.** Incorrect Discretionary Data.
 * - `C67` - **C67.** Routing Number Not From Original Entry Detail Record.
 * - `C68` - **C68.** DFI Account Number Not From Original Entry Detail Record.
 * - `C69` - **C69.** Incorrect Transaction Code.
 * - `R900-07` - **R900-07.** Institution ID Invalid.
 * - `R900-08` - **R900-08.** Account Number Invalid.
 * - `R900-16` - **R900-16.** Institution ID for Return Invalid.
 * - `R900-17` - **R900-17.** Account Number for Return Invalid.
 * - `R900-D2` - **R900-D2.** Destination Institute is Not Defined on FIF.
 * - `R900-E1` - **R900-E1.** Destination Account Number Invalid.
 * - `R900-L2` - **R900-L2.** Institution for Return Not Defined on FIF.
 * - `R900-L3` - **R900-L3.** Institution for Return Cross Reference Invalid.
 * - `R900-M1` - **R900-M1.** Account for Return Invalid.
 * - `R901` - **R901.** NFS (Debit Only).
 * - `R902` - **R902.** Cannot Trace.
 * - `R903` - **R903.** Payment Stopped/Recalled.
 * - `R904` - **R904.** Post/Stale Dated.
 * - `R905` - **R905.** Account Closed.
 * - `R907` - **R907.** No Debit Allowed.
 * - `R908` - **R908.** Funds Not Cleared.
 * - `R909` - **R909.** Currency/Account Mismatch.
 * - `R910` - **R910.** Payor/Payee Deceased.
 * - `R911` - **R911.** Account Frozen.
 * - `R912` - **R912.** Invalid/Incorrect Account Number.
 * - `R914` - **R914.** Incorrect Payor/Payee Name.
 * - `R915` - **R915.** PAD No Agreement Existed - Business/Personal.
 * - `R916` - **R916.** PAD Not According to Agreement - Personal.
 * - `R917` - **R917.** PAD Agreement Revoked - Personal.
 * - `R918` - **R918.** PAD No Confirmation/Pre-Notification - Personal.
 * - `R919` - **R919.** PAD Not According to Agreement - Business.
 * - `R920` - **R920.** PAD Agreement Revoked - Business.
 * - `R921` - **R921.** PAD No Confirmation/Pre-Notification - Business.
 * - `R922` - **R922.** Customer Initiated Return - CREDIT only.
 * - `R990` - **R990.** Institution in Default. </details>
 */
export const EntityReturnCode1 = {
  R01: "R01",
  R02: "R02",
  R03: "R03",
  R04: "R04",
  R05: "R05",
  R06: "R06",
  R07: "R07",
  R08: "R08",
  R09: "R09",
  R10: "R10",
  R11: "R11",
  R12: "R12",
  R13: "R13",
  R14: "R14",
  R15: "R15",
  R16: "R16",
  R17: "R17",
  R18: "R18",
  R19: "R19",
  R20: "R20",
  R21: "R21",
  R22: "R22",
  R23: "R23",
  R24: "R24",
  R25: "R25",
  R26: "R26",
  R27: "R27",
  R28: "R28",
  R29: "R29",
  R30: "R30",
  R31: "R31",
  R32: "R32",
  R33: "R33",
  R34: "R34",
  R35: "R35",
  R36: "R36",
  R37: "R37",
  R38: "R38",
  R39: "R39",
  R40: "R40",
  R41: "R41",
  R42: "R42",
  R43: "R43",
  R44: "R44",
  R45: "R45",
  R46: "R46",
  R47: "R47",
  R50: "R50",
  R51: "R51",
  R52: "R52",
  R53: "R53",
  R61: "R61",
  R62: "R62",
  R63: "R63",
  R64: "R64",
  R65: "R65",
  R66: "R66",
  R67: "R67",
  R68: "R68",
  R69: "R69",
  R70: "R70",
  R71: "R71",
  R72: "R72",
  R73: "R73",
  R74: "R74",
  R75: "R75",
  R76: "R76",
  R80: "R80",
  R81: "R81",
  R82: "R82",
  R83: "R83",
  R84: "R84",
  R94: "R94",
  R95: "R95",
  R97: "R97",
  R98: "R98",
  R99: "R99",
  C01: "C01",
  C02: "C02",
  C03: "C03",
  C04: "C04",
  C05: "C05",
  C06: "C06",
  C07: "C07",
  C08: "C08",
  C09: "C09",
  C10: "C10",
  C11: "C11",
  C12: "C12",
  C13: "C13",
  C61: "C61",
  C62: "C62",
  C63: "C63",
  C64: "C64",
  C65: "C65",
  C66: "C66",
  C67: "C67",
  C68: "C68",
  C69: "C69",
  R90007: "R900-07",
  R90008: "R900-08",
  R90016: "R900-16",
  R90017: "R900-17",
  R900D2: "R900-D2",
  R900E1: "R900-E1",
  R900L2: "R900-L2",
  R900L3: "R900-L3",
  R900M1: "R900-M1",
  R901: "R901",
  R902: "R902",
  R903: "R903",
  R904: "R904",
  R905: "R905",
  R907: "R907",
  R908: "R908",
  R909: "R909",
  R910: "R910",
  R911: "R911",
  R912: "R912",
  R914: "R914",
  R915: "R915",
  R916: "R916",
  R917: "R917",
  R918: "R918",
  R919: "R919",
  R920: "R920",
  R921: "R921",
  R922: "R922",
  R990: "R990",
} as const;
export type EntityReturnCode1 = (typeof EntityReturnCode1)[keyof typeof EntityReturnCode1] | (string & {});

export const entityReturnCode1Schema: EnumSchema<EntityReturnCode1> =
  s.enumOf<EntityReturnCode1>(EntityReturnCode1);
