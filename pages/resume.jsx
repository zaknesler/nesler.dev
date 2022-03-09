import Base from '../components/Base'

import Link from 'next/link'

export default function Resume() {
  const list = items => {
    return (
      <ul className="ml-6 space-y-2 list-disc">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    )
  }

  return (
    <Base full={true} title="Résumé">
      <div className="dark:text-gray-400 max-w-4xl p-8 mx-auto space-y-10 text-gray-600">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <Link href="/">
            <a className="hover:text-black dark:hover:text-gray-200">&larr; Home</a>
          </Link>

          <Link href="/resume.pdf">
            <a className="hover:text-blue-900 bg-blue-50 dark:bg-blue-800 dark:bg-opacity-50 dark:hover:bg-blue-900 hover:bg-blue-100 dark:text-blue-200 dark:hover:text-white flex items-center px-2 py-1 mt-2 text-sm font-medium text-blue-700 rounded-md">
              Download as PDF
            </a>
          </Link>
        </div>

        <section className="sm:flex-row sm:text-left flex flex-col items-center justify-between text-center">
          <div>
            <div className="dark:text-gray-200 text-xl font-bold text-gray-900">Zak Nesler</div>
            <div className="dark:text-gray-400 text-xs font-medium tracking-wide text-gray-600 uppercase">
              Full-Stack Developer
            </div>
          </div>

          <div className="sm:text-right sm:mt-0 mt-4 space-y-2 font-medium">
            <div className="sm:justify-end flex items-center justify-center space-x-2">
              <a href="https://twitter.com/zaknesler">
                <svg
                  className="w-6 h-6"
                  width="21"
                  height="15"
                  viewBox="0 0 21 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.60425 15C14.5292 15 18.863 9.22967 18.863 4.22584C18.863 4.06194 18.8592 3.89879 18.8508 3.73637C19.6921 3.20186 20.4233 2.53484 21 1.77552C20.228 2.0771 19.3973 2.28012 18.5258 2.37167C19.4153 1.90287 20.0982 1.16128 20.4204 0.277221C19.5879 0.710956 18.6661 1.0262 17.6845 1.19639C16.8983 0.460362 15.779 0 14.5396 0C12.1602 0 10.2308 1.69584 10.2308 3.78619C10.2308 4.08334 10.2686 4.37238 10.3425 4.64963C6.76166 4.49126 3.58641 2.98445 1.46135 0.693235C1.09133 1.25284 0.877974 1.90288 0.877974 2.59649C0.877974 3.91025 1.63862 5.07004 2.79529 5.74854C2.08842 5.72934 1.42439 5.5588 0.844009 5.27493C0.843374 5.29082 0.843372 5.30631 0.843372 5.32329C0.843372 7.15718 2.3285 8.68832 4.29994 9.03528C3.9379 9.12203 3.55699 9.16854 3.16384 9.16854C2.88664 9.16854 2.61658 9.14456 2.35408 9.10025C2.9026 10.6048 4.49316 11.6997 6.37891 11.7303C4.90428 12.7462 3.04665 13.3512 1.02772 13.3512C0.68038 13.3512 0.337243 13.3338 0 13.2988C1.90682 14.373 4.17098 14.9998 6.60448 14.9998"
                    fill="#1DA1F2"
                  />
                </svg>
              </a>

              <a href="https://github.com/zaknesler">
                <svg
                  className="w-5 h-5 fill-current text-[#24292E] dark:text-gray-100"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.52481 0C3.36108 0 0 3.43995 0 7.70138C0 11.09 2.15711 13.9652 5.16703 14.992C5.56836 15.0434 5.66869 14.838 5.66869 14.6326V13.2977C3.56174 13.7598 3.11025 12.2709 3.11025 12.2709C2.7591 11.398 2.25744 11.1413 2.25744 11.1413C1.55513 10.6792 2.30761 10.6792 2.30761 10.6792C3.06009 10.7306 3.46141 11.4494 3.46141 11.4494C4.11356 12.6303 5.2172 12.2709 5.66869 12.0655C5.71885 11.5521 5.91951 11.244 6.17034 11.0386C4.51488 10.8333 2.7591 10.1658 2.7591 7.2393C2.7591 6.41782 3.06009 5.69902 3.51158 5.1856C3.41125 4.98023 3.16042 4.21009 3.56174 3.13189C3.56174 3.13189 4.21389 2.92652 5.61852 3.90203C6.22051 3.74801 6.87266 3.64532 7.52481 3.64532C8.17695 3.64532 8.8291 3.74801 9.43109 3.90203C10.8859 2.92652 11.4879 3.13189 11.4879 3.13189C11.8892 4.21009 11.6384 4.98023 11.538 5.1856C12.0397 5.69902 12.2905 6.41782 12.2905 7.2393C12.2905 10.2172 10.5347 10.8333 8.87927 11.0386C9.1301 11.2954 9.38092 11.7574 9.38092 12.4762V14.5813C9.38092 14.7867 9.53142 15.0434 9.88258 14.9407C12.8925 13.9138 14.9994 11.0386 14.9994 7.65004C15.0496 3.43995 11.6885 0 7.52481 0Z"
                  />
                </svg>
              </a>

              <a href="https://linkedin.com/zaknesler">
                <svg
                  className="w-5 h-5"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.7807 12.781H10.5582V9.30032C10.5582 8.47031 10.5434 7.40184 9.40224 7.40184C8.24467 7.40184 8.06756 8.30616 8.06756 9.23989V12.7808H5.84502V5.62306H7.97865V6.60124H8.00852C8.22205 6.23614 8.5306 5.93579 8.90131 5.73218C9.27203 5.52857 9.69103 5.42933 10.1137 5.44502C12.3663 5.44502 12.7816 6.92676 12.7816 8.85441L12.7807 12.781ZM3.33727 4.64465C3.08218 4.6447 2.83279 4.56909 2.62067 4.42741C2.40854 4.28572 2.24321 4.08431 2.14554 3.84864C2.04788 3.61298 2.02229 3.35365 2.07201 3.10344C2.12173 2.85323 2.24453 2.62339 2.42488 2.44298C2.60522 2.26256 2.83501 2.13968 3.08519 2.08986C3.33537 2.04005 3.5947 2.06555 3.83039 2.16313C4.06608 2.26071 4.26754 2.42599 4.4093 2.63807C4.55106 2.85015 4.62675 3.09951 4.6268 3.35461C4.62683 3.52399 4.59349 3.69172 4.52871 3.84822C4.46392 4.00471 4.36895 4.14692 4.24921 4.26671C4.12946 4.3865 3.98729 4.48153 3.83082 4.54638C3.67435 4.61123 3.50664 4.64462 3.33727 4.64465V4.64465ZM4.44853 12.781H2.22369V5.62306H4.44853V12.781ZM13.8887 0.00102197H1.10687C0.816756 -0.00225205 0.537199 0.10979 0.32965 0.312526C0.122101 0.515263 0.00354066 0.792108 0 1.08223V13.9176C0.00341948 14.2078 0.121911 14.4848 0.329452 14.6878C0.536994 14.8907 0.816613 15.003 1.10687 14.9999H13.8887C14.1796 15.0036 14.46 14.8916 14.6683 14.6887C14.8767 14.4857 14.996 14.2084 15 13.9176V1.0813C14.9959 0.790607 14.8765 0.513447 14.6681 0.310715C14.4597 0.107983 14.1794 -0.00373839 13.8887 9.55136e-05"
                    fill="#0A66C2"
                  />
                </svg>
              </a>

              <div className="ml-2">@zaknesler</div>
            </div>

            <div>
              <a href="mailto:zak@nesler.dev" className="hover:text-black dark:hover:text-gray-200">
                zak@nesler.dev
              </a>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div className="dark:text-gray-200 font-bold text-black">Professional Qualities</div>
            <div className="dark:border-gray-800 mt-1 border-b-2 border-gray-200"></div>
          </div>

          <div className="mt-4">
            {list([
              'Keen eye for detail and design',
              'Experienced with popular web technologies such as Laravel and Tailwind CSS',
              'Focused on writing self-documenting, clean, and concise code',
              'Personal experience with configuring LAMP/LEMP stacks from scratch in Linux environments',
            ])}
          </div>
        </section>

        <section>
          <div>
            <div className="flex items-center justify-between">
              <div className="dark:text-gray-200 font-bold text-black">Skills</div>
              <div className="dark:text-gray-400 text-sm text-gray-500">Ready and willing to learn anything!</div>
            </div>
            <div className="dark:border-gray-800 mt-1 border-b-2 border-gray-200"></div>
          </div>

          <div className="md:grid-cols-5 grid grid-cols-1 gap-4 mt-4">
            <div className="dark:text-gray-200 md:mb-0 col-span-1 -mb-2 font-medium text-black">Technologies</div>
            <div className="col-span-4">Laravel, Tailwind CSS, Vue.js, React, Next.js, Nuxt.js</div>

            <div className="dark:text-gray-200 md:mb-0 col-span-1 -mb-2 font-medium text-black">Languages</div>
            <div className="col-span-4">
              PHP, HTML/CSS, JavaScript, SQL, Python, Node.js, Java, C, C++, Go, Bash, Regex
            </div>

            <div className="dark:text-gray-200 md:mb-0 col-span-1 -mb-2 font-medium text-black">Software</div>
            <div className="col-span-4">
              Docker, Git, PHPUnit, VS Code, Sublime Text, Ubuntu, Debian, LEMP, LAMP, Figma, Photoshop, Blender, Excel
            </div>
          </div>
        </section>

        <section>
          <div>
            <div className="dark:text-gray-200 font-bold text-black">Experience</div>
            <div className="dark:border-gray-800 mt-1 border-b-2 border-gray-200"></div>
          </div>

          <div className="md:grid-cols-3 lg:grid-cols-4 grid gap-4 mt-4">
            <div className="col-span-1">
              <div className="dark:text-gray-200 font-medium text-black">Computer Visionaries, Inc.</div>
              <div className="mt-1 text-sm text-gray-500">Pittston, PA</div>
              <div className="dark:text-blue-200 flex items-center mt-2 text-xs font-medium text-blue-700">
                <div className="bg-blue-50 dark:bg-blue-800 dark:bg-opacity-50 px-2 py-1 rounded-md">
                  November 2021 – Present
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 col-span-2 space-y-4">
              {list([
                'Implemented new communication logging feature covering front-end, back-end, and database with great feedback from customers',
                'Improved UI/UX of customer input fields',
                'Improved UX and loading times of main dashboard page',
                'Optimized SQL stored procedures',
                'Utilized Angular front-end, Electron.js back-end, and SQL Server',
              ])}
            </div>
          </div>
        </section>

        <section>
          <div>
            <div className="dark:text-gray-200 font-bold text-black">Education</div>
            <div className="dark:border-gray-800 mt-1 border-b-2 border-gray-200"></div>
          </div>

          <div className="md:grid-cols-3 lg:grid-cols-4 grid gap-4 mt-4">
            <div className="col-span-1">
              <div className="dark:text-gray-200 font-medium text-black">Wilkes University</div>
              <div className="mt-1 text-sm text-gray-500">Expected May 2022</div>
              <div className="dark:text-blue-200 flex items-center mt-2 text-xs font-medium text-blue-700">
                <div className="bg-blue-50 dark:bg-blue-800 dark:bg-opacity-50 px-2 py-1 rounded-md">GPA: 3.55</div>
                <div className="bg-blue-50 dark:bg-blue-800 dark:bg-opacity-50 px-2 py-1 ml-2 rounded-md">
                  Major GPA: 3.61
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 col-span-2 space-y-4">
              <div>Currently studying for a Bachelor of Science degree in Computer Science.</div>

              <div>
                <div className="dark:text-gray-200 font-bold text-black">Relevant Courses & Skills</div>

                <div className="lg:grid-cols-2 grid grid-cols-1 gap-4 mt-2">
                  {list([
                    'Algorithms',
                    'Data Structures',
                    'Software Engineering',
                    'Web Development I & II',
                    'Computer Networks',
                    'Concurrent & Quantum Computing',
                    'Computer Architecture',
                  ])}

                  {list([
                    'Operating Systems',
                    'Theory of Computation',
                    'Principles of Prog. Languages',
                    'Compiler Design & Assembly',
                    'Team-oriented projects',
                    'Python, Java, C, C++, PHP, Go, Racket, Unix',
                  ])}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Base>
  )
}
