import { useEffect, useState } from "react"

// 3 columns on big screens, 2 on tablets, 1 on phones
function getColumns() {
  if (window.innerWidth >= 1024) return 3
  if (window.innerWidth >= 640) return 2
  return 1
}

export default function useColumns() {
  const [columns, setColumns] = useState(getColumns)

  useEffect(() => {
    const onResize = () => setColumns(getColumns())
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return columns
}