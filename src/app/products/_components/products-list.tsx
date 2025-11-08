import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CardFooter } from "@/components/ui/card";
import { fetchProducts } from "@/lib/mock-api";
import { Package } from "lucide-react";

export async function ProductsList() {
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
