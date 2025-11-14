import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const CookiePolicy = () => {
  return (
    <div className="text-[#323232]">
      <Navbar light={true} />
      <div className="pt-[142px] text-center pb-10 px-5 md:px-10">
        <p className="uppercase tracking-[.2em]">legal</p>
        <h1 className="text-[40px] min-[480px]:text-[64px] leading-[46px] min-[480px]:leading-[72px] font-black">Privacy Policy</h1>
      </div>
      <div className="bg-white leading-[30px] py-[60px] px-5 md:px-10">
        <p className="max-w-[1150px] mx-auto px-10">The document could not be found. If you are the owner of the site, double-check your settings inside your iubenda dashboard. If you read this as a user of this site, please alert the owner of the site to check their legal documents.</p>
      </div>

      <Link href={'/contact'} className="relative block group h-[400px] z-0">
        <video
          className="w-full h-full object-cover"
          src="https://cdn.prod.website-files.com/62a0be23da2f1f04a6f5c1aa/62a0be23da2f1f4c9af5c1f8_Clips_OptionB_one%20sequence_low-transcode.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute left-1/2 w-full top-1/2 -translate-1/2 text-white group-hover:text-white/60 transition-colors duration-200 z-20">
          <p className="font-black text-4xl text-center pb-2">Speak to Us Today</p>
          <div className="flex items-center gap-2 justify-center text-sm">
            <span>Contact BKF</span>
            <ArrowRight size={18} />
          </div>
        </div>
      </Link>

      <Footer />
    </div>
  )
}

export default CookiePolicy