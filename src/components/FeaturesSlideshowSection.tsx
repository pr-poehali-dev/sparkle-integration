import { useState } from "react"
import { motion } from "framer-motion"
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

export function FeaturesSlideshowSection() {
  const [projectIndex, setProjectIndex] = useState(0)
  const [readyIndex, setReadyIndex] = useState(0)

  const projectsPerPage = 3

  const nextProject = () => {
    setProjectIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setProjectIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const getVisibleProjects = () => {
    const visible = []
    for (let i = 0; i < projectsPerPage; i++) {
      visible.push(projects[(projectIndex + i) % projects.length])
    }
    return visible
  }

  const readyPerPage = 3

  const nextReady = () => {
    setReadyIndex((prev) => (prev + 1) % readyHouses.length)
  }

  const prevReady = () => {
    setReadyIndex((prev) => (prev - 1 + readyHouses.length) % readyHouses.length)
  }

  const getVisibleReady = () => {
    const visible = []
    for (let i = 0; i < readyPerPage; i++) {
      visible.push(readyHouses[(readyIndex + i) % readyHouses.length])
    }
    return visible
  }

  return (
    <>
      <section className="py-20 border-t border-border" id="projects">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-start justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-balance max-w-2xl">
                Каталог проектов
              </h2>
              <p className="text-lg text-muted-foreground mt-4 max-w-xl">
                Выберите проект дома или адаптируем любой вариант под ваши пожелания
              </p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <Button
                variant="outline"
                size="icon"
                onClick={prevProject}
                className="rounded-full h-12 w-12 bg-muted hover:bg-muted/80"
              >
                <Icon name="ChevronLeft" size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextProject}
                className="rounded-full h-12 w-12 bg-muted hover:bg-muted/80"
              >
                <Icon name="ChevronRight" size={20} />
              </Button>
            </div>
          </motion.div>

          <div className="relative overflow-hidden">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getVisibleProjects().map((project) => (
                <motion.div
                  key={`project-${project.id}-${projectIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="overflow-hidden group hover:border-primary/50 transition-colors">
                    <div className="relative bg-muted/50">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-[240px] object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-display font-bold mb-3">{project.name}</h3>
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
                        <span className="text-lg font-bold text-primary">{project.price}</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setProjectIndex(idx)}
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
            className="flex items-start justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-balance max-w-2xl">
                Готовые дома
              </h2>
              <p className="text-lg text-muted-foreground mt-4 max-w-xl">
                Дома с участками, готовые к заселению. Заезжайте и живите уже сегодня
              </p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <Button
                variant="outline"
                size="icon"
                onClick={prevReady}
                className="rounded-full h-12 w-12 bg-muted hover:bg-muted/80"
              >
                <Icon name="ChevronLeft" size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextReady}
                className="rounded-full h-12 w-12 bg-muted hover:bg-muted/80"
              >
                <Icon name="ChevronRight" size={20} />
              </Button>
            </div>
          </motion.div>

          <div className="relative overflow-hidden">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getVisibleReady().map((house) => (
                <motion.div
                  key={`ready-${house.id}-${readyIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="overflow-hidden group hover:border-primary/50 transition-colors">
                    <div className="relative bg-muted/50">
                      <img
                        src={house.image}
                        alt={house.name}
                        className="w-full h-[240px] object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Готов к заселению
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-display font-bold mb-3">{house.name}</h3>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Icon name="Home" size={14} className="text-primary" />
                          <span>{house.houseArea} м²</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Icon name="TreePine" size={14} className="text-primary" />
                          <span>{house.landArea} соток</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <span className="text-sm text-muted-foreground">Цена с участком</span>
                        <span className="text-lg font-bold text-primary">{house.price}</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {readyHouses.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setReadyIndex(idx)}
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
