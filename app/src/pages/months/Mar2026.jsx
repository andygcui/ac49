// @ts-nocheck
function Mar2026() {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">

            <div className="flex justify-center mb-8">
              <video 
              src="/uploads/mar26.MOV"
              autoPlay
              loop
              muted
              playsInline
              alt="mar"
              controls={false}
              className="max-w-xs scale-40"
              style={{width: '20%', height: 'auto'}}>
              </video>
            </div>

            <header className="text-center mb-16">

              <h1 className="text-gray-900 mb-4">
                <br />
                march 2026
              </h1>
              <p className="text-gray-600 mb-2 italic">
                briger, borgs, job, talks
              </p>
            </header>

            {/* Split column + rule — different rhythm from Feb’s L / C / R stack */}
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-0 md:items-start">
                <div className="space-y-14 md:pr-12">
                  <p className="text-gray-600 leading-relaxed">
                    indian wells <br />
                    march madness <br />
                    suits
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <iframe 
                      width="80" 
                      height="80" 
                      src="https://www.youtube.com/embed/AxTmGEyy3qY?autoplay=1" 
                      title="sick love" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen>
                    </iframe>
                  </div>
                </div>

                <div className="md:border-l md:border-gray-200 md:pl-12 md:pt-20 space-y-10">
                  <p className="text-gray-600 leading-relaxed">
                    princeton, nj <br />
                    philadelphia, pa <br />
                    silver spring, md <br />
                    georgetown, dc <br />
                    ithaca, ny
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    who's the fool, malcom todd <br />
                    sick love, red hot chili peppers <br />
                    keep looking, sade
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    )
  }
  
  // @ts-ignore
  export default Mar2026
