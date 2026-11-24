<!-- Generated file — do not edit; regenerated with the SDK. -->

# Actions — operations

Accessor: `client.actions` · Source: `src/resources/actions.ts` · 2 operations · Request and error types: namespace `Actions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getActionList

- **Signature**: `getActionList(request?: Actions.GetActionListRequest, options?: RequestOptions): ApiPromise<ActionsList, Actions.GetActionListError>`
- **Wire**: `GET /actions`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ActionsList`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `Actions.GetActionListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Accounts"` [502] `UnknownPlatformError502Accounts` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Actions.GetActionListRequest` (18):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `page` | `query` | — | `number` | no | `1` |
| `pageSize` | `query` | `page_size` | `number` | no | `5` |
| `order` | `query` | — | `DataDictionaryV1PaginationOrder` | no | — |
| `orderBy` | `query` | `order_by` | `string` | no | `"TIME_CREATED"` |
| `id` | `query` | — | `string` | no | — |
| `type` | `query` | — | `string` | no | — |
| `resource` | `query` | — | `string` | no | — |
| `resourceStatus` | `query` | `resource_status` | `string` | no | — |
| `fromTimeCreated` | `query` | `from_time_created` | `string` (date) | no | — |
| `toTimeCreated` | `query` | `to_time_created` | `string` (date) | no | — |
| `merchantName` | `query` | `merchant_name` | `string` | no | — |
| `accountName` | `query` | `account_name` | `string` | no | — |
| `appName` | `query` | `app_name` | `string` | no | — |
| `version` | `query` | — | `string` | no | — |
| `responseCode` | `query` | `response_code` | `string` | no | — |
| `httpResponseCode` | `query` | `http_response_code` | `string` | no | — |
| `resourceId` | `query` | `resource_id` | `string` | no | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `DataDictionaryV1PaginationOrder` | `dataDictionaryV1PaginationOrderSchema` | `src/models/data-dictionary-v1-pagination-order.ts` |
| `ActionsList` | `actionsListSchema` | `src/models/actions-list.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Accounts` | `unknownPlatformError502AccountsSchema` | `src/models/unknown-platform-error502-accounts.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

### getActionSingle

- **Signature**: `getActionSingle(request: Actions.GetActionSingleRequest, options?: RequestOptions): ApiPromise<ActionSingle, Actions.GetActionSingleError>`
- **Wire**: `GET /actions/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ActionSingle`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `Actions.GetActionSingleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"objRequestInvalid400"` [400] `ObjRequestInvalid400` · `"authenticationInvalid401"` [401] `AuthenticationInvalid401` · `"notAuthorized403"` [403] `NotAuthorized403` · `"error404"` [404] no body · `"serverError500"` [500] `ServerError500` · `"unknownServerError501"` [501] `UnknownServerError501` · `"unknownPlatformError502Accounts"` [502] `UnknownPlatformError502Accounts` · `"serverTimeout504"` [504] `ServerTimeout504` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Actions.GetActionSingleRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ActionSingle` | `actionSingleSchema` | `src/models/action-single.ts` |
| `ObjRequestInvalid400` | `objRequestInvalid400Schema` | `src/models/obj-request-invalid400.ts` |
| `AuthenticationInvalid401` | `authenticationInvalid401Schema` | `src/models/authentication-invalid401.ts` |
| `NotAuthorized403` | `notAuthorized403Schema` | `src/models/not-authorized403.ts` |
| `ServerError500` | `serverError500Schema` | `src/models/server-error500.ts` |
| `UnknownServerError501` | `unknownServerError501Schema` | `src/models/unknown-server-error501.ts` |
| `UnknownPlatformError502Accounts` | `unknownPlatformError502AccountsSchema` | `src/models/unknown-platform-error502-accounts.ts` |
| `ServerTimeout504` | `serverTimeout504Schema` | `src/models/server-timeout504.ts` |

