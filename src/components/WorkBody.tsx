"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface Props {
  id: number;
  thumbnail: string,
  director: string,
  title: string,
  client: string,
  videoUrl: string,
  thumbnailUrl: string
}

const WorkBody = ({ videos }: { videos: Props[] }) => {
  const [isHoverVideos, setIsHoverVideos] = useState<number[]>([])

  return (
    <div className={`grid grid-cols-1 ${videos.length > 5 && 'lg:grid-cols-2'} text-white`}>
      {videos.map((video, index) => (
        <motion.div
          key={video.id}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: Math.floor(index / 2) * 0.2,
            ease: "easeOut",
          }}
          className="flex"
        >
          <Link
            href="#"
            className="relative group overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 flex-1"
            onMouseLeave={() => setIsHoverVideos([...isHoverVideos, video.id])}
          >
            {/* Video rasm */}
            <div className="relative aspect-video">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover transition-all duration-500 group-hover:opacity-80"
              />
            </div>

            {/* Matn overlay qismi */}
            <div className="absolute inset-0 flex p-3 md:p-6 md:px-8">
              <div className="flex flex-col justify-between w-full">
                {/* Yuqoridagi matn */}
                <div>
                  <p className="text-lg font-bold mb-[5px]">Director –</p>
                  <p className="text-lg leading-[18px]">{video.director}</p>
                </div>

                {/* Pastki matn */}
                <div>
                  <h3 className="text-2xl leading-7 font-bold">{video.title}</h3>
                  <div
                    className="flex items-center justify-between mt-[5px] font-normal leading-[18px] transition-opacity duration-500 group-hover:opacity-0"
                  >
                    <p>{video.client}</p>
                    <div className={`${isHoverVideos.some(a => a === video.id) ? 'hidden' : 'flex'} items-center gap-1 font-medium`}>
                      <span>Watch Film</span>
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

export default WorkBody