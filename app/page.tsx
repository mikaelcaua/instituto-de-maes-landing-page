import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { History } from "@/components/history"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <History />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
