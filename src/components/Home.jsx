import React from "react";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
import Logo from "../assets/google-logo.png";
import doodleImage from "../assets/doodle1.png"; // Import your doodle image

const doodlesData = {
    "2023-05-23": doodleImage, // Example: May 21, 2023
    // Add more entries for other special dates
};

const Home = () => {
    const currentDate = new Date().toISOString().split("T")[0];
    const specialDate = doodlesData.hasOwnProperty(currentDate);
    const imageToShow = specialDate ? doodleImage : Logo;

    return (
        <div className="h-[100vh] flex flex-col">
            <HomeHeader />
            <main className="grow flex justify-center">
                <div className="w-full px-5 flex flex-col items-center mt-44">
                    <img
                        className="w-[172px] md:w-[272px] mb-8"
                        src={imageToShow}
                        alt={specialDate ? "Doodle" : "Logo"}
                    />
                    <SearchInput />
                    <div className="flex gap-2 text-[#3c4043] mt-8">
                        <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
                            Google Search
                        </button>
                        <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
                            I'm Feeling Lucky
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
