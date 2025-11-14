"use client"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const teamMembers = [
  {
    "id": 1,
    "position": "CEO",
    "name": "Eddy Rizk",
    "email": "eddy@bigkahunafilms.com",
    "image": "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f720ff5c48d_SHADOW%201022%20copy.jpg"
  },
  {
    "id": 2,
    "position": "Personal Assistant to the CEO",
    "name": "Nina Smith",
    "email": "nina.smith@bigkahunafilms.com",
    "image": "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/691598da442ce43ed49a2b6d__DSC0370%20copy_Final_2.jpg"
  },
  {
    "id": 3,
    "position": "CFO",
    "name": "Alain Antoniades",
    "email": "alain@bigkahunafilms.com",
    "image": "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1fe73af5c46f_Alain%20Antoniades2.jpg"
  },
  {
    "id": 4,
    "position": "General Manager & Executive Producer",
    "name": "Chady El Khal",
    "email": "chady@bigkahunafilms.com",
    "image": "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1fab57f5c46a_Chady.jpg"
  },
  {
    "id": 5,
    "position": "GENERAL MANAGER | RIYADH",
    "name": "Gregory Mardikian",
    "email": "gregory@bigkahunafilms.com",
    "image": "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/65eac8c375c43c9e4b8df2dd_Gregory_Final.jpg"
  },
  {
    "id": 6,
    "position": "Head of Bidding",
    "name": "Joudy Fawaz",
    "email": "joudy@bigkahunafilms.com",
    "image": "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f03eef5c465_Joudy%20Fawaz.jpg"
  },
  {
    "id": 7,
    "position": "Head of Post-Production",
    "name": "Maria Succar",
    "email": "maria@bigkahunafilms.com",
    "image": "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/63ce7166fd062a6b424ab8f9_Maria%20Succar.jpg"
  },
  {
    "id": 8,
    "position": "Executive Producer",
    "name": "Maarouf Bikdache",
    "email": "maarouf@bigkahunafilms.com",
    "image": "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6808b5128795b7996b2cd88c__DSC0073-5%20copy.jpg"
  },
  {
    "id": 9,
    "position": "Production Manager",
    "name": "Ramy Kassab",
    "email": "ramy@bigkahunafilms.com",
    "image": "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1ff8a6f5c4a5_SHADOW%209387.jpg"
  },
  {
    "id": 10,
    "position": "Editor",
    "name": "Zaid Mohammad",
    "email": "zaid@bigkahunafilms.com",
    "image": "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/6630b74cb703b1cfbb2067b7__DSC8562%20copy.jpg"
  },
  {
    "id": 11,
    "position": "Producer",
    "name": "Heba Terek",
    "email": "heba@bigkahunafilms.com",
    "image": "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f334ef5c467_Heba.jpg"
  },
  {
    "id": 12,
    "position": "Directors Researcher",
    "name": "Chloe Al Alam",
    "email": "chloe@bigkahunafilms.com",
    "image": "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a1de9ed52fc17756e6f162_Screen%20Shot%202022-06-09%20at%2010.45.02%20AM.jpeg"
  },
  {
    "id": 13,
    "position": "Senior Accountant",
    "name": "Ajaya Adhikari",
    "email": "ajaya@bigkahunafilms.com",
    "image": "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/657c4d1222447559ecc9273a_Ajaya_Dec2023_2.jpg"
  },
  {
    "id": 14,
    "position": "Accountant",
    "name": "Anthony Johny",
    "email": "anthony@bigkahunafilms.com",
    "image": "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/65e9a535f44d1e9d3764d217__DSC8482_1%20copy.jpg"
  },
  {
    "id": 15,
    "position": "Office Manager & Accountant | Beirut",
    "name": "Jessica Kassis",
    "email": "jessica@bigkahunafilms.com",
    "image": "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f614af5c466_Jessica.jpg"
  },
  {
    "id": 16,
    "position": "Office Manager | Dubai",
    "name": "Mary Ann Nazareno",
    "email": "mary@bigkahunafilms.com",
    "image": "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f186af5c48e_SHADOW%2010300%20copy.jpg"
  },
  {
    "id": 17,
    "position": "Office Manager | Riyadh",
    "name": "Ameera Alnujaidi",
    "email": "ameera@bigkahunafilms.com",
    "image": "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/651d207b2815de5e4fdaaf35_Ameera_B%26W_3.jpg"
  },
  {
    "id": 18,
    "position": "Production Runner | Dubai",
    "name": "Nawaz Khan",
    "email": "nawaz@bigkahunafilms.com",
    "image": "https://cdn.prod.website-files.com/62a0be23da2f1f1e73f5c1c4/62a0be23da2f1f833df5c463_Nawaz%20Afridi.jpg"
  }
];

