export default async function SiteLayout({
  children,
  params,
}: {
  children?: React.ReactNode
  params: {
    site: string
  }
}) {
  return (
    <>
      [SITE] {params.site} Layout:
      <div>{children}</div>
    </>
  )
}
