"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
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
  DialogDescription,
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
  image: string;
}

export default function ProjetosPage() {
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
            image: String(p.image || ""),
          })
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

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <section className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Todos os Projetos
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Explore nossa galeria completa de iniciativas que transformam vidas e fortalecem a comunidade.
            </p>
          </div>

          {loading ? (
            <div className="text-center text-muted-foreground py-10">
              Carregando projetos...
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <Card
                  key={`${project.title}-${project.year}-${idx}`}
                  className="group hover:border-primary/30 transition-colors bg-card flex flex-col h-full"
                >
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
                      {project.tags.map((tag, tagIndex) => (
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
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-1">
                      <DialogTitle className="font-serif text-2xl mb-2 text-balance leading-tight">
                        {selectedProject.title}
                      </DialogTitle>
                      <div className="flex flex-wrap gap-2 items-center">
                        <Badge
                          variant={
                            selectedProject.status === "Concluído"
                              ? "secondary"
                              : "outline"
                          }
                          className={
                            selectedProject.status === "Concluído"
                              ? "bg-secondary text-secondary-foreground"
                              : ""
                          }
                        >
                          {selectedProject.status}
                        </Badge>
                        <Badge variant="outline">{selectedProject.year}</Badge>
                        <span className="text-sm text-muted-foreground ml-2">
                          Parceria: {selectedProject.projectDetails}
                        </span>
                      </div>
                    </div>
                  </div>
                </DialogHeader>

                {selectedProject.image && (
                  <div className="my-4 rounded-lg overflow-hidden border">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-auto object-cover max-h-[400px]"
                    />
                  </div>
                )}

                <DialogDescription asChild>
                  <div className="text-base leading-relaxed text-foreground space-y-4">
                    <p>{selectedProject.description}</p>
                  </div>
                </DialogDescription>

                <div className="mt-6 pt-4 border-t">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                    Áreas de atuação
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-sm"
                      >
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
      <Footer />
    </main>
  );
}