import React from "react";
import ballImage from "../assets/photo.webp";
import CarImage from "../assets/CarImage.webp";
import SkeatingBoard from "../assets/SkeatingBoard.webp";
import Helmate from "../assets/Helmate.webp";
import { NavLink } from "react-router";

export default function FeedSection() {
  return (
    <div className="w-11/12 md:w-8/12 mx-auto mt-12 space-y-4">
      {/* Card */}
      <div className="bg-white shadow-md border-gray-50 rounded-2xl p-4 group">
        <div className="md:flex gap-6 space-y-4">
          <img src={ballImage} className="h-40 w-full md:w-40 object-cover rounded-2xl group hover:scale-105 duration-500" alt="" />

          <div>
            <NavLink  to="/blog/1" className="text-2xl flex flex-col font-medium mb-3 group-hover:text-pink-500 duration-500 border-b-3 border-white group-hover:border-pink-500 cursor-pointer">
              The Benefits Of Traveling With A Second Language
            </NavLink>
            <span className="text-gray-600 ">By Jessica Smith 6 Comments</span>
            <p className="text-lg text-gray-700 mt-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by...
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-dashed mt-4 text-gray-500 border-gray-300 pt-4">
          <p>
            {" "}
            <span className="text-pink-500">#</span>Lifestyle Trending
          </p>
          <p>291 Views 3 Min Read</p>
        </div>
      </div>

      {/* second */}
      <div className="bg-white shadow-md border-gray-50 rounded-2xl mt-8 p-4 group">
        <div className="flex gap-6">
          <img src={CarImage} className="h-40 w-40 rounded-2xl" alt="" />
          <div>
            <h1 className="text-2xl font-medium mb-3  group-hover:text-pink-500 duration-500 border-b-3 border-white group-hover:border-pink-500 cursor-pointer">
              Healthy Cooking Made Easy With Nutritious Recipes
            </h1>
            <span className="text-gray-600 ">By Jessica Smith No Comment</span>
            <p className="text-lg text-gray-700 mt-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by...
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-dashed mt-6 text-gray-500 border-gray-300 pt-4">
          <p>
            <span className="text-pink-500">#</span>Entertainment
            <span className="text-pink-500">#</span>Travel
          </p>
          <p> 308 Views 3 Min Read</p>
        </div>
      </div>

      {/* Third */}
      <div className="bg-white shadow-md border-gray-50 rounded-2xl mt-8 p-4">
        <div className="flex gap-6">
          <img src={SkeatingBoard} className="h-40 w-40 rounded-2xl" alt="" />
          <div>
            <h1 className="text-2xl font-medium mb-3">
              Shaping Tomorrow’s Landscape Of Intelligent Machines
            </h1>
            <span className="text-gray-600 ">By Jessica Smith No Comment</span>
            <p className="text-lg text-gray-700 mt-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by...
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-dashed mt-6 text-gray-500 border-gray-300 pt-4">
          <p>
            <span className="text-pink-500">#</span>Inspiration
            <span className="text-pink-500">#</span>Music
          </p>
          <p> 308 Views</p>
        </div>
      </div>

      {/* Fourth */}
      <div className="bg-white shadow-md border-gray-50 rounded-2xl mt-8 p-4">
        <div className="flex gap-6">
          <img src={Helmate} className="h-40 w-40 rounded-2xl" alt="" />
          <div>
            <h1 className="text-2xl font-medium mb-3">
              Hidden Ways To Save Money That You Might Be Missing
            </h1>
            <span className="text-gray-600 ">By Jessica Smith No Comment</span>
            <p className="text-lg text-gray-700 mt-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by...
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-dashed mt-6 text-gray-500 border-gray-300 pt-4">
          <p>
            <span className="text-pink-500">#</span>Travel
          </p>
          <p> 163 Views</p>
        </div>
      </div>



      
    </div>
  );
}
