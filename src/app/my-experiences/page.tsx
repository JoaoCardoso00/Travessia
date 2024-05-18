"use client";

import { StarIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Experiencia } from "../api/experiencias/route";
import Image from "next/image";
import axios from "axios";
import { useAuth } from "@/contexts/useAuth";

export default function MyExperiences() {
  //get experiences from API
  const [experiences, setExperiences] = useState<Experiencia[]>([
    {
      name: "Experiência 1",
      price: 100,
      imageSrc:
        "https://images.unsplash.com/photo-1612830720309-4b3b3b3b3b3b?auto=format&fit=crop&w=500&h=500&q=80",
      imageAlt: "Experiência 1",
      id: "1",
      description: "Experiência 1",
      owner_id: "1",
      sells: 10,
      tag: ["adventure", "nature", "hiking"],
    },
    {
      name: "Experiência 2",
      price: 200,
      imageSrc:
        "https://images.unsplash.com/photo-1612830720309-4b3b3b3b3b3b?auto=format&fit=crop&w=500&h=500&q=80",
      imageAlt: "Experiência 2",
      id: "2",
      description: "Experiência 2",
      owner_id: "1",
      sells: 10,
      tag: ["adventure", "nature", "hiking"],
    },
    {
      name: "Experiência 3",
      price: 300,
      imageSrc:
        "https://images.unsplash.com/photo-1612830720309-4b3b3b3b3b3b?auto=format&fit=crop&w=500&h=500&q=80",
      imageAlt: "Experiência 3",
      id: "3",
      description: "Experiência 3",
      owner_id: "1",
      sells: 10,
      tag: ["adventure", "nature", "hiking"],
    },
    {
      name: "Experiência 4",
      price: 400,
      imageSrc:
        "https://images.unsplash.com/photo-1612830720309-4b3b3b3b3b3b?auto=format&fit=crop&w=500&h=500&q=80",
      imageAlt: "Experiência 4",
      id: "4",
      description: "Experiência 4",
      owner_id: "1",
      sells: 10,
      tag: ["adventure", "nature", "hiking"],
    },
    {
      name: "Experiência 5",
      price: 500,
      imageSrc:
        "https://images.unsplash.com/photo-1612830720309-4b3b3b3b3b3b?auto=format&fit=crop&w=500&h=500&q=80",
      imageAlt: "Experiência 5",
      id: "5",
      description: "Experiência 5",
      owner_id: "1",
      sells: 10,
      tag: ["adventure", "nature", "hiking"],
    },
  ]);
  const { getUser } = useAuth();

  useEffect(() => {
    axios
      .get("/api/experiencias?user=" + getUser())
      .then((res) => {
        console.log(res.data);
        setExperiences([...experiences, ...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {experiences.map((exp) => (
            <a key={exp.id} href="#" className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  src={exp.imageSrc}
                  alt={exp.imageAlt}
                  className="group-hover:opacity-75"
                  width={500}
                  height={500}
                />
              </div>
              <div className="mt-2 flex items-center gap-1 text-black text-sm">
                <StarIcon color="black" className="h-4" />
                <span className=" font-light">5,0</span>
                <span className=" font-light">(14)</span>
                <span className="text-xl">·</span>
                <span className="font-light">2 horas</span>
              </div>
              <p className="text-lg font-medium text-gray-900">{exp.name}</p>
              <h3 className="mt-2 text-sm text-gray-700">
                A partir de R${exp.price}/pessoa
              </h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
