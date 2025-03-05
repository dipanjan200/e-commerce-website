import React from "react";
import Title  from "../Components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from '../Components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
            laborum ea nulla reprehenderit, nemo aut eius debitis. Ad fugit
            error magnam rem, totam numquam exercitationem quia. Et fugit
            distinctio cupiditate!
          </p>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel esse
            minima, porro architecto nemo unde minus corrupti tempora? Quos,
            obcaecati vitae. Laudantium soluta quia magni porro eaque non ex
            eveniet! Perspiciatis vel culpa quod! Sunt doloribus omnis deleniti
            minima, quod, autem nam quo impedit, excepturi quae numquam ullam!
            Quo molestias nobis quasi at culpa ullam reiciendis dolorem omnis
            voluptate accusantium.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            voluptatibus illo ab omnis id velit maiores distinctio harum rerum
            expedita. Doloribus dolores praesentium magni unde aut omnis aliquid
            a dolore.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>

        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
            <b>Quality Assurence:</b>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quidem temporibus. Quo sequi suscipit commodi earum, mollitia vel accusantium. Explicabo quam soluta cupiditate dolor porro hic commodi pariatur velit quo?</p>

          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
            <b>Convenience:</b>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quidem temporibus. Quo sequi suscipit commodi earum, mollitia vel accusantium. Explicabo quam soluta cupiditate dolor porro hic commodi pariatur velit quo?</p>

          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
            <b>Exceptional Customer Service:</b>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quidem temporibus. Quo sequi suscipit commodi earum, mollitia vel accusantium. Explicabo quam soluta cupiditate dolor porro hic commodi pariatur velit quo?</p>

          </div>
        </div>

        <NewsletterBox/>
    </div>
  );
};

export default About;
