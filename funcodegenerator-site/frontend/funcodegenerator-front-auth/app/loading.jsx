import "./load.css"

function Loading() {
  return (
    <div className="background">
      <div className="content">
        <div className="logo-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 4H3" />
            <path d="M18 8H6" />
            <path d="M19 12H9" />
            <path d="M16 16h-6" />
            <path d="M11 20H9" />
          </svg>
        </div>
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold">FunCodeGenerator</h1>
      </div>
    </div>
  );
}

export default Loading;
