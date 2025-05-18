// app/resume/page.tsx
import { Mail, Phone, Github, Linkedin, School, Briefcase } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <Card className="mb-8 shadow-lg">
          <CardHeader className="text-center pb-0">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Akshay Nazare</h1>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <div className="flex items-center text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 9130589174</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="h-4 w-4 mr-2" />
                <span>akshaynazare3@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-600">
                <School className="h-4 w-4 mr-2" />
                <span>Pune - 411011</span>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://github.com/akkki007"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Github className="h-4 w-4 mr-1" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/akshay-nazare-28138124a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Linkedin className="h-4 w-4 mr-1" />
                LinkedIn
              </a>
            </div>
          </CardHeader>
        </Card>

        {/* Professional Summary */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800 border-b pb-2">
              Professional Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Detail-oriented Computer Engineering student with hands-on experience in
              full-stack development and social media management. Skilled in modern
              frontend technologies including React and Next.js. Seeking opportunities
              to leverage technical and creative skills in a challenging Web Developer
              role.
            </p>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800 border-b pb-2">
              Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Experience 1 */}
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-lg text-gray-800">Software Developer Internship</h3>
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">May 2024 - July 2024</span>
              </div>
              <p className="text-gray-600 mb-2">Linkcode Technologies, Pune</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Making projects on Javascript using html and css</li>
                <li>Creating websites with css frameworks (Bootstrap and Tailwind CSS)</li>
                <li>Learning Javascript frameworks Reactjs and making beginner projects</li>
                <li>Learning core java</li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-lg text-gray-800">Social Media Manager</h3>
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">Oct 2023 - Jan 2024</span>
              </div>
              <p className="text-gray-600 mb-2">Techonsy and KambleBrothers, Pune</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Created content for social media handles (Instagram, LinkedIn, Twitter)</li>
                <li>Managed social media for 2 companies</li>
                <li>Implemented scheduled posting</li>
              </ul>
            </div>

            {/* Experience 3 */}
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-lg text-gray-800">Off-Page SEO</h3>
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">Jun 2023 - July 2023</span>
              </div>
              <p className="text-gray-600 mb-2">HatsOff Digital, Pune</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Managed off-page SEO for 6 clients</li>
                <li>Increased three clients' digital presence and customer interaction by 50%</li>
                <li>Created posters for a client</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800 border-b pb-2">
              Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Learnflow</h3>
              <p className="text-gray-600 mb-3">
                An extensive platform for intra college management | Next.js, React.js, Express.js, MongoDB, PostgreSQL, Docker
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>
                  Architected a comprehensive intra-college platform with role-based
                  authentication, containerized code execution environment (Monaco
                  Editor, Docker), and hybrid database system (PostgreSQL, MongoDB)
                  for optimized data management
                </li>
                <li>
                  Designed responsive interfaces with React, Ant Design, and Tailwind
                  CSS, featuring interactive performance dashboards and automated
                  attendance tracking to enhance academic monitoring and user
                  experience
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800 border-b pb-2">
              Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">HTML</Badge>
              <Badge variant="secondary">CSS</Badge>
              <Badge variant="secondary">Bootstrap</Badge>
              <Badge variant="secondary">Tailwind</Badge>
              <Badge variant="secondary">React JS</Badge>
              <Badge variant="secondary">Next JS</Badge>
              <Badge variant="secondary">Wordpress</Badge>
              <Badge variant="secondary">Canva</Badge>
              <Badge variant="secondary">Figma</Badge>
              <Badge variant="secondary">Capcut</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800 border-b pb-2">
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-gray-800">Diploma in Computer Engineering</h3>
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">2025 (Currently 3rd Year)</span>
              </div>
              <p className="text-gray-600">Govt. Polytechnic Pune</p>
              <p className="text-gray-700">Last Semester: 92.3%</p>
            </div>
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-gray-800">10th SSC Board</h3>
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">2022</span>
              </div>
              <p className="text-gray-600">Sardar Dastur Hoshang Boy's High School</p>
              <p className="text-gray-700">Score: 93.60%</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}