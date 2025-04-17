"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { ArrowRight, Linkedin, Mail, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const sectionId = section.getAttribute("id") || ""

        if (sectionTop < 100 && sectionTop > -300) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative min-h-screen bg-background">
      {/* Custom Cursor */}
      <div
        className="fixed pointer-events-none z-50 h-8 w-8 rounded-full bg-blue-500/80 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      <header className="fixed top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center">
          <Link href="/" className="font-bold text-xl">
            PORTFOLIO
          </Link>
          <nav className="hidden md:flex gap-6 mx-auto justify-center">
            {[
              { name: "About Me", id: "about" },
              { name: "Career", id: "career" },
              { name: "Education", id: "education" },
              { name: "Projects", id: "projects" },
              { name: "Skills", id: "skills" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                  activeSection === item.id ? "text-blue-500" : ""
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
          <div className="ml-auto">
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
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
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero/About Section */}
        <section id="about" className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Marcos Utrera Tierno</h1>
                  <h2 className="text-xl font-semibold text-blue-500">Digital Strategist</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
				  I focus on SEO and digital strategy to help brands grow organically and connect with their ideal audience.
				   Every day, I’m committed to learning and developing new skills to stay ahead in the digital landscape.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="group" onClick={() => scrollToSection("contact")}>
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline" onClick={() => scrollToSection("projects")}>
                    View Projects
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-[300px] overflow-hidden rounded-lg border-4 border-blue-500/20">
                  <Image
                    src="/profileimg.jpg"
                    width={300}
                    height={400}
                    alt="Profile"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Section */}
        <section id="career" className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500">Career</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Professional Journey</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  My professional path and experiences that have shaped my expertise.
                </p>
              </div>
            </div>
            <div className="mt-8 space-y-8">
              {careerItems.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border p-6 transition-all hover:border-blue-500/50"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-1/4">
                      <span className="text-sm text-muted-foreground">{item.period}</span>
                      <h3 className="text-xl font-bold">{item.company}</h3>
                      <span className="inline-block rounded-full bg-blue-500/10 px-2 py-0.5 text-xs text-blue-500">
                        {item.location}
                      </span>
                    </div>
                    <div className="md:w-3/4">
                      <h4 className="text-lg font-semibold">{item.position}</h4>
                      <p className="mt-2 text-muted-foreground">{item.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="inline-block rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500">Education</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Academic Background</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  My educational journey and qualifications.
                </p>
              </div>
            </div>
            <div className="mt-8 space-y-8">
              {educationItems.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border p-6 transition-all hover:border-blue-500/50"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-1/4">
                      <span className="text-sm text-muted-foreground">{item.period}</span>
                      <h3 className="text-xl font-bold">{item.institution}</h3>
                      <span className="inline-block rounded-full bg-blue-500/10 px-2 py-0.5 text-xs text-blue-500">
                        {item.location}
                      </span>
                    </div>
                    <div className="md:w-3/4">
                      <h4 className="text-lg font-semibold">{item.degree}</h4>
                      <p className="mt-2 text-muted-foreground">{item.description}</p>
                      {item.achievements && (
                        <div className="mt-3">
                          <h5 className="text-sm font-medium">Key Achievements:</h5>
                          <ul className="mt-1 list-disc pl-5 text-sm text-muted-foreground">
                            {item.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500">Projects</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Work</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  A selection of my most significant projects and achievements.
                </p>
              </div>
            </div>
            <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <Image
                    src={project.image || "/img/1.jpg"}
                    alt={project.title}
                    width={400}
                    height={400}
                    className="aspect-[4/4] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="mt-2 text-white/80">{project.description}</p>
                    <div className="mt-4 flex gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-block rounded-full bg-blue-500/20 px-2.5 py-0.5 text-xs font-medium text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500">Skills</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Expertise</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Tools and technologies I specialize in.
                </p>
              </div>
            </div>

            {/* Skills Categories */}
            <div className="mt-8 space-y-10">
              {/* Development Tools */}
              <div>
                <h3 className="text-xl font-bold mb-4">Web & Seo</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {/* 
                    Here you can add your tool logos. For each tool, create a div like below.
                    Replace the placeholder.svg with your actual tool logo.
                    The alt text should be the name of the tool.
                  */}
                  {developmentTools.map((tool, index) => (
                    <div key={index} className="flex flex-col items-center group">
                      <div className="relative h-20 w-20 mb-2 rounded-lg overflow-hidden border border-muted p-4 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                        {/* Tool Logo Image */}
                        <Image
                          src={tool.logo || "/placeholder.svg?height=80&width=80"}
                          alt={tool.name}
                          width={80}
                          height={80}
                          className="object-contain max-h-full"
                        />
                      </div>
                      <span className="text-sm font-medium text-center">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Design Tools */}
              <div>
                <h3 className="text-xl font-bold mb-4">Design</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {designTools.map((tool, index) => (
                    <div key={index} className="flex flex-col items-center group">
                      <div className="relative h-20 w-20 mb-2 rounded-lg overflow-hidden border border-muted p-4 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                        {/* Tool Logo Image */}
                        <Image
                          src={tool.logo || "/placeholder.svg?height=80&width=80"}
                          alt={tool.name}
                          width={80}
                          height={80}
                          className="object-contain max-h-full"
                        />
                      </div>
                      <span className="text-sm font-medium text-center">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Tools */}
              <div>
                <h3 className="text-xl font-bold mb-4">Other Tools</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {otherTools.map((tool, index) => (
                    <div key={index} className="flex flex-col items-center group">
                      <div className="relative h-20 w-20 mb-2 rounded-lg overflow-hidden border border-muted p-4 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                        {/* Tool Logo Image */}
                        <Image
                          src={tool.logo || "/placeholder.svg?height=80&width=80"}
                          alt={tool.name}
                          width={80}
                          height={80}
                          className="object-contain max-h-full"
                        />
                      </div>
                      <span className="text-sm font-medium text-center">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-500/10 px-3 py-1 text-sm text-blue-500">Contact</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Interested in working together? Feel free to reach out through any of these channels.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-blue-500" />
                    <span>m.utrerabusiness@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-500" />
                    <span>Madrid, Spain</span>
                  </div>
                  <div className="flex gap-4 pt-2">
                    <Link
                      href="https://www.linkedin.com/in/marcos-utrera-tierno"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-blue-500 transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="first-name"
                    >
                      First name
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="first-name"
                      placeholder="Nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="last-name"
                    >
                      Last name
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="last-name"
                      placeholder="Apellido"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="email"
                    placeholder="email@example.com"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="flex min-h-[120px] resize-none w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="message"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600">Send Message</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Marcos Utrera Tierno. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-blue-500">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-blue-500">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

const careerItems = [
  {
    period: "03/2025 - Present",
    company: "Grupo Gestyde",
    location: "Madrid, Spain",
    position: "Marketing Intern",
    description:
      "As a Marketing and SEO Assistant, I support digital growth through keyword optimization, market research, and front-end website edits. I also manage social media content and contribute to digital strategies that enhance online visibility and engagement",
    skills: ["Canva", "Wordpress", "Seranking", "Chat-Gpt", "Slack"],
  },
  {
    period: "03/2023 - 06/2023",
    company: "Atisa",
    location: "Madrid, Spain",
    position: "Human Resources Intern",
    description:
      "Responsible for managing payroll incidents, calculating salaries and settlements, and ensuring accuracy in transfers and tax submissions. I handle social security processes, update salary ",
    skills: ["Exel", "Siltra", "Delt@", "Microsoft Teams", "Outlook"],
  },
]

const educationItems = [
  {
    period: "2023/2025",
    institution: "Ilerna",
    location: "Madrid, Spain",
    degree: "Higher Vocational Qualification in Marketing and Advertising",
    description: "In my Marketing and Advertising studies, I have gained skills in business management, market research, and fieldwork. I have worked on product launches, designing communication materials, and marketing policies, as well as selecting the appropriate media and channels. Additionally, I have developed expertise in customer service, digital marketing, public relations, and event organization. My education also includes English, career development, and a comprehensive marketing and advertising project.",
    achievements: [
      "Received Honorable Mention for Exceptional Customer Service and Communication Skills",
    ],
  },
  {
    period: "2023/2025",
    institution: "Ilerna",
    location: "Madrid, Spain",
    degree: "Higher Vocational Qualification in Business Administration and Finance",
    description:
      "In my Business Administration and Finance studies, I have developed skills in customer communication and service, English, and office software. I have gained expertise in the integrated commercial activity process, human resources, and corporate social responsibility. Additionally, I have experience in legal and business document management, logistics and commercial management, and business simulation. My education also covers career development, accounting and taxation, financial management, and a comprehensive business administration and finance project.",
    achievements: [
      "Recognized for Creative Problem Solving",
    ],
  },
]

const projects = [
  {
    title: "Digital Marketing Agency",
    description: "Currently developing a digital marketing agency project.",
    image: "/1.jpg?height=300&width=400",
    technologies:[],
  },
  {
    title: "Magazine Cover: \"Watches for Gentlemen\"",
    description: "",
    image: "/2.jpg?height=300&width=400",
    technologies: ["Canva", "Adobe"],
  },
  {
    title: "Poster Cover for Iberia",
    description: "",
    image: "/3.jpg?height=300&width=400",
    technologies: ["Canva" , "Adobe"],
  },
  {
    title: "Press Release: \"Friends\" for McDonald's",
    description: "",
    image: "/4.jpg?height=300&width=400",
    technologies: ["Canva", "Adobe"],
  },
]

// Development tools with logo paths
const developmentTools = [
  { name: "WordPress", logo: "/icons/wordpress.png?height=80&width=80" },
  { name: "Elementor", logo: "/icons/elementor.png?height=80&width=80" },
  { name: "Seranking", logo: "/icons/0x0.png?height=80&width=80" },
  { name: "Semrush", logo: "/icons/semrush.jpg?height=80&width=80" },
  { name: "YoastSeo", logo: "/icons/yoastseo.png?height=80&width=80" },
  { name: "Google Analytics", logo: "/icons/googleanalytics.jpg?height=80&width=80" },
]

// Design tools with logo paths
const designTools = [
  { name: "Canva", logo: "/icons/canva.png?height=80&width=80" },
  { name: "Adobe", logo: "/icons/adobe.png?height=80&width=80" },
  { name: "Photoshop", logo: "/icons/photoshop.png?height=80&width=80" },
  { name: "Capcut", logo: "/icons/capcut.png?height=80&width=80" },
]

// Other tools with logo paths
const otherTools = [
  { name: "Meta Ads", logo: "/icons/meta.jpg?height=80&width=80" },
  { name: "Slack", logo: "/icons/slack.png?height=80&width=80" },
  { name: "Discord", logo: "/icons/discord.png?height=80&width=80" },
  { name: "Chat-Gpt", logo: "/icons/chatgpt.png?height=80&width=80" },
  { name: "DeepSeek", logo: "/icons/deepseek.jpg?height=80&width=80" },
]
