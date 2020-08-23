import '../components/Layout'
import Layout from '../components/Layout'

export default function Index() {
  return (
    <Layout>
      <div className="prose">
        <p>
          <strong>Hey!</strong> I'm Zak, a 20-year-old student full-stack developer from Pennsylvania with a passion for
          tasteful and minimal design, as well as tidy and efficient back-end code.
        </p>
        <p>
          Over the past few years, I have fallen in love with the <a href="https://laravel.com">Laravel</a> PHP
          framework, the <a href="https://vuejs.org">Vue</a> JavaScript framework, and{' '}
          <a href="https://tailwindcss.com">Tailwind CSS</a>, a utility-first CSS framework, and would consider myself
          to be very proficient in each.
        </p>
        <p>
          I am currently pursuing a Bachelor of Science degree in Computer Science, hoping to gain more knowledge and
          experience doing what I love. In the meantime I like to work on side projects and contribute what I can to
          open source.
        </p>
        <p>
          If you’re interested in knowing more about me, please feel free to take a look at my{' '}
          <a href="{{ route('resume') }}">résumé</a> or send me an <a href="mailto:zak@nesler.dev">email</a> and I'll
          get back to you!
        </p>
      </div>
    </Layout>
  )
}
