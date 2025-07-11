export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-center items-center pt-[33px] pb-8">
        <div className="flex space-x-12">
          <span className="text-white hover:text-gray-300 transition-colors text-sm font-medium tracking-widest">
            HOME
          </span>
          <span className="text-white hover:text-gray-300 transition-colors text-sm font-medium tracking-widest">
            OUR WORK
          </span>
          <span className="text-white hover:text-gray-300 transition-colors text-sm font-medium tracking-widest">
            SERVICES
          </span>
          <span className="text-white hover:text-gray-300 transition-colors text-sm font-medium tracking-widest">
            TALK TO US
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 mt-[-160px]">
        {/* Adjusted mt to move content up */}
        {/* Frame Container */}
        <div className="bg-gray-200 relative overflow-hidden" style={{ width: "900px", height: "506px" }}>
          {/* Reverted width and height */}
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="https://dg9gcoxo6erv82nw.public.blob.vercel-storage.com/bird_vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-[35px] left-[102px] z-10">
            {/* Adjusted left position */}
            <h2 className="text-black text-xl" style={{ fontFamily: "Oswald", fontSize: "17pt", fontWeight: 500 }}>
              Imperfectly AI, Perfectly Your Brand.
            </h2>
            <p
              className="text-black"
              style={{
                fontFamily: "Oswald",
                fontSize: "14pt",
                fontWeight: 400, // Changed from 300 to 400 (Regular)
                marginTop: "5px",
              }}
            >
              Video advertising, redefined.
            </p>
          </div>
        </div>
        {/* Brand Title */}
        <div className="mt-[60px]">
          {/* Reverted mt */}
          <h1
            className="text-white text-7xl font-bold tracking-wider text-center"
            style={{ fontFamily: "Rylan-Regular" }}
          >
            TASTEFUL FRAME
          </h1>
        </div>
      </div>
    </div>
  )
}
