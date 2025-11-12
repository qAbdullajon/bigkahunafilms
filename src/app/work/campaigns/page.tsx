"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"
import WorkHero from "@/components/WorkHero"
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const videos = [
	{
		id: 1,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff480001ebcab77a4ef5_ATR%20copy.jpg",
		srcset: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff480001ebcab77a4ef5_ATR%20copy-p-500.jpg 500w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff480001ebcab77a4ef5_ATR%20copy-p-800.jpg 800w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff480001ebcab77a4ef5_ATR%20copy-p-1080.jpg 1080w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff480001ebcab77a4ef5_ATR%20copy-p-1600.jpg 1600w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff480001ebcab77a4ef5_ATR%20copy-p-2000.jpg 2000w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff480001ebcab77a4ef5_ATR%20copy.jpg 2446w",
		director: "Mattia Benetti",
		title: "This Is It",
		client: "Atlantis The Royal Dubai",
		videoUrl: "https://vimeo.com/831431492?share=copy",
		thumbnailUrl: "https://i.vimeocdn.com/video/1676830827-1da407322234ad7a2c99d4ca53ad98e5465abe0c1c701c481effb50af3c6b5fb-d_1280"
	},
	{
		id: 2,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/647d9957de35d90b969e9f90_Tiesto%20Screenshot.png",
		srcset: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/647d9957de35d90b969e9f90_Tiesto%20Screenshot-p-500.png 500w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/647d9957de35d90b969e9f90_Tiesto%20Screenshot-p-800.png 800w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/647d9957de35d90b969e9f90_Tiesto%20Screenshot-p-1080.png 1080w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/647d9957de35d90b969e9f90_Tiesto%20Screenshot-p-1600.png 1600w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/647d9957de35d90b969e9f90_Tiesto%20Screenshot-p-2000.png 2000w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/647d9957de35d90b969e9f90_Tiesto%20Screenshot-p-2600.png 2600w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/647d9957de35d90b969e9f90_Tiesto%20Screenshot.png 2992w",
		director: "Courtney Phillips",
		title: "'10:35 'music video for Atlantis The Royal Dubai featuring Tiesto & Tate McRae",
		client: "Service Production for London Alley & Atlantic Records",
		videoUrl: "https://vimeo.com/831431125?share=copy",
		thumbnailUrl: "https://i.vimeocdn.com/video/1676830228-9d3a27fff027dbb34763999124ef847f4fc8e8fb53b917354db013e307b71d96-d_1280"
	},
	{
		id: 3,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6321d56bc51b0028017ddad6_Screen%20Shot%202022-09-14%20at%205.19.05%20PM.png",
		srcset: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6321d56bc51b0028017ddad6_Screen%20Shot%202022-09-14%20at%205.19.05%20PM-p-500.png 500w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6321d56bc51b0028017ddad6_Screen%20Shot%202022-09-14%20at%205.19.05%20PM-p-800.png 800w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6321d56bc51b0028017ddad6_Screen%20Shot%202022-09-14%20at%205.19.05%20PM-p-1080.png 1080w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6321d56bc51b0028017ddad6_Screen%20Shot%202022-09-14%20at%205.19.05%20PM-p-1600.png 1600w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6321d56bc51b0028017ddad6_Screen%20Shot%202022-09-14%20at%205.19.05%20PM-p-2000.png 2000w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6321d56bc51b0028017ddad6_Screen%20Shot%202022-09-14%20at%205.19.05%20PM.png 2016w",
		director: "Virgil Ferragut",
		title: "Take on Tomorrow",
		client: "Toyota",
		videoUrl: "https://vimeo.com/749567611",
		thumbnailUrl: "https://i.vimeocdn.com/video/1507261107-5766092d0df04bdb7aa548020152bfff06aabda06a87d61cb51f4fea38603f7a-d_1280"
	},
	{
		id: 4,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff8091c70344e78e9783_Smart%20Living%20copy.jpg",
		srcset: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff8091c70344e78e9783_Smart%20Living%20copy-p-500.jpg 500w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff8091c70344e78e9783_Smart%20Living%20copy-p-800.jpg 800w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff8091c70344e78e9783_Smart%20Living%20copy-p-1080.jpg 1080w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff8091c70344e78e9783_Smart%20Living%20copy-p-1600.jpg 1600w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff8091c70344e78e9783_Smart%20Living%20copy-p-2000.jpg 2000w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff8091c70344e78e9783_Smart%20Living%20copy-p-2600.jpg 2600w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff8091c70344e78e9783_Smart%20Living%20copy.jpg 2656w",
		director: "Ben Whitehouse",
		title: "Alexa",
		client: "Etisalat Smart Living",
		videoUrl: "https://vimeo.com/831452417?share=copy",
		thumbnailUrl: "https://i.vimeocdn.com/video/1676862037-51564c27cc69d62f9c99a91e787db371e3c4c6fcc58d59dedb519d0d40e1eea2-d_1280"
	},
	{
		id: 5,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff5991c70344e78e6123_Splash%20copy.jpg",
		srcset: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff5991c70344e78e6123_Splash%20copy-p-500.jpg 500w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff5991c70344e78e6123_Splash%20copy-p-800.jpg 800w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff5991c70344e78e6123_Splash%20copy-p-1080.jpg 1080w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff5991c70344e78e6123_Splash%20copy-p-1600.jpg 1600w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff5991c70344e78e6123_Splash%20copy-p-2000.jpg 2000w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff5991c70344e78e6123_Splash%20copy.jpg 2568w",
		director: "Mattia Benetti",
		title: "It 's In The Little Things",
		client: "Splash",
		videoUrl: "https://vimeo.com/831432436?share=copy",
		thumbnailUrl: "https://i.vimeocdn.com/video/1676855347-8aad51e0e4a2613c1c6fcce88173b8f199acb50a177557523ef1f98d75aeffe1-d_1280"
	},
	{
		id: 6,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff1e9434940a3f045f58_DIC%20copy.jpg",
		srcset: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff1e9434940a3f045f58_DIC%20copy-p-500.jpg 500w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff1e9434940a3f045f58_DIC%20copy-p-800.jpg 800w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff1e9434940a3f045f58_DIC%20copy-p-1080.jpg 1080w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff1e9434940a3f045f58_DIC%20copy-p-1600.jpg 1600w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff1e9434940a3f045f58_DIC%20copy-p-2000.jpg 2000w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff1e9434940a3f045f58_DIC%20copy.jpg 2116w",
		director: "Andrea Marini",
		title: "Make Brilliance",
		client: "Dubai Industrial City",
		videoUrl: "https://vimeo.com/831430447?share=copy",
		thumbnailUrl: "https://i.vimeocdn.com/video/1676829326-47442b2bf54b271a6a98778ff984982273f1bfe5eedfc3152171998c21bd7dc0-d_1280"
	},
	{
		id: 7,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476febf9f3942f8f4c26e09_Centerpoint%20copy.jpg",
		srcset: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476febf9f3942f8f4c26e09_Centerpoint%20copy-p-500.jpg 500w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476febf9f3942f8f4c26e09_Centerpoint%20copy-p-800.jpg 800w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476febf9f3942f8f4c26e09_Centerpoint%20copy-p-1080.jpg 1080w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476febf9f3942f8f4c26e09_Centerpoint%20copy-p-1600.jpg 1600w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476febf9f3942f8f4c26e09_Centerpoint%20copy-p-2000.jpg 2000w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476febf9f3942f8f4c26e09_Centerpoint%20copy.jpg 2462w",
		director: "Cherine Khoury",
		title: "Together Is Everything",
		client: "Centrepoint",
		videoUrl: "https://vimeo.com/831430036?share=copy",
		thumbnailUrl: "https://i.vimeocdn.com/video/1676828625-796f449315751f0b67039812a4e010f2c9c625587c943099fe4113937c137914-d_1280"
	},
	{
		id: 8,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/64777356bbd5367537314258_STA.png",
		srcset: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/64777356bbd5367537314258_STA-p-500.png 500w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/64777356bbd5367537314258_STA-p-800.png 800w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/64777356bbd5367537314258_STA-p-1080.png 1080w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/64777356bbd5367537314258_STA-p-1600.png 1600w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/64777356bbd5367537314258_STA-p-2000.png 2000w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/64777356bbd5367537314258_STA-p-2600.png 2600w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/64777356bbd5367537314258_STA.png 2624w",
		director: "La Sister",
		title: "A Journey You 've Never Imagined",
		client: "KSA Ministry of Tourism",
		videoUrl: "https://vimeo.com/831924730?share=copy",
		thumbnailUrl: "https://i.vimeocdn.com/video/1677543821-828326200521c223b3bcad86affb4ee117bfe1d3cd8aa70b5e3909f5302bade0-d_1280"
	},
	{
		id: 9,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6321cb1939db9371153a6466_Screen%20Shot%202022-09-14%20at%204.12.27%20PM.png",
		srcset: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6321cb1939db9371153a6466_Screen%20Shot%202022-09-14%20at%204.12.27%20PM-p-500.png 500w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6321cb1939db9371153a6466_Screen%20Shot%202022-09-14%20at%204.12.27%20PM-p-800.png 800w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6321cb1939db9371153a6466_Screen%20Shot%202022-09-14%20at%204.12.27%20PM-p-1080.png 1080w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6321cb1939db9371153a6466_Screen%20Shot%202022-09-14%20at%204.12.27%20PM-p-1600.png 1600w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6321cb1939db9371153a6466_Screen%20Shot%202022-09-14%20at%204.12.27%20PM-p-2000.png 2000w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6321cb1939db9371153a6466_Screen%20Shot%202022-09-14%20at%204.12.27%20PM-p-2600.png 2600w, https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6321cb1939db9371153a6466_Screen%20Shot%202022-09-14%20at%204.12.27%20PM.png 2880w",
		director: "Tommaso Bertè",
		title: "Together There is More",
		client: "Etisalat",
		videoUrl: "https://vimeo.com/749544992",
		thumbnailUrl: "https://i.vimeocdn.com/video/1507231825-227065141dde2b36a7b3145d9381229551662e23f705b733c750ae77215ceb56-d_1280"
	},
];



const Work = () => {
	const [isHoverVideos, setIsHoverVideos] = useState<number[]>([])

	return (
		<div>
			<Navbar light={true} />
			<WorkHero />

			<div className="grid grid-cols-1 lg:grid-cols-2">
				{videos.map((video, index) => (
					<motion.div
						key={video.id}
						initial={{ opacity: 0, y: 80 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.05 }}
						transition={{ duration: 0.6, delay: index % 2 === 0 ? index * 0.1 : (index - 1) * 0.1, ease: "easeOut", }}
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
									className="object-cover transition-all duration-500 group-hover:opacity-80 group-hover:scale-105"
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
			<Footer />
		</div>
	)
}

export default Work