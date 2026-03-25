import { useState, useEffect, useRef } from 'react'
import { portfolioImages as staticImages } from '../data/portfolioImages'

const ETC_SECTIONS = [
  { id: 'travel', label: 'travel' },
  { id: 'music', label: 'music' },
  { id: 'hobbies', label: 'hobbies' },
  { id: 'books', label: 'books' },
  { id: 'friends', label: 'friends' },
  { id: 'sports', label: 'sports' },
  { id: 'etc', label: 'etc.' },
]

function Etc() {
  const [images, setImages] = useState([])
  const [draggedIndex, setDraggedIndex] = useState(null)
  const [dragOverIndex, setDragOverIndex] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [openSection, setOpenSection] = useState(null)
  const gridRef = useRef(null)

  const toggleSection = (id) => {
    setOpenSection((prev) => (prev === id ? null : id))
  }

  // Load images from static folder on mount
  useEffect(() => {
    if (staticImages && staticImages.length > 0) {
      setImages(staticImages)
    }
  }, [])

  // Trigger grid animation on mount
  useEffect(() => {
    const gridTimer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(gridTimer)
  }, [])

  const handleDragStart = (e, index) => {
    setDraggedIndex(index)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e, index) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    setDragOverIndex(index)
  }

  const handleDragEnd = () => {
    setDraggedIndex(null)
    setDragOverIndex(null)
  }

  const handleDrop = (e, dropIndex) => {
    e.preventDefault()
    if (draggedIndex === null || draggedIndex === dropIndex) {
      setDragOverIndex(null)
      return
    }

    const newImages = [...images]
    const draggedImage = newImages[draggedIndex]
    
    // Remove from old position
    newImages.splice(draggedIndex, 1)
    
    // Insert at new position
    newImages.splice(dropIndex, 0, draggedImage)
    
    // Update positions
    const updatedImages = newImages.map((img, idx) => ({
      ...img,
      position: idx
    }))
    
    setImages(updatedImages)
    setDraggedIndex(null)
    setDragOverIndex(null)
  }

  // Generate grid slots (56 slots total)
  const gridSlots = Array.from({ length: 56 }, (_, i) => i)

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-16">
            <h1 className="text-[2rem] font-serif text-gray-900 mb-4">
              etc.
            </h1>
            <p className="text-gray-600">
              {ETC_SECTIONS.map(({ id, label }, i) => (
                <span key={id}>
                  {i > 0 ? ', ' : null}
                  <button
                    type="button"
                    onClick={() => toggleSection(id)}
                    className={`text-gray-600 hover:text-orange-700 hover:underline cursor-pointer transition-colors bg-transparent border-0 p-0 font-inherit text-inherit ${
                      openSection === id ? 'text-orange-700 underline' : ''
                    }`}
                  >
                    {label}
                  </button>
                </span>
              ))}
              {/* favorite cities: cusco, peru // lucerne, switzerland // new york, usa // chengdu, china // paris, france // kyoto, japan // providenciales, turks and caicos  */}
            </p>
          </header>

          {/* Worm GIF */}
          <div className="flex justify-center mb-16">
            <img 
              src="/uploads/worm.gif" 
              alt="coming soon" 
              className="max-w-xs scale-60"
              style={{ transform: 'scale(0.6)', marginTop: '-100px' }}
            />
            <p className="text-gray-600 text-center ml-3 mt-10">soon</p>
          </div>
        </div>
      </div>

      {/* Portfolio grid folds up when a section is open; replace with section panels below */}
      <div
        className={`grid transition-[grid-template-rows] duration-700 ease-in-out ${
          openSection ? 'grid-rows-[0fr]' : 'grid-rows-[1fr]'
        }`}
        style={{ marginTop: '5px' }}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            ref={gridRef}
            className={`container mx-auto px-4 pb-16 pt-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="max-w-6xl mx-auto">
              {/* Note: Images are loaded from public/uploads folder */}
              {/* To add/edit images, place them in app/public/uploads and update portfolioImages.js */}

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {gridSlots.map((slotIndex) => {
                  const image = images[slotIndex]
                  const isDragging = draggedIndex === slotIndex
                  const isDragOver = dragOverIndex === slotIndex

                  return (
                    <div
                      key={slotIndex}
                      className={`aspect-square rounded-lg transition-all duration-200 ${
                        isDragOver ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                      } ${
                        isDragging ? 'opacity-50 scale-95' : ''
                      } ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                      style={{
                        transitionDelay: `${slotIndex * 50}ms`
                      }}
                      onDragOver={(e) => handleDragOver(e, slotIndex)}
                      onDrop={(e) => handleDrop(e, slotIndex)}
                      onDragEnd={handleDragEnd}
                    >
                      {image ? (
                        <div className="relative w-full h-full group">
                          <img
                            src={image.src}
                            alt={`Portfolio ${slotIndex + 1}`}
                            className="w-full h-full object-cover rounded-lg cursor-move transition-all duration-300 group-hover:brightness-50"
                            draggable
                            onDragStart={(e) => handleDragStart(e, slotIndex)}
                            onDragEnd={handleDragEnd}
                            onError={(e) => {
                              console.error('Failed to load image:', image.src)
                              e.target.style.display = 'none'
                            }}
                          />
                          {image.caption && (
                            <div className="absolute inset-0 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                              <p className="text-white text-sm font-medium text-center break-words">
                                {image.caption}
                              </p>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="w-full h-full bg-gray-300 rounded-lg" />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {openSection && (
        <div className="container mx-auto px-4 pb-16 pt-4 max-w-6xl transition-opacity duration-300">
          {/* Add per-section content: e.g. map iframe for travel, galleries for others */}
          <div
            className="min-h-[50vh] w-full rounded-lg border border-dashed border-gray-200 bg-gray-50/50"
            data-etc-section={openSection}
          />
        </div>
      )}
    </div>
  )
}

export default Etc
