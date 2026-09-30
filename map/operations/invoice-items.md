<!-- Generated file — do not edit; regenerated with the SDK. -->

# InvoiceItems — operations

Accessor: `client.invoiceItems` · Source: `src/resources/invoice-items.ts` · 5 operations · Request and error types: namespace `InvoiceItems`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteInvoiceItemsId

- **Signature**: `deleteInvoiceItemsId(request: InvoiceItems.DeleteInvoiceItemsIdRequest, options?: RequestOptions): ApiPromise<InvoiceItemsResponseResult, InvoiceItems.DeleteInvoiceItemsIdError>`
- **Wire**: `DELETE /invoiceItems/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InvoiceItemsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `InvoiceItems.DeleteInvoiceItemsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InvoiceItems.DeleteInvoiceItemsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoiceItemsResponseResult` | `invoiceItemsResponseResultSchema` | `src/models/invoice-items-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getInvoiceItems

- **Signature**: `getInvoiceItems(request: InvoiceItems.GetInvoiceItemsRequest, options?: RequestOptions): ApiPromise<InvoiceItemsResponseResult, InvoiceItems.GetInvoiceItemsError>`
- **Wire**: `GET /invoiceItems`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InvoiceItemsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `InvoiceItems.GetInvoiceItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InvoiceItems.GetInvoiceItemsRequest` (7):

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
| `InvoiceItemsResponseResult` | `invoiceItemsResponseResultSchema` | `src/models/invoice-items-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getInvoiceItemsId

- **Signature**: `getInvoiceItemsId(request: InvoiceItems.GetInvoiceItemsIdRequest, options?: RequestOptions): ApiPromise<InvoiceItemsResponseResult, InvoiceItems.GetInvoiceItemsIdError>`
- **Wire**: `GET /invoiceItems/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InvoiceItemsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `InvoiceItems.GetInvoiceItemsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InvoiceItems.GetInvoiceItemsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoiceItemsResponseResult` | `invoiceItemsResponseResultSchema` | `src/models/invoice-items-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postInvoiceItems

- **Signature**: `postInvoiceItems(request: InvoiceItems.PostInvoiceItemsRequest, options?: RequestOptions): ApiPromise<InvoiceItemsResponseResult, InvoiceItems.PostInvoiceItemsError>`
- **Wire**: `POST /invoiceItems`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InvoiceItemsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `InvoiceItems.PostInvoiceItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InvoiceItems.PostInvoiceItemsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `InvoiceItemsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoiceItemsPostRequest` | `invoiceItemsPostRequestSchema` | `src/models/invoice-items-post-request.ts` |
| `InvoiceItemsResponseResult` | `invoiceItemsResponseResultSchema` | `src/models/invoice-items-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putInvoiceItemsId

- **Signature**: `putInvoiceItemsId(request: InvoiceItems.PutInvoiceItemsIdRequest, options?: RequestOptions): ApiPromise<InvoiceItemsResponseResult, InvoiceItems.PutInvoiceItemsIdError>`
- **Wire**: `PUT /invoiceItems/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InvoiceItemsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `InvoiceItems.PutInvoiceItemsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InvoiceItems.PutInvoiceItemsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `InvoiceItemsPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoiceItemsPutRequest` | `invoiceItemsPutRequestSchema` | `src/models/invoice-items-put-request.ts` |
| `InvoiceItemsResponseResult` | `invoiceItemsResponseResultSchema` | `src/models/invoice-items-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

