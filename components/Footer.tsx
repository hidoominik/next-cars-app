import Link from "next/link"
import { footerLinks } from "@/constants"
const Footer = () => {
  return (
    <footer className="flex flex-col text-black mt-5 border-t border-gray-100">
        <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
            <div className="flex flex-col justify-start items-start gap-6">
                <h1>Cars app</h1>
                <p className="text-base text-gray-600">
                    A simple application created to expand knowledge in the field of Typescript, Tailwindcss, and Next.js
                </p>
            </div>
            <div className = "footer-links">
                {footerLinks.map((link)=>(
                    <div key={link.title} className="footer-link">
                        <h3 className="font-bold">{link.title}</h3>
                        {link.links.map((item) => (
                            <Link 
                                key ={item.title}
                                href={item.url}
                                className="text-grey-500"
                            >
                                {item.title}
                            </Link>

                        ))}

                    </div>
                ))}
            </div>
            </div>
            <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
                     <Link href="/"> Privacy policy etc </Link>
                     
            </div>
            
        
    </footer>
  )
}

export default Footer