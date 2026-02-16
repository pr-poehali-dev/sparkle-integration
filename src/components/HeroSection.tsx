import { ShinyButton } from "@/components/ui/shiny-button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(234 120 40 / 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(234 120 40 / 0.12) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 0%, transparent 100%)",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 font-display">
          Построим дом вашей мечты
        </h1>

        <p className="text-lg text-muted-foreground text-balance mb-8 leading-relaxed max-w-2xl mx-auto">
          Строительная компания «Дом Мечты» — строим каркасные и кирпичные дома под ключ. Рассчитайте стоимость онлайн и выберите проект.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#calculator">
            <ShinyButton className="text-base px-8">
              Рассчитать стоимость
            </ShinyButton>
          </a>
          <a href="#projects">
            <ShinyButton variant="secondary" className="text-base px-8">
              Каталог проектов
            </ShinyButton>
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <p className="text-3xl font-bold font-display text-primary">350+</p>
            <p className="text-sm text-muted-foreground mt-1">домов построено</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold font-display text-primary">12 лет</p>
            <p className="text-sm text-muted-foreground mt-1">на рынке</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold font-display text-primary">5 лет</p>
            <p className="text-sm text-muted-foreground mt-1">гарантия</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}