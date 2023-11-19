import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div className=" my-8 text-center text-4xl">
        <h1>ABOUT US</h1>
      </div>

      <div className="mx-8 text-center">
        <h2 className="text-3xl text-pink-600">What is BlogNow</h2>
        <p className="text-xl my-4 mr-8">
          At BlogNow, we believe in the power of words to connect, inspire, and
          inform. Our mission is to provide a seamless platform that empowers
          individuals to share their stories, ideas, and expertise with the
          world. Whether you're a seasoned blogger or just starting out, BlogNow
          is designed to make your blogging experience effortless and enjoyable.
        </p>
      </div>

      <div className="mx-8 my-10">
        <h2 className="text-3xl mt-16 text-pink-600 text-center">What Sets Us Apart</h2>
        <ul className="list-disc">
          <li className="my-10">
            <div>
              <h3 className="font-bold my-5 text-lg">
                User-Friendly Interface
              </h3>
              <p className="text-lg pr-4">
                BlogNow boasts an intuitive and user-friendly interface,
                ensuring that you can focus on what matters most—creating
                captivating content. Say goodbye to complex setups and hello to
                a platform that lets you dive right into the art of blogging.
              </p>
            </div>
          </li>

          <li className="my-10">
            <div>
              <h3 className="font-bold my-5 text-lg">Seamless Publishing</h3>
              <p className="text-lg pr-4">
                With BlogNow, publishing your content is a breeze. Our
                streamlined process ensures that your posts go live with just a
                few clicks. Whether you're writing on the go or meticulously
                curating your content, BlogNow adapts to your workflow.
              </p>
            </div>
          </li>

          <li className="my-10">
            <div>
              <h3 className="font-bold my-5 text-lg">WYSIWYG Editor</h3>
              <p className="text-lg pr-4 mb-24">
                We understand the importance of visualizing your content as you
                create it. With our powerful WYSIWYG editor, crafting your blog
                posts is a breeze. Format text, insert images, embed multimedia,
                and see your changes in real-time. It's like having a virtual
                preview of your masterpiece before the world sees it.
              </p>
            </div>
          </li>
        </ul>

        <div className="flex flex-col items-center">
          <h3 className="my-4 font-bold text-4xl">Get Started</h3>
          <di className="my-4">
            <Link to="/signup"><button className="hover:text-pink-600 hover:border-pink-600 hover:border hover:py-2 hover:px-4 mx-10 text-xl">Signup</button></Link>
            <Link to="/login"><button className="hover:text-pink-600 hover:border-pink-600 hover:border hover:py-2 hover:px-4 mx-10 text-xl ">Login</button></Link>
            </di>
        </div>
      </div>
    </div>
  );
}

export default About;
