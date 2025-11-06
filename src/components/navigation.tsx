"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, ShoppingBag, BookOpen } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Products", href: "/products", icon: ShoppingBag },
  { name: "Blog", href: "/blog", icon: BookOpen },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-semibold">
              App
            </Link>
            <ul className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`
                        relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                        transition-all duration-200 ease-out
                        ${
                          isActive
                            ? "text-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }
                      `}
                    >
                      {isActive && (
                        <span className="absolute inset-0 rounded-lg bg-accent animate-in fade-in zoom-in-95 duration-200" />
                      )}
                      <Icon className="relative h-4 w-4" />
                      <span className="relative">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mobile menu */}
          <div className="flex md:hidden items-center gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative p-2 rounded-lg transition-all duration-200
                    ${
                      isActive
                        ? "text-foreground bg-accent"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    }
                  `}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
