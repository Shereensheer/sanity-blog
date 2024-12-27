"use client";
import React from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
}

const AboutPage = (): JSX.Element => {
  return (
    <div className="px-4 sm:px-10 py-5 md:px-24 max-w-[1000px] mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">
        About Us
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="relative h-[200px] mb-6 overflow-hidden rounded-lg">
            <Image
              src="/FASTION.jpg"
              alt="Team"
              className="object-cover hover:scale-105 transition-transform duration-300"
              height={100}
              width={400}
            />
          </div>
          
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-6">
            Founded in 2024, we&apos;ve been passionate about sharing knowledge and 
            connecting people through meaningful content. Our journey started with 
            a simple idea: make complex topics accessible to everyone.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            We strive to create a platform where knowledge meets creativity, 
            delivering valuable insights to our readers while building a 
            community of lifelong learners.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">What Sets Us Apart</h3>
            <ul className="space-y-3">
              {[
                "Expert Content Curation",
                "In-depth Analysis",
                "Community-Driven Approach",
                "Continuous Innovation"
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="h-2 w-2 bg-blue-500 rounded-full" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "John Doe", role: "Founder & Editor" },
            { name: "Jane Smith", role: "Content Director" },
            { name: "Mike Johnson", role: "Technical Lead" }
          ].map((member: TeamMember, index: number) => (
            <div
              key={index}
              className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden">
                <Image
                  src="/image.png"
                  width={96}
                  height={96}
                  alt={member.name}
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
