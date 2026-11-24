<!-- Generated file — do not edit; regenerated with the SDK. -->

# CurrencyConversions — operations

Accessor: `client.currencyConversions` · Source: `src/resources/currency-conversions.ts` · 2 operations · Request and error types: namespace `CurrencyConversions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### binRangesListDownload

- **Signature**: `binRangesListDownload(request: CurrencyConversions.BinRangesListDownloadRequest, options?: RequestOptions): ApiPromise<CurrencyConversionsDccBinRangesResponse, CurrencyConversions.BinRangesListDownloadError>`
- **Wire**: `GET /currency-conversions/dcc-bin-ranges`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CurrencyConversionsDccBinRangesResponse`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `CurrencyConversions.BinRangesListDownloadError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"notFound1"` [404] `NotFound1` · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CurrencyConversions.BinRangesListDownloadRequest` (8):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `country` | `query` | — | `string` | yes | — |
| `merchantCurrency` | `query` | `merchant_currency` | `string` | yes | — |
| `accountName` | `query` | `account_name` | `string` | no | — |
| `accountId` | `query` | `account_id` | `string` | no | — |
| `payerCurrency` | `query` | `payer_currency` | `string[]` | no | — |
| `timeLastReceived` | `query` | `time_last_received` | `string` | no | — |
| `lastIndex` | `query` | `last_index` | `number` | no | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `CurrencyConversionsDccBinRangesResponse` | `currencyConversionsDccBinRangesResponseSchema` | `src/models/currency-conversions-dcc-bin-ranges-response.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `NotFound1` | `notFound1Schema` | `src/models/not-found1.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |

### requestDcc

- **Signature**: `requestDcc(request: CurrencyConversions.RequestDccRequest, options?: RequestOptions): ApiPromise<CreateResponseCurrencyConversion, CurrencyConversions.RequestDccError>`
- **Wire**: `POST /currency-conversions`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateResponseCurrencyConversion`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `CurrencyConversions.RequestDccError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Accounts"` [502] `UnknownPlatformError502Accounts` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CurrencyConversions.RequestDccRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |
| `body` | `body` | — | `CreateRequestCurrencyConversion` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateRequestCurrencyConversion` | `createRequestCurrencyConversionSchema` | `src/models/create-request-currency-conversion.ts` |
| `CreateResponseCurrencyConversion` | `createResponseCurrencyConversionSchema` | `src/models/create-response-currency-conversion.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Accounts` | `unknownPlatformError502AccountsSchema` | `src/models/unknown-platform-error502-accounts.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

