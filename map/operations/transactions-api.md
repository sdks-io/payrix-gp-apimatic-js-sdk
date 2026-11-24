<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransactionsApi — operations

Accessor: `client.transactionsApi` · Source: `src/resources/transactions-api.ts` · 15 operations · Request and error types: namespace `TransactionsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### adjustSaleTransaction

- **Signature**: `adjustSaleTransaction(request: TransactionsApi.AdjustSaleTransactionRequest, options?: RequestOptions): ApiPromise<ExistingTransactionResponse, TransactionsApi.AdjustSaleTransactionError>`
- **Wire**: `POST /transactions/{id}/adjustment`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ExistingTransactionResponse`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `TransactionsApi.AdjustSaleTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionsApi.AdjustSaleTransactionRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |
| `body` | `body` | — | `AdjustAmtTagRequest` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdjustAmtTagRequest` | `adjustAmtTagRequestSchema` | `src/models/adjust-amt-tag-request.ts` |
| `ExistingTransactionResponse` | `existingTransactionResponseSchema` | `src/models/existing-transaction-response.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### captureSaleTransaction

- **Signature**: `captureSaleTransaction(request: TransactionsApi.CaptureSaleTransactionRequest, options?: RequestOptions): ApiPromise<ExistingTransactionResponse, TransactionsApi.CaptureSaleTransactionError>`
- **Wire**: `POST /transactions/{id}/capture`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ExistingTransactionResponse`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `TransactionsApi.CaptureSaleTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionsApi.CaptureSaleTransactionRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |
| `body` | `body` | — | `ChangeAmtTagLodgingRequest` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChangeAmtTagLodgingRequest` | `changeAmtTagLodgingRequestSchema` | `src/models/change-amt-tag-lodging-request.ts` |
| `ExistingTransactionResponse` | `existingTransactionResponseSchema` | `src/models/existing-transaction-response.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### challengeDisputedTransaction

- **Signature**: `challengeDisputedTransaction(request: TransactionsApi.ChallengeDisputedTransactionRequest, options?: RequestOptions): ApiPromise<ChallengeDisputeResponse, TransactionsApi.ChallengeDisputedTransactionError>`
- **Wire**: `POST /transactions/{id}/challenge`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ChallengeDisputeResponse`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `TransactionsApi.ChallengeDisputedTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionsApi.ChallengeDisputedTransactionRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |
| `body` | `body` | — | `ChallengeDispute` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChallengeDispute` | `challengeDisputeSchema` | `src/models/challenge-dispute.ts` |
| `ChallengeDisputeResponse` | `challengeDisputeResponseSchema` | `src/models/challenge-dispute-response.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### confirmTransaction

- **Signature**: `confirmTransaction(request: TransactionsApi.ConfirmTransactionRequest, options?: RequestOptions): ApiPromise<ConfirmResponse, TransactionsApi.ConfirmTransactionError>`
- **Wire**: `POST /transactions/{id}/confirmation`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConfirmResponse`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `TransactionsApi.ConfirmTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionsApi.ConfirmTransactionRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |
| `body` | `body` | — | `ConfirmRequest` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConfirmRequest` | `confirmRequestSchema` | `src/models/confirm-request.ts` |
| `ConfirmResponse` | `confirmResponseSchema` | `src/models/confirm-response.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### createRefundTransactionFromSale

- **Signature**: `createRefundTransactionFromSale(request: TransactionsApi.CreateRefundTransactionFromSaleRequest, options?: RequestOptions): ApiPromise<ExistingTransactionResponse, TransactionsApi.CreateRefundTransactionFromSaleError>`
- **Wire**: `POST /transactions/{id}/refund`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ExistingTransactionResponse`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `TransactionsApi.CreateRefundTransactionFromSaleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionsApi.CreateRefundTransactionFromSaleRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |
| `body` | `body` | — | `RefundRequest3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `RefundRequest3` | `refundRequest3Schema` | `src/models/refund-request3.ts` |
| `ExistingTransactionResponse` | `existingTransactionResponseSchema` | `src/models/existing-transaction-response.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### createSaleOrRefundTransaction

- **Signature**: `createSaleOrRefundTransaction(request: TransactionsApi.CreateSaleOrRefundTransactionRequest, options?: RequestOptions): ApiPromise<CreateResponseTransactions, TransactionsApi.CreateSaleOrRefundTransactionError>`
- **Wire**: `POST /transactions`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateResponseTransactions`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `TransactionsApi.CreateSaleOrRefundTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionsApi.CreateSaleOrRefundTransactionRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |
| `body` | `body` | — | `CreateRequestTransactions` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateRequestTransactions` | `createRequestTransactionsSchema` | `src/models/create-request-transactions.ts` |
| `CreateResponseTransactions` | `createResponseTransactionsSchema` | `src/models/create-response-transactions.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### getSaleAndRefundTransactions

- **Signature**: `getSaleAndRefundTransactions(request?: TransactionsApi.GetSaleAndRefundTransactionsRequest, options?: RequestOptions): ApiPromise<TransactionsResponse1, TransactionsApi.GetSaleAndRefundTransactionsError>`
- **Wire**: `GET /transactions`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransactionsResponse1`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `TransactionsApi.GetSaleAndRefundTransactionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionsApi.GetSaleAndRefundTransactionsRequest` (35):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `query` | — | `string` | no | — |
| `type` | `query` | — | `TransactionTypeAuthenticationsTransactionType` | no | `TransactionTypeAuthenticationsTransactionType.Sale` |
| `channel` | `query` | — | `ChannelAuthenticationsChannel` | no | — |
| `amount` | `query` | — | `string` | no | — |
| `currency` | `query` | — | `CurrencyAuthenticationsCurrency` | no | — |
| `numberFirst6` | `query` | `number_first6` | `string` | no | — |
| `numberLast4` | `query` | `number_last4` | `string` | no | — |
| `tokenFirst6` | `query` | `token_first6` | `string` | no | — |
| `tokenLast4` | `query` | `token_last4` | `string` | no | — |
| `accountName` | `query` | `account_name` | `string` | no | — |
| `brand` | `query` | — | `BrandTransactionsPaymentMethodCardBrand` | no | — |
| `brandReference` | `query` | `brand_reference` | `string` | no | — |
| `authcode` | `query` | — | `string` | no | — |
| `reference` | `query` | — | `string` | no | — |
| `status` | `query` | — | `StatusTransactionsStatus` | no | — |
| `country` | `query` | — | `string` | no | — |
| `fromTimeCreated` | `query` | `from_time_created` | `string` (date) | no | — |
| `toTimeCreated` | `query` | `to_time_created` | `string` (date) | no | — |
| `batchId` | `query` | `batch_id` | `string` | no | — |
| `orderReference` | `query` | `order.reference` | `string` | no | — |
| `entryMode` | `query` | `entry_mode` | `EntryModeAuthenticationsPaymentMethodEntryMode` | no | — |
| `name` | `query` | — | `string` | no | — |
| `accountId` | `query` | `account_id` | `string` | no | — |
| `siteReference` | `query` | `site_reference` | `string` | no | — |
| `systemMid` | `query` | `system.mid` | `string` | no | — |
| `payerReference` | `query` | `payer.reference` | `string` | no | — |
| `systemHierarchy` | `query` | `system.hierarchy` | `string` | no | — |
| `fingerprint` | `query` | — | `string` | no | — |
| `fingerprintPresenceIndicator` | `query` | `fingerprint_presence_indicator` | `FingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicator` | no | — |
| `resource` | `query` | — | `Resource` | no | — |
| `page` | `query` | — | `number` | no | `1` |
| `pageSize` | `query` | `page_size` | `number` | no | `5` |
| `order` | `query` | — | `Order53` | no | `Order53.Desc` |
| `orderBy` | `query` | `order_by` | `string` | no | `"TIME_CREATED"` |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionTypeAuthenticationsTransactionType` | `transactionTypeAuthenticationsTransactionTypeSchema` | `src/models/transaction-type-authentications-transaction-type.ts` |
| `ChannelAuthenticationsChannel` | `channelAuthenticationsChannelSchema` | `src/models/channel-authentications-channel.ts` |
| `CurrencyAuthenticationsCurrency` | `currencyAuthenticationsCurrencySchema` | `src/models/currency-authentications-currency.ts` |
| `BrandTransactionsPaymentMethodCardBrand` | `brandTransactionsPaymentMethodCardBrandSchema` | `src/models/brand-transactions-payment-method-card-brand.ts` |
| `StatusTransactionsStatus` | `statusTransactionsStatusSchema` | `src/models/status-transactions-status.ts` |
| `EntryModeAuthenticationsPaymentMethodEntryMode` | `entryModeAuthenticationsPaymentMethodEntryModeSchema` | `src/models/entry-mode-authentications-payment-method-entry-mode.ts` |
| `FingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicator` | `fingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicatorSchema` | `src/models/fingerprint-presence-indicator-authentications-payment-method-fingerprint-presence-indicator.ts` |
| `Resource` | `resourceSchema` | `src/models/resource.ts` |
| `Order53` | `order53Schema` | `src/models/order53.ts` |
| `TransactionsResponse1` | `transactionsResponse1Schema` | `src/models/transactions-response1.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### getSingleSaleOrRefundTransaction

