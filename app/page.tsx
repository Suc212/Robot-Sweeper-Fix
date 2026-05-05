import { HeroSection } from "@/components/landing/hero-section"
import { TrustBadges } from "@/components/landing/trust-badges"
import { ProblemSolution } from "@/components/landing/problem-solution"
import { Specifications } from "@/components/landing/specifications"
import { Benefits } from "@/components/landing/benefits"
import { ProductVideo } from "@/components/landing/product-video"
import { Reviews } from "@/components/landing/reviews"
import { OrderForm } from "@/components/landing/order-form"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustBadges />
      <ProductVideo />
      <ProblemSolution />
      <Benefits />
      <Specifications />
      <Reviews />
      <OrderForm />
      <Footer />
    </main>
  )
}
