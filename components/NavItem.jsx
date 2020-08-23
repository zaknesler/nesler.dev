import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavItem({ href, children }) {
  const router = useRouter()

  return (
    <li>
      <Link href={href}>
        <a
          className={
            (router.pathname === href ? 'font-bold text-gray-900' : 'text-gray-600') +
            ' hover:text-gray-900 block p-3 md:p-0 w-full hover:bg-gray-100 md:hover:bg-transparent rounded-lg md:rounded-none'
          }
        >
          {children}
        </a>
      </Link>
    </li>
  )
}
