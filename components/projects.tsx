"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tags: string[];
  status: "Em andamento" | "Concluído";
  projectDetails: string;
  year: string;
  image1: string;
  image2: string;
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/projects");
        const data = (await res.json()) as any[];

        const mapped: Project[] = (Array.isArray(data) ? data : []).map(
          (p) => ({
            title: String(p.title || ""),
            description: String(p.description || ""),
            tags: Array.isArray(p.tags)
              ? p.tags
              : String(p.tags || "")
                  .split(",")
                  .map((s) => s.trim())
                  .filter(Boolean),
            status: p.status === "Concluído" ? "Concluído" : "Em andamento",
            projectDetails: String(p.projectDetails || ""),
            year: String(p.year || ""),
            image1: String(p.image1 || ""),
            image2: String(p.image2 || ""),
          }),
        );
        if (alive) setProjects(mapped);
      } catch {
        if (alive) setProjects([]);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const visibleProjects = useMemo(() => projects.slice(0, 3), [projects]);

  return (
    <section id="projetos" className="pt-24 pb-6 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">
            Nossos Projetos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Transformando Vidas Através da Ação
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Confira nossas iniciativas recentes.
          </p>
        </div>

        {loading ? (
          <div className="text-center text-muted-foreground py-10">
            Carregando projetos...
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleProjects.map((project, idx) => (
                <Card
                  key={`${project.title}-${project.year}-${idx}`}
                  className="group hover:border-primary/30 transition-colors bg-card flex flex-col h-full overflow-hidden"
                >
                  {project.image1 && (
                    <div className="w-full h-48 overflow-hidden">
                      <img
                        src={project.image1}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div />
                      <div className="flex flex-col items-end gap-2">
                        <Badge
                          variant={
                            project.status === "Concluído"
                              ? "secondary"
                              : "outline"
                          }
                          className={
                            project.status === "Concluído"
                              ? "bg-secondary text-secondary-foreground"
                              : ""
                          }
                        >
                          {project.status}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="text-xs whitespace-nowrap"
                        >
                          {project.year}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="font-serif text-xl mt-4 line-clamp-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="leading-relaxed line-clamp-3">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-xs"
                        >
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

            <div className="flex justify-center mt-10">
              <Link href="/projetos">
                <Button variant="outline" size="lg">
                  Ver todos os projetos
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>

      <Dialog
        open={!!selectedProject}
        onOpenChange={(isOpen) => {
          if (!isOpen) setSelectedProject(null);
        }}
      >
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl mb-2">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              {selectedProject.image2 ? (
                <div className="my-4 rounded-lg overflow-hidden border">
                  <img
                    src={selectedProject.image2}
                    alt={selectedProject.title}
                    className="w-full h-auto object-cover max-h-[400px]"
                  />
                </div>
              ) : selectedProject.image1 ? (
                <div className="my-4 rounded-lg overflow-hidden border">
                  <img
                    src={selectedProject.image1}
                    alt={selectedProject.title}
                    className="w-full h-auto object-cover max-h-[400px]"
                  />
                </div>
              ) : null}

              <div className="text-base leading-relaxed text-foreground space-y-4">
                <p>{selectedProject.description}</p>
                {selectedProject.projectDetails && (
                  <p className="text-sm text-muted-foreground mt-4">
                    <strong>Detalhes/Parceria:</strong>{" "}
                    {selectedProject.projectDetails}
                  </p>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default Projects;
