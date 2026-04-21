// @ts-nocheck
function Apr2026() {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">

            <div className="flex justify-center mb-8">
              <img 
                src="/uploads/feb26.png" 
                alt="April 2026"
                className="max-w-[200px] h-auto"
              />
            </div>

            <header className="text-center mb-16">

              <h1 className="text-gray-900 mb-4">
                <br />
                april 2026
              </h1>
              <p className="text-gray-600 mb-2 italic">
                draws, kemps, newbs, nats
              </p>
            </header>

            {/* Artsy minimal layout */}
            <div className="max-w-2xl mx-auto space-y-12">
              
              {/* Locations - left aligned */}
              <div className="pl-14">
                <p className="text-gray-600 leading-relaxed">
                suits<br />
                </p>
              </div>

              {/* Shows - centered */}
              <div className="text-center">
                <p className="text-gray-600">
                princeton, nj<br />
                fort worth, tx
                new york, ny
                </p>
              </div>

              {/* Music - right aligned */}
              <div className="pr-14 text-right">
                <p className="text-gray-600 leading-relaxed">
                  over my dead body, drake<br />
                  all about our love, sade
                </p>
              </div>

              {/* YouTube embed - centered, smaller */}
              <div className="flex justify-center pt-4">
                <iframe 
                  width="80" 
                  height="80" 
                  src="https://www.youtube.com/embed/PMk8L9FNqnY?start=20&autoplay=1" 
                  title="over my dead body, drake" 
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
  export default Apr2026
  