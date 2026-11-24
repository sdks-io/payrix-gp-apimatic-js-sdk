import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AccessToken } from "./resources/access-token.js";
import { Accounts } from "./resources/accounts.js";
import { Actions } from "./resources/actions.js";
import { AuthenticationsApi } from "./resources/authentications-api.js";
import { Batches } from "./resources/batches.js";
import { Consents } from "./resources/consents.js";
import { CurrencyConversions } from "./resources/currency-conversions.js";
import { DisputesApi } from "./resources/disputes-api.js";
import { FileProcessing } from "./resources/file-processing.js";
import { Funds } from "./resources/funds.js";
import { Installments } from "./resources/installments.js";
import { Links } from "./resources/links.js";
import { Merchants } from "./resources/merchants.js";
import { Orders } from "./resources/orders.js";
import { Payers } from "./resources/payers.js";
import { PaymentMethodsApi } from "./resources/payment-methods-api.js";
import { Reports } from "./resources/reports.js";
import { SettlementReporting } from "./resources/settlement-reporting.js";
import { TransactionsApi } from "./resources/transactions-api.js";
import { Transfers } from "./resources/transfers.js";
import { Verifications } from "./resources/verifications.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * GP API: one REST API for payments, payment methods, 3-D Secure, merchants, funds, disputes and
 * reporting across Global Payments' platforms.
 */
export class GlobalPaymentsApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #accessToken?: AccessToken;
  #accounts?: Accounts;
  #actions?: Actions;
  #authenticationsApi?: AuthenticationsApi;
  #batches?: Batches;
  #consents?: Consents;
  #currencyConversions?: CurrencyConversions;
  #disputesApi?: DisputesApi;
  #fileProcessing?: FileProcessing;
  #funds?: Funds;
  #installments?: Installments;
  #links?: Links;
  #merchants?: Merchants;
  #orders?: Orders;
  #payers?: Payers;
  #paymentMethodsApi?: PaymentMethodsApi;
  #reports?: Reports;
  #settlementReporting?: SettlementReporting;
  #transactionsApi?: TransactionsApi;
  #transfers?: Transfers;
  #verifications?: Verifications;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "GLOBAL_PAYMENTS_API_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "GlobalPaymentsApiClient/0.1.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "0.1.0", schema: s.string() },
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
   * Access Tokens are required to execute all API actions, you can use this resource to obtain one.
   * The authority of the bearer token; the actions it can execute, is determined by the associated
   * Merchant ID, Accounts and Permissions of the app used to create it.
   */
  get accessToken(): AccessToken {
    return (this.#accessToken ??= new AccessToken(this.#rawClient, this.#servers));
  }

  /**
   * Accounts represent the payment processing capability a merchant is set up for on the Global
   * Payments API.
   */
  get accounts(): Accounts {
    return (this.#accounts ??= new Accounts(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Actions represent request and response messages sent to GP API.
   */
  get actions(): Actions {
    return (this.#actions ??= new Actions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Authentications represent the attempt to validate the payer and reduce the risk of fraud when
   * transaction is in processing.
   */
  get authenticationsApi(): AuthenticationsApi {
    return (this.#authenticationsApi ??= new AuthenticationsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * A Batch represents a group of transactions that commence the funding process together. Batches
   * have aggregate amount and count totals of all the transactions in the batch. Once a batch is
   * closed all transactions assigned to that batch will be funded to the merchant. Once a batch is
   * closed no more transactions can be added or removed from that batch. Transactions that are in a
   * closed batch cannot be cancelled/reversed and must be refunded.
   */
  get batches(): Batches {
    return (this.#batches ??= new Batches(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Consents enable merchants to obtain explicit authorization from payers, allowing Global
   * Payments to collect, use, and disclose their personal information for defined purposes like
   * fraud detection and prevention, transaction processing.
   */
  get consents(): Consents {
    return (this.#consents ??= new Consents(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Currency Conversions represent the conversion, or attempt to convert, a Transaction amount to
   * the equivalent amount in the currency of the Payer. This is referred to as DCC for Dynamic
   * Currency Conversion
   */
  get currencyConversions(): CurrencyConversions {
    return (this.#currencyConversions ??= new CurrencyConversions(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Disputes are an act, initiated by a Payer or Payer’s bank to query or challenge the previous
   * transfer of funds between that Payer and the Merchant.
   */
  get disputesApi(): DisputesApi {
    return (this.#disputesApi ??= new DisputesApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * File Processing is the Global Payments service that allows merchants and partners to securely
   * submit bulk transactions in a single encrypted file. The API returns a signed URL for uploading
   * the request file, orchestrates processing, and provides a signed URL to download the encrypted
   * response file once processing is complete.
   */
  get fileProcessing(): FileProcessing {
    return (this.#fileProcessing ??= new FileProcessing(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Funds represents the capability to move funds between a Global Payments Funds Management
   * Account (FMA) and a business bank account or debit card.
   */
  get funds(): Funds {
    return (this.#funds ??= new Funds(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Installments represent the installment payment programs that are available to your customers
   * for a specific transaction. We support installment payment programs in multiple regions. These
   * programs allow the cardholder to select the terms and the number of payments. The merchant's
   * transaction settles for the full amount, but the cardholder gets billed a flat amount for a set
   * number of months.
   */
  get installments(): Installments {
    return (this.#installments ??= new Installments(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Links allow you create a unique URL to share with your customers.
   */
  get links(): Links {
    return (this.#links ??= new Links(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Merchants represent a business entity on the Global Payments system. This is the entity that is
   * selling goods and services and has a direct contractual relationship with Global Payments or
   * with one of Global Payments partners.
   */
  get merchants(): Merchants {
    return (this.#merchants ??= new Merchants(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Orders allow an embedded partner to order devices for merchants, check the price of a potential
   * order, and track device shipments.
   */
  get orders(): Orders {
    return (this.#orders ??= new Orders(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Payers represents entities on the Global Payments system that pay for a Merchants goods and
   * services. Merchants can store data against a Payer and their associated Stored Payment Methods
   * which can be used to make a sale.
   */
  get payers(): Payers {
    return (this.#payers ??= new Payers(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Payment Method storage is the Global Payments service where sensitive information is securely
   * stored in exchange for a Global Payments unique identifier. This identifier, commonly referred
   * to as a token, is then used to create Sale and Refund Transactions.
   */
  get paymentMethodsApi(): PaymentMethodsApi {
    return (this.#paymentMethodsApi ??= new PaymentMethodsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Reports are a consolidated or aggregrated view of a merchant's data from the Global Payments
   * platform.
   */
  get reports(): Reports {
    return (this.#reports ??= new Reports(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Settlement Reports provide data from our settlement systems that helps merchants access reports
   * on funds transferred to and from their bank account. This includes Transactions, Disputes,
   * Deposits and Fees
   */
  get settlementReporting(): SettlementReporting {
    return (this.#settlementReporting ??= new SettlementReporting(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Transactions represent the transfer, or the attempt to transfer funds between the Payer and the
   * Merchant using a specific payment method.
   */
  get transactionsApi(): TransactionsApi {
    return (this.#transactionsApi ??= new TransactionsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Transfers represent the movement of funds from one Global Merchant Account to another.
   */
  get transfers(): Transfers {
    return (this.#transfers ??= new Transfers(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Verifications represent the validation of a payment method to ensure it can be used in the
   * creation of a Transaction.
   */
  get verifications(): Verifications {
    return (this.#verifications ??= new Verifications(this.#rawClient, this.#servers, this.#auth));
  }
}
