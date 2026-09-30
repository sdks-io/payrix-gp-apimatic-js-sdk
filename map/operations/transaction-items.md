<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransactionItems — operations

Accessor: `client.transactionItems` · Source: `src/resources/transaction-items.ts` · 5 operations · Request and error types: namespace `TransactionItems`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteItemsId

- **Signature**: `deleteItemsId(request: TransactionItems.DeleteItemsIdRequest, options?: RequestOptions): ApiPromise<ItemsResponseResult, TransactionItems.DeleteItemsIdError>`
- **Wire**: `DELETE /items/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ItemsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TransactionItems.DeleteItemsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionItems.DeleteItemsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemsResponseResult` | `itemsResponseResultSchema` | `src/models/items-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getItems

- **Signature**: `getItems(request: TransactionItems.GetItemsRequest, options?: RequestOptions): ApiPromise<ItemsResponseResult, TransactionItems.GetItemsError>`
- **Wire**: `GET /items`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ItemsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TransactionItems.GetItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionItems.GetItemsRequest` (7):

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
| `ItemsResponseResult` | `itemsResponseResultSchema` | `src/models/items-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getItemsId

- **Signature**: `getItemsId(request: TransactionItems.GetItemsIdRequest, options?: RequestOptions): ApiPromise<ItemsResponseResult, TransactionItems.GetItemsIdError>`
- **Wire**: `GET /items/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ItemsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TransactionItems.GetItemsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionItems.GetItemsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemsResponseResult` | `itemsResponseResultSchema` | `src/models/items-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postItems

- **Signature**: `postItems(request: TransactionItems.PostItemsRequest, options?: RequestOptions): ApiPromise<ItemsResponseResult, TransactionItems.PostItemsError>`
- **Wire**: `POST /items`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ItemsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TransactionItems.PostItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionItems.PostItemsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `ItemsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemsPostRequest` | `itemsPostRequestSchema` | `src/models/items-post-request.ts` |
| `ItemsResponseResult` | `itemsResponseResultSchema` | `src/models/items-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putItemsId

- **Signature**: `putItemsId(request: TransactionItems.PutItemsIdRequest, options?: RequestOptions): ApiPromise<ItemsResponseResult, TransactionItems.PutItemsIdError>`
- **Wire**: `PUT /items/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ItemsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `TransactionItems.PutItemsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransactionItems.PutItemsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `ItemsPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ItemsPutRequest` | `itemsPutRequestSchema` | `src/models/items-put-request.ts` |
| `ItemsResponseResult` | `itemsResponseResultSchema` | `src/models/items-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

