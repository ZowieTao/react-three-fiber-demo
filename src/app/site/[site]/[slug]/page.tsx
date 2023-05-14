import { notFound } from "next/navigation"

export default async function SitePagePage({
  params,
}: {
  params: {
    site: string
    slug: string
  }
}) {
  if (new Date()) {
    notFound()
  }

  return (
    <div>
      site: {params.site} || slug: {params.slug}
      <code>
        {`
          app/blog/[slug]/page.js	          { slug: string }
          app/shop/[...slug]/page.js	      { slug: string[] }
          app/[categoryId]/[itemId]/page.js	{ categoryId: string, itemId: string }
        `}
      </code>
    </div>
  )
}
