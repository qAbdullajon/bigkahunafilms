import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"
import WorkBody from "@/components/WorkBody";
import WorkHero from "@/components/WorkHero"

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