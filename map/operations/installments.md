<!-- Generated file — do not edit; regenerated with the SDK. -->

# Installments — operations

Accessor: `client.installments` · Source: `src/resources/installments.ts` · 1 operation · Request and error types: namespace `Installments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getAvailableInstallmentPlans

- **Signature**: `getAvailableInstallmentPlans(request?: Installments.GetAvailableInstallmentPlansRequest, options?: RequestOptions): ApiPromise<PostInstallmentsResponse2, Installments.GetAvailableInstallmentPlansError>`
- **Wire**: `POST /installments`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PostInstallmentsResponse2`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"`, an instance of `Installments.GetAvailableInstallmentPlansError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Installments.GetAvailableInstallmentPlansRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |
| `body` | `body` | — | `PostInstallmentsRequest2` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `PostInstallmentsRequest2` | `postInstallmentsRequest2Schema` | `src/models/post-installments-request2.ts` |
| `PostInstallmentsResponse2` | `postInstallmentsResponse2Schema` | `src/models/post-installments-response2.ts` |

