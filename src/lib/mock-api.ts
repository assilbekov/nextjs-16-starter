// Mock API utility to simulate async data fetching

export async function delay(ms: number = 1500): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// About page data
export type AboutData = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  image?: string;
}[];

export async function fetchAboutData(): Promise<AboutData> {
  await delay(1800);
  return [
    {
      name: "Alex Johnson",
      role: "Lead Developer",
      bio: "10+ years of experience in web development and architecture.",
      initials: "AJ",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    },
    {
      name: "Sarah Chen",
      role: "UX Designer",
      bio: "Passionate about creating intuitive and beautiful user experiences.",
      initials: "SC",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      name: "Michael Torres",
      role: "Backend Engineer",
      bio: "Expert in scalable systems and database optimization.",
      initials: "MT",
    },
  ];
}

// Products page data
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
}

export async function fetchProducts(): Promise<Product[]> {
  await delay(1600);
  return [
    {
      id: 1,
      name: "Premium Headphones",
      description: "High-quality wireless headphones with noise cancellation",
      price: 299.99,
      category: "Audio",
      inStock: true,
    },
    {
      id: 2,
      name: "Smart Watch",
      description: "Feature-rich smartwatch with health tracking",
      price: 399.99,
      category: "Wearables",
      inStock: true,
    },
    {
      id: 3,
      name: "Laptop Stand",
      description: "Ergonomic aluminum laptop stand",
      price: 79.99,
      category: "Accessories",
      inStock: false,
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      description: "RGB mechanical keyboard with custom switches",
      price: 149.99,
      category: "Peripherals",
      inStock: true,
    },
    {
      id: 5,
      name: "4K Monitor",
      description: "27-inch 4K monitor with HDR support",
      price: 549.99,
      category: "Displays",
      inStock: true,
    },
    {
      id: 6,
      name: "Wireless Mouse",
      description: "Precision wireless mouse with programmable buttons",
      price: 69.99,
      category: "Peripherals",
      inStock: true,
    },
  ];
}

// Blog page data
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  await delay(2000);
  return [
    {
      id: 1,
      title: "Getting Started with Next.js 15",
      excerpt:
        "Learn the fundamentals of Next.js and build your first application with the latest features.",
      author: "Alex Johnson",
      date: "2024-11-01",
      readTime: "5 min read",
      category: "Tutorial",
    },
    {
      id: 2,
      title: "Modern CSS Techniques for 2024",
      excerpt:
        "Explore the latest CSS features including container queries, cascade layers, and more.",
      author: "Sarah Chen",
      date: "2024-10-28",
      readTime: "8 min read",
      category: "CSS",
    },
    {
      id: 3,
      title: "Building Scalable APIs with Node.js",
      excerpt:
        "Best practices for designing and implementing scalable RESTful APIs.",
      author: "Michael Torres",
      date: "2024-10-25",
      readTime: "12 min read",
      category: "Backend",
    },
    {
      id: 4,
      title: "TypeScript Tips and Tricks",
      excerpt:
        "Advanced TypeScript patterns to write better, more maintainable code.",
      author: "Alex Johnson",
      date: "2024-10-20",
      readTime: "6 min read",
      category: "TypeScript",
    },
    {
      id: 5,
      title: "Optimizing React Performance",
      excerpt:
        "Techniques and tools to improve the performance of your React applications.",
      author: "Sarah Chen",
      date: "2024-10-15",
      readTime: "10 min read",
      category: "React",
    },
  ];
}
