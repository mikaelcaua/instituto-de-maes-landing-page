import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Heart } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20" id="sobre">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Instituto de Mães e Pais <span className="text-primary">Vila Verde</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              O Instituto de Mães e Pais da Vila Verde é uma iniciativa comunitária da Vila Verde, no Anjo da Guarda, em São Luís do Maranhão. Ele reúne famílias para fortalecer vínculos, apoiar crianças e jovens e promover ações de educação, esporte, cultura, acolhimento e geração de renda. É um espaço de escuta, apoio e construção coletiva, criado para valorizar a comunidade e manter viva a força das famílias que sustentam o território.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#sobre">
                  Conheça Nossa História
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                <Link href="#projetos">Ver Projetos</Link>
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="block text-2xl font-bold text-foreground">20+</span>
                  <span className="text-sm text-muted-foreground">Anos de História</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <span className="block text-2xl font-bold text-foreground">110+</span>
                  <span className="text-sm text-muted-foreground">Famílias Impactadas</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative  rounded-2xl overflow-hidden">
              <img
                src="/hero_image.jpg"
                alt="Mulheres da comunidade trabalhando juntas no ateliê do Instituto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border max-w-xs">
              <p className="font-serif text-foreground italic">
                "Esta sede foi construída por muitas mãos, com a contribuição de cada pessoa que fez parte desse caminho."
              </p>
              <p className="text-sm text-muted-foreground mt-2">— Karla Almeida, Presidente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
