// @ts-nocheck
function May2026() {
    const stops = [
      'princeton, nj',
      'north brunswick, nj',
      'tokyo, japan',
      'chengu, china',
      'mianyang, china',
      'dunhuang, china',
      'east turkestan',
      'zhangye, china',
      'lanzhou, china',
      'hong kong',
      'los angeles, ca',
      'north potomac, md',
    ]

    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">

            <div className="flex justify-center items-center gap-3 mb-8 flex-nowrap overflow-x-auto">
                <img src="/uploads/may26_2.JPG" alt="May 2026" className="max-h-[170px] w-auto object-contain shrink-0" />
                <video src="/uploads/may26_5.MOV" className="max-h-[170px] w-auto object-contain shrink-0" autoPlay muted loop playsInline />
                <img src="/uploads/may26_4.JPG" alt="May 2026" className="max-h-[170px] w-auto object-contain shrink-0" />
                <video src="/uploads/may26_3.mov" className="max-h-[170px] w-auto object-contain shrink-0" autoPlay muted loop playsInline />
                <img src="/uploads/may26_1.JPG" alt="May 2026" className="max-h-[170px] w-auto object-contain shrink-0" />
            </div>

            <header className="text-center mb-16">
              <h1 className="text-gray-900 mb-4">
                <br />
                may 2026
              </h1>
              <p className="text-gray-600 italic">
                love, depth, growth
              </p>
            </header>

            <div className="max-w-2xl mx-auto space-y-8">
              {/* a winding route: drifts east off the centerline, then home again. */}
              <div className="flex flex-col items-center text-gray-600 overflow-hidden">
                {stops.map((stop, i) => {
                  const t = i / (stops.length - 1)
                  const drift = Math.sin(t * Math.PI * 2) * 100
                  return (
                    <span key={stop} style={{ transform: `translateX(${drift}px)` }}>
                      {stop}
                    </span>
                  )
                })}
              </div>
            </div>

            <div className="flex justify-center text-gray-600 mt-16">
            ❤️❤️❤️
            </div>


            <div className="leading-relaxed">
                    <iframe 
                      width="80" 
                      height="80" 
                      src="https://www.youtube.com/embed/mXonGAEPQp8?autoplay=1" 
                      title="landslidee" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen>
                    </iframe>
                  </div>

          </div>
        </div>
      </div>
    )
  }




  // @ts-ignore
  export default May2026
