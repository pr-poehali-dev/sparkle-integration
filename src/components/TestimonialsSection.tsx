import { motion } from "framer-motion"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "Построили дом за 4 месяца, как и обещали. Качество на высоте, бригада работала аккуратно. Рекомендую!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Алексей Петров",
    role: "Дом 120 м², Московская обл.",
  },
  {
    text: "Долго выбирали подрядчика и не пожалели что остановились на «Дом Мечты». Всё прозрачно, никаких скрытых доплат.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Мария Сидорова",
    role: "Дом 95 м², Тульская обл.",
  },
  {
    text: "Отличная команда! Помогли с выбором проекта, адаптировали под наш участок. Дом получился теплый и уютный.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Дмитрий Козлов",
    role: "Дом 145 м², Калужская обл.",
  },
  {
    text: "Строили в рассрочку — очень удобно. Качество материалов отличное, всё по договору.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    name: "Елена Новикова",
    role: "Дом 80 м², Владимирская обл.",
  },
  {
    text: "Второй раз обращаемся в «Дом Мечты». Первый дом для себя, второй для родителей. Всем довольны!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Сергей Волков",
    role: "Дом 110 м², Рязанская обл.",
  },
  {
    text: "Понравился профессиональный подход. Прораб всегда на связи, все вопросы решались оперативно.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    name: "Ольга Морозова",
    role: "Дом 130 м², Тверская обл.",
  },
  {
    text: "Смета не изменилась ни на рубль за время строительства. Это большая редкость в наше время.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Андрей Кузнецов",
    role: "Дом 160 м², Ярославская обл.",
  },
  {
    text: "Дом простоял первую зиму — тепло, никаких проблем. Спасибо команде за качественную работу!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Наталья Белова",
    role: "Дом 100 м², Смоленская обл.",
  },
  {
    text: "Выбрали проект из каталога, немного доработали планировку. Результат превзошел ожидания!",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    name: "Игорь Лебедев",
    role: "Дом 175 м², Московская обл.",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

export function TestimonialsSection() {
  return (
    <section className="py-20 relative overflow-hidden" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-border py-1 px-4 rounded-lg text-sm text-muted-foreground">Отзывы</div>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-5 text-center">
            Что говорят наши клиенты
          </h2>
          <p className="text-center mt-5 text-muted-foreground">Более 350 семей уже живут в домах, построенных нами</p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  )
}
