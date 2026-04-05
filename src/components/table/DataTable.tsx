import * as React from "react"

interface Column<T> {
  header: string
  accessorKey: keyof T | string
  cell?: (item: T) => React.ReactNode
}

interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  isLoading?: boolean
}

export function DataTable<T>({ data, columns, isLoading }: DataTableProps<T>) {
  if (isLoading) {
    return <div className="p-8 text-center text-sm text-slate-500">Loading data...</div>
  }

  if (data.length === 0) {
    return <div className="p-8 text-center text-sm text-slate-500">No results found.</div>
  }

  return (
    <div className="w-full overflow-auto rounded-md border border-slate-200">
      <table className="w-full caption-bottom text-sm">
        <thead className="border-b border-slate-200 bg-slate-50/50">
          <tr className="border-b transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100">
            {columns.map((col, i) => (
              <th
                key={i}
                className="h-12 px-4 text-left align-middle font-medium text-slate-500"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="[&_tr:last-child]:border-0">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-slate-200 transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100"
            >
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="p-4 align-middle">
                  {col.cell
                    ? col.cell(row)
                    : (row[col.accessorKey as keyof T] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
