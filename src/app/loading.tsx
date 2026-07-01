import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Skeleton */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center">
        <div className="absolute inset-0 bg-muted animate-pulse" />
        <div className="relative z-10 container max-w-4xl px-6 text-center space-y-6">
          <Skeleton className="h-16 w-3/4 mx-auto bg-muted-foreground/20" />
          <Skeleton className="h-6 w-2/3 mx-auto bg-muted-foreground/20" />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Skeleton className="h-12 w-64 rounded-lg bg-muted-foreground/20" />
            <Skeleton className="h-12 w-52 rounded-lg bg-muted-foreground/20" />
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-[1200px] px-6 space-y-12">
          <div className="space-y-4 text-center mb-16">
            <Skeleton className="h-10 w-1/3 mx-auto bg-muted-foreground/20" />
            <Skeleton className="h-5 w-2/3 mx-auto bg-muted-foreground/20" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg border border-border overflow-hidden">
                <Skeleton className="h-48 w-full bg-muted-foreground/20 rounded-none" />
                <div className="p-6 space-y-4">
                  <Skeleton className="h-5 w-16 bg-muted-foreground/20" />
                  <Skeleton className="h-7 w-3/4 bg-muted-foreground/20" />
                  <Skeleton className="h-4 w-full bg-muted-foreground/20" />
                  <Skeleton className="h-4 w-5/6 bg-muted-foreground/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
