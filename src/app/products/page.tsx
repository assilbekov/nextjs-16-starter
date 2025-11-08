import { fetchProducts } from "@/lib/mock-api";
import { Suspense } from "react";
import { Package } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

// Skeleton components
function ProductsListSkeleton() {
  return Array.from({ length: 6 }).map((_, i) => (
    <Card key={i}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/3" />
          </div>
          <Skeleton className="h-8 w-8 rounded-lg" />
        </div>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6" />
      </CardContent>
      <CardFooter>
        <div className="flex items-center justify-between w-full">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
      </CardFooter>
    </Card>
  ));
}

async function ProductsList() {
  const products = await fetchProducts();

  return products.map((product, index) => (
    <Card
      key={product.id}
      className="group transition-all hover:shadow-lg"
      style={{
        animationDelay: `${index * 75}ms`,
      }}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="group-hover:text-primary transition-colors">
              {product.name}
            </CardTitle>
            <CardDescription>{product.category}</CardDescription>
          </div>
          <div className="rounded-lg bg-muted p-2 transition-transform group-hover:scale-110">
            <Package className="h-5 w-5" />
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
      </CardContent>

      <Separator />

      <CardFooter className="flex items-center justify-between">
        <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
        <Badge variant={product.inStock ? "success" : "outline"}>
          {product.inStock ? "In Stock" : "Out of Stock"}
        </Badge>
      </CardFooter>
    </Card>
  ));
}

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
