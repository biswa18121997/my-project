import React from "react";
import OrangeButton from "./ui/OrangeButton";
import { Facebook, Youtube, Instagram, Twitter, MessageCircle } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import CustomeText from "./ui/CustomeText";
import Link from "next/link";

const Footer = () => {
    const navigation = ["Home", "About", "Service", "Resume", "Project", "Contact"];
    const iconsAndUrl = [
        { icon: Facebook, url: "https://facebook.com" },
        { icon: Youtube, url: "https://youtube.com" },
        { icon: MessageCircle, url: "https://whatsapp.com" },
        { icon: Instagram, url: "https://instagram.com" },
        { icon: Twitter, url: "https://twitter.com" },
    ];

    const contact = [
        "+91 9874563210",
        "hello@gmail.com",
        "hello.com"
    ]

    return (
        <footer className="w-full h-[685px] px-[71px] py-[40px] flex flex-col bg-[#272727] rounded-t-3xl text-white justify-between">

            {/* Top Section */}
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
                <h1 className="font-semibold leading-tight text-[48px] md:text-[64px] text-[#FCFCFD] text-center md:text-left">
                    Let’s Connect There
                </h1>
                <button className="flex items-center justify-center gap-2 w-[202px] h-[62px] px-5 py-2.5 text-white text-lg font-semibold rounded-full bg-[#FD853A] hover:opacity-90 transition-all duration-300">
                    Hire Me
                    <ArrowUpRight size={24} />
                </button>
            </div>

            <div className="border border-[#475467] w-full"></div>

            {/* Navigation Links */}
            <div className="flex justify-between w-[1298px] h-[239px] ">

                <div className="w-[635px] h-full flex flex-col items-start justify-start gap-10">
                    <div className="flex gap-4 items-center flex-shrink-0 cursor-pointer">
                        <div className="w-10 h-10 bg-[#FD853A] rounded-full flex items-center justify-center mb-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <text x="4" y="18" fontSize="14" fontWeight="bold" fill="white">JC</text>
                            </svg>
                        </div>
                        <span className="font-bold text-lg tracking-wide cursor-pointer">JCREA</span>
                    </div>
                    <p className="w-full h-[61px] text-[20px] text-[#FCFCFD]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                    <div className="flex gap-2.5">
                        {iconsAndUrl.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={idx}
                                    href={`https://${item.url}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 items-start rounded-full flex hover:scale-110 transition-transform"
                                >
                                    <Icon size={20} className="text-[#FD853A]" />
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-col gap-7">
                    <CustomeText title="Navigation" className="text-[20px] font-semibold text-[#FD853A]" />
                    <div className="flex flex-col gap-5">
                        {navigation.map((key, idx) => (
                            <Link href={`#${key.toLowerCase()}`} key={idx} className="text-[#FCFCFD] text-[16px] cursor-pointer hover:text-[#FD853A] transition-colors">
                                {key}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-7">
                    <CustomeText title="Contact" className="text-[20px] font-semibold text-[#FD853A]" />
                    <div className="flex flex-col gap-5">
                        {contact.map((key, idx) => (
                            <span key={idx} className="text-[#FCFCFD] text-[16px] cursor-pointer hover:text-[#FD853A] transition-colors">
                                {key}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-7">
                    <CustomeText title="Get the latest information" className="text-[20px] font-semibold text-[#FD853A]" />
                    <input type="text" placeholder="Email Address" />
                </div>

            </div>

            <div className="border border-[#475467] w- mt-16"></div>

            <div className="flex w-[1298px] h-[26px] items-start justify-between">
                <p className="w-[415px] h-[26px] text-[20px] text-white">Copyright© 2023 Jayesh. All Rights Reserved.</p>
                <Link href={"#"} className="w-fit h-[26px] text-[20px] text-white">Copyright© 2023 Jayesh. All Rights Reserved.</Link>
            </div>
        </footer>
    );
};

export default Footer;
