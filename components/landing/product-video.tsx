import { Badge } from "@/components/ui/badge"

export function ProductVideo() {
  return (
    <section className="border-y bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <Badge variant="secondary" className="px-3 py-1 text-xs font-medium sm:text-sm">
            See It In Action
          </Badge>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Watch SweepBot Pro clean around real furniture.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            See how it works to keep your home clean and tidy, even in hard-to-reach  areas. Watch the video to see SweepBot Pro in action, navigating around furniture and obstacles with ease.
          </p>
        </div>

        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border bg-card shadow-lg">
          <video
            className="aspect-[9/16] w-full bg-muted object-contain"
            controls
            playsInline
            preload="metadata"
            poster="/images/D6.avif"
          >
            <source src="/product-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}
