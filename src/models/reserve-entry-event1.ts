import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The bucket of rev share fees, comma-separated list with no spaces <details> <summary>Valid
 * Values</summary>
 * - `1` - **DAYS** The ReserveEntry for an Entry that triggers every day.
 * - `2` - **WEEKS** The ReserveEntry for an Entry that triggers every week.
 * - `3` - **MONTHS** The ReserveEntry for an Entry that triggers every month.
 * - `4` - **YEARS** The ReserveEntry for an Entry that triggers every year.
 * - `5` - **SINGLE** The ReserveEntry for an Entry related to a one-off event.
 * - `6` - **AUTH** The ReserveEntry for an Entry related to the time of authorization of a
 *   transaction.
 * - `7` - **CAPTURE** The ReserveEntry for an Entry related to the capture time of a Transaction.
 * - `8` - **REFUND** The ReserveEntry for an Entry related to when a refund transaction is
 *   processed.
 * - `9` - **BOARD** The ReserveEntry for an Entry related to when the Merchant is boarded.
 * - `10` - **PAYOUT** The ReserveEntry for an Entry related to when a payout is processed.
 * - `11` - **CHARGEBACK** The ReserveEntry for an Entry related to when a card chargeback occurs.
 * - `12` - **OVERDRAFT** The ReserveEntry for an Entry related to when an overdraft usage charge
 *   from a bank is levied.
 * - `13` - **INTERCHANGE** The ReserveEntry for an Entry related to when interchange Fees are
 *   assessed for the Transactions of this Merchant.
 * - `14` - **PROCESSOR** The ReserveEntry for an Entry related to when the Transactions of this
 *   Merchant are processed by a payment processor.
 * - `15` - **ACHFAIL** The ReserveEntry for an Entry related to when an automated clearing house
 *   failure occurs.
 * - `16` - **ACCOUNT** The ReserveEntry for an Entry related to when a bank account is verified.
 * - `17` - **SIFT** The ReserveEntry for an Entry related to Transaction fraud score.
 * - `18` - **ADJUSTMENT** The ReserveEntry for an Entry related to adjusted funds.
 * - `19` - **RETRIEVAL** The ReserveEntry for an Entry related to Retrieval Request Chargeback.
 * - `20` - **ARBITRATION** The ReserveEntry for an Entry related to Arbitration Chargeback.
 * - `21` - **ECSALE** The ReserveEntry for an Entry related to an eCheck Sale.
 * - `22` - **ECREFUND** The ReserveEntry for an Entry related to an eCheck Refund.
 * - `23` - **ECRETURN** The ReserveEntry for an Entry related to an eCheck Return.
 * - `24` - **SETTLEMENT** The ReserveEntry for an Entry related to transaction settlement.
 * - `25` - **MISUSE** The ReserveEntry for an Entry related to Misuse of authorization.
 * - `26` - **PROFIT_SHARE** The ReserveEntry for an Entry related to a profit sharing entry.
 * - `27` - **UNAUTH** The ReserveEntry for an Entry related to an unauthorized entry.
 * - `28` - **ACHNOC** The ReserveEntry for an Entry related to an ACH Notification of Change.
 * - `29` - **ECNOC** The ReserveEntry for an Entry related to an eCheck Notifications of Change.
 * - `30` - **ECFAIL** The ReserveEntry for an Entry related to an eCheck Fail.
 * - `31` - **ECNSF** The ReserveEntry for an Entry related to an eCheck Non-Sufficient Funds.
 * - `32` - **CURRENCY_CONVERSION** The ReserveEntry for an Entry related to a currency conversion.
 * - `33` - **TERMINAL_TXN** The ReserveEntry for an Entry related to a terminal transaction.
 * - `34` - **REVERSE_PAYOUT** The ReserveEntry for an Entry related to a payout that's been
 *   reversed.
 * - `35` - **PARTIAL_REVERSE_PAYOUT** The ReserveEntry for an Entry related to a payout that's been
 *   partially reversed.
 * - `37` - **RESERVE_ENTRY_RELEASE**: The ReserveEntry for an Entry related to released reserves.
 * - `43` - **PAYMENT_CHECK** Single payment check (deprecated).
 * - `44` - **PAYMENT_UPDATE** Single payment update.
 * - `45` - **PAYMENT_GROUP_CHECK** Group payment check (deprecated).
 * - `46` - **PAYMENT_GROUP_UPDATE** Group payment update.
 * - `47` - **ENTRY_REFUND** Entry refunds.
 * - `48` - **ENTITY_RESERVE_CHANGE** Entity Reserve Total change..
 * - `49` - **RELEASE_HOLD** Release Hold.
 * - `50` - **RELEASE_ENTRIES_DEFAULT** Default values for older records..
 * - `51` - **STATEMENT** Payment of statement.
 * - `52` - **MERCHANT_CREATION** Merchant fee upon creation.
 * - `53` - **REALTIME_BUSINESS_SEARCH** Real-time business search.
 * - `54` - **REALTIME_MEMBER_SEARCH** Real-time member search.
 * - `55` - **MASTER_CARD_MATCH** Mastercard match.
 * - `56` - **BUSINESS_INSTANT_ID** Business instant ID.
 * - `57` - **CONSUMER_INSTANT_ID** Consumer instant ID.
 * - `58` - **THREAT_METRIX** Threat metrix.
 * - `59` - **LEGIT_SCRIPT_REGISTER** Legit script register.
 * - `60` - **EQUIFAX_CONSUMER_REPORT** Equifax consumer report.
 * - `61` - **GUIDE_STAR** Guidestar.
 * - `62` - **PAYLOAD_ATTRIBUTE** Internal Decision V2.
 * - `63` - **TIN_CHECK** Tin check.
 * - `64` - **EQUIFAX_COMMERCIAL_REPORT** Equifax commercial report.
 * - `65` - **LEGIT_SCRIPT_CHECK_MERCHANT** Legit script check merchant.
 * - `66` - **PLAID** Plaid.
 * - `67` - **STATEMENT_REVERSAL** Reversal of statement.
 * - `68` - **GIACT_ECHECK** GIACT call made to verify creator Echeck bank Account.
 * - `69` - **GIACT_BANK_ACCOUNT** Giact calls to verify merchant settlement account on sign-up or
 *   post-boarding account.
 * - `70` - **BOARD_DECISION** Process decision fee after board.
 * - `71` - **TXN_RISK_DECISION** Txn going through a risk decision.
 * - `72` - **FANF** External Fees.
 * - `73` - **MCLOCATION** External Fees.
 * - `74` - **VISAINTEGRITY** External Fees.
 * - `75` - **SAFERPAYMENTS_BASIC** External Fees.
 * - `76` - **SAFERPAYMENTS_MANAGED** External Fees.
 * - `77` - **SAFERPAYMENTS_PCI_NONVALIDATION** External Fees.
 * - `78` - **OMNITOKENS_VOLUME** External Fees.
 * - `79` - **PAYOUT_RETURN** Payout Return.
 * - `80` - **PAYOUT_PARTIAL_RETURN** Payout Partial Return.
 * - `81` - **REV_SHARE** Rev share.
 * - `82` - **CARD_SETTLEMENT** Txns card settlement.
 * - `83` - **ECHECK_SETTLEMENT** Txns e-check settlement.
 * - `84` - **REV_SHARE_CARD** Rev Share Schedules.
 * - `85` - **REV_SHARE_ECHECK** Rev Share Schedules.
 * - `86` - **REV_SHARE_DBM** Rev Share Schedules.
 * - `87` - **PREARBITRATION** Chargeback PreArbitration.
 * - `88` - **PLAID_IDENTITY_MACH** Plaid.
 * - `89` - **TXN_PLAID_IDENTITY_MACH** Txns Plaid.
 * - `90` - **PLAID_GET_IDENTITY** Plaid.
 * - `91` - **TXN_PLAID_GET_IDENTITY** Txns Plaid.
 * - `92` - **PLAID_GET_AUTH** Plaid.
 * - `93` - **TXN_PLAID_GET_AUTH** Txns Plaid.
 * - `94` - **REVERSAL** Chargeback Reversal.
 * - `95` - **REPRESENTMENT** Chargeback Representment.
 * - `96` - **OMNITOKENS_MONTHLY** Omnitokens Monthly Fee.
 * - `101` - **IC_RETAIN_PASSTHRU_REFUND** Interchange retain pass on refund.
 * - `200` - **VALUTEC_ESSENTIAL_GIFT** External Fees.
 * - `201` - **VALUTEC_ESSENTIAL_MONTHLY_TXN** External Fees.
 * - `202` - **VALUTEC_DIGITAL_GIFT_PLUS_PACKAGE** External Fees.
 * - `203` - **VALUTEC_DIGITAL_GIFT_PLUS_PACKAGE_TXN** External Fees.
 * - `204` - **VALUTEC_LOYALTY_PLUS_PACKAGE** External Fees.
 * - `205` - **VALUTEC_LOYALTY_PLUS_PACKAGE_TXN** External Fees.
 * - `206` - **VALUTEC_TRANSACTION_FEE** External Fees.
 * - `207` - **VALUTEC_SETUP_FEE** External Fees.
 * - `208` - **VALUTEC_GIFT_ACH_POOLING** External Fees.
 * - `209` - **VALUTEC_JUMP_START_KIT** External Fees.
 * - `210` - **VALUTEC_LAUNCH_BOX_KIT** External Fees.
 * - `211` - **VALUTEC_500_CUSTOM_CARDS** External Fees.
 * - `212` - **VALUTEC_MAINTENANCE_FEE** External Fees.
 * - `213` - **VALUTEC_DIGITAL_GIFT_PLUS_PACKAGE_ME** External Fees.
 * - `214` - **EFE_MWC_RESIDUAL_ATELIO** EFE External Fees.
 * - `215` - **EFE_MWC_RESIDUAL_PARAFIN** EFE External Fees.
 * - `216` - **EFE_MWC_BILLING** EFE External Fees.
 * - `217` - **FRAUDSIGHT_CNP_DECISION** External Fees.
 * - `218` - **FRAUDSIGHT_CP_DECISION** External Fees.
 * - `400` - **REVBOOST_EMBEDDED_TMS_MONTHLY** External Fees.
 * - `401` - **REVBOOST_EMBEDDED_TMS_PPT** External Fees.
 * - `402` - **TXN_THREAT_METRIX** External Fees.
 * - `403` - **THREAT_METRIX_EMAILAGE** External Fees.
 * - `404` - **THREAT_METRIX_FRAUD_POINT** External Fees.
 * - `405` - **GIACT_INQUIRY** External Fees.
 * - `406` - **GIACT_TXN_GAUTHENTICATE** External Fees.
 * - `407` - **TRULIOO_IDV** External Fees.
 * - `408` - **TRULIOO_AMLLDV** External Fees.
 * - `409` - **TRULIOO_BUSINESS_VERIFICATION** External Fees.
 * - `410` - **THREAT_METRIX_PHONE_FINDER** External Fees.
 * - `601` - **TIER_NON_QUALIFIED_COUNT** Risk Based Tier Fees.
 * - `602` - **TIER_QUALIFIED_COUNT** Risk Based Tier Fees.
 * - `603` - **TIER_MID_QUALIFIED_COUNT** Risk Based Tier Fees.
 * - `604` - **TIER_HIGH_RISK_COUNT** Risk Based Tier Fees.
 * - `605` - **TIER_NON_QUALIFIED_VOLUME** Risk Based Tier Fees.
 * - `606` - **TIER_QUALIFIED_VOLUME** Risk Based Tier Fees.
 * - `607` - **TIER_MID_QUALIFIED_VOLUME** Risk Based Tier Fees.
 * - `608` - **TIER_HIGH_RISK_VOLUME** Risk Based Tier Fees </details>
 */
