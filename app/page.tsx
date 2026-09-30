import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { EducationSection } from '@/components/education-section'
import { ExperienceSection } from '@/components/experience-section'
import { Hero } from '@/components/hero'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'
import { SkillsSection } from '@/components/skills-section'
import { WorkSection } from '@/components/work-section'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main id="main">
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <WorkSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
