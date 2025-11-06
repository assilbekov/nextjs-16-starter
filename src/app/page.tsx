import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <Badge
              variant="outline"
              size="lg"
              className="animate-in fade-in zoom-in duration-500"
            >
              <Sparkles className="h-4 w-4" />
              <span>Welcome to Next.js Starter</span>
            </Badge>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Build amazing web
              <br />
              <span className="bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                experiences faster
              </span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed">
              A modern Next.js starter with clean navigation, smooth animations,
              and beautiful UI components. Start building your next project
              today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                render={<Link href="/about" />}
                className="group"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                render={<Link href="/products" />}
              >
                View Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Everything you need
            </h2>
            <p className="text-lg text-muted-foreground">
              Built with modern tools and best practices
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description:
                  "Optimized for performance with Next.js 15 and React Server Components.",
                delay: "0ms",
              },
              {
                icon: Shield,
                title: "Type Safe",
                description:
                  "Built with TypeScript for enhanced developer experience and fewer bugs.",
                delay: "100ms",
              },
              {
                icon: Sparkles,
                title: "Beautiful UI",
                description:
                  "Clean, modern design with smooth animations and transitions.",
                delay: "200ms",
              },
            ].map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="group transition-all hover:shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500"
                  style={{ animationDelay: feature.delay }}
                >
                  <CardContent className="space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <CardContent className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Ready to get started?
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                Explore our blog for tutorials and insights, or check out our
                products.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" render={<Link href="/blog" />}>
                  Read Blog
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  render={<Link href="/products" />}
                >
                  Browse Products
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