export const ReserveEntryEvent1 = {
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
  _35: 35,
  _37: 37,
  _43: 43,
  _44: 44,
  _45: 45,
  _46: 46,
  _47: 47,
  _48: 48,
  _49: 49,
  _50: 50,
  _51: 51,
  _52: 52,
  _53: 53,
  _54: 54,
  _55: 55,
  _56: 56,
  _57: 57,
  _58: 58,
  _59: 59,
  _60: 60,
  _61: 61,
  _62: 62,
  _63: 63,
  _64: 64,
  _65: 65,
  _66: 66,
  _67: 67,
  _68: 68,
  _69: 69,
  _70: 70,
  _71: 71,
  _72: 72,
  _73: 73,
  _74: 74,
  _75: 75,
  _76: 76,
  _77: 77,
  _78: 78,
  _79: 79,
  _80: 80,
  _81: 81,
  _82: 82,
  _83: 83,
  _84: 84,
  _85: 85,
  _86: 86,
  _87: 87,
  _88: 88,
  _89: 89,
  _90: 90,
  _91: 91,
  _92: 92,
  _93: 93,
  _94: 94,
  _95: 95,
  _96: 96,
  _101: 101,
  _200: 200,
  _201: 201,
  _202: 202,
  _203: 203,
  _204: 204,
  _205: 205,
  _206: 206,
  _207: 207,
  _208: 208,
  _209: 209,
  _210: 210,
  _211: 211,
  _212: 212,
  _213: 213,
  _214: 214,
  _215: 215,
  _216: 216,
  _217: 217,
  _218: 218,
  _400: 400,
  _401: 401,
  _402: 402,
  _403: 403,
  _404: 404,
  _405: 405,
  _406: 406,
  _407: 407,
  _408: 408,
  _409: 409,
  _410: 410,
  _601: 601,
  _602: 602,
  _603: 603,
  _604: 604,
  _605: 605,
  _606: 606,
  _607: 607,
  _608: 608,
} as const;
export type ReserveEntryEvent1 = (typeof ReserveEntryEvent1)[keyof typeof ReserveEntryEvent1] | (number & {});

export const reserveEntryEvent1Schema: EnumSchema<ReserveEntryEvent1> =
  s.enumOf<ReserveEntryEvent1>(ReserveEntryEvent1);
