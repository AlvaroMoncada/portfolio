import { Contact } from '@/components/contact'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { SiteNav } from '@/components/site-nav'
import { Skills } from '@/components/skills'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Projects />
        <Skills />
      </main>
      <Contact />
    </>
  )
}
