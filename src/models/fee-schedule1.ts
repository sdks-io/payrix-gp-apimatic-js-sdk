import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The schedule that determines when this Fee is triggered to be charged.
 *
 * <details> <summary>Valid Values</summary>
 *
 * `1` - **Days.** The Fee is charged every day.
 *
 * `2` - **Weeks.** The Fee is charged every week.
 *
 * `3` - **Months.** The Fee is charged every month.
 *
 * `4` - **Years.** The Fee is charged every year.
 *
 * `5` - **Single.** The Fee is a one-off charge.
 *
 * `6` - **Auth.** The Fee is triggered at the time of authorization of a transaction.
 *
 * `7` - **Capture.** The Fee triggers at the capture time of a Transaction.
 *
 * `8` - **Refund.** The Fee triggers when a refund transaction is processed.
 *
 * `9` - **Board.** The Fee triggers when the Merchant is boarded.
 *
 * `10` - **Payout.** The Fee triggers when a payout is processed.
 *
 * `11` - **Chargeback.** The Fee triggers when a card chargeback occurs.
 *
 * `12` - **Overdraft.** The Fee triggers when an overdraft usage charge from a bank is levied.
 *
 * `13` - **Interchange.** The Fee triggers when interchange default are assessed for the
 * Transactions of this Merchant.
 *
 * `14` - **Processor.** The Fee triggers when the Transactions of this Merchant are processed by a
 * payment processor.
 *
 * `15` - **ACH failure.** The Fee triggers when an automated clearing house failure occurs.
 *
 * `16` - **Account.** The Fee triggers when a bank account is verified.
 *
 * `17` - **Sift.** The Fee triggers when a txn uses SIFT for fraud checking.
 *
 * `18` - **Adjustment.** The Fee triggers when an adjustment is created.
 *
 * `19` - **Retrieval.** The Fee triggers when a chargeback retrieval is processed.
 *
 * `20` - **Arbitration.** The Fee triggers when a chargeback arbitration is processed.
 *
 * `21` - **eCheck Sale.** The Fee triggers when an eCheck sale is processed.
 *
 * `22` - **eCheck Refund.** The Fee triggers when an eCheck refund is processed.
 *
 * `23` - **eCheck Return.** The Fee triggers when an eCheck txn is returned because of a failure
 * while processing.
 *
 * `24` - **Settlement.** The Fee triggers when a txn is settled.
 *
 * `25` - **Misuse.** The Fee triggers when a txn authorization is misused.
 *
 * `26` - **Profit share.** The Fee triggers when a profit share is executed.
 *
 * `27` - **Unauth.** The Fee triggers when an auth reversal is created.
 *
 * `28` - **Disbursement NOC.** The Fee triggers on Notice Of Change events for Disbursements.
 *
 * `29` - **Transaction NOC.** The Fee triggers on Notice Of Change events for Transactions.
 *
 * `30` - **eCheck failure return.** The Fee triggers when an eCheck txn is returned due to customer
 * rejection or incorrect account information.
 *
 * `31` - **eCheck NSF return.** The Fee triggers when an eCheck txn is returned due to insufficient
 * funds.
 *
 * `32` - **Currency conversion.** The Fee triggers when there is a currency conversion on a
 * transaction.
 *
 * `33` - **Terminal transaction.** The Fee triggers when there is a transaction processed via a
 * terminal.
 *
 * `34` - **Reverse payout.** The Fee triggers when a payout is reversed.
 *
 * `35` - **Partial reverse payout.** The Fee triggers when a payout is partially reversed.
 *
 * `43` - **Payment check.** The Fee triggers on a payment check.
 *
 * `44` - **Payment update.** The Fee triggers when a payment is updated.
 *
 * `45` - **Payment group check.** The Fee triggers on a payment group check.
 *
 * `46` - **Payment group update.** The Fee triggers on a payment group update.
 *
 * `47` - **Entry refund.** The Fee triggers when an entry is refunded.
 *
 * `51` - **Statement Payment.** A statement bill was paid.
 *
 * `52` - **Merchant Created.** A new Merchant entity has been created, but not boarded.
 *
 * `53` - **Realtime Business Search.** Real-time Business Entity OFAC Search from Bridger by
 * LexisNexis.
 *
 * `54` - **Realtime Member Search.** Real-time Business Entity Managing Member Personal OFAC Search
 * from Bridger by LexisNexis.
 *
 * `55` - **MasterCard MATCH.** Merchant History Check from Mastercard Alert To Control High-risk
 * Merchants (MATCH) program.
 *
 * `56` - **Business Instant ID.** KYB Verification from LexisNexis.
 *
 * `57` - **Consumer Instance ID.** KYC Verification from LexisNexis.
 *
 * `58` - **ThreatMetrix.** Not for partner/referrer use.
 *
 * `59` - **LegitScript Registration.** Merchant Compliance and Risk Rating Checks.
 *
 * `60` - **Equifax Consumer Report.** Business owner's consumer credit report from Equifax.
 *
 * `61` - **CharityCheck.** Business entity nonprofit eligibility verification from GuideStar.
 *
 * `62` - **Internal Decision V2.** Payrix Risk services decision.
 *
 * `63` - **TIN Check.** Tax Identification Number matching service for tax identity management from
 * Sovos.
 *
 * `64` - **Equifax Commercial Report.** Entity's commercial credit report from Equifax.
 *
 * `65` - **LegitScript Merchant Check.** Merchant Compliance and Risk Rating Checks.
 *
 * `66` - **Plaid.** Bank account link, info update and verification services.
 *
 * `67` - **Statement Reversal.** A statement eCheck payment was reversed.
 *
 * `68` - **GIACT eCheck Verification.** Real-time account status check for consumer and business
 * bank accounts from gVerify by GIACT.
 *
 * `69` - **GIACT Account Verification.** Real-time Business Entity Owner identity & authorized
 * signer status verification from gAuthenticate by GIACT.
 *
 * `70` - **Boarding Decision.** Merchant boarding decision made by the platform via risk checks.
 *
 * `71` - **Transaction Risk Decision.** Transaction decision made by the platform via risk checks.
 *
 * `72` - **FANF.** Fixed Acquirer Network Fee from Visa for Merchants processing card-present and
 * card-not-present transactions.
 *
 * `73` - **MCLocation.** Merchant Location Fee from Mastercard for Merchants processing
 * card-present and card-not-present transactions.
 *
 * `74` - **VisaIntegrity.** Transaction Integrity Fee from Visa.
 *
 * `75` - **SaferPayments: Basic.** PCI DSS Compliance Portal from WorldPay for Partner and
 * Facilitator Merchant portfolios.
 *
 * `76` - **SaferPayments: Managed.** PCI DSS Compliance Managed Services from WorldPay for
 * Merchants in Partner and Facilitator portfolios.
 *
 * `77` - **SaferPayments - PCI Non-Validation.** PCI DSS Compliance Portal and/or services were
 * provided but the Merchant failed to meet PCI DSS Compliance.
 *
 * `78` - **OMNITOKENS_VOLUME.** Omni-Channel payment tokenization from WorldPay.
 *
 * `79` - **Payout Return.** A Payout Disbursement was returned when attempted.
 *
 * `80` - **Payout Partial Return.** A Payout Disbursement was partially returned when attempted.
 *
 * `81` - **Revenue Share.** A configuration of multiple entities dividing revenue.
 *
 * `82` - **Card Settlement.** The funds from a card payment captured and authorized in a
 * transaction have been settled.
 *
 * `83` - **eCheck Settlement.** The funds from an ACH/eCheck payment used in a transaction have
 * been settled.
 *
 * `84` - **Revenue Share from Card.** Funds have been captured in a Revenue Share configuration
 * from a card payment transaction.
 *
 * `85` - **Revenue Share from eCheck.** Funds have been captured in a Revenue Share configuration
 * from an ACH / eCheck payment transaction.
 *
 * `86` - **Revenue Share Payout.** Funds from a Revenue Share capture have been settled and
 * disbursed to the applicable entities.
 *
 * `88` - **PLAID_IDENTITY_MACH**
 *
 * `89` - **TXN_PLAID_IDENTITY_MACH**
 *
 * `90` - **PLAID_GET_IDENTITY**
 *
 * `91` - **TXN_PLAID_GET_IDENTITY**
 *
 * `92` - **PLAID_GET_AUTH**
 *
 * `93` - **TXN_PLAID_GET_AUTH**
 *
 * `96` - **OMNITOKENS_MONTHLY** Omnitokens Monthly Fee.
 *
 * `200` - **VALUTEC_ESSENTIAL_GIFT. External Fees**
 *
 * `201` - **VALUTEC_ESSENTIAL_MONTHLY_TXN. External Fees**
 *
 * `202` - **VALUTEC_DIGITAL_GIFT_PLUS_PACKAGE. External Fees**
 *
 * `203` - **VALUTEC_DIGITAL_GIFT_PLUS_PACKAGE_TXN. External Fees**
 *
 * `204` - **VALUTEC_LOYALTY_PLUS_PACKAGE. External Fees**
 *
 * `205` - **VALUTEC_LOYALTY_PLUS_PACKAGE_TXN. External Fees**
 *
 * `206` - **VALUTEC_TRANSACTION_FEE. External Fees**
 *
 * `207` - **VALUTEC_SETUP_FEE. External Fees**
 *
 * `208` - **VALUTEC_GIFT_ACH_POOLING. External Fees**
 *
 * `209` - **VALUTEC_JUMP_START_KIT. External Fees**
 *
 * `210` - **VALUTEC_LAUNCH_BOX_KIT. External Fees**
 *
 * `211` - **VALUTEC_500_CUSTOM_CARDS. External Fees**
 *
 * `212` - **VALUTEC_MAINTENANCE_FEE. External Fees**
 *
 * `213` - **VALUTEC_DIGITAL_GIFT_PLUS_PACKAGE_ME. External Fees**
 *
 * `214` - **EFE_MWC_RESIDUAL_ATELIO**
 *
 * `215` - **EFE_MWC_RESIDUAL_PARAFIN**
 *
 * `216` - **EFE_MWC_BILLING**
 *
 * `217` - **FRAUDSIGHT_CNP_DECISION**
 *
 * `218` - **FRAUDSIGHT_CP_DECISION**
 *
 * `230` - **VALUTEC_OVERAGE_TRANSACTION_FEE. External Fees**
 *
 * `231` - **VALUTEC_STANDARD_MOBILE_PASS_MONTHLY_APPLE. External Fees**
 *
 * `232` - **VALUTEC_NFC_MOBILE_PASS_MONTHLY. External Fees**
 *
 * `233` - **VALUTEC_STANDARD_MOBILE_PASS_MONTHLY_GOOGLE. External Fees**
 *
 * `234` - **VALUTEC_ONLINE_GIFT_WEBSITE_MONTHLY. External Fees**
 *
 * `235` - **VALUTEC_MARKETING_360_MONTHLY. External Fees**
 *
 * `236` - **VALUTEC_ONLINE_GIFT_CARD_VOLUME_FEE. External Fees**
 *
 * `237` - **VALUTEC_SOCIAL_SHARING_MONTHLY. External Fees**
 *
 * `238` - **VALUTEC_DIGICARD_MONTHLY. External Fees**
 *
 * `239` - **VALUTEC_LOYALTY_STANDARD_MONTHLY. External Fees**
 *
 * `240` - **VALUTEC_AUTO_REWARDS_LPR_MONTHLY. External Fees**
 *
 * `241` - **VALUTEC_ONECARD_SETUP_FEE. External Fees**
 *
 * `242` - **VALUTEC_ONECARD_MONTHLY_FEE. External Fees**
 *
 * `243` - **VALUTEC_MONTHLY_FEE_CHOICE. External Fees**
 *
 * `244` - **VALUTEC_SYSTEM_ACCESS. External Fees**
 *
 * `245` - **VALUTEC_TRANSACTION. External Fees**
 *
 * `246` - **VALUTEC_MONTHLY_FEE_LAUNCHBOX. External Fees**
 *
 * `247` - **VALUTEC_MONTHLY_FEE_JUMPSTART**
 *
 * `248` - **VALUTEC_ONECARD_PHYSICAL_FULFILLMENT_FEE. External Fees**
 *
 * `249` - **VALUTEC_ONECARD_VIRTUAL_FULFILLMENT_FEE. External Fees**
 *
 * `250` - **VALUTEC_CUSTOMIZED_REPORTING. External Fees**
 *
 * `251` - **VALUTEC_TRANSACTION_FILE_FEED. External Fees**
 *
 * `252` - **VALUTEC_250_CUSTOM_CARDS. External Fees**
 *
 * `253` - **VALUTEC_1000_CUSTOM_CARDS. External Fees**
 *
 * `254` - **VALUTEC_2500_CUSTOM_CARDS. External Fees**
 *
 * `255` - **VALUTEC_5000_CUSTOM_CARDS. External Fees**
 *
 * `256` - **VALUTEC_10000_CUSTOM_CARDS. External Fees**
 *
 * `257` - **VALUTEC_15000_CUSTOM_CARDS. External Fees**
 *
 * `258` - **VALUTEC_20000_CUSTOM_CARDS. External Fees**
 *
 * `259` - **VALUTEC_25000_CUSTOM_CARDS. External Fees**
 *
 * `260` - **VALUTEC_250_EXPRESS_CARDS. External Fees**
 *
 * `261` - **VALUTEC_500_EXPRESS_CARDS. External Fees**
 *
 * `262` - **VALUTEC_1000_EXPRESS_CARD. External FeesS**
 *
 * `263` - **VALUTEC_2500_EXPRESS_CARDS. External Fees**
 *
 * `264` - **VALUTEC_5000_EXPRESS_CARDS. External Fees**
 *
 * `265` - **VALUTEC_10000_EXPRESS_CARDS. External Fees**
 *
 * `266` - **VALUTEC_SPECIALTY_CARDS. External Fees**
 *
 * `267` - **VALUTEC_KEYTAGS. External Fees**
 *
 * `268` - **VALUTEC_SLEEVES_CARRIERS_HANGERS. External Fees**
 *
 * `269` - **VALUTEC_SIGNATURE_PANEL. External Fees**
 *
 * `270` - **VALUTEC_4_4_PRINTING. External Fees**
 *
 * `271` - **VALUTEC_SPECIALTY_FINISH. External Fees**
 *
 * `272` - **VALUTEC_PANTONE. External Fees**
 *
 * `273` - **VALUTEC_PIN_SCRATCH. External Fees**
 *
 * `274` - **VALUTEC_MERCHANDISE. External Fees**
 *
 * `275` - **VALUTEC_GIFT_CARD_DESIGN_SETUP_FEE. External Fees**
 *
 * `276` - **VALUTEC_SHIPPING_HANDLING. External Fees**
 *
 * `277` - **VALUTEC_RUSH_FEES. External Fees**
 *
 * `278` - **VALUTEC_SEQUENCING. External Fees**
 *
 * `279` - **VALUTEC_WHOLESALE_FULFILLMENT_FEE. External Fees**
 *
 * `280` - **VALUTEC_MISCELLANEOUS_FEES. External Fees**
 *
 * `281` - **VALUTEC_HOSTING_FEE. External Fees**
 *
 * `282` - **VALUTEC_STORECARD_MONTHLY_FEE. External Fees**
 *
 * `283` - **VALUTEC_GIFT_ACH_FEE_MONTHLY. External Fees**
 *
 * `284` - **VALUTEC_ONECARD_MONTHLY_FEE_STORECARD. External Fees**
 *
 * `400` - **REVBOOST_EMBEDDED_TMS_MONTHLY**
 *
 * `401` - **REVBOOST_EMBEDDED_TMS_PPT**
 *
 * `402` - **TXN_THREAT_METRIX. External Fees**
 *
 * `403` - **THREAT_METRIX_EMAILAGE. External Fees**
 *
 * `404` - **THREAT_METRIX_FRAUD_POINT. External Fees**
 *
 * `405` - **GIACT_INQUIRY. External Fees**
 *
 * `406` - **GIACT_TXN_GAUTHENTICATE. External Fees**
 *
 * `407` - **TRULIOO_IDV. External Fees**
 *
 * `408` - **TRULIOO_AMLLDV. External Fees**
 *
 * `409` - **TRULIOO_BUSINESS_VERIFICATION. External Fees**
 *
 * `410` - **THREAT_METRIX_PHONE_FINDER. External Fees**
 *
 * `601` - **TIER_NON_QUALIFIED_COUNT**
 *
 * `602` - **TIER_QUALIFIED_COUNT**
 *
 * `603` - **TIER_MID_QUALIFIED_COUNT**
 *
 * `604` - **TIER_HIGH_RISK_COUNT**
 *
 * `605` - **TIER_NON_QUALIFIED_VOLUME**
 *
 * `606` - **TIER_QUALIFIED_VOLUME**
 *
 * `607` - **TIER_MID_QUALIFIED_VOLUME**
 *
 * `608` - **TIER_HIGH_RISK_VOLUME**
 *
 * `701` - **NYCE_ANNUAL_FEE**
 *
 * `702` - **PULSE_ANNUAL_FEE**
 *
 * `703` - **CU24_ANNUAL_FEE**
 *
 * `704` - **STAR_ANNUAL_FEE**
 *
 * `705` - **ACCEL_ANNUAL_FEE**
 *
 * `801` - **INGENICO_LINK_2500**, Canada (inactive)
 *
 * `802` - **INGENICO_LANE_3600_STD**, Canada
 *
 * `803` - **INGENICO_LANE_3600_DLX**, Canada (inactive)
 *
 * `804` - **INGENICO_LANE_7000_STD**, Canada
 *
 * `805` - **INGENICO_LANE_7000_DLX**, Canada (inactive)
 *
 * `806` - **INGENICO_MOVE_5000**, Canada (inactive)
 *
 * `807` - **PAYRIX_EQUIPMENT_SETUP_FEE**
 *
 * </details>
 */
