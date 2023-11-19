import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import blog from "../assets/blog.json";
import feature from "../assets/feature.png"
import authService from "../appwrite/authService"

function Home() {

  const [className, setClassName] = useState("hidden")

  useEffect(()=>{
    authService.getUserInfo()
    .then((data)=>{
      if(!data.emailVerification){
        setClassName("block")
        setTimeout(() => {
          setClassName("animate-fadeOut")
        }, 3000);
      }
    })
  },[])

  return (
    <>
      <div className={`relative md:w-2/6 w-5/6 mx-auto text-center text-sm lg:text-base -mt-10 border-2 border-green-600 bg-green-200 dark:text-black lg:px-8 py-4 rounded-sm ${className}`}>
        <h1>Your Email is not verified. Please check your email.</h1>
      </div>
      <div >
        <div className="flex flex-col justify-between items-center mt-20 px-26 md:flex-row">
          {/* Animation Here */}
          <div className="md:w-1/2 my-8">
            <Lottie animationData={blog} loop={true} className=" lg:mx-2 animate-slideInRight"/>
          </div>

          <div className="animate-slideInLeft md:w-1/2 ">
            <h2 className="text-pink-600 font-bold py-2 px-4 text-center text-2xl 2xl:text-3xl 2xl:text-left">
              What is BlogNow
            </h2>
            <p className=" mt-4 text-center text-[15px] px-4 sm:text-base 2xl:text-xl 2xl:leading-9 2xl:text-left">
              In the age of digital connectivity and information sharing,
              "BlogNow" emerges as a powerful and versatile platform designed to
              cater to the dynamic needs of content creators, writers, and
              bloggers. This innovative mobile app serves as a user-friendly
              haven, empowering individuals from all walks of life to share their
              thoughts, ideas, experiences, and expertise with the world. Whether
              you're a seasoned blogger with a dedicated following or someone
              who's just embarking on the exciting journey of online content
              creation, BlogNow is your ideal companion, offering an intuitive,
              all-in-one solution to express yourself, connect with your audience,
              and build a captivating online presence.
            </p>
          </div>
        </div>

        <div className="bg-[#e0327a] text-slate-50 w-full my-20 flex flex-col py-6 justify-between md:flex-row">
          <div className="md:w-2/3 animate-fadeIn">
            <img src={feature} alt="featureImg" />
          </div>

          <div className="mt-4 md:w-1/2">
            <h2 className="font-bold px-4 xl:text-2xl xl:mb-2">Features :</h2>
            <ul className="mt-2">
              <li className="list-disc px-4 my-4 xl:text-lg">
                <span className="font-bold">User-Friendly Interface:</span>{" "}
                BlogNow offers a clean and intuitive user interface that ensures a
                seamless writing and publishing experience. Users can easily
                navigate through the app, creating and managing their blogs
                effortlessly.
              </li>
              <li className="list-disc px-4 my-4 xl:text-lg">
                <span className="font-bold">Effortless Blog Creation:</span>{" "}
                Writing a blog post on BlogNow is as simple as typing in a text
                editor. Users can focus on their content without worrying about
                complex formatting or coding.
              </li>
              <li className="list-disc px-4 my-4 xl:text-lg">
                <span className="font-bold">Rich Text Editor:</span> The app
                features a rich text editor that allows bloggers to enhance their
                posts with various text formatting options, images, videos, and
                more. You can make your content visually appealing and engaging.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="ml-20 text-3xl">Recent Posts:</h2>
        </div>
      </div>
    </>
  );
}

export default Home;
