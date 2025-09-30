"use client";
import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  LightBulbIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import { FaRegCompass } from "react-icons/fa";
import { TbBrain } from "react-icons/tb";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCtaLearnMoreVisible, setIsCtaLearnMoreVisible] = useState(false);
  return (
    <div>
      {" "}
      <header className="bg-white py-4">
        {" "}
        <div className="container mx-auto flex items-center justify-between px-4">
          {" "}
          <div className="flex items-center space-x-2">
            <Image
              src="/quirilogoblank.png"
              alt="Quiri Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="hidden md:inline font-semibold text-xl">
              Quiri.io
            </span>
          </div>{" "}
          <nav className="hidden md:block">
            {" "}
            <ul className="flex items-center space-x-6">
              {" "}
              <li>
                {" "}
                <a
                  href="#why-quiri"
                  className="text-gray-800 hover:text-orange-500"
                >
                  {" "}
                  How does it work?{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a
                  href="#signup"
                  className="text-gray-800 hover:text-orange-500"
                >
                  {" "}
                  Sign Up{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </nav>{" "}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <nav className="px-4 pt-2 pb-4 space-y-2">
              <a
                href="#why-quiri"
                className="block text-gray-800 hover:text-orange-500"
              >
                How does it work?
              </a>
              <a
                href="#signup"
                className="block text-gray-800 hover:text-orange-500"
              >
                Sign Up
              </a>
            </nav>
          </div>
        )}
      </header>{" "}
      <section className="pt-6 pb-20 bg-white">
        <div className="container mx-auto text-center px-4">
          <Image
            src="/Final Logo.png"
            alt="Quiri Logo"
            width={240}
            height={60}
            className="mx-auto mb-10"
          />
          <div className="flex flex-col items-center">
            {/* Mobile-only statues */}
            <div className="md:hidden flex justify-center gap-4 mb-8">
              <div className="relative w-36 h-36">
                <div className="absolute inset-0 bg-[#D7F4F5] rounded-full -z-10"></div>
                <Image
                  src="/pensivestatueman.png"
                  alt="Man Statue"
                  layout="fill"
                  className="object-contain p-2"
                />
              </div>
              <div className="relative w-36 h-36">
                <div className="absolute inset-0 bg-[#FEF3EE] rounded-full -z-10"></div>
                <Image
                  src="/pensivestatuewoman.png"
                  alt="Woman Statue"
                  layout="fill"
                  className="object-contain p-2"
                />
              </div>
            </div>

            <h1
              className="text-4xl md:text-[62px] font-regular mb-8 md:mb-12 leading-tight md:leading-[74px] tracking-[-0.02em]"
              style={{ color: "#344054" }}
            >
              Designed for <span style={{ color: "#FF6A29" }}>progressive</span>{" "}
              dialogues
              <br />
              driven by <span style={{ color: "#1FA4B0" }}>curiosity</span>.
            </h1>

            <div className="flex flex-col md:flex-row justify-center items-center gap-16">
              {/* Desktop-only statue (left) */}
              <div className="hidden md:block relative w-[12rem] h-[12rem] flex-shrink-0">
                <div className="absolute inset-0 bg-[#D7F4F5] rounded-full -z-10"></div>
                <div className="relative w-full h-full">
                  <Image
                    src="/pensivestatueman.png"
                    alt="Man Statue"
                    layout="fill"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="max-w-sm text-center">
                <p
                  className="text-base md:text-lg mb-6"
                  style={{ color: "#6B6B6B" }}
                >
                  Quiri creates a respectful, structured space for exploring
                  differing viewpoints - ideal for productive debates that
                  prioritize understanding over winning.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="#signup"
                    className="bg-orange-500 text-white py-3 px-6 rounded-[50px] hover:bg-orange-600 shadow-lg"
                    style={{ backgroundColor: "#FF6A29" }}
                  >
                    Join Community
                  </a>
                  <a
                    href="#why-quiri"
                    className="bg-white text-gray-800 py-3 px-6 rounded-[50px] border border-gray-300 hover:bg-gray-100"
                  >
                    Learn more
                  </a>
                </div>
              </div>

              {/* Desktop-only statue (right) */}
              <div className="hidden md:block relative w-48 h-48 flex-shrink-0">
                <div className="absolute inset-0 bg-[#FEF3EE] rounded-full -z-10"></div>
                <div className="relative w-full h-full">
                  <Image
                    src="/pensivestatuewoman.png"
                    alt="Woman Statue"
                    layout="fill"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="why-quiri" className="py-20 bg-[#D7F4F5] overflow-hidden">
        <div className="container mx-auto px-4 relative min-h-[700px] md:min-h-[750px]">
          <h2
            className="text-[62px] font-regular text-center mb-12 md:mb-24 leading-[74px] tracking-[-0.02em]"
            style={{ color: "#344054" }}
          >
            Why Quiri?
          </h2>

          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="pt-16">
              {/* Mockup Images - Centered */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-8 z-10">
                <Image
                  src="/inbox.png"
                  alt="Inbox"
                  width={258}
                  height={553}
                  className="rounded-[29px] shadow-lg"
                />
                <Image
                  src="/chatscreen.png"
                  alt="Chat"
                  width={257}
                  height={555}
                  className="rounded-[30px] shadow-lg"
                />
              </div>

              {/* Card 1: Meaningful Inbox */}
              <div className="absolute left-[40px] top-[160px] w-[347px] bg-white/20 backdrop-blur-md rounded-3xl p-6 border border-white/60 z-20 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <LightBulbIcon className="h-6 w-6 text-gray-800" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#344054] tracking-[-0.48px] font-manrope">
                    Meaningful Inbox
                  </h3>
                </div>
                <p className="text-[#616161] text-base leading-6 tracking-[0.2px] font-sans">
                  This chat space is not for meandering conversations. You have
                  an inbox full of meaningful questions.
                </p>
              </div>

              {/* Card 2: Focused Discussion */}
              <div className="absolute right-[80px] top-[120px] w-[314px] bg-white/20 backdrop-blur-md rounded-3xl p-6 border border-white/60 z-20 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <FaRegCompass className="h-6 w-6 text-gray-800" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#344054] tracking-[-0.48px] font-manrope">
                    Focused Discussion
                  </h3>
                </div>
                <p className="text-[#616161] text-base leading-6 tracking-[0.2px] font-sans">
                  Conversations based on inquiry and curiosity - you are both
                  exploring a question.
                </p>
              </div>

              {/* Card 3: Resolutions & Relationships */}
              <div className="absolute left-[20px] bottom-[120px] w-[358px] bg-white/20 backdrop-blur-md rounded-3xl p-6 border border-white/60 z-20 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <LinkIcon className="h-6 w-6 text-gray-800" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#344054] tracking-[-0.48px] font-manrope">
                    Resolutions & Relationships
                  </h3>
                </div>
                <p className="text-[#616161] text-base leading-6 tracking-[0.2px] font-sans">
                  This space is for relating, and resolving and relating some
                  more. Quiri brings people back together - to bridge chasms of
                  differences by arguing well.
                </p>
              </div>

              {/* Card 4: Depolarizing */}
              <div className="absolute right-[60px] bottom-[140px] w-[330px] bg-white/20 backdrop-blur-md rounded-3xl p-6 border border-white/60 z-20 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <TbBrain className="h-6 w-6 text-gray-800" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#344054] tracking-[-0.48px] font-manrope">
                    Depolarizing
                  </h3>
                </div>
                <p className="text-[#616161] text-base leading-6 tracking-[0.2px] font-sans">
                  Due to its chat space design, conversations reward curiosity
                  and creating a safe space for being heard.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="grid grid-cols-1 gap-6 mt-8">
              <div className="backdrop-blur-lg bg-white/20 p-6 rounded-3xl shadow-lg text-left border border-gray-200/80">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <LightBulbIcon className="h-6 w-6 text-gray-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Meaningful Inbox
                    </h3>
                    <p className="text-gray-700">
                      This chat space is not for meandering conversations. You
                      have an inbox full of meaningful questions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="backdrop-blur-lg bg-white/20 p-6 rounded-3xl shadow-lg text-left border border-gray-200/80">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <LinkIcon className="h-6 w-6 text-gray-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Resolutions & Relationships
                    </h3>
                    <p className="text-gray-700">
                      This space is for relating, and resolving and relating
                      some more. Quiri brings people back together - to bridge
                      chasms of differences by arguing well.
                    </p>
                  </div>
                </div>
              </div>
              <div className="backdrop-blur-lg bg-white/20 p-6 rounded-3xl shadow-lg text-left border border-gray-200/80">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <FaRegCompass className="h-6 w-6 text-gray-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Focused Discussion
                    </h3>
                    <p className="text-gray-700">
                      Conversations based on inquiry and curiosity - you are
                      both exploring a question.
                    </p>
                  </div>
                </div>
              </div>
              <div className="backdrop-blur-lg bg-white/20 p-6 rounded-3xl shadow-lg text-left border border-gray-200/80">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <TbBrain className="h-6 w-6 text-gray-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Depolarizing</h3>
                    <p className="text-gray-700">
                      Due to its chat space design, conversations reward
                      curiosity and creating a safe space for being heard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="w-full"
              >
                <SwiperSlide>
                  <div className="flex justify-center">
                    <Image
                      src="/inbox.png"
                      alt="Inbox"
                      width={220}
                      height={440}
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex justify-center">
                    <Image
                      src="/chatscreen.png"
                      alt="Chat"
                      width={220}
                      height={440}
                      className="rounded-xl shadow-lg"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* CTA */}
      {/* CTA */}
      <section id="signup" className="py-20 md:py-28 bg-[#FFE8DE]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
            {/* Email form */}
            <div className="relative">
              <div className="absolute inset-0 bg-teal-shadow rounded-xl transform translate-x-4 translate-y-4"></div>
              <div className="relative bg-white rounded-xl p-6 md:p-8 shadow-sm h-full border border-black">
                <h2
                  className="font-manrope font-medium text-4xl md:text-[54px] leading-tight md:leading-[64px] tracking-[-0.02em]"
                  style={{ color: "#344054" }}
                >
                  Leave your email to stay tuned about news updates!
                </h2>
                <p className="mt-3 text-lg md:text-[23.06px] font-plus-jakarta-sans text-[#505C6D]">
                  Your email will never be shared with any 3rd parties and only
                  be accessible to Quiri admins.{" "}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsCtaLearnMoreVisible(!isCtaLearnMoreVisible);
                    }}
                    className="underline decoration-1 decoration-[#2F3A4A] underline-offset-2"
                  >
                    {isCtaLearnMoreVisible ? "Show less" : "Learn more"}
                  </a>
                </p>

                {isCtaLearnMoreVisible && (
                  <div className="mt-4 text-sm text-[#505C6D] space-y-2 text-justify">
                    <ul className="list-disc list-inside">
                      <li>Quiri is an organization of 2-10 individuals</li>
                      <li>
                        Your email addresses will be used for the Purpose of
                        sending news updates regarding new products
                      </li>
                      <li>
                        Some emails will be call outs to become an alpha tester
                        to test our new products
                      </li>
                      <li>
                        Emails will be sent on a monthly or bimonthly basis
                      </li>
                    </ul>
                  </div>
                )}

                <form className="mt-6 space-y-3">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-transparent border-b border-black/20 px-1 py-2 text-sm outline-none focus:border-teal-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-black/20 px-1 py-2 text-sm outline-none focus:border-teal-500"
                  />
                  <button
                    type="button"
                    className="w-full bg-[#FFE8DE] text-black border border-gray-800 rounded-lg px-5 py-4 font-plus-jakarta-sans font-semibold text-[26px]"
                  >
                    Get Updates
                  </button>
                </form>
              </div>
            </div>

            {/* QR / first users */}
            <div className="relative">
              <div className="absolute inset-0 bg-orange-shadow rounded-xl transform translate-x-4 translate-y-4"></div>
              <div className="relative bg-white rounded-xl p-6 md:p-8 shadow-sm h-full border border-black">
                <h2
                  className="font-manrope font-medium text-4xl md:text-[54px] leading-tight md:leading-[64px] tracking-[-0.02em]"
                  style={{ color: "#344054" }}
                >
                  Downloaded the app and want to join our community of first
                  users?
                </h2>
                <p className="mt-3 text-lg md:text-[23.06px] font-plus-jakarta-sans text-[#505C6D]">
                  Scan the QR code with your phone or follow the link to test
                  Quiri with other like-minded communicators!
                </p>
                <div className="mt-6 flex justify-center">
                  <Image
                    src="/Quiri Community.png"
                    alt="QR Code"
                    width={112}
                    height={112}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Happy Statues Section */}{" "}
      <section className="py-20 bg-white">
        {" "}
        <div className="container mx-auto text-center px-4">
          {" "}
          <Image
            src="/happystatues.png"
            alt="Happy Statues"
            width={256}
            height={256}
            className="mx-auto h-48 w-auto md:h-64"
          />{" "}
        </div>{" "}
      </section>{" "}
      <footer className="bg-[#D7F4F5] text-gray-700 py-8">
        {" "}
        <div className="container mx-auto text-center px-4">
          {" "}
          {/* Navigation */}{" "}
          <nav className="mb-4">
            {" "}
            <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-6 font-manrope font-semibold text-[20px]">
              {" "}
              <li>
                {" "}
                <a href="#why-quiri" className="hover:text-orange-500">
                  {" "}
                  How does it work?{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a href="#signup" className="hover:text-orange-500">
                  {" "}
                  Sign Up{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </nav>{" "}
          <p className="font-manrope text-[20px] mb-4">
            Reach out to us here{" "}
            <a
              href="mailto:hello@quiri.io"
              className="font-bold"
              style={{ color: "#0096A5" }}
            >
              hello@quiri.io
            </a>
          </p>
          {/* Copyright Notice */}{" "}
          <p>&copy; 2025 Quiri. All rights reserved.</p>{" "}
        </div>{" "}
      </footer>{" "}
    </div>
  );
}
