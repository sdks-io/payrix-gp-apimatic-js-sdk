<!-- Generated file — do not edit; regenerated with the SDK. -->

# PendingEntryApi — operations

Accessor: `client.pendingEntryApi` · Source: `src/resources/pending-entry-api.ts` · 2 operations · Request and error types: namespace `PendingEntryApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getPendingEntries

- **Signature**: `getPendingEntries(request: PendingEntryApi.GetPendingEntriesRequest, options?: RequestOptions): ApiPromise<PendingEntriesResponseResult, PendingEntryApi.GetPendingEntriesError>`
- **Wire**: `GET /pendingEntries`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PendingEntriesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `PendingEntryApi.GetPendingEntriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PendingEntryApi.GetPendingEntriesRequest` (7):

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
| `PendingEntriesResponseResult` | `pendingEntriesResponseResultSchema` | `src/models/pending-entries-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getPendingEntriesId

- **Signature**: `getPendingEntriesId(request: PendingEntryApi.GetPendingEntriesIdRequest, options?: RequestOptions): ApiPromise<PendingEntriesResponseResult, PendingEntryApi.GetPendingEntriesIdError>`
- **Wire**: `GET /pendingEntries/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PendingEntriesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `PendingEntryApi.GetPendingEntriesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PendingEntryApi.GetPendingEntriesIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PendingEntriesResponseResult` | `pendingEntriesResponseResultSchema` | `src/models/pending-entries-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

