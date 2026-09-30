import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * <details><summary>Valid Values</summary>
 *
 * - `1` - **apiKeys**
 *
 * - `2` - **contacts**
 *
 * - `3` - **customers**
 *
 * - `4` - **alertTriggers**
 *
 * - `5` - **iplists**
 *
 * - `6` - **items**
 *
 * - `7` - **alerts**
 *
 * - `8` - **logins**
 *
 * - `9` - **merchants**
 *
 * - `10` - **orgs**
 *
 * - `12` - **permissions**
 *
 * - `13` - **decisions**
 *
 * - `14` - **parameters**
 *
 * - `15` - **sessions**
 *
 * - `16` - **alertActions**
 *
 * - `17` - **tokens**
 *
 * - `18` - **txns**
 *
 * - `19` - **teamLogins**
 *
 * - `20` - **credentials**
 *
 * - `21` - **members**
 *
 * - `22` - **accounts**
 *
 * - `23` - **plans**
 *
 * - `24` - **subscriptions**
 *
 * - `25` - **subscriptionTokens**
 *
 * - `26` - **disbursements**
 *
 * - `28` - **fees**
 *
 * - `29` - **funds**
 *
 * - `30` - **orgEntities**
 *
 * - `31` - **payouts**
 *
 * - `32` - **feeRules**
 *
 * - `33` - **entityRefs**
 *
 * - `34` - **chargebacks**
 *
 * - `35` - **decisionRules**
 *
 * - `36` - **entities**
 *
 * - `37` - **facilitators**
 *
 * - `38` - **partitions**
 *
 * - `39` - **merchantResults**
 *
 * - `40` - **mccs**
 *
 * - `41` - **mappings**
 *
 * - `42` - **refunds**
 *
 * - `43` - **batches**
 *
 * - `44` - **txnResults**
 *
 * - `45` - **confirmCodes**
 *
 * - `46` - **accountVerifications**
 *
 * - `47` - **disbursementResults**
 *
 * - `48` - **reserveEntries**
 *
 * - `49` - **chargebackMessages**
 *
 * - `50` - **hosts**
 *
 * - `53` - **txnRefs**
 *
 * - `54` - **verifications**
 *
 * - `55` - **verificationResults**
 *
 * - `56` - **chargebackMessageResults**
 *
 * - `59` - **adjustments**
 *
 * - `60` - **txnDatas**
 *
 * - `61` - **revenueBoosts**
 *
 * - `62` - **orgFlows**
 *
 * - `63` - **orgFlowActions**
 *
 * - `64` - **accountVerificationResults**
 *
 * - `65` - **disbursementRefs**
 *
 * - `66` - **reserves**
 *
 * - `67` - **entityReserves**
 *
 * - `68` - **txnReports**
 *
 * - `69` - **payoutFlows**
 *
 * - `70` - **vendors**
 *
 * - `71` - **fundOrigins**
 *
 * - `72` - **entityRoutes**
 *
 * - `74` - **terminals**
 *
 * - `75` - **terminalRefs**
 *
 * - `76` - **holds**
 *
 * - `77` - **holdNotes**
 *
 * - `78` - **files**
 *
 * - `79` - **messageThreads**
 *
 * - `80` - **messages**
 *
 * - `81` - **bins**
 *
 * - `82` - **feeModifiers**
 *
 * - `83` - **versions**
 *
 * - `84` - **chargebackDocuments**
 *
 * - `85` - **divisions**
 *
 * - `86` - **entityReturns**
 *
 * - `87` - **chargebackStatuses**
 *
 * - `88` - **profitShares**
 *
 * - `89` - **profitShareResults**
 *
 * - `90` - **aggregations**
 *
 * - `91` - **aggregationResultGroups**
 *
 * - `92` - **aggregationResults**
 *
 * - `93` - **auditLogs**
 *
 * - `94` - **invoiceParameters**
 *
 * - `95` - **invoices**
 *
 * - `96` - **secrets**
 *
 * - `97` - **watchlists**
 *
 * - `98` - **watchlistItems**
 *
 * - `99` - **txnMetadatas**
 *
 * - `100` - **invoiceResults**
 *
 * - `101` - **invoiceItems**
 *
 * - `102` - **invoiceLineItems**
 *
 * - `103` - **profitShareRules**
 *
 * - `104` - **configurations**
 *
 * - `105` - **currencyRates**
 *
 * - `106` - **terminalTxns**
 *
 * - `107` - **terminalTxnDatas**
 *
 * - `108` - **terminalTxnRefs**
 *
 * - `109` - **terminalTxnResults**
 *
 * - `110` - **configurationStages**
 *
 * - `111` - **disbursementEntries**
 *
 * - `112` - **decisionActions**
 *
 * - `113` - **notes**
 *
 * - `114` - **noteDocuments**
 *
 * - `115` - **paymentUpdates**
 *
 * - `117` - **paymentUpdateGroups**
 *
 * - `118` - **authTokens**
 *
 * - `119` - **reportResults**
 *
 * - `120` - **reports**
 *
 * - `121` - **reportItems**
 *
 * - `122` - **entityDebts**
 *
 * - `123` - **billings**
 *
 * - `124` - **billingModifiers**
 *
 * - `125` - **statements**
 *
 * - `127` - **billingEvents**
 *
 * - `128` - **fundingParameters**
 *
 * - `129` - **requestTokens**
 *
 * - `130` - **accountRefs**
 *
 * - `131` - **settlements**
 *
 * - `132` - **entityDatas**
 *
 * - `133` - **terminalTxnMetadatas**
 *
 * - `134` - **batchRefs**
 *
 * - `135` - **verificationRefs**
 *
 * - `136` - **externalFees**
 *
 * - `137` - **saferPayments**
 *
 * - `138` - **mfaRecoveryCodes**
 *
 * - `139` - **debtorEntities**
 *
 * - `140` - **omniTokens**
 *
 * - `141` - **changeRequests**
 *
 * - `142` - **txnSession**
 *
 * - `143` - **revShareSchedules**
 *
 * - `144` - **revShareStatements**
 *
 * - `145` - **loginsHelpers**
 *
 * - `146` - **entityCustomFields**
 *
 * - `147' - **DisbursementEntriesLog**
 *
 * - `148` - **merchantPlatformStatuses**
 *
 * - `149` - **DisbursementEntitiesLog**
 *
 * - `150` - **orgsVASSaferPayments**
 *
 * - `151` - **orgsVASOmniTokens**
 *
 * - `152` - **orgsVASRevenueBoosts**
 *
 * - `153` - **tokenResults**
 *
 * - `154` - **PlaidConsumerAccounts**
 *
 * - `155` - **appleDomains**
 *
 * - `156` - **PlaidConsumerPayments**
 *
 * - `157` - **saferPaymentsCompliance**
 *
 * - `158` - **orgFlowRules**
 *
 * - `159` - **TaxFormRequests**
 *
 * - `160` - **HostThemes**
 *
 * - `161` - **IntegrationResults**
 *
 * - `162` - **VasEfeOffers**
 *
 * - `163` - **VasEfeOfferUpdates**
 *
 * - `165` - **EmbeddedFinance**
 *
 * - `166` - **OrgsVASEfeProducts**
 *
 * - `167` - **EntityTerms**
 *
 * - `168` - **PinlessDebitConversions**
 *
 * - `169` - **OrgsVASPinlessDebitConversions**
 *
 * - `170` - **FraudSightEnablements**
 *
 * - `171` - **FraudSightResults**
 *
 * - `172` - **OrgsVASFraudSightEnablements** </details>
 */
export const AlertTriggerResource1 = {
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
  _28: 28,
  _29: 29,
  _30: 30,
  _31: 31,
  _32: 32,
  _33: 33,
  _34: 34,
  _35: 35,
  _36: 36,
  _37: 37,
  _38: 38,
  _39: 39,
  _40: 40,
  _41: 41,
  _42: 42,
  _43: 43,
  _44: 44,
  _45: 45,
  _46: 46,
  _47: 47,
  _48: 48,
  _49: 49,
  _50: 50,
  _53: 53,
  _54: 54,
  _55: 55,
  _56: 56,
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
  _97: 97,
  _98: 98,
  _99: 99,
  _100: 100,
  _101: 101,
  _102: 102,
  _103: 103,
  _104: 104,
  _105: 105,
  _106: 106,
  _107: 107,
  _108: 108,
  _109: 109,
  _110: 110,
  _111: 111,
  _112: 112,
  _113: 113,
  _114: 114,
  _115: 115,
  _117: 117,
  _118: 118,
  _119: 119,
  _120: 120,
  _121: 121,
  _122: 122,
  _123: 123,
  _124: 124,
  _125: 125,
  _127: 127,
  _128: 128,
  _129: 129,
  _130: 130,
  _131: 131,
  _132: 132,
  _133: 133,
  _134: 134,
  _135: 135,
  _136: 136,
  _137: 137,
  _138: 138,
  _139: 139,
  _140: 140,
  _141: 141,
  _142: 142,
  _143: 143,
  _144: 144,
  _145: 145,
  _146: 146,
  _147: 147,
  _148: 148,
  _149: 149,
  _150: 150,
  _151: 151,
  _152: 152,
  _153: 153,
  _154: 154,
  _155: 155,
  _156: 156,
  _157: 157,
  _158: 158,
  _159: 159,
  _160: 160,
  _161: 161,
  _162: 162,
  _163: 163,
  _165: 165,
  _166: 166,
  _167: 167,
  _168: 168,
  _169: 169,
  _170: 170,
  _171: 171,
  _172: 172,
} as const;
export type AlertTriggerResource1 =
  | (typeof AlertTriggerResource1)[keyof typeof AlertTriggerResource1]
  | (number & {});

export const alertTriggerResource1Schema: EnumSchema<AlertTriggerResource1> =
  s.enumOf<AlertTriggerResource1>(AlertTriggerResource1);
