import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Video } from "./WorkBody"

interface Props {
    videos: Video[]
    initialVideo: Video
    onClose: () => void
}

const WorkModal = ({ videos, initialVideo, onClose }: Props) => {
    const [currentVideo, setCurrentVideo] = useState<Video>(initialVideo)
    const [currentIndex, setCurrentIndex] = useState(
        videos.findIndex(v => v.id === initialVideo.id)
    )

    const getVimeoId = (url: string) => {
        const match = url.match(/(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/)
        return match ? match[1] : null
    }

    const nextVideo = () => {
        const next = (currentIndex + 1) % videos.length
        setCurrentVideo(videos[next])
        setCurrentIndex(next)
    }

    const prevVideo = () => {
        const prev = (currentIndex - 1 + videos.length) % videos.length
        setCurrentVideo(videos[prev])
        setCurrentIndex(prev)
    }

    useEffect(() => {
        document.body.style.overflow = "hidden"
        const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose()
        document.addEventListener("keydown", handleEsc)
        return () => {
            document.body.style.overflow = "auto"
            document.removeEventListener("keydown", handleEsc)
        }
    }, [onClose])

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
            <button
                onClick={onClose}
                className="absolute cursor-pointer top-3 right-6 z-10 text-white"
            >
                <X size={24} strokeWidth={3} />
            </button>

            <div className="relative w-full mx-4 flex flex-col items-center">
                <button
                    onClick={prevVideo}
                    className="hidden md:inline-flex cursor-pointer z-20 absolute left-0 top-[40%] -translate-y-1/2 text-white"
                >
                    <ChevronLeft size={72} strokeWidth={1} />
                </button>

                <button
                    onClick={nextVideo}
                    className="hidden md:inline-flex cursor-pointer z-20 absolute right-0 top-[40%] -translate-y-1/2 text-white"
                >
                    <ChevronRight size={72} strokeWidth={1} />
                </button>

                <div className="relative w-full md:px-[68px] h-[83vh] overflow-hidden flex justify-center">
                    <iframe
                        src={`https://player.vimeo.com/video/${getVimeoId(currentVideo.videoUrl)}?autoplay=1&title=0&byline=0&portrait=0`}
                        className="w-full h-full object-top"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="mt-4 px-4 w-full">
                    <div className="flex overflow-x-auto mx-auto">
                        {videos.map((video, index) => (
                            <div
                                key={video.id}
                                className={`flex-shrink-0 cursor-pointer transition-all duration-300 py-2 px-1 ${index === currentIndex ? "opacity-20" : "opacity-100"
                                    }`}
                                onClick={() => {
                                    setCurrentVideo(video)
                                    setCurrentIndex(index)
                                }}
                            >
                                <div className="relative w-16 h-16 overflow-hidden">
                                    <Image
                                        src={video.thumbnailUrl}
                                        alt={video.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkModal
