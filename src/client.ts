import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AccountsVerifications } from "./resources/accounts-verifications.js";
import { Accounts } from "./resources/accounts.js";
import { Adjustments } from "./resources/adjustments.js";
import { AggregationResultGroups } from "./resources/aggregation-result-groups.js";
import { AggregationResults } from "./resources/aggregation-results.js";
import { Aggregations } from "./resources/aggregations.js";
import { AlertActions } from "./resources/alert-actions.js";
import { AlertTriggers } from "./resources/alert-triggers.js";
import { Alerts } from "./resources/alerts.js";
import { ApiKeys } from "./resources/api-keys.js";
import { AppleDomainsMassEnablement } from "./resources/apple-domains-mass-enablement.js";
import { AppleDomains } from "./resources/apple-domains.js";
import { AuthenticationTokens } from "./resources/authentication-tokens.js";
import { BatchesSettlements } from "./resources/batches-settlements.js";
import { Bins } from "./resources/bins.js";
import { ChangeRequests } from "./resources/change-requests.js";
import { ChargebackDocuments } from "./resources/chargeback-documents.js";
import { ChargebackMessageResults } from "./resources/chargeback-message-results.js";
import { ChargebackMessages } from "./resources/chargeback-messages.js";
import { ChargebackStatuses } from "./resources/chargeback-statuses.js";
import { Chargebacks } from "./resources/chargebacks.js";
import { ConfirmationCodes } from "./resources/confirmation-codes.js";
import { Contacts } from "./resources/contacts.js";
import { Credentials } from "./resources/credentials.js";
import { Customers } from "./resources/customers.js";
import { DecisionActions } from "./resources/decision-actions.js";
import { DecisionRules } from "./resources/decision-rules.js";
import { Decisions } from "./resources/decisions.js";
import { DisbursementEntries } from "./resources/disbursement-entries.js";
import { DisbursementResults } from "./resources/disbursement-results.js";
import { Disbursements } from "./resources/disbursements.js";
import { EmbeddedFinance } from "./resources/embedded-finance.js";
import { EntitiesCustomFields } from "./resources/entities-custom-fields.js";
import { Entities } from "./resources/entities.js";
import { EntityData } from "./resources/entity-data.js";
import { EntityDebts } from "./resources/entity-debts.js";
import { EntityReturns } from "./resources/entity-returns.js";
import { EntityTerms } from "./resources/entity-terms.js";
import { Entries } from "./resources/entries.js";
import { EntryOrigin } from "./resources/entry-origin.js";
import { FraudSightEnablements } from "./resources/fraud-sight-enablements.js";
import { FraudSightResults } from "./resources/fraud-sight-results.js";
import { FundOrigins } from "./resources/fund-origins.js";
import { Funds } from "./resources/funds.js";
import { HostThemes } from "./resources/host-themes.js";
import { InvoiceItems } from "./resources/invoice-items.js";
import { InvoiceLineItems } from "./resources/invoice-line-items.js";
import { InvoiceParameters } from "./resources/invoice-parameters.js";
import { InvoiceResults } from "./resources/invoice-results.js";
import { Invoices } from "./resources/invoices.js";
import { IpAddressLists } from "./resources/ip-address-lists.js";
import { LoginsHelpers } from "./resources/logins-helpers.js";
import { Logins } from "./resources/logins.js";
import { Mappings } from "./resources/mappings.js";
import { Members } from "./resources/members.js";
import { MerchantPlatformStatuses } from "./resources/merchant-platform-statuses.js";
import { MerchantResults } from "./resources/merchant-results.js";
import { Merchants } from "./resources/merchants.js";
import { MessageThreads } from "./resources/message-threads.js";
import { Messages } from "./resources/messages.js";
import { NoteDocuments } from "./resources/note-documents.js";
import { Notes } from "./resources/notes.js";
import { OmniTokens } from "./resources/omni-tokens.js";
import { OptOuts } from "./resources/opt-outs.js";
import { OrgEntities } from "./resources/org-entities.js";
import { OrgFlowRules } from "./resources/org-flow-rules.js";
import { OrgsVasRevenueBoosts } from "./resources/orgs-vas-revenue-boosts.js";
import { Orgs } from "./resources/orgs.js";
import { PaymentUpdateGroups } from "./resources/payment-update-groups.js";
import { PaymentUpdates } from "./resources/payment-updates.js";
import { Payouts } from "./resources/payouts.js";
import { PendingEntryApi } from "./resources/pending-entry-api.js";
import { PinlessDebitConversions } from "./resources/pinless-debit-conversions.js";
import { Plans } from "./resources/plans.js";
import { ProfitShareResults } from "./resources/profit-share-results.js";
import { RevShareSchedules } from "./resources/rev-share-schedules.js";
import { RevShareStatements } from "./resources/rev-share-statements.js";
import { RevenueBoosts } from "./resources/revenue-boosts.js";
import { SaferPayments } from "./resources/safer-payments.js";
import { Secrets } from "./resources/secrets.js";
import { Sessions } from "./resources/sessions.js";
import { StatementEntry } from "./resources/statement-entry.js";
import { Statements } from "./resources/statements.js";
import { SubscriptionTokens } from "./resources/subscription-tokens.js";
import { Subscriptions } from "./resources/subscriptions.js";
import { TaxFormRequests } from "./resources/tax-form-requests.js";
import { TeamLogins } from "./resources/team-logins.js";
import { Teams } from "./resources/teams.js";
import { TerminalTransactionReference } from "./resources/terminal-transaction-reference.js";
import { TerminalTransactionResults } from "./resources/terminal-transaction-results.js";
import { TerminalTransactionsDatas } from "./resources/terminal-transactions-datas.js";
import { TerminalTransactionsMetadatas } from "./resources/terminal-transactions-metadatas.js";
import { TerminalTransactions } from "./resources/terminal-transactions.js";
import { Terminals } from "./resources/terminals.js";
import { TokenResults } from "./resources/token-results.js";
import { Tokens } from "./resources/tokens.js";
import { TransactionDatas } from "./resources/transaction-datas.js";
import { TransactionHolds } from "./resources/transaction-holds.js";
import { TransactionItems } from "./resources/transaction-items.js";
import { TransactionMetadatas } from "./resources/transaction-metadatas.js";
import { TransactionsResults } from "./resources/transactions-results.js";
import { TransactionsTxns } from "./resources/transactions-txns.js";
import { TxnSessions } from "./resources/txn-sessions.js";
import { ValueAddedServices } from "./resources/value-added-services.js";
import { VasEfeOffers } from "./resources/vas-efe-offers.js";
import { buildServers, type Servers } from "./servers.js";

