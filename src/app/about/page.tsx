"use client"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import WorkModal from "@/components/WorkModal"
import { motion } from "framer-motion"
import { ArrowRight, MoveRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const videos = [
  {
    id: 1,
    thumbnail: "",
    director: "",
    title: "",
    client: "",
    videoUrl: "https://vimeo.com/837486131?share=copy",
    thumbnailUrl: ""
  },
]
const timelineData = [
  {
    year: 2022,
    texts: [
      "BKF hosted creative industry CEOs and CCOs exclusive dinner at The Arts Club Dubai as part of their collaboration with Dubai Lynx 2022.",
      "BKF wins 5 Grand Prix, 6 Gold and 5 Bronze at Dubai Lynx Festival of Creativity 2022.",
      "BKF announced as the Middle Eastern sponsor of LBB Immortal Awards 2022 competition. Eddy Rizk, CEO at BKF, comments:",
      "“We have always aimed to yield the industry in every way possible: to encourage forward-thinking, growth, and evolution; to award campaigns and to honor imaginative ideas and to showcase this globally. With the region growing significantly over the years, we believe creatives and agencies should be able to commemorate their work and ideas that they have tirelessly produced. With transparent rankings, scored by a world-class jury, we have partnered with LBB to sponsor The Immortal Awards, bringing the region’s creative immortality to the world.”"
    ]
  },
  {
    year: 2021,
    texts: [
      "BKF ranked #1 Production Company in 2021's Immortal Awards for Middle East, Africa and UAE.",
      "BKF announced Gold Winners at Mena Effie 2021 Awards Ceremony.",
      "BKF ranked #1 production company in 2021’s Immortal Awards for Middle East, Africa and UAE.",
      "BKF’s CEO Eddy Rizk interviewed in Little Black Book as part of their “5 minutes with…” series",
      "“I tend to take things that come easy for granted. I’m one of these people who functions much better when facing challenges. When I was younger, not in a pretentious way, but if anyone were to tell me I wasn’t doing the right thing, or I was making a mistake, I was very vocal in saying, “I don’t fail”. After 13 years, BIG KAHUNA FILMS is one of the most successful creative production houses in the region. We know we will adapt, grow and by the end of 2021, we will look back and say, “well, it wasn’t that bad after all”."
    ]
  },
  {
    year: 2020,
    texts: [
      "BKF wins the B & W Report awards for, Best Production House of the Year and Best Executive Producer."
    ]
  },
  {
    year: 2019,
    texts: [
      "And the winner is... BKF is awarded Production House of the Year, Golden Palm at the Dubai Lynx.",
      "BKF wins Grand Prix for their “du #postwisely” campaign of 4 commercials.",
      "BKF sponsors the One Club Portfolio in both Dubai and Beirut.",
      "BKF expands its Beirut operation, by occupying two floors in a renovated building on Monot Street.",
      "BKF’s Eddy Rizk, interviewed in campaign magazine about how demand is changing and what high level reform would improve the industry:",
      "“You are no longer limited to a 30 sec spot for television, you can work on a million dollars campaign of several 6 seconders, or a much lesser budget for a longer format. It’s an open book, and this what’s making it much more interesting. Of course it is also becoming more challenging, but the strength is how quickly you adapt, and what you have, as a production house, of a creative added value. For a reform, we are already moving in the right direction, the complexity of some of the briefs, makes them no longer a one-man company job and it is setting a trend on which brief goes to who. So unless you have a full in-house support and a creatively oriented team, it will not be possible to deliver on some projects while still maintaining the highest standards of quality and crafting.”"
    ]
  },
  {
    year: 2018,
    texts: [
      "BKF launches its digital arm and events departments, offering its clients a 360 approach and a one stop shop for their projects."
    ]
  },
  {
    year: 2017,
    texts: [
      "BKF celebrates their 10 year anniversary in an unprecedented party at White Dubai, hosting over 1000 guests from the advertising and media industry."
    ]
  },
  {
    year: 2016,
    texts: [
      "BKF wins big at the Dubai Lynx Festival with GOLD awards in Film, Branded Content & Entertainment, Integrated, Interactive and Media."
    ]
  },
  {
    year: 2015,
    texts: [
      "BKF ranks 3rd best production house and 2nd best producer in Middle East & Africa at the Loeries awards.",
      "Amongst other awards, “Loto: Goodbye Bad Luck” campaign lands the Grand Prix in Film."
    ]
  },
  {
    year: 2014,
    texts: [
      "BKF ranks 2nd Best Production House at the Dubai Lynx Festival with “FA deodorant: Don’t enter the room before you enter the room”, a campaign of 3 commercials, winning Gold awards."
    ]
  },
  {
    year: 2013,
    texts: [
      "Where Skittles Come From” campaign wins the Gold Prize for Best Food & Drink category at the MENA Crystal Award.",
      "BKF Managing Director, Eddy Rizk interviewed by Communicate Magazine about government role and the growth of local production houses:",
      "“There’s a huge potential in this region that’s not explored yet. We do however lack key elements that play big roles in the development of a production industry. But it’s not about government support, it should first start by us, production houses to align and agree on certain terms and work out what we essentially need to develop our industry. Sadly, last month, we lost a man who was fighting hard and in my opinion capable of making this happen, Tim Smythe of Filmworks, to whom I owe the biggest respect.”"
    ]
  },
  {
    year: 2012,
    texts: [
      "BKF launched YDC (Young Director Competition) at the Dubai Lynx Festival and hosts a panel with industry figures discussing film making in the middle east.",
      "BKF Managing Director, Eddy Rizk interviewed by Cannes Lions magazine on the strengths of Dubai production industry:",
      "“For attracting foreign production, Dubai as a country plays an important role in this. Either because of its reputation, stability, projects that are recognized worldwide, etc… In terms of production cost, we are more competitive than Europe and the US. For the past 5 years, we haven’t received on single brief, where we thought this is something we cannot produce here. Maybe sometimes it requires flying in a one or two specialized crew members, but that will do it. Also, Dubai is a cosmopolitan country, we can easily find all nationalities here, and that covers the talents requirements.”"
    ]
  },
  {
    year: 2011,
    texts: [
      "BKF becomes the exclusive host of the Dubai Lynx Festival official afterparty.",
      "BKF Managing Director, Eddy Rizk interviewed by Arabad on the challenges facing TV commercial production with their rise in new platforms:",
      "“It’s true today there are many other platforms, but for a well-established or mature brand, they all compliment each other, it also depends on what you’re promoting, the purpose and who your target x. Using another less costly platform, based on a strategy for a short period of time, yes it could work, but cut TV completely out of brand marketing campaign, that always had a presence in there, I don’t think it will happen, not in the near future.”"
    ]
  },
  {
    year: 2010,
    texts: [
      "Kit Kat Chunky Boys campaign wins the Gold Prize for Best Food & Drink category at the MENA Crystal Award and a Silver at Dubai Lynx Festival."
    ]
  },
  {
    year: 2009,
    texts: [
      "BIG KAHUNA FILMS opens up to servicing for international clients, starting with the production of Emirates “Keep Discovering” launch campaign."
    ]
  },
  {
    year: 2008,
    texts: [
      "BIG KAHUNA FILMS launches its operation in Lebanon, with the office located in the heart of Downtown Beirut."
    ]
  },
  {
    year: 2007,
    texts: [
      "BIG KAHUNA FILMS was founded by Eddy Rizk and launched in Dubai, United Arab Emirates."
    ]
  }
];

const About = () => {
  const [open, setOpen] = useState(false)
  const [isClient, setIsClient] = useState(false);
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkScreenSize = () => {
      setIsMd(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (!isClient) return null;

  return (
    <div className="text-[#323232]">
      <Navbar light={true} />
      <div className="pt-[140px] px-5 md:px-10 text-center">
        <motion.h1
          className="text-[40px] min-[480px]:text-[64px] min-[480px]:leading-[72px] leading-[46px] font-black capitalize"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          About
        </motion.h1>
        <motion.p
          className="max-w-[700px] mx-auto mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          BIG KAHUNA FILMS, launched in 2007, is today one of the leading and most reputable commercial production houses working both regionally and internationally.
        </motion.p>

        <div onClick={() => setOpen(true)} className="relative group cursor-pointer w-full h-[200px] min-[480px]:h-[300px] md:h-[400px] lg:h-[500px] top-12">
          <Image
            src="https://cdn.prod.website-files.com/62a0be23da2f1f04a6f5c1aa/62a0be23da2f1fe943f5c1ee_BKF%20Showreel%20Thumbnail.jpg"
            alt="About"
            fill
            className="object-cover md:object-contain"
          />
          <div className="absolute left-1/2 w-full top-1/2 -translate-1/2 text-white group-hover:text-white/60 transition-colors duration-200 z-20">
            <p className="font-black text-4xl">Our Showreel</p>
            <div className="flex items-center gap-2 justify-center text-sm">
              <span>Watch Showreel</span>
              <ArrowRight />
            </div>
          </div>
        </div>

      </div>
      <div className="bg-white px-5 md:px-10 pt-[110px] pb-16">
        <div className="w-full max-w-[750px] mx-auto">
          <p className="text-justify md:columns-2 gap-x-11 text-base leading-[30px]">
            With offices in Dubai, Beirut and Riyadh, BKF has earned an excellent reputation amongst the creative industry for producing exceptional content and high-end commercial campaigns. Our reel stands as a testament to a blend of creativity, technical expertise and storytelling excellence. An important pillar and a pioneer in the production industry, BKF has played a major role in developing and nurturing talents across the region.
            <br /><br />
            The team at BKF consists of highly skilled professionals who constantly push cinematic production boundaries. Our unwavering commitment to quality and innovation has solidified our reputation as a leading creative production house receiving numerous awards with the most prominent ones being: Dubai Lynx Golden Palm award for Production House of the Year in 2019, Production House of the Year B&W report in 2020 and Best Production House at the Immortal Awards for ME, Africa & UAE.
          </p>
        </div>
      </div>

      {/* Fixed Timeline Section with Higher Z-index */}
      <div className="py-5 sm:py-[100px] md:py-[120px] px-5 md:px-10 bg-white relative z-10">
        <div className="mx-auto max-w-[1150px] w-full">
          {/* Mobile Header - Higher z-index */}
          <div className="md:hidden sticky top-0 z-50 bg-linear-to-b from-white via-white/90 to-white/30 py-4 pb-10 mb-6">
            <h2 className="text-center leading-10 text-[32px] font-black">
              BKF TIMELINE
            </h2>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-[80px_1fr] lg:grid-cols-[150px_1fr] gap-4">
            {/* Desktop Header - Higher z-index */}
            <div className="hidden md:block relative">
              <div className="sticky top-5 h-fit z-50">
                <div className="w-[420px] overflow-visible origin-[50%] backface-visible transform -translate-x-[181px] translate-y-[180px] -rotate-90">
                  <h2 className="text-left leading-[60px] mt-5 mb-2.5 text-[60px] font-black whitespace-nowrap">
                    BKF TIMELINE
                  </h2>
                </div>
              </div>
            </div>

            {/* Timeline Content */}
            <div className="flex flex-col relative z-0">
              {timelineData.map((data, i) => (
                <motion.div
                  key={i}
                  initial={isMd ? { opacity: 0, x: 70 } : {}}
                  whileInView={isMd ? { opacity: 1, x: 0 } : {}}
                  transition={isMd ? { duration: 0.6, ease: "easeInOut" } : {}}
                  viewport={isMd ? { once: true, amount: 0.3 } : {}}
                  className="mb-10 border-b border-[#32323233] pb-[30px] last:border-b-0"
                >
                  <h3 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold mb-2.5">
                    {data.year}
                  </h3>

                  {data.texts.map((text, i) =>
                    text.startsWith('"') || text.startsWith('We have always aimed') || text.startsWith('I tend to take') ? (
                      <blockquote
                        key={i}
                        className="mb-2.5 border-l-0 border-black italic leading-6 text-[15px] sm:text-[16px]"
                      >
                        {text}
                      </blockquote>
                    ) : (
                      <p key={i} className="mb-2.5 leading-6 text-[15px] sm:text-[16px]">
                        {text}
                      </p>
                    )
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Video Section with Lower Z-index */}
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
      {open && (
        <WorkModal
          videos={videos}
          initialVideo={videos[0]}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  )
}

export default About