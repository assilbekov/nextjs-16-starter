import { Suspense } from "react";
import { BlogList } from "./_components/blog-list";
import { BlogListSkeleton } from "./_components/blog-list-skeleton";

export default async function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Insights, tutorials, and updates from our team
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Suspense fallback={<BlogListSkeleton />}>
              <BlogList />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
