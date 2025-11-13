import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import WorkBody from "@/components/WorkBody"
import WorkHero from "@/components/WorkHero"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Digital - Work",
    description:
        "Expertly crafted campaign work from our award-winning team. View all of BIG KAHUNA FILM campaign work now.",
    openGraph: {
        title: "Digital - Work | BIG KAHUNA FILMS",
        description:
            "Expertly crafted campaign work from our award-winning team. View all of BIG KAHUNA FILM campaign work now.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Digital - Work | BIG KAHUNA FILMS",
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
        thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/64770341e5b5c0bfe9ce81c1_SGI%20copy.jpg",
        director: "Edward Copestick",
        title: "Saudi Green Initiative",
        client: "",
        videoUrl: "https://vimeo.com/831452813",
        thumbnailUrl: "https://i.vimeocdn.com/video/1676862881-c19c36f2eca3ce5741fdf6f7d6f804f6f1a13a8769a601f136909b4ad4b410cc-d_1280"
    },
    {
        id: 2,
        thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1fbf5ff5c3d6_BKF0046.jpg",
        director: "Darius Norowzian",
        title: "Edge Of The World",
        client: "Qiddiya",
        videoUrl: "https://vimeo.com/393441419",
        thumbnailUrl: "https://i.vimeocdn.com/video/863160825_1280.jpg"
    },
    {
        id: 3,
        thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f26c2f5c2b8_BKF0043.jpg",
        director: "Jeroen Mol",
        title: "2.0",
        client: "SWYP",
        videoUrl: "https://vimeo.com/272742349",
        thumbnailUrl: "https://i.vimeocdn.com/video/704370367_1280.jpg"
    },
    {
        id: 4,
        thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f6f74f5c373_BKF0048.jpg",
        director: "Jeroen Mol",
        title: "Launch",
        client: "SWYP",
        videoUrl: "https://vimeo.com/236049434",
        thumbnailUrl: "https://i.vimeocdn.com/video/658666364_1280.jpg"
    },
    {
        id: 5,
        thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f357bf5c374_BKF0049.jpg",
        director: "Henri Bassil",
        title: "Le Mans Circuit",
        client: "Porsche",
        videoUrl: "https://vimeo.com/206919458",
        thumbnailUrl: "https://i.vimeocdn.com/video/621932976_1280.jpg"
    },
    {
        id: 6,
        thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f531bf5c375_BKF0050.jpg",
        director: "Christian Gruner",
        title: "Mount Everest",
        client: "Lipton Ice Tea",
        videoUrl: "https://vimeo.com/235712990",
        thumbnailUrl: "https://i.vimeocdn.com/video/657611706_1280.jpg"
    },
    {
        id: 7,
        thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f4a5ff5c376_BKF0051.jpg",
        director: "Pedros Temizian",
        title: "Tastemade",
        client: "McDonald 's",
        videoUrl: "https://vimeo.com/420413100/e0acf8b845",
        thumbnailUrl: "https://i.vimeocdn.com/video/895649611_1280.jpg"
    },
    {
        id: 8,
        thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f829af5c372_BKF0047.jpg",
        director: "Ayman Abbas",
        title: "Healthy Recipes",
        client: "Nestle",
        videoUrl: "https://vimeo.com/418602005/bede59a790",
        thumbnailUrl: "https://i.vimeocdn.com/video/893253070_1280.jpg"
    },
    {
        id: 9,
        thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f307ef5c378_BKF0053.jpg",
        director: "Mazen Fayad",
        title: "The Whaler",
        client: "Skittles",
        videoUrl: "https://vimeo.com/67715473",
        thumbnailUrl: "https://i.vimeocdn.com/video/442136098_1280.jpg"
    },
    {
        id: 10,
        thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f62f0f5c377_BKF0052.jpg",
        director: "Jeroen Mol",
        title: "The Chunky Boys",
        client: "Kit Kat",
        videoUrl: "https://vimeo.com/67206295",
        thumbnailUrl: "https://i.vimeocdn.com/video/439004618_640.jpg"
    },
    {
        id: 11,
        thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f90a3f5c370_BKF0045.jpg",
        director: "Daniel Kaufman",
        title: "Dramatic Chipmunk Great Escape",
        client: "LG",
        videoUrl: "https://vimeo.com/67648494",
        thumbnailUrl: "https://i.vimeocdn.com/video/439713134_640.jpg"
    }
];

const Digital = () => {
    return (
        <div>
            <Navbar light={true} />
            <WorkHero />
            <WorkBody videos={videos} />
            <Footer />
        </div>
    )
}

export default Digital