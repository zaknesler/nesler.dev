import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import data from '../../public/resume.json'
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '../components/icons'
import { Base } from '../components/layouts/base'

const Resume = () => {
  const ListGroup = ({ items }: { items: Array<string> }) => {
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
          <Link
            href="/"
            className="flex items-center hover:text-black dark:hover:text-gray-200 gap-1"
          >
            <ArrowLeftIcon className="h-4 w-4 opacity-75" />
            <span>Home</span>
          </Link>

          <Link
            href="/resume.pdf"
            className="flex items-center rounded-md bg-blue-50 px-2 py-1 text-sm font-medium text-blue-700 hover:bg-blue-100 hover:text-blue-900 dark:bg-blue-800 dark:bg-opacity-50 dark:text-blue-200 dark:hover:bg-blue-900 dark:hover:text-white"
          >
            Download as PDF
          </Link>
        </div>

        <section className="flex flex-col items-center justify-between text-center sm:flex-row sm:text-left">
          <div>
            <div className="text-xl font-bold text-gray-900 dark:text-gray-200">
              {data.name}
            </div>
            <div className="text-xs font-medium uppercase tracking-wide text-gray-600 dark:text-gray-400">
              {data.title}
            </div>

            <div className="mx-auto mt-3 h-1 w-32 bg-gradient-to-r from-brand-500 to-brand-400 sm:mx-0" />
          </div>

          <div className="mt-4 space-y-2 font-medium sm:mt-0 sm:text-right">
            <div className="-mb-2 flex items-center justify-center sm:justify-end">
              <a
                href={data.urls.github}
                aria-label="GitHub Profile"
                title="GitHub Profile"
                className="p-3 hover:opacity-75 sm:p-2"
              >
                <GitHubIcon />
              </a>
              <a
                href={data.urls.linkedin}
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
                className="p-3 hover:opacity-75 sm:p-2"
              >
                <LinkedInIcon />
              </a>
              <a
                href={data.urls.twitter}
                aria-label="Twitter Profile"
                title="Twitter Profile"
                className="p-3 hover:opacity-75 sm:p-2"
              >
                <TwitterIcon />
              </a>
              <div className="ml-2 sm:ml-1">&#64;{data.username}</div>
            </div>

            <div>
              <a
                href={`mailto:${data.email
                  .replace('[at]', '%40')
                  .replace('[dot]', '%2E')}`}
                className="hover:text-black dark:hover:text-gray-200"
                dangerouslySetInnerHTML={{
                  __html: data.email
                    .replace('[at]', '&#64;')
                    .replace('[dot]', '&#46;'),
                }}
              />
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col gap-1">
            <div className="font-bold text-black dark:text-gray-200">
              Professional Qualities
            </div>
            <div className="border-b-2 border-gray-200 dark:border-gray-800" />
          </div>

          <div className="mt-4">
            <ListGroup items={data.qualities} />
          </div>
        </section>

        <section>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <div className="font-bold text-black dark:text-gray-200">
                Skills
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Ready and willing to learn anything!
              </div>
            </div>
            <div className="border-b-2 border-gray-200 dark:border-gray-800" />
          </div>

          <div className="mt-4 space-y-4">
            {Object.entries(data.skills).map(([name, items]) => (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-5" key={name}>
                <div className="col-span-1 -mb-3 font-medium text-black dark:text-gray-200 md:mb-0">
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </div>
                <div className="col-span-4">{items.join(', ')}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex flex-col gap-1">
            <div className="font-bold text-black dark:text-gray-200">
              Experience
            </div>
            <div className="border-b-2 border-gray-200 dark:border-gray-800" />
          </div>

          <div className="mt-4 space-y-8">
            {data.experience.map((item, idx) => (
              <div
                key={idx}
                className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"
              >
                <div className="col-span-1 flex flex-col gap-1">
                  <div className="font-medium leading-[1.125] text-black dark:text-gray-200">
                    {item.position}
                  </div>
                  <div className="text-sm text-gray-500">{item.company}</div>
                  <div className="text-sm text-gray-500">{item.location}</div>
                  <div className="mt-2 flex items-center text-xs font-medium text-blue-700 dark:text-blue-200">
                    <div className="rounded-md bg-blue-50 px-2 py-1 dark:bg-blue-800 dark:bg-opacity-50">
                      {item.date}
                    </div>
                  </div>
                </div>

                <div className="col-span-2 space-y-4 lg:col-span-3">
                  <ListGroup items={item.description_list} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex flex-col gap-1">
            <div className="font-bold text-black dark:text-gray-200">
              Education
            </div>
            <div className="border-b-2 border-gray-200 dark:border-gray-800" />
          </div>

          {data.education.map((item, idx) => (
            <div
              key={idx}
              className="mt-4 grid gap-4 md:grid-cols-3 lg:grid-cols-4"
            >
              <div className="col-span-1 flex flex-col gap-1">
                <div className="font-medium leading-tight text-black dark:text-gray-200">
                  {item.school}
                </div>
                <div className="text-sm text-gray-500">{item.location}</div>
                <div className="text-sm text-gray-500">
                  {item.graduation_date}
                </div>
                <div className="mt-1 flex gap-2 items-center text-xs font-medium text-blue-700 dark:text-blue-200">
                  <div className="rounded-md bg-blue-50 px-2 py-1 dark:bg-blue-800 dark:bg-opacity-50">
                    GPA: {item.gpa}
                  </div>
                  {item.gpa_major && (
                    <div className="rounded-md bg-blue-50 px-2 py-1 dark:bg-blue-800 dark:bg-opacity-50">
                      Major GPA: {item.gpa_major}
                    </div>
                  )}
                </div>
              </div>

              <div className="col-span-2 space-y-4 lg:col-span-3">
                <div>{item.description}</div>

                <div className="text-sm flex flex-col gap-2">
                  <div className="font-bold text-black dark:text-gray-200">
                    Relevant Courses &amp; Skills
                  </div>

                  <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4">
                    {item.courses && (
                      <>
                        <ListGroup
                          items={item.courses.slice(
                            0,
                            item.courses.length / 2 + 1,
                          )}
                        />

                        <ListGroup
                          items={item.courses.slice(
                            item.courses.length / 2 + 1,
                          )}
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </Base>
  )
}

export default Resume
