import Layout from '../components/Layout'

export default function Now() {
  return (
    <Layout title="Now">
      <div className="prose">
        <h4>College</h4>
        <p>
          This year I finished my second year of my B.S. degree in Computer Science. My CS classes this year focused on
          creating data structures using Java and C++, such as trees, graphs, linked lists, queues, and stacks. My Fall
          2020 semester includes CS courses on Theory of Computation and Algorithms.
        </p>

        <h4>Web Development</h4>
        <p>
          This year I hope to spend some time learning new technologies such as React, Electron, GraphQL, and possibly a
          few other tools and languages. I don't think I'd ever switch off of Vue.js, but I would certainly like to
          learn more!
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
          traditional and digital art. This year I have been practicing gesture, figure drawing, and anatomy.
        </p>
        <p>
          I plan on continuing my journey into art as a side hobby slowly and surely, practicing a little bit every day.
          I've discovered a creative side that I didn't know I had.
        </p>
      </div>
    </Layout>
  )
}
