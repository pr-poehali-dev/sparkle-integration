import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { ShinyButton } from "@/components/ui/shiny-button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Icon from "@/components/ui/icon"

const HOUSE_PRICE_PER_M2 = 45000
const TERRACA_PRICE_PER_M2 = 18000
const PREFINISH_RATE = 0.15

const prefinishWorks = [
  { id: "electric", label: "Электрика" },
  { id: "heating", label: "Отопление" },
  { id: "walls", label: "Штукатурка стен" },
  { id: "floor", label: "Стяжка пола" },
  { id: "facade", label: "Штукатурка фасада" },
  { id: "drainage", label: "Водосточная система" },
  { id: "door", label: "Входная дверь" },
  { id: "gas", label: "Монтаж и подключение газа" },
]

function formatPrice(value: number): string {
  return value.toLocaleString("ru-RU").replace(/,/g, " ") + " ₽"
}

export function PricingSection() {
  const [houseArea, setHouseArea] = useState(100)
  const [terracaArea, setTerracaArea] = useState(0)
  const [prefinishEnabled, setPrefinishEnabled] = useState(false)
  const [prefinishOpen, setPrefinishOpen] = useState(false)
  const [selectedWorks, setSelectedWorks] = useState<Record<string, boolean>>(
    Object.fromEntries(prefinishWorks.map((w) => [w.id, true]))
  )

  const toggleWork = (id: string) => {
    setSelectedWorks((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const handlePrefinishToggle = (checked: boolean | "indeterminate") => {
    const isChecked = checked === true
    setPrefinishEnabled(isChecked)
    if (isChecked) {
      setPrefinishOpen(true)
      setSelectedWorks(Object.fromEntries(prefinishWorks.map((w) => [w.id, true])))
    } else {
      setPrefinishOpen(false)
    }
  }

  const calculations = useMemo(() => {
    const houseCost = houseArea * HOUSE_PRICE_PER_M2
    const terracaCost = terracaArea * TERRACA_PRICE_PER_M2

    const selectedCount = prefinishEnabled
      ? Object.values(selectedWorks).filter(Boolean).length
      : 0
    const totalWorks = prefinishWorks.length
    const prefinishCost = prefinishEnabled
      ? Math.round((houseCost * PREFINISH_RATE * selectedCount) / totalWorks)
      : 0

    const total = houseCost + terracaCost + prefinishCost

    return { houseCost, terracaCost, prefinishCost, total }
  }, [houseArea, terracaArea, prefinishEnabled, selectedWorks])

  const handleHouseArea = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.max(30, Math.min(500, Number(e.target.value) || 30))
    setHouseArea(val)
  }

  const handleTerracaArea = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.max(0, Math.min(100, Number(e.target.value) || 0))
    setTerracaArea(val)
  }

  return (
    <section className="py-20 relative overflow-hidden" id="calculator">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Рассчитайте стоимость дома
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Введите параметры и получите предварительную стоимость строительства
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-5xl mx-auto"
        >
          <Card className="p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-display font-bold flex items-center gap-2">
                  <Icon name="SlidersHorizontal" size={20} className="text-primary" />
                  Параметры
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="house-area" className="text-sm font-medium">
                    Площадь дома (м²)
                  </Label>
                  <Input
                    id="house-area"
                    type="number"
                    min={30}
                    max={500}
                    value={houseArea}
                    onChange={handleHouseArea}
                  />
                  <p className="text-xs text-muted-foreground">от 30 до 500 м²</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="terraca-area" className="text-sm font-medium">
                    Площадь террасы и крыльца (м²)
                  </Label>
                  <Input
                    id="terraca-area"
                    type="number"
                    min={0}
                    max={100}
                    value={terracaArea}
                    onChange={handleTerracaArea}
                  />
                  <p className="text-xs text-muted-foreground">от 0 до 100 м²</p>
                </div>

                <Collapsible open={prefinishOpen} onOpenChange={setPrefinishOpen}>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        id="prefinish"
                        checked={prefinishEnabled}
                        onCheckedChange={handlePrefinishToggle}
                      />
                      <CollapsibleTrigger asChild>
                        <Label
                          htmlFor="prefinish"
                          className="text-sm font-medium cursor-pointer flex items-center gap-2"
                        >
                          Предчистовая отделка
                          <Icon
                            name="ChevronDown"
                            size={14}
                            className={`text-muted-foreground transition-transform ${prefinishOpen ? "rotate-180" : ""}`}
                          />
                        </Label>
                      </CollapsibleTrigger>
                    </div>
                    <p className="text-xs text-muted-foreground ml-7">
                      Добавляет до 15% к стоимости дома
                    </p>

                    <CollapsibleContent>
                      <div className="ml-7 space-y-2 pt-2 border-t border-border">
                        {prefinishWorks.map((work) => (
                          <div key={work.id} className="flex items-center gap-3">
                            <Checkbox
                              id={work.id}
                              checked={prefinishEnabled && selectedWorks[work.id]}
                              disabled={!prefinishEnabled}
                              onCheckedChange={() => toggleWork(work.id)}
                            />
                            <Label
                              htmlFor={work.id}
                              className="text-sm cursor-pointer text-muted-foreground"
                            >
                              {work.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-display font-bold flex items-center gap-2">
                  <Icon name="Receipt" size={20} className="text-primary" />
                  Расчёт стоимости
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-border">
                    <div className="text-sm">
                      <p className="font-medium">Строительство дома</p>
                      <p className="text-muted-foreground">
                        {houseArea} м² × {formatPrice(HOUSE_PRICE_PER_M2).replace(" ₽", "")} ₽
                      </p>
                    </div>
                    <span className="font-semibold text-sm">{formatPrice(calculations.houseCost)}</span>
                  </div>

                  {terracaArea > 0 && (
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <div className="text-sm">
                        <p className="font-medium">Терраса и крыльцо</p>
                        <p className="text-muted-foreground">
                          {terracaArea} м² × {formatPrice(TERRACA_PRICE_PER_M2).replace(" ₽", "")} ₽
                        </p>
                      </div>
                      <span className="font-semibold text-sm">{formatPrice(calculations.terracaCost)}</span>
                    </div>
                  )}

                  {prefinishEnabled && calculations.prefinishCost > 0 && (
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <div className="text-sm">
                        <p className="font-medium">Предчистовая отделка</p>
                        <p className="text-muted-foreground">
                          {Object.values(selectedWorks).filter(Boolean).length} из {prefinishWorks.length} работ
                        </p>
                      </div>
                      <span className="font-semibold text-sm">{formatPrice(calculations.prefinishCost)}</span>
                    </div>
                  )}

                  <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-display font-bold">ИТОГО:</span>
                      <span className="text-3xl font-display font-bold text-primary">
                        {formatPrice(calculations.total)}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      * Предварительный расчёт. Точная стоимость определяется после составления сметы.
                    </p>
                  </div>

                  <ShinyButton className="w-full justify-center text-base">
                    <Icon name="FileText" size={18} className="mr-2" />
                    Получить точную смету
                  </ShinyButton>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
