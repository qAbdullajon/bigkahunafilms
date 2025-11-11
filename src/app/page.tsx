'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { Facebook, Instagram, SquareSplitHorizontal } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      if (videoRef.current) {
        videoRef.current.currentTime = 0
        videoRef.current.play().catch(() => { })
      }
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[#1a1a1a] z-50"
          >
            <div className='px-6'>
              <Image src={'/logo.svg'} alt='Loading' width={500} height={28} />
              <p className='text-center mt-5 leading-[19px] text-base tracking-[3px] min-[480px]:tracking-[5px] md:tracking-[7.5px]'>A CREATIVE PRODUCTION HOUSE</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://cdn.prod.website-files.com/62a0be23da2f1f04a6f5c1aa/62a0be23da2f1f6498f5c1ff_OpeningSequence_2020v2-transcode.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      <div className='relative h-full px-5 md:px-10'>
        <Navbar />

        <div className='absolute right-5 md:right-10 top-1/2 -translate-y-1/2 z-20'>
          <div className='flex flex-col gap-5'>
            <div className='w-[45px] h-[45px] text-white border border-gray-300 hover:border-gray-400/20 hover:text-gray-400/60 flex items-center justify-center rounded-full cursor-pointer transition-colors'>
              <SquareSplitHorizontal />
            </div>
            <div className='w-[45px] h-[45px] text-white border border-gray-300 hover:border-gray-400/20 hover:text-gray-400/60 flex items-center justify-center rounded-full cursor-pointer transition-colors'>
              <Instagram />
            </div>
            <div className='w-[45px] h-[45px] text-white border border-gray-300 hover:border-gray-400/20 hover:text-gray-400/60 flex items-center justify-center rounded-full cursor-pointer transition-colors'>
              <Facebook />
            </div>
          </div>
        </div>

        <div className="relative h-full flex flex-col justify-end items-start md:pb-16 pb-20 min-[480px]:pb-5">
          <Link href={'#about'} className="font-bold">
            <p className='text-[12px] leading-3 min-[480px]:text-base min-[480px]:leading-[30px] uppercase tracking-[.2em]'>a creative production house</p>
            <h1 className='tracking-[3px] mt-5 text-[41px] md:text-[64px] lg:text-[80px] font-black leading-[46px] md:leading-[72px]'>– Crafting Is</h1>
            <h1 className='tracking-[3px] text-[41px] md:text-[64px] lg:text-[80px] font-black leading-[46px] md:leading-[72px]'>What We Do Best</h1>
          </Link>
        </div>
      </div>
    </div>
  )
}
