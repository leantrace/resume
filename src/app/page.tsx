import { Suspense } from 'react'

export default async function Page(props: {
  searchParams?: Promise<{
    theme?: string
    resume?: string
  }>
}) {
  const searchParams = await props.searchParams
  const theme = searchParams?.theme
  const resume = searchParams?.resume
  return (
    <Suspense fallback={<div>fallback</div>}>
      <p>Theme: {theme}</p>
      <p>Resume: {resume}</p>
    </Suspense>
  )
}
