import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Сколько стоит строительство дома?",
    answer:
      "Стоимость зависит от площади, выбранного проекта и комплектации. Базовая цена строительства дома — от 45 000 \u20BD/м\u00B2. Террасы и крыльца — от 18 000 \u20BD/м\u00B2. Воспользуйтесь нашим калькулятором для точного расчета.",
  },
  {
    question: "Какие сроки строительства?",
    answer:
      "Средний срок строительства дома под ключ — от 3 до 6 месяцев в зависимости от площади и сложности проекта. Точные сроки фиксируются в договоре.",
  },
  {
    question: "Можно ли строить зимой?",
    answer:
      "Да, мы ведем строительство круглый год. Зимнее строительство имеет свои преимущества: сухая древесина, более низкие цены на материалы. Фундаментные работы планируем на теплый сезон.",
  },
  {
    question: "Какие материалы вы используете?",
    answer:
      "Мы работаем с проверенными поставщиками и используем сертифицированные материалы. Каркасные дома строим из сухой строганной доски, кирпичные — из керамического кирпича. Все материалы с документами качества.",
  },
  {
    question: "Есть ли рассрочка?",
    answer:
      "Да, мы предоставляем беспроцентную рассрочку на весь период строительства. Оплата поэтапная: фундамент, стены, кровля, отделка. Также работаем с материнским капиталом.",
  },
  {
    question: "Можно ли изменить готовый проект?",
    answer:
      "Конечно! Любой проект из каталога можно адаптировать под ваши пожелания: изменить планировку, добавить или убрать комнаты, изменить размеры. Наш архитектор поможет с доработкой.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto mb-12"
        >
          <div className="flex justify-center">
            <div className="border border-border py-1 px-4 rounded-lg text-sm text-muted-foreground">FAQ</div>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-5 text-center">
            Частые вопросы
          </h2>
          <p className="text-center mt-5 text-muted-foreground">Ответы на популярные вопросы о строительстве</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-display text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
