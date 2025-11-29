import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

interface BlogCardProps {
  slug: string
  title: string
  body: string
  bannerImage?: string
  date: string
}

export default function BlogCard({ slug, title, body, bannerImage, date }: BlogCardProps) {
  // Extract excerpt from body (first 150 characters)
  const excerpt = body.replace(/<[^>]*>/g, '').substring(0, 150) + '...'
  
  // Format date
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

  return (
    <Link href={`/blog/${slug}`}>
      <div className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
          {bannerImage ? (
            <Image
              src={bannerImage}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-primary/30">
              <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="mb-3 flex items-center gap-4 text-sm text-foreground/60">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formattedDate}</span>
            </div>
          </div>
          
          <h3 className="mb-3 text-xl font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="mb-4 text-foreground/70 line-clamp-3">
            {excerpt}
          </p>
          
          <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
            <span>Read More</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  )
}
