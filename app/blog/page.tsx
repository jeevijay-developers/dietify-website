"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import BlogCard from "@/components/blog-card"
import { blogAPI, type Blog } from "@/lib/api"

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchBlogs() {
      try {
        setLoading(true)
        setError(null)
        const data = await blogAPI.getAllBlogs()
        setBlogs(data)
      } catch (err) {
        setError('Failed to load blogs. Please try again later.')
        console.error('Error fetching blogs:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-linear-to-b from-white to-primary/5">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Blog</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Expert insights, nutrition tips, and healthy living advice from our team of certified dietitians
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="pb-24 px-4">
          <div className="max-w-6xl mx-auto">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <p className="text-red-500 mb-4">{error}</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="text-primary hover:text-primary/80 underline"
                >
                  Try Again
                </button>
              </div>
            ) : blogs.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-foreground/70 text-lg">No blogs available yet. Check back soon!</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                  <BlogCard 
                    key={blog._id} 
                    slug={blog.slug}
                    title={blog.title}
                    body={blog.body}
                    bannerImage={blog.bannerImage}
                    date={blog.date}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
