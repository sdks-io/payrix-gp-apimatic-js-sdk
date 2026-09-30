<!-- Generated file — do not edit; regenerated with the SDK. -->

# Entries — operations

Accessor: `client.entries` · Source: `src/resources/entries.ts` · 2 operations · Request and error types: namespace `Entries`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getEntries

- **Signature**: `getEntries(request: Entries.GetEntriesRequest, options?: RequestOptions): ApiPromise<EntriesResponseResult, Entries.GetEntriesError>`
- **Wire**: `GET /entries`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntriesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Entries.GetEntriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entries.GetEntriesRequest` (7):

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
| `EntriesResponseResult` | `entriesResponseResultSchema` | `src/models/entries-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getEntriesId

- **Signature**: `getEntriesId(request: Entries.GetEntriesIdRequest, options?: RequestOptions): ApiPromise<EntriesResponseResult, Entries.GetEntriesIdError>`
- **Wire**: `GET /entries/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntriesResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `Entries.GetEntriesIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Entries.GetEntriesIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntriesResponseResult` | `entriesResponseResultSchema` | `src/models/entries-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

