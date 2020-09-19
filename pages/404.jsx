import Layout from '../components/Layout'

export default function NotFound() {
  return (
    <Layout title="404">
      <div className="prose dark:prose-dark">
        <p>Sorry, that page could not be found!</p>
      </div>
    </Layout>
  )
}
