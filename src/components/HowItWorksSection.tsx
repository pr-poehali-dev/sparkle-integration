import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"
import { Card } from "@/components/ui/card"

export function HowItWorksSection() {
  const steps = [
    {
      icon: "MessageSquare",
      title: "Консультация и проект",
      description:
        "Обсуждаем ваши пожелания, выбираем проект дома или адаптируем под вас. Составляем детальную смету.",
      visual: (
        <div className="h-[280px] flex items-center justify-center">
          <Card className="w-full p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name="ClipboardList" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Этап планирования</p>
                    <p className="text-sm text-muted-foreground">Подготовка документов</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                  <span className="text-sm">Выбор проекта</span>
                  <span className="text-sm font-medium text-green-500">&#10003;</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                  <span className="text-sm">Смета</span>
                  <span className="text-sm font-medium text-green-500">&#10003;</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                  <span className="text-sm">Договор</span>
                  <span className="text-sm font-medium text-green-500">&#10003;</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
    {
      icon: "Hammer",
      title: "Строительство",
      description:
        "Строим дом по утвержденному проекту. Вы можете отслеживать ход работ на каждом этапе.",
      visual: (
        <div className="h-[280px] flex items-center justify-center">
          <Card className="w-full p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20">
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Icon name="HardHat" size={20} className="text-primary" />
                  <span className="text-sm font-semibold">Ход строительства</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-green-500">
                  <Icon name="Activity" size={12} />
                  <span>В процессе</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Фундамент</span>
                    <span className="font-semibold">100%</span>
                  </div>
                  <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-primary rounded-full" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Стены</span>
                    <span className="font-semibold">100%</span>
                  </div>
                  <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-primary rounded-full" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Кровля</span>
                    <span className="font-semibold">75%</span>
                  </div>
                  <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                    <div className="h-full w-[75%] bg-primary rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
    {
      icon: "Key",
      title: "Сдача объекта",
      description:
        "Проводим финальную проверку качества, подписываем акт и передаем ключи от вашего нового дома.",
      visual: (
        <div className="h-[280px] flex items-center justify-center">
          <Card className="w-full p-6 bg-gradient-to-br from-primary/20 to-primary/5 border-primary/20">
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" size={20} className="text-primary" />
                  <span className="text-sm font-semibold">Завершение</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-green-500">
                  <Icon name="PartyPopper" size={12} />
                  <span>Готово</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 flex-shrink-0" />
                  <span className="text-sm">Проверка качества</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 flex-shrink-0" />
                  <span className="text-sm">Документы</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                  <Icon name="CheckCircle2" size={16} className="text-green-500 flex-shrink-0" />
                  <span className="text-sm">Ключи</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Как мы строим</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            От первого звонка до заселения — 3 простых шага
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <div className="mb-6">{step.visual}</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name={step.icon} size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold font-display">{step.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
