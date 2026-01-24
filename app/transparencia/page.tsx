"use client";

import { useEffect, useState, useMemo } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calendar } from "lucide-react";

interface Item {
  id: string;
  title: string;
  valor: string;
  data: string;
}

const ITEMS_PER_PAGE = 10;

export default function TransparenciaPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/transparencia");
        const data = (await res.json()) as any[];
        const mapped: Item[] = (Array.isArray(data) ? data : []).map((p) => ({
          id: String(p.id ?? crypto.randomUUID()),
          title: String(p.title || ""),
          valor: String(p.valor || ""),
          data: String(p.data || ""),
        }));
        if (alive) setItems(mapped);
      } catch (e) {
        if (alive) setItems([]);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const filteredItems = useMemo(() => {
    let filtered = items;

    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (dateFilter) {
      filtered = filtered.filter((item) => item.data.includes(dateFilter));
    }

    return filtered;
  }, [items, searchTerm, dateFilter]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, dateFilter]);

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <section className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Portal da Transparência
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Consulte detalhadamente nossos relatórios financeiros e prestação de
              contas. Utilize os filtros abaixo para refinar sua busca.
            </p>
          </div>

          {loading ? (
            <div className="text-center text-muted-foreground py-10">
              Carregando dados...
            </div>
          ) : (
            <>
              <div className="mb-6 flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Buscar por título..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white"
                  />
                </div>
                <div className="relative sm:w-64">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Filtrar por data (ex: 2024)"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    className="pl-10 bg-white"
                  />
                </div>
              </div>

              <Card className="bg-card">
                <CardHeader className="border-b">
                  <div className="grid grid-cols-3 gap-4 text-sm font-semibold text-muted-foreground">
                    <div className="text-center">Título</div>
                    <div className="text-center">Valor</div>
                    <div className="text-center">Data</div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  {paginatedItems.length === 0 ? (
                    <div className="text-center text-muted-foreground py-10">
                      {filteredItems.length === 0 &&
                      (searchTerm || dateFilter)
                        ? "Nenhum resultado encontrado para os filtros aplicados"
                        : "Nenhum dado disponível"}
                    </div>
                  ) : (
                    <div className="divide-y">
                      {paginatedItems.map((it) => (
                        <div
                          key={it.id}
                          className="grid grid-cols-3 gap-4 p-4 hover:bg-muted/50 transition-colors"
                        >
                          <div className="text-center">
                            <div className="font-semibold text-foreground">
                              {it.title}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-foreground font-medium">
                              {it.valor}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-muted-foreground">
                              {it.data}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {filteredItems.length > ITEMS_PER_PAGE && (
                <div className="flex justify-center items-center gap-4 mt-6">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    Anterior
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    Página {currentPage} de {totalPages} ({filteredItems.length}{" "}
                    {filteredItems.length === 1 ? "registro" : "registros"})
                  </span>
                  <Button
                    variant="outline"
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    disabled={currentPage === totalPages}
                  >
                    Próxima
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}