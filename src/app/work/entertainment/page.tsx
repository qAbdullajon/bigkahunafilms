import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import WorkBody from '@/components/WorkBody';
import WorkHero from '@/components/WorkHero'
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: "Entertainment - Work",
	description:
		"Expertly crafted campaign work from our award-winning team. View all of BIG KAHUNA FILM campaign work now.",
	openGraph: {
		title: "Entertainment - Work | BIG KAHUNA FILMS",
		description:
			"Expertly crafted campaign work from our award-winning team. View all of BIG KAHUNA FILM campaign work now.",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Entertainment - Work | BIG KAHUNA FILMS",
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
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1ffe3ff5c3d5_BKF0044.jpg",
		director: "Maged Nassar &Tameem Younes",
		title: "Black Cats On Holiday",
		client: "Loto",
		videoUrl: "https://vimeo.com/157561136?autoplay=1",
		thumbnailUrl: "https://i.vimeocdn.com/video/559090832_1280.jpg"
	},
	{
		id: 2,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1fb82cf5c40b_BKF0129.jpg",
		director: "Pedros Temizian",
		title: "#NotEverythingIsForSharing",
		client: "Alfa",
		videoUrl: "https://vimeo.com/418600414/7789457f21?autoplay=1",
		thumbnailUrl: "https://i.vimeocdn.com/video/893259076_1280.jpg"
	},
	{
		id: 3,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f4f7ff5c3c0_BKF0127.jpg",
		director: "Big Kahuna Films",
		title: "5G Projection Event",
		client: "Etisalat",
		videoUrl: "https://vimeo.com/418601662/253100fe66?autoplay=1",
		thumbnailUrl: "https://i.vimeocdn.com/video/893254346_1280.jpg"
	},
	{
		id: 4,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f4e7bf5c2b3_BKF0126.jpg",
		director: "Big Kahuna Films",
		title: "10 Year Anniversary Event",
		client: "Big Kahuna Films",
		videoUrl: "https://vimeo.com/235523660?autoplay=1",
		thumbnailUrl: "https://i.vimeocdn.com/video/657381563_1280.jpg"
	}
]

const Entertainment = () => {
	return (
		<div>
			<Navbar light={true} />
			<WorkHero />
			<WorkBody videos={videos} />
			<Footer />
		</div>
	)
}

export default Entertainment