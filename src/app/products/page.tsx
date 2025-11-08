import { Suspense } from "react";
import { ProductsList } from "./_components/products-list";
import { ProductsListSkeleton } from "./_components/products-list-skeleton";

export default async function ProductsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Products</h1>
            <p className="text-lg text-muted-foreground">
              Discover our curated collection of high-quality products
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Suspense fallback={<ProductsListSkeleton />}>
              <ProductsList />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
