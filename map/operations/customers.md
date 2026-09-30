<!-- Generated file — do not edit; regenerated with the SDK. -->

# Customers — operations

Accessor: `client.customers` · Source: `src/resources/customers.ts` · 5 operations · Request and error types: namespace `Customers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteCustomersId

- **Signature**: `deleteCustomersId(request: Customers.DeleteCustomersIdRequest, options?: RequestOptions): ApiPromise<CustomersResponseResult, Customers.DeleteCustomersIdError>`
- **Wire**: `DELETE /customers/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomersResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Customers.DeleteCustomersIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.DeleteCustomersIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomersResponseResult` | `customersResponseResultSchema` | `src/models/customers-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getCustomers

- **Signature**: `getCustomers(request: Customers.GetCustomersRequest, options?: RequestOptions): ApiPromise<CustomersResponseResult, Customers.GetCustomersError>`
- **Wire**: `GET /customers`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomersResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Customers.GetCustomersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.GetCustomersRequest` (7):

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
| `CustomersResponseResult` | `customersResponseResultSchema` | `src/models/customers-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getCustomersId

- **Signature**: `getCustomersId(request: Customers.GetCustomersIdRequest, options?: RequestOptions): ApiPromise<CustomersResponseResult, Customers.GetCustomersIdError>`
- **Wire**: `GET /customers/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomersResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Customers.GetCustomersIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.GetCustomersIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomersResponseResult` | `customersResponseResultSchema` | `src/models/customers-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postCustomers

- **Signature**: `postCustomers(request: Customers.PostCustomersRequest, options?: RequestOptions): ApiPromise<CustomersResponseResult, Customers.PostCustomersError>`
- **Wire**: `POST /customers`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomersResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Customers.PostCustomersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.PostCustomersRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `CustomersPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomersPostRequest` | `customersPostRequestSchema` | `src/models/customers-post-request.ts` |
| `CustomersResponseResult` | `customersResponseResultSchema` | `src/models/customers-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putCustomersId

- **Signature**: `putCustomersId(request: Customers.PutCustomersIdRequest, options?: RequestOptions): ApiPromise<CustomersResponseResult, Customers.PutCustomersIdError>`
- **Wire**: `PUT /customers/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomersResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Customers.PutCustomersIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.PutCustomersIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `CustomersPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomersPutRequest` | `customersPutRequestSchema` | `src/models/customers-put-request.ts` |
| `CustomersResponseResult` | `customersResponseResultSchema` | `src/models/customers-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

