import { fetchBlogPosts } from "@/lib/mock-api";
import { Suspense } from "react";
import { Calendar, Clock, User } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

// Skeleton components
function BlogCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-4 w-24 rounded-full mb-3" />
        <Skeleton className="h-7 w-full" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-5 w-full mb-2" />
        <Skeleton className="h-5 w-5/6" />
      </CardContent>
      <Separator />
      <CardFooter>
        <div className="flex gap-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
      </CardFooter>
    </Card>
  );
}

function BlogSkeleton() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Skeleton className="h-10 w-32" />
        <Skeleton className="h-6 w-96" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <BlogCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

async function BlogContent() {
  const posts = await fetchBlogPosts();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        <p className="text-lg text-muted-foreground">
          Insights, tutorials, and updates from our team
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post, index) => (
          <Card
            key={post.id}
            className="group transition-all hover:shadow-lg cursor-pointer"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <CardHeader>
              <Badge variant="outline" className="w-fit mb-2">
                {post.category}
              </Badge>
              <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                {post.title}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-base text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </CardContent>

            <Separator />

            <CardFooter className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<BlogSkeleton />}>
          <BlogContent />
        </Suspense>
      </div>
    </div>
  );
}
