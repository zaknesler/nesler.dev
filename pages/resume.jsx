import { ArrowLeftIcon } from '@heroicons/react/solid'
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '../lib/icons'
import Base from '../components/Base'
import Link from 'next/link'

export default function Resume() {
  const ListGroup = ({ items }) => {
    return (
      <ul className="ml-6 list-disc space-y-2">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    )
  }

  return (
    <Base full={true} title="Résumé">
      <div className="mx-auto max-w-4xl space-y-10 p-6 text-gray-600 dark:text-gray-400">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/">
            <a className="flex items-center hover:text-black dark:hover:text-gray-200">
              <ArrowLeftIcon className="h-4 w-4 opacity-75" />
              <span className="ml-1">Home</span>
            </a>
          </Link>

          <Link href="/resume.pdf">
            <a className="mt-2 flex items-center rounded-md bg-blue-50 px-2 py-1 text-sm font-medium text-blue-700 hover:bg-blue-100 hover:text-blue-900 dark:bg-blue-800 dark:bg-opacity-50 dark:text-blue-200 dark:hover:bg-blue-900 dark:hover:text-white">
              Download as PDF
            </a>
          </Link>
        </div>

        <section className="flex flex-col items-center justify-between text-center sm:flex-row sm:text-left">
          <div>
            <div className="text-xl font-bold text-gray-900 dark:text-gray-200">
              Zak Nesler
            </div>
            <div className="text-xs font-medium uppercase tracking-wide text-gray-600 dark:text-gray-400">
              Full-Stack Developer
            </div>

            <div className="mx-auto mt-3 h-1 w-32 bg-gradient-to-r from-brand-500 to-brand-400 sm:mx-0"></div>
          </div>

          <div className="mt-4 space-y-2 font-medium sm:mt-0 sm:text-right">
            <div className="-mb-2 flex items-center justify-center sm:justify-end">
              <a
                href="https://twitter.com/zaknesler"
                aria-label="Twitter Profile"
                title="Twitter Profile"
                className="p-3 hover:opacity-75 sm:p-2"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://github.com/zaknesler"
                aria-label="GitHub Profile"
                title="GitHub Profile"
                className="p-3 hover:opacity-75 sm:p-2"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://linkedin.com/in/zaknesler"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
                className="p-3 hover:opacity-75 sm:p-2"
              >
                <LinkedInIcon />
              </a>
              <div className="ml-3 sm:ml-2">@zaknesler</div>
            </div>

            <div>
              <a
                href="mailto:zak@nesler.dev"
                className="hover:text-black dark:hover:text-gray-200"
              >
                zak@nesler.dev
              </a>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div className="font-bold text-black dark:text-gray-200">
              Professional Qualities
            </div>
            <div className="mt-1 border-b-2 border-gray-200 dark:border-gray-800"></div>
          </div>

          <div className="mt-4">
            <ListGroup
              items={[
                'Keen eye for detail and design',
                'Experienced with popular web technologies such as Laravel and Tailwind CSS',
                'Focused on writing self-documenting, tested (using TDD), and tidy code',
                'Experience with configuring LAMP/LEMP stacks from scratch',
              ]}
            />
          </div>
        </section>

        <section>
          <div>
            <div className="flex items-center justify-between">
              <div className="font-bold text-black dark:text-gray-200">
                Skills
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Ready and willing to learn anything!
              </div>
            </div>
            <div className="mt-1 border-b-2 border-gray-200 dark:border-gray-800"></div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="col-span-1 -mb-3 font-medium text-black dark:text-gray-200 md:mb-0">
              Technologies
            </div>
            <div className="col-span-4">
              Laravel, Tailwind CSS, Vue.js, React, Next.js, Nuxt.js
            </div>

            <div className="col-span-1 -mb-3 font-medium text-black dark:text-gray-200 md:mb-0">
              Languages
            </div>
            <div className="col-span-4">
              PHP, HTML/CSS, JavaScript, SQL, Python, Node.js, Java, C, C++, Go,
              Bash, Regex
            </div>

            <div className="col-span-1 -mb-3 font-medium text-black dark:text-gray-200 md:mb-0">
              Software
            </div>
            <div className="col-span-4">
              Docker, Git, PHPUnit, VS Code, Sublime Text, Ubuntu, Debian, LEMP,
              LAMP, Figma, Photoshop, Blender, Excel
            </div>
          </div>
        </section>

        <section>
          <div>
            <div className="font-bold text-black dark:text-gray-200">
              Experience
            </div>
            <div className="mt-1 border-b-2 border-gray-200 dark:border-gray-800"></div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            <div className="col-span-1">
              <div className="font-medium leading-tight text-black dark:text-gray-200">
                Computer Visionaries, Inc.
              </div>
              <div className="mt-1 text-sm text-gray-500">Pittston, PA</div>
              <div className="mt-2 flex items-center text-xs font-medium text-blue-700 dark:text-blue-200">
                <div className="rounded-md bg-blue-50 px-2 py-1 dark:bg-blue-800 dark:bg-opacity-50">
                  November 2021 – Present
                </div>
              </div>
            </div>

            <div className="col-span-2 space-y-4 lg:col-span-3">
              <ListGroup
                items={[
                  'Implemented new communication logging feature covering front-end, back-end, and database with great feedback from customers',
                  'Improved UI/UX of customer input fields',
                  'Improved UX and loading times of main dashboard page',
                  'Optimized SQL stored procedures',
                  'Utilized Angular front-end, Express.js back-end, and SQL Server',
                ]}
              />
            </div>
          </div>
        </section>

        <section>
          <div>
            <div className="font-bold text-black dark:text-gray-200">
              Education
            </div>
            <div className="mt-1 border-b-2 border-gray-200 dark:border-gray-800"></div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            <div className="col-span-1">
              <div className="font-medium leading-tight text-black dark:text-gray-200">
                Wilkes University
              </div>
              <div className="mt-1 text-sm text-gray-500">
                Expected May 2022
              </div>
              <div className="mt-2 flex items-center text-xs font-medium text-blue-700 dark:text-blue-200">
                <div className="rounded-md bg-blue-50 px-2 py-1 dark:bg-blue-800 dark:bg-opacity-50">
                  GPA: 3.55
                </div>
                <div className="ml-2 rounded-md bg-blue-50 px-2 py-1 dark:bg-blue-800 dark:bg-opacity-50">
                  Major GPA: 3.61
                </div>
              </div>
            </div>

            <div className="col-span-2 space-y-4 lg:col-span-3">
              <div>
                Currently studying for a Bachelor of Science degree in Computer
                Science.
              </div>

              <div>
                <div className="font-bold text-black dark:text-gray-200">
                  Relevant Courses & Skills
                </div>

                <div className="mt-2 grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4">
                  <ListGroup
                    items={[
                      'Algorithms',
                      'Data Structures',
                      'Software Engineering',
                      'Web Development I & II',
                      'Computer Networks',
                      'Concurrent & Quantum Computing',
                      'Computer Architecture',
                    ]}
                  />

                  <ListGroup
                    items={[
                      'Operating Systems',
                      'Theory of Computation',
                      'Principles of Prog. Languages',
                      'Compiler Design & Assembly',
                      'Team-oriented projects',
                      'Python, Java, C, C++, PHP, Go, Racket, Unix',
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Base>
  )
}
