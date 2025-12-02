import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scissors, Palette, BookOpen, Users, Heart, Sparkles } from "lucide-react"

const projects = [
  {
    icon: Scissors,
    title: "Ateliê de Costura",
    description:
      "Capacitação profissional em costura, modelagem e confecção de peças, gerando renda para as famílias da comunidade.",
    tags: ["Capacitação", "Renda"],
    status: "Em andamento",
  },
  {
    icon: Palette,
    title: "Oficinas de Artesanato",
    description: "Cursos de bordado, patchwork e técnicas artesanais tradicionais, valorizando a cultura local.",
    tags: ["Cultura", "Artesanato"],
    status: "Em andamento",
  },
  {
    icon: BookOpen,
    title: "Empreendedorismo",
    description:
      "Capacitações em gestão de negócios, modelagem de negócios e perfil profissional em parceria com universidades.",
    tags: ["Educação", "Negócios"],
    status: "Em andamento",
  },
  {
    icon: Users,
    title: "Fortalecimento Comunitário",
    description: "Ações de integração e apoio mútuo entre as famílias, criando redes de solidariedade.",
    tags: ["Comunidade", "Social"],
    status: "Em andamento",
  },
  {
    icon: Heart,
    title: "Máscaras pela Vida",
    description:
      "Projeto em parceria com a UFMA para confecção de máscaras de proteção, que permitiu a conclusão da reforma da sede.",
    tags: ["Saúde", "Parceria"],
    status: "Concluído",
  },
  {
    icon: Sparkles,
    title: "Arte e Cultura",
    description:
      "Valorização da arte local através de painéis em mosaico e expressões artísticas que representam nossa história.",
    tags: ["Arte", "Cultura"],
    status: "Em andamento",
  },
]

export function Projects() {
  return (
    <section id="projetos" className="pt-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">Nossos Projetos</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Transformando Vidas Através da Ação
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Desenvolvemos projetos que promovem capacitação, geração de renda e fortalecimento dos laços comunitários,
            sempre com foco na transformação social.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:border-primary/30 transition-colors bg-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge
                    variant={project.status === "Concluído" ? "secondary" : "outline"}
                    className={project.status === "Concluído" ? "bg-secondary text-secondary-foreground" : ""}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="font-serif text-xl mt-4">{project.title}</CardTitle>
                <CardDescription className="leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        
      </div>
    </section>
  )
}
