import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { CursorGlow } from "@/components/CursorGlow";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      <div className="glass rounded-3xl px-10 py-16 text-center">
        <h1 className="font-serif text-8xl text-gold-gradient">404</h1>
        <h2 className="mt-4 font-serif text-2xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This scent has drifted elsewhere. Return home to explore the collection.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex rounded-full bg-gold-gradient px-6 py-2.5 text-sm font-medium text-primary-foreground gold-glow hover:opacity-90"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass max-w-md rounded-3xl px-8 py-12 text-center">
        <h1 className="font-serif text-2xl text-gold-gradient">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again or return home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-gold-gradient px-5 py-2 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-primary/40 px-5 py-2 text-sm text-primary">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Abira Fragrances — Luxury Perfumes Hand-Blended in Dubai" },
      {
        name: "description",
        content:
          "Hand-blended luxury perfumes from Ayal Nasir, Dubai. Oud, amber, rose and musk drawn from the world's most storied fragrances. Bottles from AED 35 to AED 100.",
      },
      { name: "author", content: "Abira Fragrance" },
      { name: "keywords", content: "Abira Fragrance, luxury perfume Dubai, inspired perfumes, Arabic oud, attar Dubai, affordable luxury fragrance" },
      { property: "og:title", content: "Abira Fragrances — Luxury Perfumes Hand-Blended in Dubai" },
      { property: "og:description", content: "Hand-blended luxury perfumes from Ayal Nasir, Dubai. Oud, amber, rose and musk drawn from the world's most storied fragrances. Bottles from AED 35 to AED 100." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Abira Fragrance" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0a0a0a" },
      { name: "twitter:title", content: "Abira Fragrances — Luxury Perfumes Hand-Blended in Dubai" },
      { name: "twitter:description", content: "Hand-blended luxury perfumes from Ayal Nasir, Dubai. Oud, amber, rose and musk drawn from the world's most storied fragrances. Bottles from AED 35 to AED 100." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/240c3e76-bf98-4052-8cfc-9429784934d6/id-preview-8d82a2cb--78dc28d0-da30-4b07-ae40-48b0c125229e.lovable.app-1784542831539.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/240c3e76-bf98-4052-8cfc-9429784934d6/id-preview-8d82a2cb--78dc28d0-da30-4b07-ae40-48b0c125229e.lovable.app-1784542831539.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Abira Fragrance",
          image: "",
          telephone: "+971567034852",
          email: "murtazapindarma52@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Ayal Nasir, Near Saify Masjid",
            addressLocality: "Dubai",
            addressCountry: "AE",
          },
          sameAs: ["https://www.instagram.com/abira_fragrance"],
          priceRange: "AED 35 - AED 100",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="min-h-screen pt-20">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </QueryClientProvider>
  );
}
