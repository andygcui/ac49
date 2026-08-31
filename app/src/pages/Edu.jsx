function Edu() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-[2rem] font-serif text-gray-900 mb-4">
              .edu
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              i am a financial engineering student @ princeton who enjoys studying algorithms, statistics & probability; web / game development; and transformer-based AI research.
              <br /><br /><br />
            </p>


            {/* <div className="flex justify-center pointer-events-none" style={{ marginTop: '-50px', marginBottom: '-150px', minHeight: '200px', position: 'relative' }}>
                 <img 
                   src="/uploads/me.png" 
                   alt="me"
                   className="max-w-xs" 
                   style={{ 
                     transform: 'scale(0.4)', 
                     display: 'block',
                     width: 'auto',
                     height: 'auto',
                     willChange: 'auto'
                   }}
                   loading="eager"
                 />
            </div> */}
          </header>
          <div className="mt-8">
            <h2 className="text-xl font-serif text-gray-900 mb-6 border-b border-gray-300 pb-2">experience & projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20">
            <div>
                <h3 className="font-semibold text-gray-900 mb-2 hover:text-orange-700 transition-colors">
                  <a href="https://imap.princeton.edu/" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-text">
                    NASA x Princeton Astrophysics (IMAP)
                  </a>
                </h3>
                <p className="text-sm text-gray-700">Outreach model kit developer and assembler for IMAP: NASA heliophysics spacecraft mission led by researchers at Princeton University</p>
              </div>
            <div>
                <h3 className="font-semibold text-gray-900 mb-2 hover:text-orange-700 transition-colors">
                  <a href="https://beige.app/" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-text">
                    Beige AI
                  </a>
                </h3>
                <p className="text-sm text-gray-700">
                  Internal engineer to automate growth operations across investor relations; build and maintain CRM pipelines, market intelligence reports, investor newsletters and PR materials.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 hover:text-orange-700 transition-colors">
                  <a href="https://miyagilabs.ai" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-text">
                    Miyagi Labs (YC W25)
                  </a>
                </h3>
                <p className="text-sm text-gray-700">Full-stack developer building automated course generation pipelines, dashboards, and React features; deal and partnership outreach, 10M+ views across social media.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 hover:text-orange-700 transition-colors">
                  <a href="https://bac.umd.edu/" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-text">
                    Build America Center 
                  </a>
                </h3>
                <p className="text-sm text-gray-700">AI Agent engeineer modeling benefit cost analayses for grant proposals to promote sustainable infrastructure and economic development in the United States</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 hover:text-orange-700 transition-colors hover:underline cursor-text">
                  <a href="/uploads/ramsey.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-text">
                    Special Triangles in 3-Colorings of Complete Graphs: Rainbow and Monochromatic Ramsey theory
                  </a>
                </h3>
                <p className="text-sm text-gray-600 mb-2"> "Given any 3-edge-coloring of the complete graph 𝐾<sub>𝑛</sub> , what is the smallest 𝑛 such that there must exist at least two special triangles?"</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 hover:text-orange-700 transition-colors">
                  <a href="/uploads/ar.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-text">
                  Applying Civil Information Modeling and Augmented Reality to the Construction of Underground Pipelines
                  </a>
                  </h3>
                <p className="text-sm text-gray-700">AR display of underground pipeline structures to assist and increase safety for construction engineers.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 hover:text-orange-700 transition-colors">
                  <a href="https://youtu.be/UewQcdBEVyg" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-text">
                  Recycle Princeton (VIS 216)
                  </a>
                  </h3>
                <p className="text-sm text-gray-700">Tetris-style recycling game for educating children aged 5-8 about plastic waste sorting based on local regulations</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 hover:text-orange-700 transition-colors">
                  <a href="https://youtu.be/GqZLsIdueTE" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-text">
                  GreenTrip (HackPrinceton)
                  </a>
                  </h3>
                <p className="text-sm text-gray-700">Full-stack sustainable AI travel agent optimizing for sustainability (CO₂ emissions), cost, and route efficiency</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 hover:text-orange-700 transition-colors">
                  <a href="https://www.pomoplant.net/" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-text">
                  Pomo-plant
                  </a>
                  </h3>
                <p className="text-sm text-gray-700">Gamified productivity app for macOS with custom state-machine system, hand-drawn animations, & progression tracking</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 hover:text-orange-700 transition-colors">
                  <a href="https://youtu.be/HbyJnkKpvEI" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-text">
                  3D Tennis Swing Tracker
                  </a>
                  </h3>
                <p className="text-sm text-gray-700">MediaPipe pose detection to analyze tennis swing mechanics, create 3d swingpath models, and compare with pro baselines</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 hover:text-orange-700 transition-colors">
                  March Madness Bracket Predictor</h3>
                <p className="text-sm text-gray-700">Multivariate linear regression model optimized for log loss using historical performance data</p>
              </div>            
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 hover:text-orange-700 transition-colors">
                  <a href="https://youtu.be/-YiuDrHBZPs" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-text">
                  EmojiWorld
                  </a>
                  </h3>
                <p className="text-sm text-gray-700">Original 2D Pixel RPG with hand-animated sprites, collision detection, and multi-world transitions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edu
