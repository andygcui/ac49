// @ts-nocheck
import { useEffect } from 'react'

function Dec2025() {
  useEffect(() => {
    // Load TikTok embed script
    const script = document.createElement('script')
    script.src = 'https://www.tiktok.com/embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup: remove script when component unmounts
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-16">

          <iframe 
              src="https://open.spotify.com/embed/track/4YDl2Oxc1mVRnZsZAbNzI0?utm_source=generator"
              
              width="100%" 
              height="152" 
              frameBorder="0" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy">
              </iframe>


            <h1 className="text-gray-900 mb-4">
              <br /><br />
              december 2025
            </h1>
            <p className="text-gray-600 mb-2 italic">
              formals, smoke break, finals lock, getting fat, winter
            </p>
            <p className="text-gray-600 mb-2">
              <br />
              princeton, nj <br />
              new york, ny <br />
              north potomac, md <br />
              columbia, md <br />
              panama city, pa
            </p>
          </header>

          <div className="flex justify-center">
            <p className="text-gray-600">squid games season 2 <br />
            stranger things 1, 2 <br />
            </p>
          </div>

          <br /><br />

          <div className="flex justify-center">
            <p className="text-gray-600">
              myth, beach house <br />
              hell of a night, travis scott <br />
              you got time and i got money, smerz
            </p>
          </div>

          <div className="flex justify-center mb-8" style={{ marginTop: '-40px' }}>
            <div style={{ transform: 'scale(0.8)', transformOrigin: 'center' }}>
              <blockquote 
                className="tiktok-embed" 
                cite="https://www.tiktok.com/@andy_cui/video/7589833255227084063" 
                data-video-id="7589833255227084063" 
                style={{ maxWidth: '500px', minWidth: '250px' }}
              >
              <section>
                <a 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="@andy_cui" 
                  href="https://www.tiktok.com/@andy_cui?refer=embed"
                >
                  @andy_cui
                </a>
                <p>R we funny lmk</p>
                <a 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="♬ original sound - Andy Cui" 
                  href="https://www.tiktok.com/music/original-sound-7589833203314068254?refer=embed"
                >
                  ♬ original sound - Andy Cui
                </a>
              </section>
            </blockquote>
            </div>
          </div>


        </div>
      </div>
      <div className="opacity-0"> 
          <iframe 
            width="1" 
            height="1" 
            src="https://www.youtube.com/embed/LzEzE3cpuvg?start=4&autoplay=1" 
            title="is it a crime to be unsure" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
          </div>
    </div>
  )
}

// @ts-ignore
export default Dec2025


