import Link from "next/link"
import { Heart, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-serif text-lg font-semibold">Instituto de Mães e Pais</span>
                <span className="block text-xs text-background/70">Vila Verde</span>
              </div>
            </div>
            <p className="text-background/70 leading-relaxed">
              Transformando vidas através da união, capacitação e fortalecimento comunitário na Vila Verde, São Luís -
              MA.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <nav className="space-y-3">
              <Link href="#sobre" className="block text-background/70 hover:text-background transition-colors">
                Sobre Nós
              </Link>
              <Link href="#historia" className="block text-background/70 hover:text-background transition-colors">
                Nossa História
              </Link>
              <Link href="#projetos" className="block text-background/70 hover:text-background transition-colors">
                Projetos
              </Link>
              <Link href="#contato" className="block text-background/70 hover:text-background transition-colors">
                Contato
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Siga-nos</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/institutodemaesepaisvilaverde/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:contato@institutodemaesvilaverde.org"
                className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                aria-label="E-mail"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-6">
              <p className="text-background/70 text-sm">
                Comunidade Vila Verde
                <br />
                Anjo da Guarda, São Luís - MA
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Instituto de Mães e Pais Vila Verde. Todos os direitos reservados.
          </p>
          <p className="text-background/50 text-sm flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-secondary" /> pela comunidade
          </p>
        </div>
      </div>
    </footer>
  )
}