export const FeeSchedule1 = {
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
  _43: 43,
  _44: 44,
  _45: 45,
  _46: 46,
  _47: 47,
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
  _88: 88,
  _89: 89,
  _90: 90,
  _91: 91,
  _92: 92,
  _93: 93,
  _96: 96,
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
  _230: 230,
  _231: 231,
  _232: 232,
  _233: 233,
  _234: 234,
  _235: 235,
  _236: 236,
  _237: 237,
  _238: 238,
  _239: 239,
  _240: 240,
  _241: 241,
  _242: 242,
  _243: 243,
  _244: 244,
  _245: 245,
  _246: 246,
  _247: 247,
  _248: 248,
  _249: 249,
  _250: 250,
  _251: 251,
  _252: 252,
  _253: 253,
  _254: 254,
  _255: 255,
  _256: 256,
  _257: 257,
  _258: 258,
  _259: 259,
  _260: 260,
  _261: 261,
  _262: 262,
  _263: 263,
  _264: 264,
  _265: 265,
  _266: 266,
  _267: 267,
  _268: 268,
  _269: 269,
  _270: 270,
  _271: 271,
  _272: 272,
  _273: 273,
  _274: 274,
  _275: 275,
  _276: 276,
  _277: 277,
  _278: 278,
  _279: 279,
  _280: 280,
  _281: 281,
  _282: 282,
  _283: 283,
  _284: 284,
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
  _701: 701,
  _702: 702,
  _703: 703,
  _704: 704,
  _705: 705,
  _801: 801,
  _802: 802,
  _803: 803,
  _804: 804,
  _805: 805,
  _806: 806,
  _807: 807,
} as const;
export type FeeSchedule1 = (typeof FeeSchedule1)[keyof typeof FeeSchedule1] | (number & {});

export const feeSchedule1Schema: EnumSchema<FeeSchedule1> = s.enumOf<FeeSchedule1>(FeeSchedule1);
