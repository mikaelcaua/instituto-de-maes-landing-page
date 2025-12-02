import { Calendar, Award, Building, Sparkles, Users, GraduationCap, Scissors } from "lucide-react"

const timeline = [
  {
    year: "1999",
    icon: Sparkles,
    title: "Origem do Clube",
    description:
      "A festa das crianças organizada pelas mães da Vila Verde dá início ao movimento que se tornaria o Clube de Mães.",
  },
  {
    year: "2004",
    icon: Building,
    title: "Oficialização",
    description:
      "O Clube torna-se pessoa jurídica e passa a organizar mutirões, reivindicar serviços e articular melhorias na comunidade.",
  },
  {
    year: "2014",
    icon: Scissors,
    title: "Costurando o Futuro",
    description:
      "Parceria com a Vale capacita 150 mulheres em costura, gerando renda e novas oportunidades.",
  },
  {
    year: "2020",
    icon: Award,
    title: "Máscaras pela Vida",
    description:
      "Na pandemia, produção de 30 mil máscaras com a UFMA gera renda para costureiras e impulsiona a construção da sede.",
  },
  {
    year: "2023",
    icon: GraduationCap,
    title: "Capacitação",
    description:
      "Presidente e vice realizam formação e passam a integrar o edital Rede de Prosperidade Familiar.",
  },
  {
    year: "2025",
    icon: Users,
    title: "Instituto Criado",
    description:
      "O Clube se transforma no Instituto de Mães e Pais da Vila Verde, ampliando sua atuação comunitária.",
  },
];


export function History() {
  return (
    <section id="historia" className="pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">Nossa História</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Uma Trajetória de Resistência e Conquistas
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A Vila Verde, localizada no bairro Anjo da Guarda, no eixo Itaqui-Bacanga (São Luís – MA), surgiu em 1994 a partir da ocupação de um antigo sítio por famílias que buscavam moradia digna. O nome do território foi inspirado na paisagem marcada por buritizeiros e árvores frutíferas.
            Nesse período, os moradores enfrentaram desafios estruturais, como ruas de barro, casas de taipa e a ausência de água encanada, energia e serviços públicos básicos.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="relative">
            <div className=" rounded-2xl overflow-hidden">
              <img
                src="/history_image.jpg"
                alt="Inauguração da nova sede do Instituto"
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

        
      </div>
    </section>
  )
}
