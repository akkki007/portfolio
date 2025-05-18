"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Download, ExternalLink, Frame, Github, Layers, Mail, Monitor, MoveRight, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { ProjectCard } from "@/components/project-card"
import { ContactForm } from "@/components/contact-form"
import { SkillBadge } from "@/components/skill-badge"
import Bento from "@/components/bento-grid"


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen px-10 mx-10 flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <Layers className="h-5 w-5" />
            <span>Portfolio</span>
          </Link>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0" onClick={() => setMobileMenuOpen(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild size="sm" className="hidden md:flex">
            <Link href="#contact">
              Let&apos;s Talk
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </header>
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right" className="w-[75%] sm:w-[350px]">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center border-b pb-4">
              <span className="font-semibold">Menu</span>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <nav className="flex flex-col gap-4 py-8">
              <Link
                href="#about"
                className="text-lg font-medium hover:text-primary transition-colors px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#skills"
                className="text-lg font-medium hover:text-primary transition-colors px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="text-lg font-medium hover:text-primary transition-colors px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-lg font-medium hover:text-primary transition-colors px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <div className="mt-auto">
              <Button className="w-full" asChild>
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Let's Talk
                </Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <main className="flex-1">
        {/* Hero Section */}
       <section className="w-full px-4 py-12 sm:py-16 md:py-24 lg:py-32">
  <div className="container mx-auto">
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-center">
      {/* Text Content */}
      <div className="order-2 lg:order-1 flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
        <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
          Developer / Designer
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          Crafting digital <span className="text-primary">experiences</span> with code & design
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
          I build modern web applications that solve real-world problems and create stunning designs with Canva.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
          <Button size="lg" asChild className="w-full sm:w-auto">
            <Link href="https://drive.google.com/drive/folders/1bsyx9EItyaeS_DXibZwhEsQ8h3YmPPaB?usp=drive_link">
              View My Work
              <MoveRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
            <Link href="/resume.docx" target="_blank">
              Download Resume
              <Download className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Image */}
      <div className="order-1 lg:order-2 flex-1 flex justify-center w-full max-w-md lg:max-w-none">
        <div className="relative aspect-square w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-primary/20">
          <Image
            src="/avatar.png"
            alt="Profile"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  </div>
</section>

        {/* About Section */}
        <section id="about" className="bg-muted/50 px-5 py-12 sm:py-16 md:py-24">
          <div className="container space-y-8 sm:space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
              <p className="text-muted-foreground text-lg">
                I&apos;m a passionate developer and designer who loves creating beautiful, functional digital experiences.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">My Journey</h3>
                <p className="text-muted-foreground">
                  With a background in both development and design, I bring a unique perspective to every project. I
                  specialize in creating user-centered experiences that are both visually appealing and technically
                  sound.
                </p>
                <p className="text-muted-foreground">
                  My expertise in Canva allows me to rapidly prototype designs and create stunning visuals that
                  complement my development work, resulting in cohesive and polished final products.
                </p>
                <div className="pt-4">
                  <Button variant="outline" asChild>
                    <Link href="#contact">
                      Get in Touch
                      <Mail className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-background/80 backdrop-blur">
                  <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center space-y-2">
                    <Monitor className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-semibold">Full Stack Development</h4>
                    <p className="text-sm text-muted-foreground">Creating responsive, modern web applications powered by restful API's</p>
                  </CardContent>
                </Card>
                <Card className="bg-background/80 backdrop-blur">
                  <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center space-y-2">
                    <Frame className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-semibold">Poster Designing</h4>
                    <p className="text-sm text-muted-foreground">Designing enagaging social media posts according to your niche</p>
                  </CardContent>
                </Card>
                <Card className="bg-background/80 backdrop-blur">
                  <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center space-y-2">
                    <Code className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-semibold">Wordpress</h4>
                    <p className="text-sm text-muted-foreground">Built dynamic websites seamlessly</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 sm:py-16 md:py-24 container">
          <div className="space-y-8 sm:space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
              <p className="text-muted-foreground text-lg">A combination of development and design expertise</p>
            </div>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="p-4 sm:p-6 space-y-4">
                  <h3 className="text-xl font-semibold flex items-center">
                    <Code className="mr-2 h-5 w-5 text-primary" />
                    Development
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="React" />
                    <SkillBadge name="Next.js" />
                    <SkillBadge name="TypeScript" />
                    <SkillBadge name="JavaScript" />
                    <SkillBadge name="HTML/CSS" />
                    <SkillBadge name="Tailwind CSS" />
                    <SkillBadge name="Node.js" />
                    <SkillBadge name="Git" />
                    <SkillBadge name="REST APIs" />
                    <SkillBadge name="Responsive Design" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 sm:p-6 space-y-4">
                  <h3 className="text-xl font-semibold flex items-center">
                    <Layers className="mr-2 h-5 w-5 text-primary" />
                    Design
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="Canva" />
                    <SkillBadge name="UI Design" />
                    <SkillBadge name="UX Design" />
                    <SkillBadge name="Typography" />
                    <SkillBadge name="Color Theory" />
                    <SkillBadge name="Layout Design" />
                    <SkillBadge name="Brand Identity" />
                    <SkillBadge name="Social Media Graphics" />
                    <SkillBadge name="Presentation Design" />
                    <SkillBadge name="Print Design" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section>
          <Bento/>
        </section>
        {/* Projects Section */}
        <section id="projects" className="bg-muted/50 py-12 sm:py-16 md:py-24">
          <div className="container space-y-8 sm:space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
              <p className="text-muted-foreground text-lg">A showcase of my development and design work</p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-6 sm:mb-8">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="development">Development</TabsTrigger>
                  <TabsTrigger value="design">Design</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="space-y-6 sm:space-y-8">
                <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  <ProjectCard
                    title="Learnflow"
                    description="A full-stack e-commerce platform built with Next.js and Stripe"
                    image="/learnflow.png"
                    tags={["Next.js", "React", "Stripe"]}
                    link="/Learnflow"
                  />
                  <ProjectCard
                    title="Expense Tracker"
                    description="A personal finance app to track expenses and income"
                    image="/et.svg"
                    tags={["Canva", "Branding", "Logo Design"]}
                    link="#"
                  />
                  <ProjectCard
                    title="Single page responsive website"
                    description="Created a single landing page using NextJS and Tailwind CSS"
                    image="/image.png"
                    tags={["React", "Tailwind CSS", "Chart.js"]}
                    link="#"
                  />
                  
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-16 md:py-24 container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Let's Work Together</h2>
              <p className="text-lg text-muted-foreground">
                Have a project in mind? I&apos;d love to hear about it. Get in touch and let&apos;s create something amazing
                together.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                    <Mail className="h-5 w-5" />
                  </Button>
                  <span>akshaynazare3@gmail.com</span>
                </div>
                <div className="flex gap-3">
                  <Link href="https://github.com/akkki007">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Github className="h-5 w-5" />
                  </Button>
                  </Link>
                  
                  <Link href="https://www.linkedin.com/in/akshay-nazare-28138124a/">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                        fill="currentColor"
                      />
                      <rect x="2" y="9" width="4" height="12" fill="currentColor" />
                      <circle cx="4" cy="4" r="2" fill="currentColor" />
                    </svg>
                  </Button>
                  </Link>
                  
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className="border-t py-6 sm:py-8 md:py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5" />
            <span className="font-semibold">Portfolio</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} All Rights Reserved</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}