import Layout from '../components/Layout'

export default function Projects() {
  return (
    <Layout title="Projects">
      <div className="prose dark:prose-dark">
        <p>
          Here are the repositories of some of the projects that I've worked on. It should come as no surprise that many
          of them use Laravel, Vue.js, and Tailwind CSS.
        </p>
        <p>
          The others are school assignments and example programs that I made to better understand a language,
          environment, tool, or programming paradigm.
        </p>

        <h4>
          <a href="https://github.com/zaknesler/tailwind-preset">Tailwind CSS Preset</a>
        </h4>
        <p>
          An awesome minimal preset for Laravel 7+ using Tailwind CSS and Vue.js, as well as Laravel Mix and
          configuration for Tailwind's built-in Purge CSS. A perfect starting point for your next idea.
        </p>

        <h4>
          <a href="https://github.com/zaknesler/projects">Projects</a> &{' '}
          <a href="https://github.com/zaknesler/css">CSS</a>
        </h4>
        <p>
          These repositories are used to demo how to recreate sites like Google, GitHub, and Reddit using vanilla CSS
          and Tailwind CSS, along with any other design concepts.
        </p>

        <h4>
          <a href="https://github.com/zaknesler/java">Java</a>
        </h4>
        <p>
          Code from my high school Java I (intro to Java) and Java II (Android Development) classes. These projects
          allowed me to understand Java more thoroughly, as well as being able to use external APIs to populate a UI.
        </p>
      </div>
    </Layout>
  )
}
