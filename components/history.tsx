import { Calendar, Award, Building, Sparkles } from "lucide-react"

const timeline = [
  {
    year: "Anos 90",
    icon: Sparkles,
    title: "O Início do Sonho",
    description:
      "Um grupo de mães da comunidade Vila Verde se une com o sonho de criar um espaço de apoio mútuo e desenvolvimento.",
  },
  {
    year: "2000s",
    icon: Building,
    title: "Primeiros Passos",
    description:
      "O Clube das Mães se estabelece como referência na comunidade, oferecendo cursos de costura e artesanato.",
  },
  {
    year: "2020",
    icon: Award,
    title: "Projeto Máscaras pela Vida",
    description: "Parceria com a UFMA no projeto de confecção de máscaras, permitindo a conclusão da reforma da sede.",
  },
  {
    year: "2020",
    icon: Calendar,
    title: "Nova Sede Inaugurada",
    description: "Inauguração da nova sede com apoio da UFMA e parceiros, realizando um sonho de mais de 20 anos.",
  },
]

export function History() {
  return (
    <section id="historia" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">Nossa História</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Uma Trajetória de Resistência e Conquistas
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Nossa história é marcada pela força, determinação e união das mulheres da Vila Verde, que juntas construíram
            um símbolo de resistência e esperança.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/brazilian-community-center-building-inauguration-c.jpg"
                alt="Inauguração da nova sede do Instituto"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-xl">
              <span className="block text-4xl font-bold font-serif">20+</span>
              <span className="text-sm">Anos de História</span>
            </div>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  {index < timeline.length - 1 && <div className="w-px h-full bg-border mt-4" />}
                </div>
                <div className="pb-8">
                  <span className="text-secondary font-semibold text-sm">{item.year}</span>
                  <h3 className="font-serif text-xl font-semibold text-foreground mt-1 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-accent/30 rounded-2xl p-8 md:p-12">
          <blockquote className="max-w-3xl mx-auto text-center">
            <p className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed">
              "A gente agradece a oportunidade de tê-los conosco, e essa troca de vivências nos ajuda muito. É
              superimportante a gente poder ver que vocês ultrapassam os muros."
            </p>
            <footer className="mt-6">
              <cite className="text-muted-foreground not-italic">
                <span className="font-semibold text-foreground">Carla Almeida</span>
                <span className="block text-sm">Presidente do Instituto</span>
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
