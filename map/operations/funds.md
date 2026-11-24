<!-- Generated file — do not edit; regenerated with the SDK. -->

# Funds — operations

Accessor: `client.funds` · Source: `src/resources/funds.ts` · 3 operations · Request and error types: namespace `Funds`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fundMerchant

- **Signature**: `fundMerchant(request?: Funds.FundMerchantRequest, options?: RequestOptions): ApiPromise<FundsResponse3, Funds.FundMerchantError>`
- **Wire**: `POST /merchants/{id}/settlement/funds`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FundsResponse3`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `Funds.FundMerchantError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Accounts"` [502] `UnknownPlatformError502Accounts` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Funds.FundMerchantRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | no | `"MER_880c34767b184d5e82b10e767201e648"` |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |
| `body` | `body` | — | `FundsCreate2` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `FundsCreate2` | `fundsCreate2Schema` | `src/models/funds-create2.ts` |
| `FundsResponse3` | `fundsResponse3Schema` | `src/models/funds-response3.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Accounts` | `unknownPlatformError502AccountsSchema` | `src/models/unknown-platform-error502-accounts.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### getFund

- **Signature**: `getFund(request: Funds.GetFundRequest, options?: RequestOptions): ApiPromise<FundsResponse3, Funds.GetFundError>`
- **Wire**: `GET /merchants/{id}/funds/{FND_id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FundsResponse3`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `Funds.GetFundError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Accounts"` [502] `UnknownPlatformError502Accounts` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Funds.GetFundRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | no | `"MER_880c34767b184d5e82b10e767201e648"` |
| `fndId` | `path` | `FND_id` | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `FundsResponse3` | `fundsResponse3Schema` | `src/models/funds-response3.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Accounts` | `unknownPlatformError502AccountsSchema` | `src/models/unknown-platform-error502-accounts.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### listFunds

- **Signature**: `listFunds(request: Funds.ListFundsRequest, options?: RequestOptions): ApiPromise<ListFundsResponse2, Funds.ListFundsError>`
- **Wire**: `GET /merchants/{id}/accounts/{FMA_id}/funds`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListFundsResponse2`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `Funds.ListFundsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Accounts"` [502] `UnknownPlatformError502Accounts` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Funds.ListFundsRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | no | `"MER_880c34767b184d5e82b10e767201e648"` |
| `fmaId` | `path` | `FMA_id` | `string` | yes | — |
| `fromTimeCreated` | `query` | `from_time_created` | `string` (date) | no | — |
| `toTimeCreated` | `query` | `to_time_created` | `string` (date) | no | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `xGpIdempotency` | `header` | `X-GP-Idempotency` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListFundsResponse2` | `listFundsResponse2Schema` | `src/models/list-funds-response2.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Accounts` | `unknownPlatformError502AccountsSchema` | `src/models/unknown-platform-error502-accounts.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

