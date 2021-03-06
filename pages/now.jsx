import Layout from '../components/Layout'

export default function Now() {
  return (
    <Layout title="Now">
      <div className="prose dark:prose-dark">
        <h4>College</h4>

        <p>
          This year I will be starting my senior year of my B.S. degree in Computer Science. My courses include
          Operating Systems and Web Development, as well as several art classes.
        </p>

        <h4>Web Development</h4>
        <p>
          This past year I have taken a bit of a hiatus from web development to focus on my creative skills, however I
          still try to keep up to date on all that's happening. I have plans to continue learning React/Next.js,
          GraphQL, and possibly other web frameworks.
        </p>

        <h4>Adventures into Art</h4>
        <p>
          In November 2019 I began my venture into art, where I started learning the basics of 3D using{' '}
          <a href="https://blender.org">Blender</a>, an incredibly powerful, open-source 3D suite. I have had a blast
          learning about 3D modeling, physics/fluid simulations, and creating awesome scenes in general, all using free
          tutorials on YouTube.
        </p>
        <p>
          After becoming addicted to Blender and devouring all the content I could, I switched over to learning
          traditional and digital art. This past year I have been practicing gesture, figure drawing, and anatomy,
          albeit at a snail's pace.
        </p>
        <p>
          Having discovered a creative side I didn't know I had, I plan on continuing my journey into art. I had always
          been into photography but could never find the motivation to learn other forms of art. I try to find time
          every day to practice my skills as an artist, and I don't ever plan on stopping!
        </p>
      </div>
    </Layout>
  )
}
