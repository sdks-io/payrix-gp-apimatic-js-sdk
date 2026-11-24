<!-- Generated file — do not edit; regenerated with the SDK. -->

# Batches — operations

Accessor: `client.batches` · Source: `src/resources/batches.ts` · 4 operations · Request and error types: namespace `Batches`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### closeBatch

- **Signature**: `closeBatch(request?: Batches.CloseBatchRequest, options?: RequestOptions): ApiPromise<CloseResponse3, ApiError>`
- **Wire**: `POST /batches`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CloseResponse3`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Batches.CloseBatchRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `body` | `body` | — | `BatchesRequest` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchesRequest` | `batchesRequestSchema` | `src/models/batches-request.ts` |
| `CloseResponse3` | `closeResponse3Schema` | `src/models/close-response3.ts` |

### closeSingleBatch

- **Signature**: `closeSingleBatch(request: Batches.CloseSingleBatchRequest, options?: RequestOptions): ApiPromise<CloseResponse3, Batches.CloseSingleBatchError>`
- **Wire**: `POST /batches/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CloseResponse3`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `Batches.CloseSingleBatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Batches.CloseSingleBatchRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloseResponse3` | `closeResponse3Schema` | `src/models/close-response3.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### getSingleBatch

- **Signature**: `getSingleBatch(request: Batches.GetSingleBatchRequest, options?: RequestOptions): ApiPromise<GetResponse2, Batches.GetSingleBatchError>`
- **Wire**: `GET /batches/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetResponse2`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `Batches.GetSingleBatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Batches.GetSingleBatchRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetResponse2` | `getResponse2Schema` | `src/models/get-response2.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### getTransactionsWithinBatch

- **Signature**: `getTransactionsWithinBatch(request: Batches.GetTransactionsWithinBatchRequest, options?: RequestOptions): ApiPromise<TransactionBatchResponse2, Batches.GetTransactionsWithinBatchError>`
- **Wire**: `GET /batches/{id}/transactions`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransactionBatchResponse2`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `Batches.GetTransactionsWithinBatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Authentications"` [502] `UnknownPlatformError502Authentications` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Batches.GetTransactionsWithinBatchRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionBatchResponse2` | `transactionBatchResponse2Schema` | `src/models/transaction-batch-response2.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Authentications` | `unknownPlatformError502AuthenticationsSchema` | `src/models/unknown-platform-error502-authentications.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

