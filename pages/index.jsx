import Layout from '../components/Layout'

import Link from 'next/link'

export default function Index() {
  return (
    <Layout>
      <div className="dark:prose-dark prose">
        <p>
          <strong>Hey!</strong> I'm Zak, a full-stack developer from Pennsylvania with a passion for clean design and
          tidy code.
        </p>
        <p>
          I am a huge fan of the <a href="https://laravel.com">Laravel</a> PHP framework, the{' '}
          <a href="https://vuejs.org">Vue</a> JavaScript framework, and{' '}
          <a href="https://tailwindcss.com">Tailwind CSS</a>, a utility-first CSS framework; I would consider myself to
          be very proficient in each.
        </p>
        <p>
          I am currently pursuing a Bachelor of Science degree in Computer Science, hoping to gain more knowledge and
          experience doing what I love. In the meantime, I like to work on side projects and contribute what I can to
          open source.
        </p>
        <p>
          If you would like to get in touch, please feel free to take a look at my <Link href="/resume">résumé</Link> or
          send me an <a href="mailto:zak@nesler.dev">email</a>, and I'll get back to you!
        </p>
      </div>
    </Layout>
  )
}
