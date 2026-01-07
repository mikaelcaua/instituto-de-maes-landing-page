"use client";

import { useEffect, useState } from "react";

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

  return (
    <section id="transparencia" className="pt-24 pb-6 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">
            Transparencia
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Portal da Transparência
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className="text-left text-sm text-muted-foreground border-b">
                <th className="py-2 pr-4">Título</th>
                <th className="py-2 pr-4">Valor</th>
                <th className="py-2 pr-4">Data</th>
              </tr>
            </thead>
            <tbody>
              {items.map((it) => (
                <tr key={it.id} className="border-b">
                  <td className="py-3 pr-4 align-top">
                    <div className="font-semibold">{it.title}</div>
                  </td>
                  <td className="py-3 pr-4 align-top">
                    <div className="text-sm text-foreground">{it.valor}</div>
                  </td>
                  <td className="py-3 pr-4 align-top">
                    <div className="text-sm text-muted-foreground">
                      {it.data}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
}
