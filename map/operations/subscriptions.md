<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subscriptions — operations

Accessor: `client.subscriptions` · Source: `src/resources/subscriptions.ts` · 5 operations · Request and error types: namespace `Subscriptions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteSubscriptionsId

- **Signature**: `deleteSubscriptionsId(request: Subscriptions.DeleteSubscriptionsIdRequest, options?: RequestOptions): ApiPromise<SubscriptionResponseResult, Subscriptions.DeleteSubscriptionsIdError>`
- **Wire**: `DELETE /subscriptions/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Subscriptions.DeleteSubscriptionsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.DeleteSubscriptionsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionResponseResult` | `subscriptionResponseResultSchema` | `src/models/subscription-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getSubscriptions

- **Signature**: `getSubscriptions(request: Subscriptions.GetSubscriptionsRequest, options?: RequestOptions): ApiPromise<SubscriptionResponseResult, Subscriptions.GetSubscriptionsError>`
- **Wire**: `GET /subscriptions`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubscriptionResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Subscriptions.GetSubscriptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.GetSubscriptionsRequest` (7):

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
| `SubscriptionResponseResult` | `subscriptionResponseResultSchema` | `src/models/subscription-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getSubscriptionsId

- **Signature**: `getSubscriptionsId(request: Subscriptions.GetSubscriptionsIdRequest, options?: RequestOptions): ApiPromise<SubscriptionResponseResult, Subscriptions.GetSubscriptionsIdError>`
- **Wire**: `GET /subscriptions/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubscriptionResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Subscriptions.GetSubscriptionsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.GetSubscriptionsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionResponseResult` | `subscriptionResponseResultSchema` | `src/models/subscription-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postSubscriptions

- **Signature**: `postSubscriptions(request: Subscriptions.PostSubscriptionsRequest, options?: RequestOptions): ApiPromise<SubscriptionResponseResult, Subscriptions.PostSubscriptionsError>`
- **Wire**: `POST /subscriptions`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Subscriptions.PostSubscriptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.PostSubscriptionsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `SubscriptionsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionsPostRequest` | `subscriptionsPostRequestSchema` | `src/models/subscriptions-post-request.ts` |
| `SubscriptionResponseResult` | `subscriptionResponseResultSchema` | `src/models/subscription-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putSubscriptionsId

- **Signature**: `putSubscriptionsId(request: Subscriptions.PutSubscriptionsIdRequest, options?: RequestOptions): ApiPromise<SubscriptionResponseResult, Subscriptions.PutSubscriptionsIdError>`
- **Wire**: `PUT /subscriptions/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SubscriptionResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Subscriptions.PutSubscriptionsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Subscriptions.PutSubscriptionsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `SubscriptionsPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubscriptionsPutRequest` | `subscriptionsPutRequestSchema` | `src/models/subscriptions-put-request.ts` |
| `SubscriptionResponseResult` | `subscriptionResponseResultSchema` | `src/models/subscription-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

