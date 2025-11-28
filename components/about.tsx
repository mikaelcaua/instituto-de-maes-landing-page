import { Heart, Users, Scissors, GraduationCap } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Amor e Cuidado",
    description: "Acolhemos cada família com carinho, criando laços que fortalecem nossa comunidade.",
  },
  {
    icon: Users,
    title: "União Comunitária",
    description: "Juntas, construímos um futuro melhor através da cooperação e solidariedade.",
  },
  {
    icon: Scissors,
    title: "Capacitação Profissional",
    description: "Oferecemos cursos de costura, bordado e artesanato para geração de renda.",
  },
  {
    icon: GraduationCap,
    title: "Educação e Cultura",
    description: "Promovemos o desenvolvimento através de oficinas e atividades educativas.",
  },
]

export function About() {
  return (
    <section id="sobre" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">Sobre Nós</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Um Espaço de Transformação e Esperança
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            O Instituto de Mães e Pais Vila Verde é uma organização comunitária localizada no bairro Anjo da Guarda, em
            São Luís do Maranhão. Nascemos do sonho de mulheres que acreditam no poder da união para transformar
            realidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Nossa Missão</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                Promover o desenvolvimento social e econômico das famílias da comunidade Vila Verde através de ações de
                capacitação, geração de renda, cultura e fortalecimento de vínculos comunitários, contribuindo para a
                construção de uma sociedade mais justa e igualitária.
              </p>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <img
                src="/colorful-mosaic-art-panel-with-community-symbols-h.jpg"
                alt="Painel em mosaico criado pela artista Mônica De Lucca para a sede"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