const Contact = () => {
  return (
    <div className="text-[#323232]">
      <Navbar light={true} />

      <div className="pt-[140px] pb-[120px] max-w-[1150px] mx-auto px-5 md:px-10 text-center">
        <div className="pb-[70px]">
          <motion.h1
            className="text-[40px] min-[480px]:text-[64px] min-[480px]:leading-[72px] leading-[46px] font-black capitalize"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            Speak With Our Team
          </motion.h1>
          <motion.p
            className="mx-auto mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Link className="hover:opacity-70 transition-all duration-150" href={'mailto:hello@bigkahunafilms.com'}>hello@bigkahunafilms.com</Link>
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-10">
          <motion.div
            className="md:max-w-[370px] w-full md:ml-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="relative w-full h-[400px] lg:h-[520px]">
              <div className="absolute inset-0 w-full h-full z-10" style={{ backgroundImage: 'linear-gradient(#fff0 70%, #ffffff75)' }}></div>
              <Image className="object-cover" fill src={'https://cdn.prod.website-files.com/62a0be23da2f1f04a6f5c1aa/62a0be23da2f1f0f0bf5c1fe_Dubai%20Office_2.jpg'} alt="Contact" />
            </div>
            <div className="relative text-right pt-5">
              <p className="pb-2.5 leading-[30px]">
                Office 201 & 202, Building 4 <br />
                Dubai Studio City <br />
                PO Box 502623 <br />
                Dubai, UAE <br />
              </p>
              <Link className="text-sm hover:opacity-60 transition-all duration-150" href="tel:+97144329399">Tel: +971 4 4329399</Link>
              <div className="absolute z-10 bottom-0 left-0 origin-top-left [transform:translate(30px,100px)_rotate(-90deg)]">
                <motion.div
                  className="text-[70px] font-black uppercase"
                  initial={{ opacity: 0, x: -70 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  Dubai
                </motion.div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="md:max-w-[370px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="relative w-full h-[400px] lg:h-[520px]">
              <div className="absolute inset-0 w-full h-full z-10" style={{ backgroundImage: 'linear-gradient(#fff0 70%, #ffffff75)' }}></div>
              <Image className="object-cover" fill src={'https://cdn.prod.website-files.com/62a0be23da2f1f04a6f5c1aa/62a0be23da2f1f5949f5c1f9_Beirut%20Office_2.jpg'} alt="Contact" />
            </div>
            <div className="relative text-right pt-5">
              <p className="pb-2.5 leading-[30px]">
                2nd Floor,<br />
                61 Monot Street <br />
                PO Box 16-5888 <br />
                Beirut Lebanon <br />
              </p>
              <Link className="text-sm hover:opacity-60 transition-all duration-150" href="tel:+9611201334">Tel: +961 1 201334</Link>
              <div className="absolute z-10 bottom-0 left-0 origin-top-left [transform:translate(30px,100px)_rotate(-90deg)]">
                <motion.div
                  className="text-[70px] font-black uppercase"
                  initial={{ opacity: 0, x: -70 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  Beirut
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bg-white pt-[60px] pb-20 px-5 md:px-10">
        <div className="max-w-[1150px] mx-auto">
          <div className="flex items-center max-w-[250px] lg:max-w-[300px] mx-auto mb-12 w-full justify-between">
            <h2 className="text-2xl font-bold">Meet Our Team</h2>
            <ArrowDown />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[50px]">
            {teamMembers.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="relative w-full h-[180px] min-[480px]:h-[350px] md:h-[250px]">
                  <Image fill src={item.image} alt="Team Member" />
                </div>
                <div className="pt-5">
                  <p className="text-sm font-medium">{item.position}</p>
                  <p className="text-lg font-bold leading-[23px] py-2.5">{item.name}</p>
                  <Link className="text-sm hover:opacity-60 transition-all duration-200" href={`mailto:${item.email}`}>{item.email}</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact