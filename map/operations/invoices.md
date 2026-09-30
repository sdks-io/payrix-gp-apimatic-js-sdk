<!-- Generated file — do not edit; regenerated with the SDK. -->

# Invoices — operations

Accessor: `client.invoices` · Source: `src/resources/invoices.ts` · 5 operations · Request and error types: namespace `Invoices`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteInvoicesId

- **Signature**: `deleteInvoicesId(request: Invoices.DeleteInvoicesIdRequest, options?: RequestOptions): ApiPromise<InvoicesResponseResult, Invoices.DeleteInvoicesIdError>`
- **Wire**: `DELETE /invoices/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InvoicesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Invoices.DeleteInvoicesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.DeleteInvoicesIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoicesResponseResult` | `invoicesResponseResultSchema` | `src/models/invoices-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getInvoices

- **Signature**: `getInvoices(request: Invoices.GetInvoicesRequest, options?: RequestOptions): ApiPromise<InvoicesResponseResult, Invoices.GetInvoicesError>`
- **Wire**: `GET /invoices`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InvoicesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Invoices.GetInvoicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.GetInvoicesRequest` (7):

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
| `InvoicesResponseResult` | `invoicesResponseResultSchema` | `src/models/invoices-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getInvoicesId

- **Signature**: `getInvoicesId(request: Invoices.GetInvoicesIdRequest, options?: RequestOptions): ApiPromise<InvoicesResponseResult, Invoices.GetInvoicesIdError>`
- **Wire**: `GET /invoices/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InvoicesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Invoices.GetInvoicesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.GetInvoicesIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoicesResponseResult` | `invoicesResponseResultSchema` | `src/models/invoices-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postInvoices

- **Signature**: `postInvoices(request: Invoices.PostInvoicesRequest, options?: RequestOptions): ApiPromise<InvoicesResponseResult, Invoices.PostInvoicesError>`
- **Wire**: `POST /invoices`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InvoicesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Invoices.PostInvoicesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.PostInvoicesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `InvoicesPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoicesPostRequest` | `invoicesPostRequestSchema` | `src/models/invoices-post-request.ts` |
| `InvoicesResponseResult` | `invoicesResponseResultSchema` | `src/models/invoices-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putInvoicesId

- **Signature**: `putInvoicesId(request: Invoices.PutInvoicesIdRequest, options?: RequestOptions): ApiPromise<InvoicesResponseResult, Invoices.PutInvoicesIdError>`
- **Wire**: `PUT /invoices/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InvoicesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Invoices.PutInvoicesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Invoices.PutInvoicesIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `InvoicesPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InvoicesPutRequest` | `invoicesPutRequestSchema` | `src/models/invoices-put-request.ts` |
| `InvoicesResponseResult` | `invoicesResponseResultSchema` | `src/models/invoices-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

