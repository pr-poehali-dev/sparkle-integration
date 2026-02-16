import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const projects = [
  { id: 1, name: "Альпийский", area: 95, rooms: 3, floors: 1, price: "4 275 000 ₽", image: "/placeholder.svg" },
  { id: 2, name: "Скандинавский", area: 120, rooms: 4, floors: 2, price: "5 400 000 ₽", image: "/placeholder.svg" },
  { id: 3, name: "Классика", area: 145, rooms: 5, floors: 2, price: "6 525 000 ₽", image: "/placeholder.svg" },
  { id: 4, name: "Модерн", area: 80, rooms: 3, floors: 1, price: "3 600 000 ₽", image: "/placeholder.svg" },
  { id: 5, name: "Премиум", area: 200, rooms: 6, floors: 2, price: "9 000 000 ₽", image: "/placeholder.svg" },
  { id: 6, name: "Уютный", area: 65, rooms: 2, floors: 1, price: "2 925 000 ₽", image: "/placeholder.svg" },
]

const readyHouses = [
  { id: 1, name: "Дом в Подмосковье", houseArea: 120, landArea: 10, price: "8 500 000 ₽", image: "/placeholder.svg" },
  { id: 2, name: "Дом в Туле", houseArea: 95, landArea: 8, price: "6 200 000 ₽", image: "/placeholder.svg" },
  { id: 3, name: "Дом в Калуге", houseArea: 145, landArea: 12, price: "9 800 000 ₽", image: "/placeholder.svg" },
  { id: 4, name: "Дом во Владимире", houseArea: 80, landArea: 6, price: "5 100 000 ₽", image: "/placeholder.svg" },
]

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -300 : 300, opacity: 0 }),
}

export function FeaturesSlideshowSection() {
  const [projectIndex, setProjectIndex] = useState(0)
  const [projectDir, setProjectDir] = useState(1)
  const [readyIndex, setReadyIndex] = useState(0)
  const [readyDir, setReadyDir] = useState(1)

  const nextProject = () => {
    setProjectDir(1)
    setProjectIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setProjectDir(-1)
    setProjectIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const nextReady = () => {
    setReadyDir(1)
    setReadyIndex((prev) => (prev + 1) % readyHouses.length)
  }

  const prevReady = () => {
    setReadyDir(-1)
    setReadyIndex((prev) => (prev - 1 + readyHouses.length) % readyHouses.length)
  }

  const project = projects[projectIndex]
  const house = readyHouses[readyIndex]

  return (
    <>
      <section className="py-20 border-t border-border" id="projects">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-balance">
              Каталог проектов
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
              Выберите проект дома или адаптируем любой вариант под ваши пожелания
            </p>
          </motion.div>

          <div className="flex items-center justify-center gap-6 max-w-2xl mx-auto">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="rounded-full h-14 w-14 bg-muted hover:bg-muted/80 flex-shrink-0"
            >
              <Icon name="ChevronLeft" size={24} />
            </Button>

            <div className="flex-1 overflow-hidden relative min-h-[420px]">
              <AnimatePresence mode="wait" custom={projectDir}>
                <motion.div
                  key={project.id}
                  custom={projectDir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <Card className="overflow-hidden hover:border-primary/50 transition-colors">
                    <div className="relative bg-muted/50">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-[260px] object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-display font-bold mb-4">{project.name}</h3>
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Icon name="Maximize2" size={14} className="text-primary" />
                          <span>{project.area} м²</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Icon name="DoorOpen" size={14} className="text-primary" />
                          <span>{project.rooms} комн.</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Icon name="Layers" size={14} className="text-primary" />
                          <span>{project.floors} эт.</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <span className="text-sm text-muted-foreground">от</span>
                        <span className="text-xl font-bold text-primary">{project.price}</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="rounded-full h-14 w-14 bg-muted hover:bg-muted/80 flex-shrink-0"
            >
              <Icon name="ChevronRight" size={24} />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setProjectDir(idx > projectIndex ? 1 : -1)
                  setProjectIndex(idx)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === projectIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Перейти к проекту ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border bg-secondary/30" id="ready-houses">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-balance">
              Готовые дома
            </h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
              Дома с участками, готовые к заселению. Заезжайте и живите уже сегодня
            </p>
          </motion.div>

          <div className="flex items-center justify-center gap-6 max-w-2xl mx-auto">
            <Button
              variant="outline"
              size="icon"
              onClick={prevReady}
              className="rounded-full h-14 w-14 bg-muted hover:bg-muted/80 flex-shrink-0"
            >
              <Icon name="ChevronLeft" size={24} />
            </Button>

            <div className="flex-1 overflow-hidden relative min-h-[420px]">
              <AnimatePresence mode="wait" custom={readyDir}>
                <motion.div
                  key={house.id}
                  custom={readyDir}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <Card className="overflow-hidden hover:border-primary/50 transition-colors">
                    <div className="relative bg-muted/50">
                      <img
                        src={house.image}
                        alt={house.name}
                        className="w-full h-[260px] object-cover"
                      />
                      <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Готов к заселению
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-display font-bold mb-4">{house.name}</h3>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name="Home" size={16} className="text-primary" />
                          <span>Дом {house.houseArea} м²</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name="TreePine" size={16} className="text-primary" />
                          <span>Участок {house.landArea} сот.</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <span className="text-sm text-muted-foreground">дом + участок</span>
                        <span className="text-xl font-bold text-primary">{house.price}</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextReady}
              className="rounded-full h-14 w-14 bg-muted hover:bg-muted/80 flex-shrink-0"
            >
              <Icon name="ChevronRight" size={24} />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {readyHouses.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setReadyDir(idx > readyIndex ? 1 : -1)
                  setReadyIndex(idx)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === readyIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Перейти к дому ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
