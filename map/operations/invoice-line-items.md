<!-- Generated file — do not edit; regenerated with the SDK. -->

# InvoiceLineItems — operations

Accessor: `client.invoiceLineItems` · Source: `src/resources/invoice-line-items.ts` · 5 operations · Request and error types: namespace `InvoiceLineItems`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteInvoiceLineItemsId

- **Signature**: `deleteInvoiceLineItemsId(request: InvoiceLineItems.DeleteInvoiceLineItemsIdRequest, options?: RequestOptions): ApiPromise<InvoiceLineItemsResponseResult, InvoiceLineItems.DeleteInvoiceLineItemsIdError>`
- **Wire**: `DELETE /invoiceLineItems/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InvoiceLineItemsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `InvoiceLineItems.DeleteInvoiceLineItemsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InvoiceLineItems.DeleteInvoiceLineItemsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoiceLineItemsResponseResult` | `invoiceLineItemsResponseResultSchema` | `src/models/invoice-line-items-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getInvoiceLineItems

- **Signature**: `getInvoiceLineItems(request: InvoiceLineItems.GetInvoiceLineItemsRequest, options?: RequestOptions): ApiPromise<InvoiceLineItemsResponseResult, InvoiceLineItems.GetInvoiceLineItemsError>`
- **Wire**: `GET /invoiceLineItems`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InvoiceLineItemsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `InvoiceLineItems.GetInvoiceLineItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InvoiceLineItems.GetInvoiceLineItemsRequest` (7):

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
| `InvoiceLineItemsResponseResult` | `invoiceLineItemsResponseResultSchema` | `src/models/invoice-line-items-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getInvoiceLineItemsId

- **Signature**: `getInvoiceLineItemsId(request: InvoiceLineItems.GetInvoiceLineItemsIdRequest, options?: RequestOptions): ApiPromise<InvoiceLineItemsResponseResult, InvoiceLineItems.GetInvoiceLineItemsIdError>`
- **Wire**: `GET /invoiceLineItems/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InvoiceLineItemsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `InvoiceLineItems.GetInvoiceLineItemsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InvoiceLineItems.GetInvoiceLineItemsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoiceLineItemsResponseResult` | `invoiceLineItemsResponseResultSchema` | `src/models/invoice-line-items-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postInvoiceLineItems

- **Signature**: `postInvoiceLineItems(request: InvoiceLineItems.PostInvoiceLineItemsRequest, options?: RequestOptions): ApiPromise<InvoiceLineItemsResponseResult, InvoiceLineItems.PostInvoiceLineItemsError>`
- **Wire**: `POST /invoiceLineItems`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InvoiceLineItemsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `InvoiceLineItems.PostInvoiceLineItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InvoiceLineItems.PostInvoiceLineItemsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `InvoiceLineItemsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoiceLineItemsPostRequest` | `invoiceLineItemsPostRequestSchema` | `src/models/invoice-line-items-post-request.ts` |
| `InvoiceLineItemsResponseResult` | `invoiceLineItemsResponseResultSchema` | `src/models/invoice-line-items-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putInvoiceLineItemsId

- **Signature**: `putInvoiceLineItemsId(request: InvoiceLineItems.PutInvoiceLineItemsIdRequest, options?: RequestOptions): ApiPromise<InvoiceLineItemsResponseResult, InvoiceLineItems.PutInvoiceLineItemsIdError>`
- **Wire**: `PUT /invoiceLineItems/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InvoiceLineItemsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `InvoiceLineItems.PutInvoiceLineItemsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `InvoiceLineItems.PutInvoiceLineItemsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `InvoiceLineItemsPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoiceLineItemsPutRequest` | `invoiceLineItemsPutRequestSchema` | `src/models/invoice-line-items-put-request.ts` |
| `InvoiceLineItemsResponseResult` | `invoiceLineItemsResponseResultSchema` | `src/models/invoice-line-items-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

