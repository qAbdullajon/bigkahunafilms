"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation"
import { useEffect, useState } from "react";

const newsArray = [
  {
    id: 1,
    href: "/news/beirut-the-heart-of-a-ticking-time-bomb",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f9a92f5c4bf_Screen%20Shot%202022-06-07%20at%203.53.02%20PM.png",
    date: "June 7, 2022",
    title: "Beirut: The Heart of a Ticking Time Bomb"
  },
  {
    id: 2,
    href: "/news/bkf-signs-award-winning-director-reynald-gresset",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f7c9ff5c4b5_Reynald%20Photo.jpg",
    date: "June 6, 2022",
    title: "BKF signs award-winning director Reynald Gresset for Middle East representation"
  },
  {
    id: 3,
    href: "/news/toyota-ramadan",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f4681f5c4ab_Screen%20Shot%202022-05-05%20at%206.32.20%20PM.jpg",
    date: "April 30, 2022",
    title: "Toyota Ramadan"
  },
  {
    id: 4,
    href: "/news/thirty-days-of-beautiful",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1fc623f5c4b4_Screen%20Shot%202022-05-09%20at%205.19.17%20PM.jpg",
    date: "April 12, 2022",
    title: "Thirty Days of Beautiful"
  },
  {
    id: 5,
    href: "/news/industry-night",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1fe499f5c4ae_Cover.jpg",
    date: "March 31, 2022",
    title: "BIG KAHUNA FILMS launches Industry Night with its affiliated event company Green Room"
  },
  {
    id: 6,
    href: "/news/lynxawards",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f4c65f5c4b2_Dubai-Lynx-Trophy_g.jpg",
    date: "March 16, 2022",
    title: "BIG KAHUNA FILMS wins 5 Grand Prix and 6 Gold awards at Dubai Lynx Festival of Creativity 2022"
  },
  {
    id: 7,
    href: "/news/lynxdinner",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1fb4baf5c4b1_BOLD0700.jpg",
    date: "March 15, 2022",
    title: "BKF hosted a dinner in collaboration with Dubai Lynx for the CEOs/CCOs of the advertising industry."
  },
  {
    id: 8,
    href: "/news/sun-sand-sports",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f4dbcf5c4b3_Screen%20Shot%202022-05-09%20at%204.51.26%20PM.jpg",
    date: "February 28, 2022",
    title: "Sun & Sand Sports"
  },
  {
    id: 9,
    href: "/news/homecentre",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f0736f5c4b0_Screen%20Shot%202022-05-09%20at%202.44.50%20PM.jpg",
    date: "February 3, 2022",
    title: "Homecentre"
  },
  {
    id: 10,
    href: "/news/pepsi-forever-football",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f2df3f5c4a9_Pepsi%20Cover.jpg",
    date: "January 20, 2022",
    title: "Pepsi Forever Football"
  },
  {
    id: 11,
    href: "/news/yas-winterfest",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f1a39f5c4a8_Yas.jpg",
    date: "December 24, 2021",
    title: "Yas Winterfest"
  },
  {
    id: 12,
    href: "/news/effie-awards-2021",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1fc6e5f5c4af_maxresdefault.jpeg",
    date: "November 24, 2021",
    title: "BIG KAHUNA FILMS announced Gold Winners at Mena Effie Awards 2021"
  },
  {
    id: 13,
    href: "/news/make-every-day-sweeter",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a1dff3632e57417b025c12_Screen%20Shot%202022-06-09%20at%203.54.55%20PM.png",
    date: "October 13, 2021",
    title: "Make Every Day Sweeter"
  },
  {
    id: 14,
    href: "/news/the-making-of-a-new-world",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f4d13f5c4a4_Screen%20Shot%202021-09-15%20at%205.21.25%20PM.jpg",
    date: "July 30, 2021",
    title: "The Making of A New World"
  },
  {
    id: 15,
    href: "/news/a-space-that-changes-with-you",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f804ff5c4a2_Screen%20Shot%202021-09-09%20at%201.23.05%20PM.png",
    date: "July 17, 2021",
    title: "A Space That Changes With You"
  },
  {
    id: 16,
    href: "/news/sadia-broasted-chicken",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f2edff5c4a0_Sadia.jpg",
    date: "July 16, 2021",
    title: "Sadia 's Broasted Range"
  },
  {
    id: 17,
    href: "/news/deliveroo-presents-ramadan",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f4cfcf5c49d_D.jpg",
    date: "April 2, 2021",
    title: "Deliveroo Presents Ramadan"
  },
  {
    id: 18,
    href: "/news/ferrero-ice-cream-launch",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f7acaf5c49c_Ferrero.jpg",
    date: "March 2, 2021",
    title: "Ferrero Ice Cream Launch"
  },
  {
    id: 19,
    href: "/news/yas-island-theme-park",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f49a3f5c499_YASimage.jpg",
    date: "February 24, 2021",
    title: "Yas Island Theme-Park"
  },
  {
    id: 20,
    href: "/news/its-what-you-do-with-a-million-that-makes-it-count",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f4598f5c498_Screen%20Shot%202021-04-26%20at%205.26.24%20PM.jpg",
    date: "January 28, 2021",
    title: "Millionaire Savings"
  },
  {
    id: 21,
    href: "/news/what-does-together-mean-to-you",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f729af5c493_Screen%20Shot%202021-03-08%20at%2012.18.34%20PM.jpg",
    date: "January 18, 2021",
    title: "Together Matters"
  },
  {
    id: 22,
    href: "/news/hardees-all-in",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f99a3f5c491_Screen%20Shot%202021-03-04%20at%203.48.30%20PM.png",
    date: "January 6, 2021",
    title: "Go All In"
  },
  {
    id: 23,
    href: "/news/the-power-of-light",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f5e8ef5c490_Screen%20Shot%202021-03-02%20at%205.20.18%20PM.png",
    date: "December 28, 2020",
    title: "The Power of Light"
  },
  {
    id: 24,
    href: "/news/age-of-despair",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f60d0f5c497_Screen%20Shot%202021-03-21%20at%205.43.22%20PM.png",
    date: "December 20, 2020",
    title: "Age of Despair"
  },
  {
    id: 25,
    href: "/news/bkf-welcomes-a-new-director-photographer-and-cinematographer-to-their-fold-camila-cornelsen",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f7d45f5c476_Camila%20Cornelsen.JPG",
    date: "December 10, 2020",
    title: "BKF Welcomes a new Director, Photographer and Cinematographer to their fold: Camila Cornelsen"
  },
  {
    id: 26,
    href: "/news/the-sound-of-togetherness",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1fba64f5c471_Screen%20Shot%202020-09-28%20at%2011.52.28%20AM.png",
    date: "September 27, 2020",
    title: "The Sound of Togetherness"
  },
  {
    id: 27,
    href: "/news/colgate",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f5c4ff5c470_COLGATE.png",
    date: "September 23, 2020",
    title: "Colgate Shoot"
  },
  {
    id: 28,
    href: "/news/what-weve-been-up-to",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f7f9bf5c457_Artboard%201-100.jpg",
    date: "June 10, 2020",
    title: "What We 've Been up To"
  },
  {
    id: 29,
    href: "/news/dubai-lynx-postponed",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1fc126f5c43e_BKF%2010%20Year%20Anniversary%202017%20High%20Res0.jpg",
    date: "May 2, 2020",
    title: "Dubai Lynx Postponed"
  },
  {
    id: 30,
    href: "/news/saudi-arabia-ministry-of-tourism-campaign",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f52a5f5c43f_IMG_6921_fixed3.jpg",
    date: "April 6, 2020",
    title: "Saudi Arabia Ministry of Tourism Brand Campaign"
  },
  {
    id: 31,
    href: "/news/b-w-report",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f6c61f5c45d_White%203_1500x1000.jpg",
    date: "March 24, 2020",
    title: "B &W Report"
  },
  {
    id: 32,
    href: "/news/changes-within-the-kahuna-team",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f458ef5c40d_BKF%20-%20Were%20Expanding.jpg",
    date: "January 20, 2020",
    title: "Changes Within the Kahuna Team"
  },
  {
    id: 33,
    href: "/news/the-jeep-shoot",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f157af5c460_JEEP%20THUMBNAIL.jpg",
    date: "December 17, 2019",
    title: "The Jeep Shoot"
  },
  {
    id: 34,
    href: "/news/dubai-lynx-production-house-of-the-year-2019",
    imageSrc: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f3b65f5c40c_image8-44.jpeg",
    date: "March 14, 2019",
    title: "Dubai Lynx: Production House of the Year 2019"
  }
];

