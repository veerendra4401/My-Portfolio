import { FaInstagram, FaWhatsapp, FaLinkedin, FaTwitter, FaEnvelope, FaGithub } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact"
                 className="my-40 align-center max-w-5xl mx-auto p-3">
            <h2 className="text-5xl font-bold text-emerald-500 text-center">
                Contact
            </h2>
            <div className="flex flex-wrap gap-5 justify-center my-10">
                <a rel="noreferrer"
                   target="_blank"
                   className="flex items-center gap-2 text-center hover:underline"
                   href="https://www.instagram.com/__mr_tricky_mind_?igsh=MWc0M3p6eWRndjNmNw==">
                    <FaInstagram className="text-pink-500 text-2xl"/> 
                    <span className="font-bold">Thogiti Veerendra</span>
                </a>
                <a rel="noreferrer"
                   target="_blank"
                   className="flex items-center gap-2 text-center hover:underline"
                   href="https://wa.me/7288814401">
                    <FaWhatsapp className="text-green-500 text-2xl"/> 
                    <span className="font-bold">Chat Now</span>
                </a>
                <a rel="noreferrer"
                   target="_blank"
                   className="flex items-center gap-2 text-center hover:underline"
                   href="https://www.linkedin.com/in/veerendra-thogiti">
                    <FaLinkedin className="text-blue-600 text-2xl"/> 
                    <span className="font-bold">Thogiti Veerendra</span>
                </a>
                <a rel="noreferrer"
                   target="_blank"
                   className="flex items-center gap-2 text-center hover:underline"
                   href="https://x.com/ThogitiShiva?t=pHuQ17qg2x2Y5SVbTpeJPg&s=09">
                    <FaTwitter className="text-blue-400 text-2xl"/> 
                    <span className="font-bold">Veerendra</span>
                </a>
                <a rel="noreferrer"
                   target="_blank"
                   className="flex items-center gap-2 text-center hover:underline"
                   href="mailto:thogitiveerendra5@gmail.com">
                    <FaEnvelope className="text-red-500 text-2xl"/> 
                    <span className="font-bold">thogitiveerendra5@gmail.com</span>
                </a>
                <a rel="noreferrer"
                   target="_blank"
                   className="flex items-center gap-2 text-center hover:underline"
                   href="https://github.com/veerendra4401">
                    <FaGithub className="text-gray-700 text-2xl"/> 
                    <span className="font-bold">GitHub</span>
                </a>
            </div>
        </section>
    );
}
