"use client"

import { Package, Zap, Globe, Shield, TrendingUp, Headphones } from "lucide-react"
import { useEffect, useState } from "react"

export function FeaturesSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const features = [
    {
      icon: Package,
      title: "Quality Guaranteed",
      description: "Every product is carefully vetted and sourced from reliable suppliers.",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick shipping from our global network directly to your location.",
    },
    {
      icon: Globe,
      title: "Global Sourcing",
      description: "Products from the best suppliers across multiple countries.",
    },
    {
      icon: Shield,
      title: "Buyer Protection",
      description: "Shop with confidence knowing your purchase is protected.",
    },
    {
      icon: TrendingUp,
      title: "Best Prices",
      description: "Competitive pricing on all products with regular deals and offers.",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Dedicated team available to help with any questions or concerns.",
    },
  ]

  return (
    <section id="features" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center space-y-4 mb-20 ${mounted ? "animate-fade-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Why Shop with MRTY</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your satisfaction is our priority. Experience hassle-free shopping with premium products at incredible
            prices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl border border-border bg-card hover:bg-card/50 transition-all duration-300 hover:scale-105 hover:border-accent/50 ${mounted ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