/**
 *
 * <Callout type="warning"> **Beta SDKs Disclaimer**
 *
 * Worldpay for Platforms provides beta software development kits (SDKs) for the Payrix Pro REST
 * API, auto-generated by APIMatic in .NET, Java, PHP, Python, Ruby, and TypeScript. Use of Payrix
 * Pro SDKs is optional and at your own risk. Worldpay for Platforms does not provide implementation
 * or troubleshooting support for SDK-specific issues. For important limitations, support details,
 * and compliance requirements, see the <a
 * href="https://docs.worldpay.com/apis/payrix/api-specification/payrix/partner#/rest/welcome-to-payrix-pro/welcome-to-payrix-pro/beta-sdks-disclaimer">Payrix
 * Pro API Beta SDKs Disclaimer</a>. </Callout>
 */
export class PayrixClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #apiKeys?: ApiKeys;
  #appleDomains?: AppleDomains;
  #appleDomainsMassEnablement?: AppleDomainsMassEnablement;
  #accounts?: Accounts;
  #accountsVerifications?: AccountsVerifications;
  #adjustments?: Adjustments;
  #aggregations?: Aggregations;
  #aggregationResultGroups?: AggregationResultGroups;
  #aggregationResults?: AggregationResults;
  #alertActions?: AlertActions;
  #alertTriggers?: AlertTriggers;
  #alerts?: Alerts;
  #authenticationTokens?: AuthenticationTokens;
  #batchesSettlements?: BatchesSettlements;
  #bins?: Bins;
  #changeRequests?: ChangeRequests;
  #chargebacks?: Chargebacks;
  #chargebackDocuments?: ChargebackDocuments;
  #chargebackMessageResults?: ChargebackMessageResults;
  #chargebackMessages?: ChargebackMessages;
  #chargebackStatuses?: ChargebackStatuses;
  #confirmationCodes?: ConfirmationCodes;
  #contacts?: Contacts;
  #credentials?: Credentials;
  #customers?: Customers;
  #decisionActions?: DecisionActions;
  #decisionRules?: DecisionRules;
  #decisions?: Decisions;
  #disbursements?: Disbursements;
  #disbursementEntries?: DisbursementEntries;
  #disbursementResults?: DisbursementResults;
  #embeddedFinance?: EmbeddedFinance;
  #entities?: Entities;
  #entityData?: EntityData;
  #entitiesCustomFields?: EntitiesCustomFields;
  #entityDebts?: EntityDebts;
  #entityReturns?: EntityReturns;
  #entries?: Entries;
  #entityTerms?: EntityTerms;
  #entryOrigin?: EntryOrigin;
  #fraudSightEnablements?: FraudSightEnablements;
  #fraudSightResults?: FraudSightResults;
  #funds?: Funds;
  #hostThemes?: HostThemes;
  #fundOrigins?: FundOrigins;
  #ipAddressLists?: IpAddressLists;
  #invoiceItems?: InvoiceItems;
  #invoiceParameters?: InvoiceParameters;
  #invoiceLineItems?: InvoiceLineItems;
  #invoiceResults?: InvoiceResults;
  #invoices?: Invoices;
  #loginsHelpers?: LoginsHelpers;
  #logins?: Logins;
  #mappings?: Mappings;
  #members?: Members;
  #merchantResults?: MerchantResults;
  #merchants?: Merchants;
  #merchantPlatformStatuses?: MerchantPlatformStatuses;
  #messageThreads?: MessageThreads;
  #messages?: Messages;
  #noteDocuments?: NoteDocuments;
  #notes?: Notes;
  #omniTokens?: OmniTokens;
  #optOuts?: OptOuts;
  #orgsVasRevenueBoosts?: OrgsVasRevenueBoosts;
  #orgEntities?: OrgEntities;
  #orgFlowRules?: OrgFlowRules;
  #orgs?: Orgs;
  #paymentUpdateGroups?: PaymentUpdateGroups;
  #paymentUpdates?: PaymentUpdates;
  #payouts?: Payouts;
  #pendingEntryApi?: PendingEntryApi;
  #pinlessDebitConversions?: PinlessDebitConversions;
  #plans?: Plans;
  #profitShareResults?: ProfitShareResults;
  #revenueBoosts?: RevenueBoosts;
  #revShareSchedules?: RevShareSchedules;
  #revShareStatements?: RevShareStatements;
  #saferPayments?: SaferPayments;
  #secrets?: Secrets;
  #sessions?: Sessions;
  #statementEntry?: StatementEntry;
  #statements?: Statements;
  #subscriptionTokens?: SubscriptionTokens;
  #subscriptions?: Subscriptions;
  #taxFormRequests?: TaxFormRequests;
  #teamLogins?: TeamLogins;
  #teams?: Teams;
  #terminalTransactionReference?: TerminalTransactionReference;
  #terminalTransactionsDatas?: TerminalTransactionsDatas;
  #terminalTransactions?: TerminalTransactions;
  #terminalTransactionResults?: TerminalTransactionResults;
  #terminalTransactionsMetadatas?: TerminalTransactionsMetadatas;
  #terminals?: Terminals;
  #tokens?: Tokens;
  #tokenResults?: TokenResults;
  #transactionDatas?: TransactionDatas;
  #transactionMetadatas?: TransactionMetadatas;
  #transactionHolds?: TransactionHolds;
  #transactionItems?: TransactionItems;
  #transactionsResults?: TransactionsResults;
  #transactionsTxns?: TransactionsTxns;
  #txnSessions?: TxnSessions;
  #vasEfeOffers?: VasEfeOffers;
  #valueAddedServices?: ValueAddedServices;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options),
      defaultHeaders: [
        { name: "User-Agent", value: "PayrixClient/1.7.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.7.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options);
  }

  /**
   * Interaction with the API requires authentication. For application integration and persistent
   * authentication, an API key is required.
   */
  get apiKeys(): ApiKeys {
    return (this.#apiKeys ??= new ApiKeys(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * An Apple Domains resource represents the status of Apple Pay registration for a specific
   * merchant and domain.
   */
  get appleDomains(): AppleDomains {
    return (this.#appleDomains ??= new AppleDomains(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * An Apple Domains Mass Enablement resource represents the bulk registration of multiple
   * merchants, each associated with a respective domain, to enable the Apple Pay service.
   */
  get appleDomainsMassEnablement(): AppleDomainsMassEnablement {
    return (this.#appleDomainsMassEnablement ??= new AppleDomainsMassEnablement(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Accounts deals with payment account details for merchant boarding and entity funding.
   * Ultimately, all the business performed within Payrix Pro (be it merchant transactions, vendor
   * income, or facilitator fees) must end up in the entity's payment account.
   */
  get accounts(): Accounts {
    return (this.#accounts ??= new Accounts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Accounts Verification represents an attempt to verify the ownership of a particular bank
   * account by verifying a known deposit amount or credential.
   */
  get accountsVerifications(): AccountsVerifications {
    return (this.#accountsVerifications ??= new AccountsVerifications(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * A way to make monetary adjustments to an entity's funds.
   */
  get adjustments(): Adjustments {
    return (this.#adjustments ??= new Adjustments(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Aggregations acts as a scheduler that contains the needed parameters to properly generate
   * results containing the calculated totals and keep such records in the aggregation results
   * resource.
   */
  get aggregations(): Aggregations {
    return (this.#aggregations ??= new Aggregations(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Aggregation Result Groups Holds data regarding a processed aggregation.
   */
  get aggregationResultGroups(): AggregationResultGroups {
    return (this.#aggregationResultGroups ??= new AggregationResultGroups(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Aggregation Results Holds a field totals calculated when processing an aggregation.
   */
  get aggregationResults(): AggregationResults {
    return (this.#aggregationResults ??= new AggregationResults(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Alert Actions deals with specific action that occurs following a triggered web alert.
   */
  get alertActions(): AlertActions {
    return (this.#alertActions ??= new AlertActions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Alert Trigger deals with triggers associated with web alerts
   */
  get alertTriggers(): AlertTriggers {
    return (this.#alertTriggers ??= new AlertTriggers(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Web alerts, also known as webhooks, are automated notifications sent from the API server when
   * triggered by a specific action that occurs in your portfolio. You can configure the actions
   * that trigger the alerts to notify you of any event that's important to your business model.
   */
  get alerts(): Alerts {
    return (this.#alerts ??= new Alerts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Tokens provide the means through which to safely and securely store payment methods (e.g.
   * credit cards or bank accounts) for later use. A transaction may be initiated for a customer by
   * providing the token as the source of payment data. Similarly, a subscription may be associated
   * with a token for automated recurring billing on that payment instrument.
   */
  get authenticationTokens(): AuthenticationTokens {
    return (this.#authenticationTokens ??= new AuthenticationTokens(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Batches are a container for transactions that enables batch processing to the processor for a
   * merchant (to settle customer sales). Processing transactions for settlement to the processor is
   * done in batches.
   */
  get batchesSettlements(): BatchesSettlements {
    return (this.#batchesSettlements ??= new BatchesSettlements(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Bins Holds information about the issuer of a card. (Bank Issuer Number).
   */
  get bins(): Bins {
    return (this.#bins ??= new Bins(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Change Requests Accounts Verification deals with payment account details for merchant boarding
   * and entity funding. Ultimately, all the business performed within Payrix Pro (be it merchant
   * transactions, vendor income or facilitator fees) must end up in the entity's payment account.
   */
  get changeRequests(): ChangeRequests {
    return (this.#changeRequests ??= new ChangeRequests(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Resources that deal with chargebacks. A chargeback is a dispute of a purchase that has already
   * been charged to an account that can result in a return of funds.
   */
  get chargebacks(): Chargebacks {
    return (this.#chargebacks ??= new Chargebacks(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Represents a file related to the Chargeback.
   */
  get chargebackDocuments(): ChargebackDocuments {
    return (this.#chargebackDocuments ??= new ChargebackDocuments(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Chargeback Message Results represents a message that is received from the processor in relation
   * to a Chargeback message.
   */
  get chargebackMessageResults(): ChargebackMessageResults {
    return (this.#chargebackMessageResults ??= new ChargebackMessageResults(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Resources that deal with chargebacks. A chargeback is a dispute of a purchase that has already
   * been charged to an account that can result in a return of funds.
   */
  get chargebackMessages(): ChargebackMessages {
    return (this.#chargebackMessages ??= new ChargebackMessages(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * The logged status changes of a Chargeback.
   */
  get chargebackStatuses(): ChargebackStatuses {
    return (this.#chargebackStatuses ??= new ChargebackStatuses(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Represents a unique confirmation code issued to an email address, either when a user indicates
   * that they have forgotten their password, or when the system needs to verify the email address
   * associated with a login.
   */
  get confirmationCodes(): ConfirmationCodes {
    return (this.#confirmationCodes ??= new ConfirmationCodes(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * A contact reflects a known, valid individual registered as a contact for the entity. It is
   * purely informational and not a required record.
   */
  get contacts(): Contacts {
    return (this.#contacts ??= new Contacts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Represents an authorization that a given Entity has to connect to an integration to perform a
   * particular action, such as send Transactions to the processor, or board a Merchant with the
   * processor.
   */
  get credentials(): Credentials {
    return (this.#credentials ??= new Credentials(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Customers deals with merchant customer information. Customers may be associated with tokens to
   * create a stored method of payment or with invoices for billing.
   */
  get customers(): Customers {
    return (this.#customers ??= new Customers(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * A piece of conditional logic that makes a Verification Result change the application and the
   * decision action in certain circumstance.
   */
  get decisionActions(): DecisionActions {
    return (this.#decisionActions ??= new DecisionActions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * A piece of conditional logic that makes a Decision apply only in certain circumstances.
   */
  get decisionRules(): DecisionRules {
    return (this.#decisionRules ??= new DecisionRules(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Decisions deal with the schedule and rules for a check done on Transactions.
   */
  get decisions(): Decisions {
    return (this.#decisions ??= new Decisions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * A disbursement represents a movement of funds in an entity's payment account. Records of an
   * occasion where money is either paid to a bank account or received from a bank account.
   */
  get disbursements(): Disbursements {
    return (this.#disbursements ??= new Disbursements(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * A record of disbursement amount come from.
   */
  get disbursementEntries(): DisbursementEntries {
    return (this.#disbursementEntries ??= new DisbursementEntries(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Disbursement Results Represents the results of a Disbursement and and any follow-ups actions
   * (confirmations, returns, etc.).
   */
  get disbursementResults(): DisbursementResults {
    return (this.#disbursementResults ??= new DisbursementResults(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Embedded Finance stores information related to the activation of the resource for an entity.
   * EmbeddedFinance's Valued Added Service provides access to new products and services related to
   * Embedded Finance.
   */
  get embeddedFinance(): EmbeddedFinance {
    return (this.#embeddedFinance ??= new EmbeddedFinance(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Entities are portion of a single facilitator, vendor or merchant. Common business-related
   * details for each type of entity are stored here (like name and address) as well as management
   * details (like which login the entity belongs to). ny kind of business within the Payrix Pro API
   * (like board merchants as a facilitator, capture fees as a vendor or accept payments as a
   * merchant) an entity record is required.
   */
  get entities(): Entities {
    return (this.#entities ??= new Entities(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * An entityData record is used to store a signature image for an entity's acceptance of terms and
   * conditions. This is stored in a separate table so as not to bloat the entities table with
   * signature images that use a lot of space. Additionally, the signatures are not included in API
   * requests for the entities themselves, instead they are requested separately via the entityDatas
   * resource.
   */
  get entityData(): EntityData {
    return (this.#entityData ??= new EntityData(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * the Entity Custom Fields feature, designed to empower partners to send identifiers and
   * Risk-requested items using unlimited custom fields. By leveraging this feature, partners can
   * ensure that their software works seamlessly, leading to increased Boarding Rates. Additionally,
   * partners can avoid waiting for Risk to request information manually, streamlining their
   * operations.
   */
  get entitiesCustomFields(): EntitiesCustomFields {
    return (this.#entitiesCustomFields ??= new EntitiesCustomFields(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Entity Debts represents a record of a debt between entities or an entity and the System.
   */
  get entityDebts(): EntityDebts {
    return (this.#entityDebts ??= new EntityDebts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Represents an ACH transaction or disbursement that has been rejected. The Entity Return will
   * block ACH creations or send out related to its entity and payment.
   */
  get entityReturns(): EntityReturns {
    return (this.#entityReturns ??= new EntityReturns(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * An entry record represents a credit or debit of funds for an entity, possibly part of a
   * transfer of funds between two entities. Any monetary change for an entity in Payrix Pro is
   * recorded in an entry. This serves as a ledger of financial activity for an entity.
   */
  get entries(): Entries {
    return (this.#entries ??= new Entries(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * EntityTerms resource represent the different agreed terms and condition agreed to by merchants
   * during the signup.
   */
  get entityTerms(): EntityTerms {
    return (this.#entityTerms ??= new EntityTerms(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Entry Origin represents a record of sources for funded activity.
   */
  get entryOrigin(): EntryOrigin {
    return (this.#entryOrigin ??= new EntryOrigin(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Monitor and control entity-level access to the FraudSight service, a comprehensive fraud
   * prevention solution for card-present and card-not-present transactions. Track when entities are
   * enabled or disabled for FraudSight and maintain a complete audit trail for proactive fraud
   * management.
   */
  get fraudSightEnablements(): FraudSightEnablements {
    return (this.#fraudSightEnablements ??= new FraudSightEnablements(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Query fraudSightResults to retrieve information about fraud detection results from the
   * FraudSight service.
   */
  get fraudSightResults(): FraudSightResults {
    return (this.#fraudSightResults ??= new FraudSightResults(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Funds deal with aggregate funding amount records. A funds record is a snapshot for funding
   * activity, per entity and currency, and is used to determine available funds for an entity.
   */
  get funds(): Funds {
    return (this.#funds ??= new Funds(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * A host themes retrieves the active theme color associated with a specific host.
   */
  get hostThemes(): HostThemes {
    return (this.#hostThemes ??= new HostThemes(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Each fundOrigin represents the sourced amounts of available funds, which are always traceable
   * to a processor and merchant. This ensures accurate recording and compliance with funding rules.
   * The table is used to determine how to cover negative amounts from fees, chargebacks, refunds,
   * and other events. When disbursements are processed, the origins are recorded and reported to
   * the processor as required.
   */
  get fundOrigins(): FundOrigins {
    return (this.#fundOrigins ??= new FundOrigins(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * An iplist represents a whitelisted or blacklisted IP address or range. As an additional
   * security measure, it may be useful for users to set specific, known IP addresses to be the only
   * allowed IPs for API interaction.
   */
  get ipAddressLists(): IpAddressLists {
    return (this.#ipAddressLists ??= new IpAddressLists(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * A resource that stores line item details for an invoice.
   */
  get invoiceItems(): InvoiceItems {
    return (this.#invoiceItems ??= new InvoiceItems(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Invoice Parameters holds a certain configuration used for creating an invoice such as dba,
   * address, API Key.
   */
  get invoiceParameters(): InvoiceParameters {
    return (this.#invoiceParameters ??= new InvoiceParameters(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * A resource that relates an invoice item with an invoice. It holds information such as quantity,
   * and price each item.
   */
  get invoiceLineItems(): InvoiceLineItems {
    return (this.#invoiceLineItems ??= new InvoiceLineItems(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Invoice Results represents the result of an invoice processing. In other words, when the
   * customer pays for an invoice it will then generate an invoice result.
   */
  get invoiceResults(): InvoiceResults {
    return (this.#invoiceResults ??= new InvoiceResults(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Invoices deals with customer invoice details allowing for presenting charges to a customer and
   * for payments to be made related to certain products or services.
   */
  get invoices(): Invoices {
    return (this.#invoices ??= new Invoices(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * To view and manage utilities that assist with login-related actions such as password resets.
   */
  get loginsHelpers(): LoginsHelpers {
    return (this.#loginsHelpers ??= new LoginsHelpers(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Logins resources deal with individual user details like name and email as well as management
   * details like which partition and division the user belongs to.
   */
  get logins(): Logins {
    return (this.#logins ??= new Logins(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Mappings enable the re-mapping of fields in the API for either in or out, using a set of JSON
   * field mappings. For example, if your system uses a different format for out data that it will
   * send to the API, then you can re-map the in fields for the API using a Mapping resource.
   */
  get mappings(): Mappings {
    return (this.#mappings ??= new Mappings(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * A member represents a control or beneficiary member of the entity. At least one primary member
   * record is required for merchant boarding.
   */
  get members(): Members {
    return (this.#members ??= new Members(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Result created after an oboarding attempt, it will contain important information related to the
   * boarding and attempt.
   */
  get merchantResults(): MerchantResults {
    return (this.#merchantResults ??= new MerchantResults(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Merchant details for transaction processing entities. Together with the entities table, this
   * table defines a merchant. A merchant is primarily an entity that accepts payments and transacts
   * with customers in Payrix Pro.
   */
  get merchants(): Merchants {
    return (this.#merchants ??= new Merchants(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Merchant Platform Statuses provides access to view the status of a merchant's onboarding
   * process to Payrix Pro, including the activation of individual value-added services.
   */
  get merchantPlatformStatuses(): MerchantPlatformStatuses {
    return (this.#merchantPlatformStatuses ??= new MerchantPlatformStatuses(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Represents the sender, receiver, and subject of the Messages resources.
   */
  get messageThreads(): MessageThreads {
    return (this.#messageThreads ??= new MessageThreads(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Represents a message within a Message Thread.
   */
  get messages(): Messages {
    return (this.#messages ??= new Messages(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Note Documents represents a file that is related to a specific note record.
   */
  get noteDocuments(): NoteDocuments {
    return (this.#noteDocuments ??= new NoteDocuments(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Notes handles risk management notes, reviews and releases for a Hold, Transaction and Entity
   * specific data.
   */
  get notes(): Notes {
    return (this.#notes ??= new Notes(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * OmniTokens stores information related to the activation of the resource for an entity.
   * OmniToken's Valued Added Service helps protect transactions and reduce transaction risk.
   */
  get omniTokens(): OmniTokens {
    return (this.#omniTokens ??= new OmniTokens(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Opt Outs provides the ability to disable merchants or entities from participating in specific
   * Value Added Services, such as FraudSight.
   */
  get optOuts(): OptOuts {
    return (this.#optOuts ??= new OptOuts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * OrgsVasNetworkPaymentManager is a way to automatically enroll an entity associated with a
   * specific org in the networkPaymentManager service.
   */
  get orgsVasRevenueBoosts(): OrgsVasRevenueBoosts {
    return (this.#orgsVasRevenueBoosts ??= new OrgsVasRevenueBoosts(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * A record of an association between a particular Org and a particular Entity. You can associate
   * Entities with an Org by creating Org Entity resources. One Org can contain and be associated
   * with many Entities.
   */
  get orgEntities(): OrgEntities {
    return (this.#orgEntities ??= new OrgEntities(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Org Flow Rules Provides access to manage workflows that add or remove merchants from a group
   * based on specific criteria.
   */
  get orgFlowRules(): OrgFlowRules {
    return (this.#orgFlowRules ??= new OrgFlowRules(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Resource that deals with records of all orgs. An org is an arbitrary grouping of entity records
   * that can be attached to other resources as a unit for shared functionality.
   */
  get orgs(): Orgs {
    return (this.#orgs ??= new Orgs(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * A collection of Payment Updates owned by the merchant's entity.
   */
  get paymentUpdateGroups(): PaymentUpdateGroups {
    return (this.#paymentUpdateGroups ??= new PaymentUpdateGroups(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Payment Updates Holds information about the payment update - updating a payment method or
   * account. The Payment Update will be related to a Payment, Subscription Token or Account, and
   * owned by a Payment Update Group.
   */
  get paymentUpdates(): PaymentUpdates {
    return (this.#paymentUpdates ??= new PaymentUpdates(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Resource that tracks details that allow a Disbursement to be paid or debited.
   */
  get payouts(): Payouts {
    return (this.#payouts ??= new Payouts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Pending Entry represents a record of amounts moving in or out of the funds held by an Entity.
   */
  get pendingEntryApi(): PendingEntryApi {
    return (this.#pendingEntryApi ??= new PendingEntryApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Pinless Debit Conversion is a new Value-Added Service (VAS) in the Payrix system. This feature
   * is designed to generate additional revenue and will follow the same merchant enablement process
   * as value-added services.
   */
  get pinlessDebitConversions(): PinlessDebitConversions {
    return (this.#pinlessDebitConversions ??= new PinlessDebitConversions(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Resource that represents a recurring type of payment that charges a certain amount on a weekly,
   * monthly, quarterly, or annual basis.
   */
  get plans(): Plans {
    return (this.#plans ??= new Plans(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Profit Share Results Holds a message regarding a failed Profit Share process.
   */
  get profitShareResults(): ProfitShareResults {
    return (this.#profitShareResults ??= new ProfitShareResults(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * It captures the entities when they are enabled/disabled/re-enabled with networkPaymentManager
   */
  get revenueBoosts(): RevenueBoosts {
    return (this.#revenueBoosts ??= new RevenueBoosts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Rev Share Schedules table records the rules for income sharing, detailing who receives and who
   * pays, along with the start and end dates of these rules. It also identifies the partners
   * involved in revenue sharing and specifies the amounts per event.
   */
  get revShareSchedules(): RevShareSchedules {
    return (this.#revShareSchedules ??= new RevShareSchedules(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Rev Share Statements table stores the final calculated revenue share entries that are billed to
   * partners. It applies the revenue sharing schedule to a month's worth of transactions, resulting
   * in the amount to be billed.
   */
  get revShareStatements(): RevShareStatements {
    return (this.#revShareStatements ??= new RevShareStatements(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Safer Payments provides access to create, view, and update SaferPayments Value Added Service
   * records.
   */
  get saferPayments(): SaferPayments {
    return (this.#saferPayments ??= new SaferPayments(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Keys used to decrypt data or an indicator of which key to be used to decrypt data
   */
  get secrets(): Secrets {
    return (this.#secrets ??= new Secrets(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Resources that deals with secret (private) and public (publishable) user session keys for
   * authentication in API interactions.
   */
  get sessions(): Sessions {
    return (this.#sessions ??= new Sessions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Statement Entry represents a record of funds owed for a billing schedule.
   */
  get statementEntry(): StatementEntry {
    return (this.#statementEntry ??= new StatementEntry(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Resources for dealing with billing statements for entities. Statements are generated from
   * billing configurations and represent the amount billed for a given period of time.
   */
  get statements(): Statements {
    return (this.#statements ??= new Statements(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Represents an association between a Subscription and a means of payment (Token) for that
   * Subscription.
   */
  get subscriptionTokens(): SubscriptionTokens {
    return (this.#subscriptionTokens ??= new SubscriptionTokens(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Resources that deal with customer subscriptions to a plan. Customers are subscribed to plans to
   * allow for recurring payments to be made from that customer.
   */
  get subscriptions(): Subscriptions {
    return (this.#subscriptions ??= new Subscriptions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Tax Form Requests provides access to create and view requests for tax documents, returning the
   * PDF of the requested tax document.
   */
  get taxFormRequests(): TaxFormRequests {
    return (this.#taxFormRequests ??= new TaxFormRequests(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Represents the link between a Login and a Team as well as the Login's rights on the Team. The
   * Login resource identified in its login field is considered part of the Team.
   */
  get teamLogins(): TeamLogins {
    return (this.#teamLogins ??= new TeamLogins(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * A team is an arbitrary grouping of user records that may have access provisioned on each other
   * and can be attached to other resources as a unit for shared functionality.
   */
  get teams(): Teams {
    return (this.#teams ??= new Teams(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Terminal Transaction Reference represents a reference code issued by the Processor in relation
   * to a particular Transaction.
   */
  get terminalTransactionReference(): TerminalTransactionReference {
    return (this.#terminalTransactionReference ??= new TerminalTransactionReference(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * The terminal_txn_datas database table stores signature data for a terminal activation request.
   * A terminalTxnData represents a signature image for a customer’s acceptance of terms and
   * conditions for the resulting transaction.
   */
  get terminalTransactionsDatas(): TerminalTransactionsDatas {
    return (this.#terminalTransactionsDatas ??= new TerminalTransactionsDatas(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Holds all of the information to a related final transaction and is used to reconcile with the
   * actual, final transaction.
   */
  get terminalTransactions(): TerminalTransactions {
    return (this.#terminalTransactions ??= new TerminalTransactions(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Represents the result of a Transaction from a processor, which can be approved, declined, or
   * raise an error.
   */
  get terminalTransactionResults(): TerminalTransactionResults {
    return (this.#terminalTransactionResults ??= new TerminalTransactionResults(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Terminal Transactions Metadatas Represents data from an EMV Transaction and/or returned by the
   * credit card network associated with a Transaction.
   */
  get terminalTransactionsMetadatas(): TerminalTransactionsMetadatas {
    return (this.#terminalTransactionsMetadatas ??= new TerminalTransactionsMetadatas(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Resources for dealing with transaction that occur on physical terminals, such as a table or
   * register.
   */
  get terminals(): Terminals {
    return (this.#terminals ??= new Terminals(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Tokens provide the means through which to safely and securely store payment methods (e.g.
   * credit cards or bank accounts) for later use.
   */
  get tokens(): Tokens {
    return (this.#tokens ??= new Tokens(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Token Results represent events that occur during the transaction process, specifically related
   * to the usage or creation of tokens. These events are derived from the processor's response and
   * are crucial for tracking and managing token-related activities.
   */
  get tokenResults(): TokenResults {
    return (this.#tokenResults ??= new TokenResults(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Transactions Datas represents data associated with a Transaction - in particular, a Base64
   * encoded image of a signature captured at the time of entering the Transaction.
   */
  get transactionDatas(): TransactionDatas {
    return (this.#transactionDatas ??= new TransactionDatas(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Transaction Metadatas represents data from an EMV Transaction and/or returned by the credit
   * card network associated with a Transaction.
   */
  get transactionMetadatas(): TransactionMetadatas {
    return (this.#transactionMetadatas ??= new TransactionMetadatas(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * A holds resource represents a reviewable action taken on a Transaction.
   */
  get transactionHolds(): TransactionHolds {
    return (this.#transactionHolds ??= new TransactionHolds(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * An Item is a line item that is associated with a particular Transaction. It allows you to
   * describe the cost, quantity and other details of each line in the Transaction.
   */
  get transactionItems(): TransactionItems {
    return (this.#transactionItems ??= new TransactionItems(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Transactions Results represents the result of a Transaction from a processor. For example, the
   * Transaction may be approved, declined, or raise an error.
   */
  get transactionsResults(): TransactionsResults {
    return (this.#transactionsResults ??= new TransactionsResults(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Resources for dealing with information relating to a particular credit card transaction,
   * including the merchant, token, subscription, customer and card information.
   */
  get transactionsTxns(): TransactionsTxns {
    return (this.#transactionsTxns ??= new TransactionsTxns(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * The txnSessionKey is designed to securely handle transactions within Payrix Pro
   * PayFields/PayFrame integrations. This key aims to prevent misuse by third parties, as it is
   * hosted on the front-end side. Unlike the public apiKey, which is vulnerable to bot attacks and
   * fraudulent activities, the txnSessionKey offers enhanced security. Partners can generate keys
   * with various configurations, including default values or customized settings.
   */
  get txnSessions(): TxnSessions {
    return (this.#txnSessions ??= new TxnSessions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * VAS EfeOffers provides Access to view Embedded Finance offers for Referrers and Merchants,
   * including terms, eligibility and application details.
   */
  get vasEfeOffers(): VasEfeOffers {
    return (this.#vasEfeOffers ??= new VasEfeOffers(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Value Added Services is a collection of additional services and features beyond the core
   * payment processing functionality that provide additional value to the user.
   */
  get valueAddedServices(): ValueAddedServices {
    return (this.#valueAddedServices ??= new ValueAddedServices(this.#rawClient, this.#servers, this.#auth));
  }
}
