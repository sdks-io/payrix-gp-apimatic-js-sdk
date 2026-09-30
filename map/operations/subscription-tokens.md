<!-- Generated file — do not edit; regenerated with the SDK. -->

# SubscriptionTokens — operations

Accessor: `client.subscriptionTokens` · Source: `src/resources/subscription-tokens.ts` · 5 operations · Request and error types: namespace `SubscriptionTokens`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteSubscriptionTokensId

- **Signature**: `deleteSubscriptionTokensId(request: SubscriptionTokens.DeleteSubscriptionTokensIdRequest, options?: RequestOptions): ApiPromise<SubscriptionTokensResponseResult, SubscriptionTokens.DeleteSubscriptionTokensIdError>`
- **Wire**: `DELETE /subscriptionTokens/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionTokensResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `SubscriptionTokens.DeleteSubscriptionTokensIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubscriptionTokens.DeleteSubscriptionTokensIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionTokensResponseResult` | `subscriptionTokensResponseResultSchema` | `src/models/subscription-tokens-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getSubscriptionTokens

- **Signature**: `getSubscriptionTokens(request: SubscriptionTokens.GetSubscriptionTokensRequest, options?: RequestOptions): ApiPromise<SubscriptionTokensResponseResult, SubscriptionTokens.GetSubscriptionTokensError>`
- **Wire**: `GET /subscriptionTokens`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubscriptionTokensResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `SubscriptionTokens.GetSubscriptionTokensError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubscriptionTokens.GetSubscriptionTokensRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageNumber` | `query` | `page[number]` | `number` | no |
| `pageLimit` | `query` | `page[limit]` | `number` | no |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `search` | `header` | — | `string` | no |
| `totals` | `header` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionTokensResponseResult` | `subscriptionTokensResponseResultSchema` | `src/models/subscription-tokens-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getSubscriptionTokensId

- **Signature**: `getSubscriptionTokensId(request: SubscriptionTokens.GetSubscriptionTokensIdRequest, options?: RequestOptions): ApiPromise<SubscriptionTokensResponseResult, SubscriptionTokens.GetSubscriptionTokensIdError>`
- **Wire**: `GET /subscriptionTokens/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubscriptionTokensResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `SubscriptionTokens.GetSubscriptionTokensIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubscriptionTokens.GetSubscriptionTokensIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionTokensResponseResult` | `subscriptionTokensResponseResultSchema` | `src/models/subscription-tokens-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postSubscriptionTokens

- **Signature**: `postSubscriptionTokens(request: SubscriptionTokens.PostSubscriptionTokensRequest, options?: RequestOptions): ApiPromise<SubscriptionTokensResponseResult, SubscriptionTokens.PostSubscriptionTokensError>`
- **Wire**: `POST /subscriptionTokens`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionTokensResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `SubscriptionTokens.PostSubscriptionTokensError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubscriptionTokens.PostSubscriptionTokensRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `SubscriptionTokensPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionTokensPostRequest` | `subscriptionTokensPostRequestSchema` | `src/models/subscription-tokens-post-request.ts` |
| `SubscriptionTokensResponseResult` | `subscriptionTokensResponseResultSchema` | `src/models/subscription-tokens-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putSubscriptionTokensId

- **Signature**: `putSubscriptionTokensId(request: SubscriptionTokens.PutSubscriptionTokensIdRequest, options?: RequestOptions): ApiPromise<SubscriptionTokensResponseResult, SubscriptionTokens.PutSubscriptionTokensIdError>`
- **Wire**: `PUT /subscriptionTokens/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionTokensResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `SubscriptionTokens.PutSubscriptionTokensIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SubscriptionTokens.PutSubscriptionTokensIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `SubscriptionTokensPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionTokensPutRequest` | `subscriptionTokensPutRequestSchema` | `src/models/subscription-tokens-put-request.ts` |
| `SubscriptionTokensResponseResult` | `subscriptionTokensResponseResultSchema` | `src/models/subscription-tokens-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

