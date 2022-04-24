import {
  ReactLogo,
  LaravelLogo,
  TailwindCSSLogo,
  VueLogo,
  TypeScriptLogo,
  NextLogo,
} from '../lib/icons'
import { HeartIcon } from '@heroicons/react/solid'

export default function SkillList() {
  const skills = [
    { text: 'Laravel', logo: LaravelLogo, fave: true },
    { text: 'Tailwind CSS', logo: TailwindCSSLogo, fave: true },
    { text: 'React.js', logo: ReactLogo, fave: true },
    { text: 'Next.js', logo: NextLogo },
    { text: 'TypeScript', logo: TypeScriptLogo },
    { text: 'Vue.js', logo: VueLogo },
  ]

  const SkillItem = ({
    children,
    fave = false,
  }: {
    children?: any
    fave?: boolean
  }) => (
    <div className="relative flex items-center rounded-lg border bg-white p-4 text-sm font-medium text-gray-600 transition-all hover:scale-105 hover:shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
      {fave && (
        <div className="absolute -top-2 -right-2 rounded-full bg-black p-1 text-gray-100 shadow dark:bg-gray-100 dark:text-black">
          <HeartIcon className="h-4 w-4 text-inherit" />
        </div>

        // <HeartIcon className="absolute -top-2.5 -right-2.5 h-6 w-6 text-black dark:text-gray-200" />
      )}
      {children}
    </div>
  )

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {skills.map((skill, idx) => (
        <SkillItem key={idx} fave={skill?.fave}>
          {<skill.logo size="sm" />}
          <span className="pl-2">{skill.text}</span>
        </SkillItem>
      ))}
    </div>
  )
}
