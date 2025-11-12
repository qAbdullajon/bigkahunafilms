"use client"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import WorkModal from "./WorkModal"

export interface Video {
  id: number
  thumbnail: string
  director: string
  title: string
  client: string
  videoUrl: string
  thumbnailUrl: string
}

const WorkBody = ({ videos }: { videos: Video[] }) => {
  const [isHoverVideos, setIsHoverVideos] = useState<number[]>([])
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  // elementni kuzatish
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting && !visibleItems.includes(index)) {
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.2 }
    )
    itemRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [visibleItems])

  return (
    <>
      <div className={`grid grid-cols-1 ${videos.length > 5 ? "lg:grid-cols-2" : ""} text-white`}>
        {videos.map((video, index) => {
          const isVisible = visibleItems.includes(index)
          return (
            <div
              key={video.id}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              data-index={index}
              className={`flex opacity-0 ${isVisible ? "animate-fadeUp" : ""}`}
            >
              <div
                className="relative group overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 flex-1 cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative aspect-video">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:opacity-80"
                  />
                </div>

                <div className="absolute inset-0 flex p-3 md:p-6 md:px-8">
                  <div className="flex flex-col justify-between w-full">
                    <div>
                      <p className="text-lg font-bold mb-[5px]">Director –</p>
                      <p className="text-lg leading-[18px]">{video.director}</p>
                    </div>

                    <div>
                      <h3 className="text-2xl leading-7 font-bold">{video.title}</h3>
                      <div className="flex items-center justify-between mt-[5px] font-normal leading-[18px] transition-opacity duration-500 group-hover:opacity-0">
                        <p>{video.client}</p>
                        <div className="flex items-center gap-1 font-medium">
                          <span>Watch Film</span>
                          <ArrowRight size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {selectedVideo && (
        <WorkModal
          videos={videos}
          initialVideo={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </>
  )
}

export default WorkBody