const ArticlePage = () => {
  const { slug } = useParams()
  const [isClient, setIsClient] = useState(false);
  const [isMd, setIsMd] = useState(false);
  const existSlug = newsArray.find(a => a.href.split('/')[2] === slug)

  const getVimeoId = (url: string) => {
    const match = url.match(/(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/)
    return match ? match[1] : null
  }

  useEffect(() => {
    setIsClient(true);
    const checkScreenSize = () => {
      setIsMd(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (!isClient) return null;

  if (!existSlug?.id) {
    notFound()
  }
  return (
    <div className="text-[#323232]">
      <Navbar light={true} />
      <div className="pt-[142px] pb-10 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <Link className="text-sm mb-5 flex items-center justify-center gap-2 group hover:text-[#323232]/50" href="/news">
            <ArrowLeft className="group-hover:-translate-x-1 transition-all duration-200" size={18} />
            <p>Back to News</p>
          </Link>
          <h1 className="text-center text-[51px] font-black leading-[58px] pb-5">{existSlug.title}</h1>
          <p className="text-sm text-center">{existSlug.date}</p>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto bg-white pt-[30px] mb-16 pb-2.5 px-[30px]">
        <p className="pb-2.5">As the world is well-aware, the explosion that happened in Beirut port on the 4th of August 2020 devastated the lives of many and left a huge scar.</p>
        <p className="pb-2.5">For many Lebanese citizens, the tragic happening was the loudest explosion in memory, and there’s no shortage of explosive memories in Lebanon. </p>
        <p className="pb-2.5">
          <strong>Directed by Wissam Tanios</strong>
          , the documentary was created to convey an extremely powerful message and shed light on the country’s current situation.
        </p>
        <p className="pb-2.5">The Beirut Episode is part of a series on <strong>Vice</strong> platform called <strong>Open Secrets</strong> . It aims to reveal the truth behind this horrific event and show the real corruption the Lebanese people battle with on a daily basis. The shoot, of course, took place across Beirut with 1 month of preparation writing and pre-production, 6 days of shooting and around 45 days of editing.</p>
        <p className="pb-2.5">Uncovering and dealing with real life matters was somewhat challenging as we dealt with real victims shortly after the tragedy, which was tough for everyone.</p>
        <p className="pb-2.5">Take a look at the trailer below:</p>

        <div className="w-full aspect-video">
          <iframe
            src={`https://player.vimeo.com/video/${getVimeoId('https://player.vimeo.com/video/717858309')}?title=0&byline=0&portrait=0`}
            className="w-full h-full"
            allow="fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

      </div>

      <div className="bg-white py-20 px-5 md:px-10">
        <div className="flex items-center max-w-[250px] lg:max-w-[300px] mx-auto mb-12 w-full justify-between">
          <h2 className="text-2xl font-bold">Read More</h2>
          <ArrowDown />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[50px] max-w-[1150px] mx-auto">
          {
            newsArray.slice(0, !isMd ? 2 : 3).map((item, i) => (
              <div
                key={i}
                className="group"
              >
                <Link href={item.href}>
                  <div className="relative w-full h-[180px] min-[480px]:h-[350px] md:h-[250px] overflow-hidden">
                    <Image className="object-cover group-hover:scale-105 transition-all duration-300" src={item.imageSrc} alt={item.title} fill />
                  </div>
                  <div className="pt-5">
                    <p className="text-sm font-medium">{item.date}</p>
                    <h3 className="py-2.5 text-lg leading-[23px]">{item.title}</h3>
                    <div className="flex items-center gap-2.5 text-sm leading-3.5 group-hover:gap-4 hover:text-[#323232]/50 transition-all duration-200">
                      <div>Read Article</div>
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ArticlePage