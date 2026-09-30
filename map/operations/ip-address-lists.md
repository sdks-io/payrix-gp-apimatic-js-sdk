<!-- Generated file — do not edit; regenerated with the SDK. -->

# IpAddressLists — operations

Accessor: `client.ipAddressLists` · Source: `src/resources/ip-address-lists.ts` · 5 operations · Request and error types: namespace `IpAddressLists`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteIplistsId

- **Signature**: `deleteIplistsId(request: IpAddressLists.DeleteIplistsIdRequest, options?: RequestOptions): ApiPromise<IplistsResponseResult, IpAddressLists.DeleteIplistsIdError>`
- **Wire**: `DELETE /iplists/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IplistsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `IpAddressLists.DeleteIplistsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IpAddressLists.DeleteIplistsIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IplistsResponseResult` | `iplistsResponseResultSchema` | `src/models/iplists-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getIplists

- **Signature**: `getIplists(request: IpAddressLists.GetIplistsRequest, options?: RequestOptions): ApiPromise<IplistsResponseResult, IpAddressLists.GetIplistsError>`
- **Wire**: `GET /iplists`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IplistsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `IpAddressLists.GetIplistsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IpAddressLists.GetIplistsRequest` (7):

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
| `IplistsResponseResult` | `iplistsResponseResultSchema` | `src/models/iplists-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getIplistsId

- **Signature**: `getIplistsId(request: IpAddressLists.GetIplistsIdRequest, options?: RequestOptions): ApiPromise<IplistsResponseResult, IpAddressLists.GetIplistsIdError>`
- **Wire**: `GET /iplists/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IplistsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `IpAddressLists.GetIplistsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IpAddressLists.GetIplistsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IplistsResponseResult` | `iplistsResponseResultSchema` | `src/models/iplists-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### postIplists

- **Signature**: `postIplists(request: IpAddressLists.PostIplistsRequest, options?: RequestOptions): ApiPromise<IplistsResponseResult, IpAddressLists.PostIplistsError>`
- **Wire**: `POST /iplists`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IplistsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `IpAddressLists.PostIplistsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IpAddressLists.PostIplistsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `IplistsPostRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IplistsPostRequest` | `iplistsPostRequestSchema` | `src/models/iplists-post-request.ts` |
| `IplistsResponseResult` | `iplistsResponseResultSchema` | `src/models/iplists-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### putIplistsId

- **Signature**: `putIplistsId(request: IpAddressLists.PutIplistsIdRequest, options?: RequestOptions): ApiPromise<IplistsResponseResult, IpAddressLists.PutIplistsIdError>`
- **Wire**: `PUT /iplists/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IplistsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `IpAddressLists.PutIplistsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `IpAddressLists.PutIplistsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `body` | `body` | — | `IplistsPutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IplistsPutRequest` | `iplistsPutRequestSchema` | `src/models/iplists-put-request.ts` |
| `IplistsResponseResult` | `iplistsResponseResultSchema` | `src/models/iplists-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

