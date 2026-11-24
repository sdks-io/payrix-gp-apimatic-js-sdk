<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reports — operations

Accessor: `client.reports` · Source: `src/resources/reports.ts` · 1 operation · Request types: namespace `Reports`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `payrix-gp-apimatic-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getTransactionSummaryReport

- **Signature**: `getTransactionSummaryReport(request: Reports.GetTransactionSummaryReportRequest, options?: RequestOptions): ApiPromise<SummaryReport2, ApiError>`
- **Wire**: `GET /reports`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SummaryReport2`
- **Error**: `GlobalPaymentsApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Reports.GetTransactionSummaryReportRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `type` | `query` | — | `TypeReportReportsType` | yes | — |
| `paymentMethodCategory` | `query` | `payment_method.category` | `CategoryReportReportsPaymentMethodBreakdownCategory` | no | — |
| `paymentMethodBrand` | `query` | `payment_method.brand` | `BrandReportReportsPaymentMethodBreakdownBrand` | no | — |
| `fromTimeCreated` | `query` | `from_time_created` | `string` (date) | no | — |
| `toTimeCreated` | `query` | `to_time_created` | `string` (date) | no | — |
| `xGpVersion` | `header` | `X-GP-Version` | `string` | no | `"2021-03-22"` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TypeReportReportsType` | `typeReportReportsTypeSchema` | `src/models/type-report-reports-type.ts` |
| `CategoryReportReportsPaymentMethodBreakdownCategory` | `categoryReportReportsPaymentMethodBreakdownCategorySchema` | `src/models/category-report-reports-payment-method-breakdown-category.ts` |
| `BrandReportReportsPaymentMethodBreakdownBrand` | `brandReportReportsPaymentMethodBreakdownBrandSchema` | `src/models/brand-report-reports-payment-method-breakdown-brand.ts` |
| `SummaryReport2` | `summaryReport2Schema` | `src/models/summary-report2.ts` |

