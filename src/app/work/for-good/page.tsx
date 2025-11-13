import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"
import WorkBody from "@/components/WorkBody";
import WorkHero from "@/components/WorkHero"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Good - Work",
  description:
    "Expertly crafted campaign work from our award-winning team. View all of BIG KAHUNA FILM campaign work now.",
  openGraph: {
    title: "For Good - Work | BIG KAHUNA FILMS",
    description:
      "Expertly crafted campaign work from our award-winning team. View all of BIG KAHUNA FILM campaign work now.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "For Good - Work | BIG KAHUNA FILMS",
    description:
      "Expertly crafted campaign work from our award-winning team. View all of BIG KAHUNA FILM campaign work now.",
  },
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  }
}

const videos = [
  {
    id: 1,
    thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f2726f5c3c1_BKF0128.jpg",
    director: "Samir Syriani",
    title: "Hunger Donation",
    client: "Global Compact",
    videoUrl: "https://vimeo.com/418600628/f8fea4c64a?autoplay=1",
    thumbnailUrl: "https://i.vimeocdn.com/video/893256492_1280.jpg"
  }
]

const ForGood = () => {
  return (
    <div>
      <Navbar light={true} />
      <WorkHero />
      <WorkBody videos={videos} />
      <Footer />
    </div>
  )
}

export default ForGood