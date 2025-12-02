import type React from "react"
import { MapPin, Mail, Instagram, Heart, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contato" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">Entre em Contato</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Faça Parte Dessa Transformação
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Seja como voluntário, parceiro ou apoiador, sua participação é fundamental para continuarmos transformando
            vidas na comunidade Vila Verde.
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground shadow-xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-serif text-2xl font-bold mb-8">Informações de Contato</h3>
                <div className="space-y-4">
                  <a
                    href="https://maps.app.goo.gl/MhoaKDyXNnWEuZ4C9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-3 -ml-3 rounded-xl hover:bg-primary-foreground/10 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0 group-hover:bg-primary-foreground/20 transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Localização</h4>
                      <p className="text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">
                        Comunidade Vila Verde
                        <br />
                        Anjo da Guarda, São Luís - MA
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/5598999114403"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-3 -ml-3 rounded-xl hover:bg-primary-foreground/10 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0 group-hover:bg-primary-foreground/20 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">WhatsApp</h4>
                      <p className="text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">
                        (98) 99999-9999
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/institutodemaesepaisvilaverde/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-3 -ml-3 rounded-xl hover:bg-primary-foreground/10 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0 group-hover:bg-primary-foreground/20 transition-colors">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Instagram</h4>
                      <p className="text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">
                        @institutodemaesepaisvilaverde
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:clubedemaesvilaverde@gmail.com"
                    className="flex items-start gap-4 p-3 -ml-3 rounded-xl hover:bg-primary-foreground/10 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0 group-hover:bg-primary-foreground/20 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">E-mail</h4>
                      <p className="text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">
                        clubedemaesvilaverde@gmail.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="md:border-l md:border-primary-foreground/20 md:pl-12 flex flex-col justify-center">
                <h4 className="font-serif text-2xl font-bold mb-8">Como Você Pode Ajudar</h4>
                <ul className="space-y-4 text-primary-foreground/80 text-lg">
                  <li className="flex items-center gap-3">
                    <div className="p-2 bg-primary-foreground/10 rounded-full">
                      <Heart className="w-4 h-4" />
                    </div>
                    Doações de equipamentos
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-2 bg-primary-foreground/10 rounded-full">
                      <Heart className="w-4 h-4" />
                    </div>
                    Voluntariado em oficinas
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-2 bg-primary-foreground/10 rounded-full">
                      <Heart className="w-4 h-4" />
                    </div>
                    Parcerias institucionais
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-2 bg-primary-foreground/10 rounded-full">
                      <Heart className="w-4 h-4" />
                    </div>
                    Divulgação nas redes sociais
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}