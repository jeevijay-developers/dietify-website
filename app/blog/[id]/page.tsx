"use client"

import { use, useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { blogAPI, type Blog } from "@/lib/api"

export default function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id: slug } = use(params)
  const [blog, setBlog] = useState<Blog | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchBlog() {
      try {
        setLoading(true)
        setError(null)
        const data = await blogAPI.getBlogBySlug(slug)
        setBlog(data)
      } catch (err) {
        setError('Blog post not found')
        console.error('Error fetching blog:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchBlog()
  }, [slug])

  if (loading) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-white pt-32 px-4">
          <div className="max-w-4xl mx-auto flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  if (error || !blog) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen pt-32 px-4">
          <div className="max-w-4xl mx-auto text-center py-20">
            <h1 className="text-4xl font-bold mb-4">Blog post not found</h1>
            <p className="text-foreground/70 mb-6">{error || 'The blog post you are looking for does not exist.'}</p>
            <Link href="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const handleShare = (platform: string) => {
    const url = window.location.href
    const text = blog.title
    
    const shareUrls: { [key: string]: string } = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    }
    
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400')
    }
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Image */}
        <div className="relative h-[400px] w-full bg-linear-to-b from-foreground/5 to-white">
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-white" />
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 -mt-72 relative z-10">
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Blog</span>
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-foreground/60">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          {blog.bannerImage && (
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-12">
              <Image
                src={blog.bannerImage}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Share Buttons */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border">
            <span className="text-sm font-medium text-foreground/70">Share:</span>
            <button 
              onClick={() => handleShare('facebook')}
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Facebook className="h-5 w-5 text-foreground/70 hover:text-primary" />
            </button>
            <button 
              onClick={() => handleShare('twitter')}
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Twitter className="h-5 w-5 text-foreground/70 hover:text-primary" />
            </button>
            <button 
              onClick={() => handleShare('linkedin')}
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Linkedin className="h-5 w-5 text-foreground/70 hover:text-primary" />
            </button>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(window.location.href)
                alert('Link copied to clipboard!')
              }}
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Share2 className="h-5 w-5 text-foreground/70 hover:text-primary" />
            </button>
          </div>

          {/* Article Body */}
          <div 
            className="prose prose-lg max-w-none mb-12
              prose-headings:text-foreground prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-foreground/80 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-foreground/80 prose-ul:my-6
              prose-li:mb-2
              prose-strong:text-foreground prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: blog.body }}
          />

          {/* CTA */}
          <div className="bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl p-8 text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Health?
            </h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Get personalized nutrition guidance from our expert dietitians. Book your consultation today!
            </p>
            <Link href="/book">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Book Consultation
              </Button>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