- **Signature**: `getSingleSaleOrRefundTransaction(request: TransactionsApi.GetSingleSaleOrRefundTransactionRequest, options?: RequestOptions): ApiPromise<TransactionsSingleRealTime, TransactionsApi.GetSingleSaleOrRefundTransactionError>`
- **Wire**: `GET /transactions/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransactionsSingleRealTime`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `TransactionsApi.GetSingleSaleOrRefundTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionsApi.GetSingleSaleOrRefundTransactionRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionsSingleRealTime` | `transactionsSingleRealTimeSchema` | `src/models/transactions-single-real-time.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### holdTransaction

- **Signature**: `holdTransaction(request: TransactionsApi.HoldTransactionRequest, options?: RequestOptions): ApiPromise<TransactionsHoldResponse, ApiError>`
- **Wire**: `POST /transactions/{id}/hold`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransactionsHoldResponse`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TransactionsApi.HoldTransactionRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |
| `body` | `body` | — | `TransactionsHoldRequest` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionsHoldRequest` | `transactionsHoldRequestSchema` | `src/models/transactions-hold-request.ts` |
| `TransactionsHoldResponse` | `transactionsHoldResponseSchema` | `src/models/transactions-hold-response.ts` |

### incrementExistingTransaction

- **Signature**: `incrementExistingTransaction(request: TransactionsApi.IncrementExistingTransactionRequest, options?: RequestOptions): ApiPromise<ExistingTransactionResponse, TransactionsApi.IncrementExistingTransactionError>`
- **Wire**: `POST /transactions/{id}/incremental`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ExistingTransactionResponse`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `TransactionsApi.IncrementExistingTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionsApi.IncrementExistingTransactionRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |
| `body` | `body` | — | `ChangeAmountAndLodgingRequest` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChangeAmountAndLodgingRequest` | `changeAmountAndLodgingRequestSchema` | `src/models/change-amount-and-lodging-request.ts` |
| `ExistingTransactionResponse` | `existingTransactionResponseSchema` | `src/models/existing-transaction-response.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### reauthSaleTransaction

- **Signature**: `reauthSaleTransaction(request: TransactionsApi.ReauthSaleTransactionRequest, options?: RequestOptions): ApiPromise<ExistingTransactionResponse, TransactionsApi.ReauthSaleTransactionError>`
- **Wire**: `POST /transactions/{id}/reauthorization`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ExistingTransactionResponse`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `TransactionsApi.ReauthSaleTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionsApi.ReauthSaleTransactionRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |
| `body` | `body` | — | `RefundRequest3` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `RefundRequest3` | `refundRequest3Schema` | `src/models/refund-request3.ts` |
| `ExistingTransactionResponse` | `existingTransactionResponseSchema` | `src/models/existing-transaction-response.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### releaseTransaction

