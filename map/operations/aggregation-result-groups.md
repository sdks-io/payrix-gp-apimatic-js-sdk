<!-- Generated file — do not edit; regenerated with the SDK. -->

# AggregationResultGroups — operations

Accessor: `client.aggregationResultGroups` · Source: `src/resources/aggregation-result-groups.ts` · 3 operations · Request and error types: namespace `AggregationResultGroups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteAggregationResultGroupsId

- **Signature**: `deleteAggregationResultGroupsId(request: AggregationResultGroups.DeleteAggregationResultGroupsIdRequest, options?: RequestOptions): ApiPromise<AggregationResultsGroupsResponseResult, AggregationResultGroups.DeleteAggregationResultGroupsIdError>`
- **Wire**: `DELETE /aggregationResultGroups/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AggregationResultsGroupsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AggregationResultGroups.DeleteAggregationResultGroupsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AggregationResultGroups.DeleteAggregationResultGroupsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |
| `searchFilter` | `header` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AggregationResultsGroupsResponseResult` | `aggregationResultsGroupsResponseResultSchema` | `src/models/aggregation-results-groups-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getAggregationResultGroups

- **Signature**: `getAggregationResultGroups(request: AggregationResultGroups.GetAggregationResultGroupsRequest, options?: RequestOptions): ApiPromise<AggregationResultsGroupsResponseResult, AggregationResultGroups.GetAggregationResultGroupsError>`
- **Wire**: `GET /aggregationResultGroups`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AggregationResultsGroupsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AggregationResultGroups.GetAggregationResultGroupsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AggregationResultGroups.GetAggregationResultGroupsRequest` (7):

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
| `AggregationResultsGroupsResponseResult` | `aggregationResultsGroupsResponseResultSchema` | `src/models/aggregation-results-groups-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

### getAggregationResultGroupsId

- **Signature**: `getAggregationResultGroupsId(request: AggregationResultGroups.GetAggregationResultGroupsIdRequest, options?: RequestOptions): ApiPromise<AggregationResultsGroupsResponseResult, AggregationResultGroups.GetAggregationResultGroupsIdError>`
- **Wire**: `GET /aggregationResultGroups/{id}`
- **Auth**: any of `apiKey`, `sessionKey`, `txnSessionKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AggregationResultsGroupsResponseResult`
- **Error**: `PayrixError` with `kind: "api"`, an instance of `AggregationResultGroups.GetAggregationResultGroupsIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorFourHundred1"` [400] `ErrorFourHundred1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AggregationResultGroups.GetAggregationResultGroupsIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `embed` | `query` | — | `string` | no |
| `token` | `header` | — | `string` | no |
| `requestToken` | `header` | `request-token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AggregationResultsGroupsResponseResult` | `aggregationResultsGroupsResponseResultSchema` | `src/models/aggregation-results-groups-response-result.ts` |
| `ErrorFourHundred1` | `errorFourHundred1Schema` | `src/models/error-four-hundred1.ts` |

