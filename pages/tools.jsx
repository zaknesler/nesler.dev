import Layout from '../components/Layout'

import Link from 'next/link'

function ToolItem(props) {
  return (
    <Link href={props.url}>
      <div className="p-4 rounded-lg border hover:border-gray-400 shadow-sm cursor-pointer">
        <div className="flex items-center">
          <svg
            className="w-6 h-6 text-gray-400 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {props.children}
          </svg>
          <div className="ml-2 font-medium flex items-center justify-between">
            <span>{props.name}</span>
          </div>
        </div>

        <div className="ml-8 mt-2">
          <div className="text-sm text-gray-500">{props.desc}</div>
        </div>
      </div>
    </Link>
  )
}

export default function Tools() {
  return (
    <Layout title="Tools">
      <div className="prose dark:prose-dark">
        <p>
          This is a collection of web tools that I have created for my own personal use. Existing tools like these
          already exist on the internet, but sometimes I'm looking for something specific, so I made a few of my own. I
          hope they may be of use to you!
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <ToolItem
          name="Text Statistics"
          desc="Get statistics from a body of text, such as word/character count and estimated reading time."
          url="/tools/text-statistics"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </ToolItem>

        <ToolItem
          name="Album Art Search"
          desc="Search for album art from the iTunes, Amazon, and MusicBrainz Picard databases."
          url="#"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </ToolItem>

        <ToolItem
          name="Remove Duplicate Lines"
          desc="Highlight and remove duplicate lines from a body of text."
          url="#"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
          />
        </ToolItem>
      </div>
    </Layout>
  )
}