- **Signature**: `releaseTransaction(request: TransactionsApi.ReleaseTransactionRequest, options?: RequestOptions): ApiPromise<TransactionsReleaseResponse, ApiError>`
- **Wire**: `POST /transactions/{id}/release`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransactionsReleaseResponse`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TransactionsApi.ReleaseTransactionRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |
| `body` | `body` | — | `TransactionsReleaseRequest` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionsReleaseRequest` | `transactionsReleaseRequestSchema` | `src/models/transactions-release-request.ts` |
| `TransactionsReleaseResponse` | `transactionsReleaseResponseSchema` | `src/models/transactions-release-response.ts` |

### reverseTransaction

- **Signature**: `reverseTransaction(request: TransactionsApi.ReverseTransactionRequest, options?: RequestOptions): ApiPromise<ReversalResponse2, TransactionsApi.ReverseTransactionError>`
- **Wire**: `POST /transactions/{id}/reversal`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ReversalResponse2`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `TransactionsApi.ReverseTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionsApi.ReverseTransactionRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `Id` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |
| `body` | `body` | — | `ChangeAmountRequestReversal` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Id` | `idSchema` | `src/models/unions/id.ts` |
| `ChangeAmountRequestReversal` | `changeAmountRequestReversalSchema` | `src/models/change-amount-request-reversal.ts` |
| `ReversalResponse2` | `reversalResponse2Schema` | `src/models/reversal-response2.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### splitTransaction

- **Signature**: `splitTransaction(request: TransactionsApi.SplitTransactionRequest, options?: RequestOptions): ApiPromise<SplitAmountResponseTransactions, TransactionsApi.SplitTransactionError>`
- **Wire**: `POST /transactions/{id}/split`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SplitAmountResponseTransactions`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `TransactionsApi.SplitTransactionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionsApi.SplitTransactionRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |
| `body` | `body` | — | `SplitAmountRequestTransactions` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SplitAmountRequestTransactions` | `splitAmountRequestTransactionsSchema` | `src/models/split-amount-request-transactions.ts` |
| `SplitAmountResponseTransactions` | `splitAmountResponseTransactionsSchema` | `src/models/split-amount-response-transactions.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### synchronizeDevice

- **Signature**: `synchronizeDevice(request: TransactionsApi.SynchronizeDeviceRequest, options?: RequestOptions): ApiPromise<DeviceSyncResponse, TransactionsApi.SynchronizeDeviceError>`
- **Wire**: `POST /devices`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeviceSyncResponse`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `TransactionsApi.SynchronizeDeviceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionsApi.SynchronizeDeviceRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |
| `body` | `body` | — | `DeviceSyncRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeviceSyncRequest` | `deviceSyncRequestSchema` | `src/models/device-sync-request.ts` |
| `DeviceSyncResponse` | `deviceSyncResponseSchema` | `src/models/device-sync-response.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

