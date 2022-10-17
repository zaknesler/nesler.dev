import { HeartIcon } from '@heroicons/react/20/solid'
import { PropsWithChildren } from 'react'
import {
  ReactLogo,
  LaravelLogo,
  TailwindCSSLogo,
  VueLogo,
  TypeScriptLogo,
  NextLogo,
} from '../utils/icons'

const items = [
  { text: 'TypeScript', logo: TypeScriptLogo, fave: false },
  { text: 'Tailwind CSS', logo: TailwindCSSLogo, fave: false },
  { text: 'Next.js', logo: NextLogo, fave: false },
  { text: 'React.js', logo: ReactLogo, fave: false },
  { text: 'Laravel', logo: LaravelLogo, fave: false },
  { text: 'Vue.js', logo: VueLogo, fave: false },
]

type SkillItem = PropsWithChildren & {
  fave?: boolean
}

const SkillItem: React.FC<SkillItem> = ({ children, fave = false }) => (
  <div className="relative flex items-center rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium text-gray-600 shadow-sm transition-all hover:scale-[1.025] dark:border-0 dark:bg-gray-800 dark:text-gray-400 dark:highlight-white/5">
    {fave && (
      <div className="absolute -top-2 -right-2 rounded-full bg-black p-1 text-gray-100 shadow dark:bg-gray-100 dark:text-black">
        <HeartIcon className="h-4 w-4 text-inherit" />
      </div>
    )}
    {children}
  </div>
)

export const SkillList = () => (
  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
    {items.map((skill, idx) => (
      <SkillItem key={idx} fave={skill?.fave}>
        {<skill.logo size="sm" />}
        <span className="pl-2">{skill.text}</span>
      </SkillItem>
    ))}
  </div>
)
