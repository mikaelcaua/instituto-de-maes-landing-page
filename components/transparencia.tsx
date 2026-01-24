"use client";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Item {
  id: string;
  title: string;
  valor: string;
  data: string;
}

export function Transparencia() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        // Sugestão: Se tiver paginação no backend, peça apenas page=1&limit=5
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
    return () => { alive = false; };
  }, []);

  // Pegar apenas os 5 primeiros
  const previewItems = useMemo(() => items.slice(0, 5), [items]);

  return (
    <section id="transparencia" className="pt-24 pb-6 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">
            Transparência
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Prestação de Contas Recente
          </h2>
          <p className="text-muted-foreground">
            Acompanhe as últimas movimentações. Para relatórios completos e busca detalhada, acesse nosso portal.
          </p>
        </div>

        {loading ? (
          <div className="text-center text-muted-foreground py-10">
            Carregando dados...
          </div>
        ) : (
          <>
            <Card className="bg-card">
              <CardHeader className="border-b">
                <div className="grid grid-cols-3 gap-4 text-sm font-semibold text-muted-foreground">
                  <div className="text-center">Título</div>
                  <div className="text-center">Valor</div>
                  <div className="text-center">Data</div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                  <div className="divide-y">
                    {previewItems.map((it) => (
                      <div
                        key={it.id}
                        className="grid grid-cols-3 gap-4 p-4 hover:bg-muted/50 transition-colors"
                      >
                        <div className="text-center font-semibold text-foreground">{it.title}</div>
                        <div className="text-center text-sm text-foreground font-medium">{it.valor}</div>
                        <div className="text-center text-sm text-muted-foreground">{it.data}</div>
                      </div>
                    ))}
                  </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-10">
              <Link href="/transparencia">
                <Button variant="default" size="lg">
                  Acessar Portal da Transparência Completo
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Transparencia;