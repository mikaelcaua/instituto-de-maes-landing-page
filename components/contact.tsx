"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Mail, Instagram, Send, Heart } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

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

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
            <h3 className="font-serif text-2xl font-bold mb-8">Informações de Contato</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Localização</h4>
                  <p className="text-primary-foreground/80">
                    Comunidade Vila Verde
                    <br />
                    Anjo da Guarda, São Luís - MA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Instagram</h4>
                  <a
                    href="https://www.instagram.com/institutodemaesepaisvilaverde/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    @institutodemaesepaisvilaverde
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">E-mail</h4>
                  <p className="text-primary-foreground/80">contato@institutodemaesvilaverde.org</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-primary-foreground/20">
              <h4 className="font-semibold mb-4">Como Você Pode Ajudar</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Doações de materiais de costura
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Voluntariado em oficinas
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Parcerias institucionais
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Divulgação nas redes sociais
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-8">Envie uma Mensagem</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input
                  id="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  placeholder="Como você gostaria de contribuir ou qual sua dúvida?"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Enviar Mensagem
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
