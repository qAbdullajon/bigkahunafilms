"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"
import WorkBody from "@/components/WorkBody";
import WorkHero from "@/components/WorkHero"

const props = [
	{
		id: 1,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff480001ebcab77a4ef5_ATR%20copy.jpg",
		director: "Mattia Benetti",
		title: "This Is It",
		client: "Atlantis The Royal Dubai",
		videoUrl: "https://vimeo.com/831431492?share=copy",
		thumbnailUrl: "https://i.vimeocdn.com/video/1676830827-1da407322234ad7a2c99d4ca53ad98e5465abe0c1c701c481effb50af3c6b5fb-d_1280"
	},
	{
		id: 2,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/647d9957de35d90b969e9f90_Tiesto%20Screenshot.png",
		director: "Courtney Phillips",
		title: "'10:35 'music video for Atlantis The Royal Dubai featuring Tiesto &Tate McRae",
		client: "Service Production for London Alley &Atlantic Records",
		videoUrl: "https://vimeo.com/831431125?share=copy",
		thumbnailUrl: "https://i.vimeocdn.com/video/1676830228-9d3a27fff027dbb34763999124ef847f4fc8e8fb53b917354db013e307b71d96-d_1280"
	},
	{
		id: 3,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6321d56bc51b0028017ddad6_Screen%20Shot%202022-09-14%20at%205.19.05%20PM.png",
		director: "Virgil Ferragut",
		title: "Take on Tomorrow",
		client: "Toyota",
		videoUrl: "https://vimeo.com/749567611",
		thumbnailUrl: "https://i.vimeocdn.com/video/1507261107-5766092d0df04bdb7aa548020152bfff06aabda06a87d61cb51f4fea38603f7a-d_1280"
	},
	{
		id: 4,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff8091c70344e78e9783_Smart%20Living%20copy.jpg",
		director: "Ben Whitehouse",
		title: "Alexa",
		client: "Etisalat Smart Living",
		videoUrl: "https://vimeo.com/831452417?share=copy",
		thumbnailUrl: "https://i.vimeocdn.com/video/1676862037-51564c27cc69d62f9c99a91e787db371e3c4c6fcc58d59dedb519d0d40e1eea2-d_1280"
	},
	{
		id: 5,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff5991c70344e78e6123_Splash%20copy.jpg",
		director: "Mattia Benetti",
		title: "It 's In The Little Things",
		client: "Splash ",
		videoUrl: "https://vimeo.com/831432436?share=copy",
		thumbnailUrl: "https://i.vimeocdn.com/video/1676855347-8aad51e0e4a2613c1c6fcce88173b8f199acb50a177557523ef1f98d75aeffe1-d_1280"
	},
	{
		id: 6,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476ff1e9434940a3f045f58_DIC%20copy.jpg",
		director: "Andrea Marini",
		title: "Make Brilliance",
		client: "Dubai Industrial City ",
		videoUrl: "https://vimeo.com/831430447?share=copy",
		thumbnailUrl: "https://i.vimeocdn.com/video/1676829326-47442b2bf54b271a6a98778ff984982273f1bfe5eedfc3152171998c21bd7dc0-d_1280"
	},
	{
		id: 7,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6476febf9f3942f8f4c26e09_Centerpoint%20copy.jpg",
		director: "Cherine Khoury",
		title: "Together Is Everything ",
		client: "Centrepoint",
		videoUrl: "https://vimeo.com/831430036?share=copy",
		thumbnailUrl: "https://i.vimeocdn.com/video/1676828625-796f449315751f0b67039812a4e010f2c9c625587c943099fe4113937c137914-d_1280"
	},
	{
		id: 8,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/64777356bbd5367537314258_STA.png",
		director: "La Sister ",
		title: "A Journey You 've Never Imagined ",
		client: "KSA Ministry of Tourism",
		videoUrl: "https://vimeo.com/831924730?share=copy",
		thumbnailUrl: "https://i.vimeocdn.com/video/1677543821-828326200521c223b3bcad86affb4ee117bfe1d3cd8aa70b5e3909f5302bade0-d_1280"
	},
	{
		id: 9,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6321cb1939db9371153a6466_Screen%20Shot%202022-09-14%20at%204.12.27%20PM.png",
		director: "Tommaso Bertè",
		title: "Together There is More",
		client: "Etisalat",
		videoUrl: "https://vimeo.com/749544992",
		thumbnailUrl: "https://i.vimeocdn.com/video/1507231825-227065141dde2b36a7b3145d9381229551662e23f705b733c750ae77215ceb56-d_1280"
	},
	{
		id: 10,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f7282f5c4be_Screen%20Shot%202022-06-07%20at%203.48.19%20PM.png",
		director: "Wissam Tanios ",
		title: "Beirut: The Heart of a Ticking Time Bomb",
		client: "Open Secrets by Vice",
		videoUrl: "https://vimeo.com/717858309",
		thumbnailUrl: "https://i.vimeocdn.com/video/1446427537-05862cd53079fd5e1feba4d237440d2472c464e5f9e8433cdbbfad56dacc8c29-d_1280"
	},
	{
		id: 11,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1fc623f5c4b4_Screen%20Shot%202022-05-09%20at%205.19.17%20PM.jpg",
		director: "Paula Martin-Ferro",
		title: "Thirty Days of Beautiful",
		client: "Splash",
		videoUrl: "https://vimeo.com/707798304",
		thumbnailUrl: "https://i.vimeocdn.com/video/1428447254-089a1e1b7c7a7f6ea68104afcc8eed70655b7807c0c0cdf82837a0fd4b155719-d_1280"
	},
	{
		id: 12,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f4dbcf5c4b3_Screen%20Shot%202022-05-09%20at%204.51.26%20PM.jpg",
		director: "Blake Farber",
		title: "Sun &Sand Sports",
		client: "Sun &Sand Sports",
		videoUrl: "https://vimeo.com/707781359",
		thumbnailUrl: "https://i.vimeocdn.com/video/1428425915-9bb5d9966f06bb7b52d1d469d714c84e143f03bfd436514dece138eabb545749-d_1280"
	},
	{
		id: 13,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f2df3f5c4a9_Pepsi%20Cover.jpg",
		director: "Craig Moore",
		title: "Pepsi Forever Football",
		client: "Pepsi Arabia",
		videoUrl: "https://vimeo.com/685415994",
		thumbnailUrl: "https://i.vimeocdn.com/video/1389096606-75d3fd04f77280e6f94b60ab64bf311e8957f6987da66e89dca797cd8a7ef893-d_1280"
	},
	{
		id: 14,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1faba6f5c4aa_Screen%20Shot%202022-03-09%20at%205.09.04%20PM.png",
		director: "Samuel Bennetts",
		title: "Yas Winterfest ",
		client: "Yas Island Theme Park, Abu Dhabi",
		videoUrl: "https://vimeo.com/678708429",
		thumbnailUrl: "https://i.vimeocdn.com/video/1375415930-52d7dff4e3394743454fdacda3cb64194c9cca9392382bf3a8ec5772639ccf38-d_1280"
	},
	{
		id: 15,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/65956bf619a8ecbc252d9692_1242198871-ab7b506064ba8dd5b13fec0cac3f26a982edf9b6c4a468da7b9fbe0905034658-d_640.jpg",
		director: "Martin Aamund",
		title: "The Making of A New World",
		client: "Expo 2020",
		videoUrl: "https://vimeo.com/605653928?share=copy",
		thumbnailUrl: "https://i.vimeocdn.com/video/1242198871-ab7b506064ba8dd5b13fec0cac3f26a982edf9b6c4a468da7b9fbe0905034658-d_1280"
	},
	{
		id: 16,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/65956d9eec33213bc5e26b59_1236836560-7830ab6fcfc1a5949c6daa4ef71773a975dd890286a016600723a77a4b7d7f66-d_640.jpg",
		director: "Mohamed Fathi",
		title: "A Space That Changes With You",
		client: "Ikea",
		videoUrl: "https://vimeo.com/600833565?share=copy",
		thumbnailUrl: "https://i.vimeocdn.com/video/1236836560-7830ab6fcfc1a5949c6daa4ef71773a975dd890286a016600723a77a4b7d7f66-d_1280"
	},
	{
		id: 17,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/65956e376490fd0d28a09ab6_1234029582-914d351a31ce6d0d22197b059c5c38cfee7f4726149550c2a46028b5c0860254-d_640.jpg",
		director: "Jason Bock",
		title: "A Profound Journey",
		client: "KSA Ministry of Tourism",
		videoUrl: "https://vimeo.com/598700304?share=copy",
		thumbnailUrl: "https://i.vimeocdn.com/video/1234029582-914d351a31ce6d0d22197b059c5c38cfee7f4726149550c2a46028b5c0860254-d_1280"
	},
	{
		id: 18,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/65957000eee8fb93aa18c5d9_1078776712-e94e1e60fe9c66de5b23bf539a4ebbba0d9fcb592715cabf6e85597866237326-d_640.jpg",
		director: "Dr Bowman",
		title: "Together Matters",
		client: "Etisalat",
		videoUrl: "https://vimeo.com/520825032?share=copy",
		thumbnailUrl: "https://i.vimeocdn.com/video/1078776712-e94e1e60fe9c66de5b23bf539a4ebbba0d9fcb592715cabf6e85597866237326-d_1280"
	},
	{
		id: 19,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/659571a47c742c3f77eba471_1075814112-ef4edbf2edcc38679687f4e52912e33072870a15869719c2581d3d7a539980c1-d_640.jpg",
		director: "Angelo Cerisara",
		title: "Go All In",
		client: "Hardees",
		videoUrl: "https://vimeo.com/519401807?share=copy",
		thumbnailUrl: "https://i.vimeocdn.com/video/1075814112-ef4edbf2edcc38679687f4e52912e33072870a15869719c2581d3d7a539980c1-d_1280"
	},
	{
		id: 20,
		thumbnail: "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/659572396dc50d27302a9fb7_1074017661-72d46245fd0295181b8b4fdc6f4432729a0673d0e09409f3cf55526a0e933032-d_640.jpg",
		director: "Nico Kreis",
		title: "The Power of Light",
		client: "GMC Yukon",
		videoUrl: "https://vimeo.com/516589339?share=copy",
		thumbnailUrl: "https://i.vimeocdn.com/video/1074017661-72d46245fd0295181b8b4fdc6f4432729a0673d0e09409f3cf55526a0e933032-d_1280"
	}
]

const Work = () => {

	return (
		<div>
			<Navbar light={true} />
			<WorkHero />
			<WorkBody videos={props} />
			<Footer />
		</div>
	)
}

export default Work