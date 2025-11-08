import { fetchBlogPosts } from "@/lib/mock-api";
import { Calendar, Clock, User } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export async function BlogList() {
  const posts = await fetchBlogPosts();

  return posts.map((post, index) => (
    <Card
      key={post.id}
      className="group transition-all hover:shadow-lg cursor-pointer"
      style={{
        animationDelay: `${index * 75}ms`,
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
  ));
}
