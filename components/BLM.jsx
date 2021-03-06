export default function BLM() {
  return (
    <div className="mb-6 px-4 py-3 bg-black dark:bg-gray-800 text-white rounded-md flex flex-col sm:flex-row items-center justify-center sm:justify-between shadow-md">
      <div className="font-semibold text-center sm:text-left">
        <div>Black Lives Matter</div>
        <div className="text-xs opacity-75">The system is broken. Stop police brutality.</div>
      </div>

      <a
        href="https://support.eji.org/give/153413/#!/donation/checkout"
        target="_blank"
        rel="noopener"
        className="mt-3 px-3 py-2 sm:mt-0 text-xs font-semibold flex-shrink-0 inline-flex items-center text-white hover:text-black bg-gray-700 hover:bg-white rounded shadow-md"
      >
        <span className="mr-2">Support Equal Justice Initiative</span>
        <svg
          className="w-4 h-4 opacity-75"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </a>
    </div>
  )
}
