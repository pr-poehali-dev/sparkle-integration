import { ShinyButton } from "@/components/ui/shiny-button"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="text-xl font-bold font-display">
              Дом Мечты
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Проекты
              </a>
              <a href="#calculator" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Калькулятор
              </a>
              <a href="#ready-houses" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Готовые дома
              </a>
              <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Отзывы
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ShinyButton>
              <Icon name="Phone" size={16} className="mr-2 inline-block" />
              Позвонить
            </ShinyButton>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
