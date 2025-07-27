import LinkItem from "./LinkItem";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function LinkList() {
    const links = [
        { title: "GitHub", url: "https://github.com/laiqaali51214", icon: <FaGithub /> },
        { title: "LinkedIn", url: "https://www.linkedin.com/in/laiqa-ali/", icon: <FaLinkedin /> },
        { title: "Email", url: "mailto:laiqaali51214@gmail.com", icon: <MdEmail /> },
        { title: "Phone", url: "https://wa.me/+923315133459", icon: <FaWhatsapp /> },
        { title: "Twitter", url: "https://twitter.com/laiqa_ali", icon: <FaTwitter /> },
    ];

    return (
        <div className="mt-6 flex flex-col gap-4 items-center">
            {links.map((link, index) => (
                <LinkItem key={index} title={link.title} url={link.url} icon={link.icon} />
            ))}
        </div>
    );
}
