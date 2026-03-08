// @ts-nocheck
function Feb2026() {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">

            <div className="flex justify-center mb-8">
              <img 
                src="/uploads/feb26.png" 
                alt="February 2026"
                className="max-w-[200px] h-auto"
              />
            </div>

            <header className="text-center mb-16">

              <h1 className="text-gray-900 mb-4">
                <br />
                february 2026
              </h1>
              <p className="text-gray-600 mb-2 italic">
                bicker, benz, boooze, jobs, buddys, blizzard
              </p>
            </header>

            {/* Artsy minimal layout */}
            <div className="max-w-2xl mx-auto space-y-12">
              
              {/* Locations - left aligned */}
              <div className="pl-14">
                <p className="text-gray-600 leading-relaxed">
                super bowl lx<br />
                winter olympics
                </p>
              </div>

              {/* Shows - centered */}
              <div className="text-center">
                <p className="text-gray-600">
                princeton, nj<br />
                new york, ny
                </p>
              </div>

              {/* Music - right aligned */}
              <div className="pr-14 text-right">
                <p className="text-gray-600 leading-relaxed">
                  dreams, fleetwood mac<br />
                  piss in the wind, joji
                </p>
              </div>

              {/* YouTube embed - centered, smaller */}
              <div className="flex justify-center pt-4">
                <iframe 
                  width="80" 
                  height="80" 
                  src="https://www.youtube.com/embed/1qmrq6I_jHI?start=53&autoplay=1" 
                  title="raindance" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>

            </div>
          </div>


        </div>

      </div>
    )
  }
  
  // @ts-ignore
  export default Feb2026
  