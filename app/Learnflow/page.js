"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, ArrowRight, ExternalLink, Share2, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function ProjectPage() {
  const [activeImage, setActiveImage] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  // Sample project data
  const project = {
    title: "Learnflow : An extensive platform for learning and development",
    year: "2025",
    duration: "2 Months",
    description:
      "Learnflow is a full-stack web application designed to streamline essential academic operations within colleges. Built as part of our Final Year Project, the platform addresses the core needs of students and faculty by integrating four main modules: secure authentication, coding practice, attendance tracking, and performance monitoring. The platform allows students to practice coding in real-time using the Monaco Editor, with backend code execution securely handled through Docker containers—ensuring language isolation and system safety. Teachers can monitor attendance and enter grades through a dedicated dashboard, while students can track their academic performance via interactive visualizations. A hybrid database model was implemented, using PostgreSQL for structured data like attendance and grades, and MongoDB with GridFS for managing code files and unstructured content. The frontend was developed using React.js, Tailwind CSS, and Ant Design, ensuring responsiveness and usability across all devices.This project demonstrates a practical, scalable, and innovative solution for managing academic processes digitally, delivered within a two-month timeline.",
    challenge:
      "The current academic systems lacked a unified, user-friendly, and responsive platform that could seamlessly support key student-faculty interactions such as secure authentication, live coding, real-time attendance tracking, and performance monitoring. A major hurdle was delivering these features within a two-month deadline while ensuring the system's modularity, scalability, and ease of use across devices.",
    solution:
      "We designed and developed Learnflow, a web-based, user-centered platform focused on intra-college management. The system was built with a modular MVP including authentication, coding, attendance, and dashboard modules. Using modern tools like React, Docker, PostgreSQL, and MongoDB, we delivered a secure, responsive interface with features like in-browser code execution using Monaco Editor and Docker containers, automated attendance reporting, and visual dashboards for academic performance—all tailored for both students and faculty across any screen size.",
    results:
      "The redesign resulted in a 35% decrease in cart abandonment and a 28% increase in mobile conversions within the first month after launch. User session duration increased by 45%, indicating higher engagement with the platform.",
    categories: ["Docker-based code execution", "Full Stack", "NextJS"],
    tools: ["Docker", "NextJS", "MongoDB","TailwindCSS","ExpressJS"],
    images: [
      "/learnflow.png",
      "/learnflow1.png",
      "/learnflow2.png",
      "/learnflow3.png",
    ],
  }

  // Handle scroll events to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Navigate through images
  const nextImage = () => {
    setActiveImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setActiveImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1))
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Sticky Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <Link href="/" className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          </Link>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Share2 className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bookmark className="w-5 h-5" />
            </Button>
            <Button className="rounded-full">
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Project
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={project.images[activeImage] || "/placeholder.svg"}
              alt={`Project image ${activeImage + 1}`}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </AnimatePresence>

        {/* Image Navigation */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between p-6">
          <Button
            variant="outline"
            size="icon"
            className="bg-white/20 backdrop-blur-sm border-white/30 text-white rounded-full"
            onClick={prevImage}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>

          <div className="flex items-center space-x-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeImage === index ? "bg-white w-6" : "bg-white/50"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="bg-white/20 backdrop-blur-sm border-white/30 text-white rounded-full"
            onClick={nextImage}
          >
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Project Info */}
      <section className="container px-4 py-16 mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Project Title and Description */}
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{project.title}</h1>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.categories.map((category, index) => (
                <Badge key={index} variant="secondary" className="rounded-full">
                  {category}
                </Badge>
              ))}
            </div>

            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">{project.description}</p>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div className="p-6 border rounded-xl dark:border-gray-800">
              <h3 className="mb-4 text-sm font-medium text-gray-500 uppercase dark:text-gray-400">Project Details</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Year</p>
                  <p className="font-medium">{project.year}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Duration</p>
                  <p className="font-medium">{project.duration}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Tools</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.tools.map((tool, index) => (
                      <Badge key={index} variant="outline" className="rounded-full">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge and Solution */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">The Challenge</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">{project.challenge}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">The Solution</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="container px-4 py-16 mx-auto">
        <h2 className="mb-8 text-2xl font-bold">Project Gallery</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl">
            <img
              src={project.images[1] || "/placeholder.svg"}
              alt="Project detail 1"
              className="object-cover border-2 w-full h-full transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-xl">
            <img
              src={project.images[2] || "/placeholder.svg"}
              alt="Project detail 2"
              className="object-cover w-full border-2 h-full transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl">
          <img
            src={project.images[3] || "/placeholder.svg"}
            alt="Project detail 3"
            className="object-cover w-full h-[500px] border-2 transition-transform duration-500 hover:scale-105"
          />
        </div>
      </section>

    

     

      {/* Footer */}
      <footer className="py-8 border-t dark:border-gray-800">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500">© 2025 Akshay Nazare</p>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                About
              </Button>
              <Button variant="ghost" size="sm">
                Contact
              </Button>
              <Button variant="ghost" size="sm">
                Projects
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
