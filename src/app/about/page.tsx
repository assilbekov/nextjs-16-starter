import { Suspense } from "react";
import { Badge } from "@/components/ui/badge";
import { OurTeam } from "./_components/our-team";
import { TeamSkeleton } from "./_components/team-skeleton";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">About Us</h1>
            <p className="text-lg text-muted-foreground">
              We're a team of passionate developers building amazing web
              experiences with modern technologies.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to create innovative solutions that empower
              businesses and delight users.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Values</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Innovation",
                "Quality",
                "Collaboration",
                "User-Centric Design",
                "Continuous Learning",
              ].map((value, index) => (
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
              <Suspense fallback={<TeamSkeleton />}>
                <OurTeam />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
