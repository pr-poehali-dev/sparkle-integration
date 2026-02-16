import { Card } from "@/components/ui/card"
import Icon from "@/components/ui/icon"
import { motion } from "framer-motion"

export function FeaturesSection() {
  const features = [
    {
      icon: "Shield",
      title: "Гарантия 5 лет",
      description: "Даем официальную гарантию на все виды работ и материалы",
    },
    {
      icon: "Clock",
      title: "Сроки по договору",
      description: "Фиксируем сроки строительства в договоре. Штраф за каждый день просрочки",
    },
    {
      icon: "Calculator",
      title: "Прозрачная смета",
      description: "Детальная смета без скрытых платежей. Стоимость фиксируется в договоре",
    },
    {
      icon: "Hammer",
      title: "Свои бригады",
      description: "Работаем только своими проверенными бригадами с опытом от 5 лет",
    },
    {
      icon: "Home",
      title: "Под ключ",
      description: "Берем на себя все этапы: от проекта до чистовой отделки и благоустройства",
    },
    {
      icon: "Banknote",
      title: "Рассрочка 0%",
      description: "Предоставляем беспроцентную рассрочку на весь период строительства",
    },
  ]

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32" id="features">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-balance font-display">
          Почему выбирают нас
        </h2>
        <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
          Мы строим надежные дома с гарантией качества и прозрачным ценообразованием
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors h-full">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon name={feature.icon} size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-display">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
