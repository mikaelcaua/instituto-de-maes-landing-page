"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Scissors, Users, Leaf, Drama, Wifi, Recycle, Heart, LucideIcon } from "lucide-react"

// Interface para tipagem (ajuda o editor a não acusar erros)
interface Project {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
  status: "Em andamento" | "Concluído"
  partner: string
  details: string
  year: string
  image: string
  fullContent: string
}

const projects: Project[] = [
  {
    icon: Scissors,
    title: "Mãos Criativas — Costurando Cidadania e Transformação",
    description:
      "Projeto de costura e empreendedorismo circular que capacita mulheres em confecção e gestão de negócios.",
    tags: ["Capacitação", "Empreendedorismo"],
    status: "Em andamento",
    partner: "Vale",
    details: "Continuidade do histórico projeto de costura que já qualificou mais de 150 mulheres desde 2014. Atualmente focado em empreendedorismo circular, o projeto oferece formação técnica em costura, modelagem e confecção, além de capacitação em gestão de negócios, promovendo autonomia financeira e desenvolvimento profissional das participantes.",
    year: "2025",
    image: "", 
    fullContent: "",
  },
  {
    icon: Users,
    title: "Rede de Prosperidade Familiar",
    description: "Programa de fortalecimento de 100 famílias da comunidade através de ações integradas de desenvolvimento.",
    tags: ["Comunidade", "Desenvolvimento"],
    status: "Em andamento",
    partner: "Vale e CIEDS",
    details: "Iniciativa que busca fortalecer os laços comunitários e promover o desenvolvimento integral de 100 famílias da Vila Verde. O projeto oferece apoio em diversas frentes: geração de renda, acesso a direitos, fortalecimento de vínculos familiares e comunitários, criando uma rede de prosperidade e solidariedade entre os moradores.",
    year: "2025",
    image: "",
    fullContent: "",
  },
  {
    icon: Drama,
    title: "Maranhão Capoeira",
    description: "Inclusão social e valorização da cultura popular através da prática da capoeira.",
    tags: ["Cultura", "Inclusão"],
    status: "Em andamento",
    partner: "Teatro Comunitário GRITA",
    details: "Projeto cultural que utiliza a capoeira como ferramenta de inclusão social e resgate da cultura popular maranhense. Oferece aulas e vivências para crianças, jovens e adultos da comunidade, promovendo disciplina, autoestima, consciência corporal e valorização das tradições afro-brasileiras.",
    year: "2025",
    image: "",
    fullContent: "",
  },
  {
    icon: Wifi,
    title: "Vila Verde Digital",
    description: "Inclusão tecnológica e cidadania digital para a comunidade da Vila Verde.",
    tags: ["Tecnologia", "Educação"],
    status: "Em andamento",
    partner: "UFMA",
    details: "Programa de inclusão digital que oferece formação em tecnologia, acesso à internet e capacitação em ferramentas digitais. O projeto visa reduzir a exclusão digital, preparar jovens e adultos para o mercado de trabalho contemporâneo e promover o exercício da cidadania no ambiente digital.",
    year: "2025",
    image: "",
    fullContent: "",
  },
  {
    icon: Drama,
    title: "Nas Trilhas da Comunidade",
    description: "Teatro comunitário como ferramenta de expressão, cultura e transformação social.",
    tags: ["Arte", "Cultura"],
    status: "Em andamento",
    partner: "GRITA",
    details: "Projeto de teatro comunitário que tem raízes desde os anos 2000, quando o Teatro Comunitário GRITA realizou o primeiro 'Dia de Lazer' na Vila Verde. Utiliza as artes cênicas como meio de expressão, fortalecimento da identidade cultural e desenvolvimento pessoal dos participantes, contando histórias da própria comunidade.",
    year: "2025",
    image: "",
    fullContent: "",
  },
  {
    icon: Leaf,
    title: "Natureza",
    description: "Plantio de árvores frutíferas com técnicas sustentáveis, resgatando a vocação verde do território.",
    tags: ["Meio Ambiente", "Sustentabilidade"],
    status: "Em andamento",
    partner: "IEMA",
    details: "Projeto de educação ambiental e recuperação da paisagem original da Vila Verde, marcada por buritizeiros e árvores frutíferas. Promove o plantio de espécies nativas e frutíferas utilizando técnicas sustentáveis, além de capacitar moradores em práticas agroecológicas, resgatando a conexão da comunidade com a natureza.",
    year: "2025",
    image: "",
    fullContent: "",
  },
  {
    icon: Heart,
    title: "Máscaras pela Vida",
    description:
      "Projeto em parceria com a UFMA que produziu 30 mil máscaras durante a pandemia, gerando renda para 60 costureiras.",
    tags: ["Saúde", "Solidariedade"],
    status: "Concluído",
    partner: "UFMA",
    details: "Durante a pandemia de COVID-19 em 2020, o Clube de Mães se mobilizou em parceria com a UFMA para produzir máscaras de proteção. O projeto confeccionou 30 mil máscaras, gerou renda para cerca de 60 costureiras da região e os recursos permitiram a conclusão da reforma da sede da organização. Um exemplo de solidariedade e resiliência comunitária em tempos de crise.",
    year: "2020",
    image: "",
    fullContent: "",
  },
  {
    icon: Recycle,
    title: "Elas por Elas",
    description: "Oficinas ministradas exclusivamente por mulheres da comunidade, valorizando saberes locais.",
    tags: ["Empoderamento", "Educação"],
    status: "Concluído",
    partner: "SESC",
    details: "Projeto realizado em 2024 que valorizou o protagonismo feminino da Vila Verde. Mulheres da própria comunidade ministraram oficinas de diversos saberes e habilidades para outras mulheres, fortalecendo a autoestima, o reconhecimento dos talentos locais e a rede de apoio mútuo entre as participantes.",
    year: "2024",
    image: "",
    fullContent: "",
  },
  {
    icon: Scissors,
    title: "Costurando o Furo com Cidadania",
    description: "Projeto pioneiro que qualificou 150 mulheres em costura, marcando o início da vocação do Instituto.",
    tags: ["Capacitação", "Empoderamento"],
    status: "Concluído",
    partner: "Vale",
    details: "Projeto realizado em 2014 que marcou profundamente a trajetória do Instituto. Em parceria com a Vale, qualificou 150 mulheres da comunidade em técnicas de costura, modelagem e confecção. Esta iniciativa foi fundamental para estabelecer a vocação do Instituto na área de capacitação profissional e geração de renda, abrindo caminho para os projetos atuais de costura e empreendedorismo.",
    year: "2014",
    image: "",
    fullContent: "",
  },
  {
    icon: Leaf,
    title: "Educação Ambiental Integrada",
    description: "Projeto piloto que uniu setores público, privado e terceiro setor em ações ambientais.",
    tags: ["Meio Ambiente", "Inovação"],
    status: "Concluído",
    partner: "Multi-setorial",
    details: "Em 2007, o Clube de Mães tornou-se piloto de um projeto inovador de Educação Ambiental que reuniu setores público, privado e terceiro setor. A iniciativa criou a horta comunitária (antigo Quintal Produtivo – SEBRAE), implantou coletores de resíduos sólidos nas ruas, organizou eventos comunitários e estabeleceu parcerias estratégicas, ampliando significativamente a visibilidade da comunidade.",
    year: "2007",
    image: "",
    fullContent: "",
  },
  {
    icon: Users,
    title: "Primeiras Mobilizações Comunitárias",
    description: "As primeiras festas e eventos que deram origem à organização comunitária.",
    tags: ["História", "Comunidade"],
    status: "Concluído",
    partner: "Teatro Comunitário GRITA",
    details: "Entre 1999 e 2004, as mães da Vila Verde realizaram as primeiras ações organizadas: a Festa das Crianças em 1999 e o 'Dia de Lazer' com o Teatro GRITA em 2000. Em 2004 foi oficialmente criado o Clube de Mães Vila Verde, que coordenou mutirões, articulou melhorias nas ruas e conquistou energia elétrica para a comunidade. Estas ações fundaram as bases da organização que se tornaria o Instituto.",
    year: "1999-2004",
    image: "",
    fullContent: "",
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projetos" className="pt-24 pb-6 bg-muted/30">
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
            <Card key={index} className="group hover:border-primary/30 transition-colors bg-card flex flex-col h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge
                      variant={project.status === "Concluído" ? "secondary" : "outline"}
                      className={project.status === "Concluído" ? "bg-secondary text-secondary-foreground" : ""}
                    >
                      {project.status}
                    </Badge>
                    <Badge variant="outline" className="text-xs whitespace-nowrap">
                      {project.year}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="font-serif text-xl mt-4 line-clamp-2">{project.title}</CardTitle>
                <CardDescription className="leading-relaxed line-clamp-3">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="link"
                  className="p-0 h-auto text-primary font-medium hover:text-primary/80"
                  onClick={() => setSelectedProject(project)}
                >
                  Ver detalhes →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog 
        open={!!selectedProject} 
        onOpenChange={(isOpen) => {
            if (!isOpen) setSelectedProject(null) 
        }}
      >
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <selectedProject.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <DialogTitle className="font-serif text-2xl mb-2 text-balance leading-tight">
                      {selectedProject.title}
                    </DialogTitle>
                    <div className="flex flex-wrap gap-2 items-center">
                      <Badge
                        variant={selectedProject.status === "Concluído" ? "secondary" : "outline"}
                        className={selectedProject.status === "Concluído" ? "bg-secondary text-secondary-foreground" : ""}
                      >
                        {selectedProject.status}
                      </Badge>
                      <Badge variant="outline">{selectedProject.year}</Badge>
                      <span className="text-sm text-muted-foreground ml-2">Parceria: {selectedProject.partner}</span>
                    </div>
                  </div>
                </div>
              </DialogHeader>

              {selectedProject.image && (
                <div className="my-4 rounded-lg overflow-hidden border">
                  {/* Utilizando img padrão, mas idealmente use <Image> se for Next.js */}
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto object-cover max-h-[400px]"
                  />
                </div>
              )}

              <DialogDescription asChild>
                  <div className="text-base leading-relaxed text-foreground space-y-4">
                    <p>{selectedProject.details}</p>

                    {selectedProject.fullContent && (
                        <div className="prose prose-sm max-w-none text-muted-foreground">
                        {selectedProject.fullContent}
                        </div>
                    )}
                </div>
              </DialogDescription>

              <div className="mt-6 pt-4 border-t">
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                  Áreas de atuação
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default Projects