import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export function BlogListSkeleton() {
  return Array.from({ length: 4 }).map((_, i) => (
    <Card key={i}>
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
  ));
}
