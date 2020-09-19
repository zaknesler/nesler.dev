import Layout from '../components/Layout'

export default function Now() {
  return (
    <Layout title="Now">
      <div className="prose dark:prose-dark">
        <h4>College</h4>
        <p>
          This year I finished my second year of my B.S. degree in Computer Science. My CS classes this year focused on
          creating data structures using Java and C++, such as trees, graphs, linked lists, queues, and stacks. My Fall
          2020 semester includes CS courses on Theory of Computation and Algorithms.
        </p>

        <h4>Web Development</h4>
        <p>
          So far this year I have been trying to learn several more technologies that I've always wanted to learn.
          Primarily React, Next.js, and Docker. I am really enjoying using Next.js and React, in fact this site is built
          with Next.js!
        </p>
        <p>
          It's likely that I won't give up Vue.js, as I much prefer the syntax and simplicity of Vue components, but
          starting to learn React was a very important goal that I am glad to have achieved.
        </p>
        <p>
          I've also slowly started learning Docker, I love the idea of containerization and keeping web servers off of
          my local machine. I plan on reinstalling my OS soon, something I normally do once a year, and Docker seems
          like a great way to avoid having to intall a handful of unnecessary services (MySQL, PHP, etc.) locally.
        </p>

        <h4>Adventures into Art</h4>
        <p>
          In November 2019 I began my venture into art, where I started learning the basics of 3D using{' '}
          <a href="https://blender.org">Blender</a>, an incredibly powerful, open-source 3D suite. I have had a blast
          learning about 3D modeling, physics and fluid simulations, and creating awesome scenes in general, all using
          free tutorials on YouTube.
        </p>
        <p>
          After becoming addicted to Blender and devouring all the content I could, I switched over to learning
          traditional and digital art. This year I have been practicing gesture, figure drawing, and anatomy, albeit at
          a snail's pace.
        </p>
        <p>
          I plan on continuing my journey into art as a side hobby slowly and surely, practicing a little bit every day.
          I've discovered a creative side that I didn't know I had.
        </p>
      </div>
    </Layout>
  )
}
