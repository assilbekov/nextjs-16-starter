"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, ShoppingBag, BookOpen } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Products", href: "/products", icon: ShoppingBag },
  { name: "Blog", href: "/blog", icon: BookOpen },
];

export default function Navigation() {
  const pathname = usePathname();
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = navItems.findIndex((item) => item.href === pathname);
    if (activeIndex !== -1 && itemRefs.current[activeIndex] && navRef.current) {
      const activeItem = itemRefs.current[activeIndex];
      const navRect = navRef.current.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();

      setIndicatorStyle({
        left: itemRect.left - navRect.left,
        width: itemRect.width,
      });
    }
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-semibold">
              App
            </Link>
            <ul
              ref={navRef}
              className="hidden md:flex items-center gap-1 relative"
            >
              {/* Sliding background indicator */}
              <span
                className="absolute top-0 h-full rounded-lg bg-accent transition-all duration-300 ease-out"
                style={{
                  left: `${indicatorStyle.left}px`,
                  width: `${indicatorStyle.width}px`,
                  clipPath:
                    indicatorStyle.width > 0
                      ? "inset(0 0 0 0 round 0.5rem)"
                      : "inset(0 100% 0 0 round 0.5rem)",
                }}
              />

              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <li
                    key={item.href}
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`
                        relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                        transition-colors duration-200 ease-out
                        ${
                          isActive
                            ? "text-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }
                      `}
                    >
                      <Icon className="relative h-4 w-4 z-10" />
                      <span className="relative z-10">{item.name}</span>
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
