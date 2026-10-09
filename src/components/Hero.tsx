import Image from "next/image";
import CurrentDate from "./CurrentDate";

const Hero = () => (
    <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 md:p-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="max-w-xl text-center md:text-left">
                <span className="inline-block rounded-md bg-green-100 px-2 py-1 text-green-700">
                    <CurrentDate />
                </span>

                <h1 className="mt-3 text-9 font-bold md:text-4xl">
                    আজকের বাজারের দাম এক নজরে
                </h1>

                <p className="mt-3 text-4 text-gray-500">
                    চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                </p>

                <a
                    href="#সব-পণ্য"
                    className="btn btn-sm sm:btn-md mt-5 border-none bg-[#047F39] text-white"
                >
                    সব পণ্য দেখুন
                </a>
            </div>

            <Image
                src="/assets/bazar-hero.png"
                alt="বাজার"
                width={280}
                height={220}
                priority
                className="h-auto w-56 md:w-72"
            />
        </div>
    </section>
);

export default Hero;