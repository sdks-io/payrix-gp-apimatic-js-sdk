import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * TxnResult is the result code that is associated with this terminal
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Transaction approved.**
 * - `1` - **Partially approved. The processor has only approved a portion of the total transaction
 *   amount.**
 * - `2` - **Declined. The processor has declined the Transaction.**
 * - `3` - **Verification successful, values provided matched.**
 * - `4` - **Verification unsuccessful, values provided did not match.**
 * - `5` - **The ZIP code in the Transaction data does not match the customer details held by the
 *   card issuer.**
 * - `6` - **The address in the Transaction data does not match the customer details held by the
 *   card issuer.**
 * - `7` - **The name in the Transaction data does not match the customer details held by the card
 *   issuer.**
 * - `8` - **The name and phone number in the Transaction data do not match the details held by the
 *   card issuer.**
 * - `9` - **The name and email address in the Transaction data do not match the customer details
 *   held by the card issuer.**
 * - `10` - **The phone number in the Transaction data does not match the customer details held by
 *   the card issuer.**
 * - `11` - **The phone number and email address in the Transaction data do not match the customer
 *   details held by the card issuer.**
 * - `12` - **The email address in the Transaction data does not match the customer details held by
 *   the card issuer.**
 * - `13` - **The customer name could not be found in the Transaction data.**
 * - `14` - **The customer name and phone number were not found in the Transaction data.**
 * - `15` - **The customer name and email address were not found in the Transaction data.**
 * - `16` - **The customer phone number was not found in the Transaction data.**
 * - `17` - **The customer phone number and email address were not found in the Transaction data.**
 * - `18` - **The customer email address was not found in the Transaction data.**
 * - `19` - **Information about the customer was not found in the Transaction data.**
 * - `20` - **Non-sufficient funds. The customer did not have sufficient credit or balance to cover
 *   the Transaction.**
 * - `21` - **The account in the Transaction data is not valid.**
 * - `22` - **The account is unauthorized.**
 * - `23` - **General error.**
 * - `24` - **The ZIP code in the Transaction data was not verified.**
 * - `25` - **The ZIP code and the Address in the Transaction data were not verified.**
 * - `26` - **The Address in the Transaction data was not verified.**
 * - `27` - **Txn did not fail but was not captured.**
 * - `28` - **3DS authentication passed.**
 * - `29` - **3DS authentication is invalid.**
 * - `30` - **3DS authentication failed.**
 * - `31` - **3DS authentication was not validated.**
 * - `32` - **3DS authentication passed without liability shift.**
 * - `33` - **Transaction processing timed out.**
 * - `34` - **Transaction cancelled
 *
 * </details>
 */
export const TxnResultsCode2 = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
  _6: 6,
  _7: 7,
  _8: 8,
  _9: 9,
  _10: 10,
  _11: 11,
  _12: 12,
  _13: 13,
  _14: 14,
  _15: 15,
  _16: 16,
  _17: 17,
  _18: 18,
  _19: 19,
  _20: 20,
  _21: 21,
  _22: 22,
  _23: 23,
  _24: 24,
  _25: 25,
  _26: 26,
  _27: 27,
  _28: 28,
  _29: 29,
  _30: 30,
  _31: 31,
  _32: 32,
  _33: 33,
  _34: 34,
} as const;
export type TxnResultsCode2 = (typeof TxnResultsCode2)[keyof typeof TxnResultsCode2] | (number & {});

export const txnResultsCode2Schema: EnumSchema<TxnResultsCode2> = s.enumOf<TxnResultsCode2>(TxnResultsCode2);
