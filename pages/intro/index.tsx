import IntroLayout from "@/components/templates/IntroLayout";
import Image from "next/image";
import SearchSectionBgImage from "@/public/assets/jpgs/intro/intro_section1.jpg";
import { Button, Switch } from "@/components/atoms";
import { useState } from "react";
import { Icon } from "@iconify/react";

const Intro = () => {
  const [activeSwitchIndex, setActiveSwitchIndex] = useState<number>(0);

  return (
    <IntroLayout>
      <div className="w-[70%] mx-auto py-8">
        {/* Search Section */}
        <div className="relative w-full h-[700px]">
          <Image
            src={SearchSectionBgImage}
            alt="Search Section Background"
            className="absolute w-full h-full object-cover rounded-4xl"
          />
          <div className="absolute top-5 w-1/2 h-full flex flex-col items-center justify-center pl-8 gap-20">
            <h1 className="text-6xl text-white font-semibold">
              Connecting clients in need to freelancers who deliver
            </h1>

            {/* Search Part */}
            <div
              className="w-full rounded-4xl p-8"
              style={{
                backgroundColor: "rgba(20, 20, 20, 0.7)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Switch */}
              <Switch
                type="ghost"
                labels={["Find talent", "Browse jobs"]}
                activeIndex={activeSwitchIndex}
                onSelect={setActiveSwitchIndex}
              />

              {activeSwitchIndex === 0 ? (
                <>
                  {/* Search Input */}
                  <div className="w-full flex bg-white items-center rounded-full mt-4 overflow-hidden">
                    <input
                      type="search"
                      placeholder="Search by role, skills or keywords"
                      className="bg-transparent py-3 px-5 w-full rounded-full border-none outline-none"
                    />
                    <button className="flex items-center justify-center bg-black text-white font-semibold rounded-full py-2 px-5 mr-[2px] text-lg">
                      <Icon
                        icon="mingcute:search-line"
                        className="w-6 h-6 mr-2 text-[#d2ff00]"
                      />
                      Search
                    </button>
                  </div>

                  {/* Brands */}
                  <div className="flex flex-row items-center justify-center gap-8 mt-6 w-[80%] mx-auto">
                    <Image
                      src={
                        "https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/q_auto/brontes/hero/logo-microsoft-grey.svg"
                      }
                      alt="Microsoft"
                      width={100}
                      height={50}
                    />
                    <Image
                      src={
                        "https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/q_auto/brontes/hero/logo-airbnb-grey.svg"
                      }
                      alt="Microsoft"
                      width={70}
                      height={30}
                    />
                    <Image
                      src={
                        "https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/q_auto/brontes/hero/logo-bissell-grey.svg"
                      }
                      alt="Microsoft"
                      width={40}
                      height={30}
                    />
                    <Image
                      src={
                        "https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/q_auto/brontes/hero/logo-glassdoor.svg"
                      }
                      alt="Microsoft"
                      width={80}
                      height={30}
                    />
                  </div>
                </>
              ) : (
                <div className="w-full flex flex-col items-center justify-center mt-6">
                  <p className="text-lg font-semibold text-white text-center mb-4">
                    Build your freelancing career on Charlie Unicorn AI, with
                    thousands of jobs posted every week.
                  </p>
                  <Button
                    type="primary"
                    label="Explore recently posted jobs"
                    size="large"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </IntroLayout>
  );
};

export default Intro;
