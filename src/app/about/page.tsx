import { fetchAboutData } from "@/lib/mock-api";
import { Suspense } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Skeleton components
function AboutSkeleton() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-3/4" />
      </div>

      <div className="space-y-4">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-5/6" />
      </div>

      <div className="space-y-4">
        <Skeleton className="h-8 w-32" />
        <div className="grid gap-4 md:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-10" />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <Skeleton className="h-8 w-32" />
        <div className="grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="flex items-center gap-4 mb-3">
                  <Skeleton className="size-12 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

async function AboutContent() {
  const data = await fetchAboutData();

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{data.title}</h1>
        <p className="text-lg text-muted-foreground">{data.description}</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="text-muted-foreground leading-relaxed">{data.mission}</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Our Values</h2>
        <div className="flex flex-wrap gap-3">
          {data.values.map((value, index) => (
            <Badge
              key={value}
              variant="outline"
              size="lg"
              className="px-4 py-2 text-sm transition-all hover:border-foreground/20 hover:shadow-sm"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {value}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Our Team</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {data.team.map((member, index) => (
            <Card
              key={member.name}
              className="transition-all hover:shadow-md"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <Avatar className="size-12 text-base">
                    {member.image && (
                      <AvatarImage src={member.image} alt={member.name} />
                    )}
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<AboutSkeleton />}>
          <AboutContent />
        </Suspense>
      </div>
    </div>
  );
}
