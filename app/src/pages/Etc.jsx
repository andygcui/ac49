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

const GRID_SLOT_COUNT = 56
const TILE_ENTER_STAGGER_MS = 50
const TILE_FOLD_STAGGER_MS = 18
const TILE_FOLD_DURATION_MS = 440
const TILE_UNDER_ROW_DURATION_MS = 300
/** Smooth ease-out (settle) — feels less abrupt than linear-ish curves */
const TILE_FOLD_EASE = 'cubic-bezier(0.22, 1, 0.32, 1)'
const SHELL_COLLAPSE_MS = 720
const SHELL_COLLAPSE_EASE = 'cubic-bezier(0.33, 1, 0.65, 1)'
const UNPACK_DELAY_MS = 280

/** Matches `grid-cols-1 sm:2 md:3 lg:4 xl:5` on the portfolio grid */
function getPortfolioGridColumns() {
  if (typeof window === 'undefined') return 5
  const w = window.innerWidth
  if (w >= 1280) return 5
  if (w >= 1024) return 4
  if (w >= 768) return 3
  if (w >= 640) return 2
  return 1
}

function usePortfolioGridColumns() {
  const [columns, setColumns] = useState(getPortfolioGridColumns)
  useEffect(() => {
    const read = () => setColumns(getPortfolioGridColumns())
    read()
    window.addEventListener('resize', read)
    return () => window.removeEventListener('resize', read)
  }, [])
  return columns
}

function Etc() {
  const [images, setImages] = useState([])
  const [draggedIndex, setDraggedIndex] = useState(null)
  const [dragOverIndex, setDragOverIndex] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const [openSection, setOpenSection] = useState(null)
  const [tilesPacked, setTilesPacked] = useState(false)
  const [shellCollapsed, setShellCollapsed] = useState(false)
  const gridRef = useRef(null)
  const openSectionRef = useRef(null)
  const shellCollapsedRef = useRef(false)

  openSectionRef.current = openSection
  const gridColumns = usePortfolioGridColumns()

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

  // Start tile fold whenever a section opens (including switching between sections)
  useEffect(() => {
    if (openSection) setTilesPacked(true)
  }, [openSection])

  // After reverse-order tile fold, collapse the shell; on close, expand then unpack tiles
  useEffect(() => {
    if (!openSection) {
      shellCollapsedRef.current = false
      setShellCollapsed(false)
      const unfoldId = window.setTimeout(() => {
        if (openSectionRef.current == null) setTilesPacked(false)
      }, UNPACK_DELAY_MS)
      return () => clearTimeout(unfoldId)
    }

    if (shellCollapsedRef.current) {
      return undefined
    }

    let cancelled = false
    const topRowCount = gridColumns
    const maxTopRowDelay = Math.max(0, topRowCount - 1) * TILE_FOLD_STAGGER_MS
    const collapseAfter = maxTopRowDelay + TILE_FOLD_DURATION_MS + 90

    const collapseId = window.setTimeout(() => {
      if (!cancelled) {
        setShellCollapsed(true)
        shellCollapsedRef.current = true
      }
    }, collapseAfter)

    return () => {
      cancelled = true
      clearTimeout(collapseId)
    }
  }, [openSection, gridColumns])

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
                <button
                  key={id}
                  type="button"
                  onClick={() => toggleSection(id)}
                  className={`text-gray-600 hover:text-orange-700 hover:underline cursor-default hover:cursor-text transition-colors bg-transparent border-0 p-0 font-inherit text-inherit ${
                    openSection === id ? 'text-orange-700 underline' : ''
                  }`}
                >
                  {i > 0 ? ', ' : ''}
                  {label}
                </button>
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

      {/* Tiles fold up in reverse load order; shell eases closed after the last tile */}
      <div
        className={`grid ${
          shellCollapsed ? 'grid-rows-[0fr]' : 'grid-rows-[1fr]'
        }`}
        style={{
          marginTop: '5px',
          transition: `grid-template-rows ${SHELL_COLLAPSE_MS}ms ${SHELL_COLLAPSE_EASE}`,
        }}
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
                  const inTopRow = slotIndex < gridColumns
                  const foldDelayMs = tilesPacked
                    ? inTopRow
                      ? (gridColumns - 1 - slotIndex) * TILE_FOLD_STAGGER_MS
                      : 0
                    : slotIndex * TILE_ENTER_STAGGER_MS

                  return (
                    <div
                      key={slotIndex}
                      className={`aspect-square rounded-lg overflow-hidden transition-all duration-200 ${
                        isDragOver ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                      } ${
                        isDragging ? 'opacity-50 scale-95' : ''
                      } ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                      style={{
                        transitionDelay: `${slotIndex * TILE_ENTER_STAGGER_MS}ms`,
                      }}
                      onDragOver={(e) => handleDragOver(e, slotIndex)}
                      onDrop={(e) => handleDrop(e, slotIndex)}
                      onDragEnd={handleDragEnd}
                    >
                      <div
                        className="relative h-full w-full will-change-transform"
                        style={{
                          transform: tilesPacked
                            ? 'translate3d(0, -108%, 0)'
                            : 'translate3d(0, 0, 0)',
                          opacity: tilesPacked ? 0 : 1,
                          transitionProperty: 'transform, opacity',
                          transitionDuration: `${
                            tilesPacked && !inTopRow
                              ? TILE_UNDER_ROW_DURATION_MS
                              : TILE_FOLD_DURATION_MS
                          }ms`,
                          transitionTimingFunction: TILE_FOLD_EASE,
                          transitionDelay: `${foldDelayMs}ms`,
                          backfaceVisibility: 'hidden',
                        }}
                      >
                        {image ? (
                          <div className="relative h-full w-full group">
                            <img
                              src={image.src}
                              alt={`Portfolio ${slotIndex + 1}`}
                              className="h-full w-full cursor-move rounded-lg object-cover transition-all duration-300 group-hover:brightness-50"
                              draggable
                              onDragStart={(e) => handleDragStart(e, slotIndex)}
                              onDragEnd={handleDragEnd}
                              onError={(e) => {
                                console.error('Failed to load image:', image.src)
                                e.target.style.display = 'none'
                              }}
                            />
                            {image.caption && (
                              <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="break-words text-center text-sm font-medium text-white">
                                  {image.caption}
                                </p>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="h-full w-full rounded-lg bg-gray-300" />
                        )}
                      </div>
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
