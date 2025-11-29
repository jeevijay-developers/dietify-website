// API configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL
export interface Blog {
  _id: string
  title: string
  bannerImage?: string
  body: string
  date: string
  slug: string
  createdAt: string
  updatedAt: string
}

export interface DietPlan {
  _id: string
  title: string
  features: string[]
  duration: 'weekly' | 'monthly' | 'custom'
  customDuration?: string
  pricing: number
  category?: string
  createdAt: string
  updatedAt: string
}

// Generic fetch wrapper with error handling
async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error)
    throw error
  }
}

// Blog API functions
export const blogAPI = {
  // Get all blogs
  getAllBlogs: async (): Promise<Blog[]> => {
    return fetchAPI<Blog[]>('/blogs')
  },

  // Get single blog by ID
  getBlogById: async (id: string): Promise<Blog> => {
    return fetchAPI<Blog>(`/blogs/${id}`)
  },

  // Get single blog by slug
  getBlogBySlug: async (slug: string): Promise<Blog> => {
    return fetchAPI<Blog>(`/blogs/slug/${slug}`)
  },

  // Create blog (admin only)
  createBlog: async (blogData: Partial<Blog>): Promise<Blog> => {
    return fetchAPI<Blog>('/blogs', {
      method: 'POST',
      body: JSON.stringify(blogData),
    })
  },

  // Update blog (admin only)
  updateBlog: async (id: string, blogData: Partial<Blog>): Promise<Blog> => {
    return fetchAPI<Blog>(`/blogs/${id}`, {
      method: 'PUT',
      body: JSON.stringify(blogData),
    })
  },

  // Delete blog (admin only)
  deleteBlog: async (id: string): Promise<{ message: string }> => {
    return fetchAPI<{ message: string }>(`/blogs/${id}`, {
      method: 'DELETE',
    })
  },
}

// Diet Plan API functions
export const dietPlanAPI = {
  // Get all diet plans
  getAllDietPlans: async (): Promise<DietPlan[]> => {
    return fetchAPI<DietPlan[]>('/dietplans')
  },

  // Get single diet plan by ID
  getDietPlanById: async (id: string): Promise<DietPlan> => {
    return fetchAPI<DietPlan>(`/dietplans/${id}`)
  },

  // Create diet plan (admin only)
  createDietPlan: async (planData: Partial<DietPlan>): Promise<DietPlan> => {
    return fetchAPI<DietPlan>('/dietplans', {
      method: 'POST',
      body: JSON.stringify(planData),
    })
  },

  // Update diet plan (admin only)
  updateDietPlan: async (id: string, planData: Partial<DietPlan>): Promise<DietPlan> => {
    return fetchAPI<DietPlan>(`/dietplans/${id}`, {
      method: 'PUT',
      body: JSON.stringify(planData),
    })
  },

  // Delete diet plan (admin only)
  deleteDietPlan: async (id: string): Promise<{ message: string }> => {
    return fetchAPI<{ message: string }>(`/dietplans/${id}`, {
      method: 'DELETE',
    })
  },
}
