"use client";

import {
  Carousel,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const Team1 = () => {
  const [api, setApi] = useState<any>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const handleSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  return (
    <div className="container px-4 py-24">
      <div className="max-w-[496px] mx-auto text-center">
        <h4 className="font-bold mb-4 md:mb-7">Meet Our Team</h4>
        <p className="font-medium text-secondary-foreground">
          If you face any problem, our support team will help you within a
          business working day.
        </p>
      </div>

      <Carousel
        setApi={setApi}
        className="w-full py-12"
        opts={{ align: "start", loop: true }}
        plugins={[Autoplay({ delay: 3000 })]}
      >
        <CarouselContent>
          {teams1.map((team) => (
            <CarouselItem
              key={team.id}
              className="basis-full md:basis-1/2 lg:basis-1/4"
            >
              <div className="p-10 bg-card text-center rounded-2xl">
                <img
                  className="rounded-2xl w-full max-w-[220px]"
                  src={team.image}
                  alt="shadcnkit"
                />
                <p className="text-lg font-semibold mt-5 mb-2">{team.name}</p>
                <p className="text-secondary-foreground">{team.designation}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="h-4 flex items-center justify-center gap-3">
        {api &&
          teams1.map(({ id }, index) => (
            <button
              key={id}
              className={cn(
                "rounded-full transition-all duration-200",
                currentSlide === index
                  ? "w-3 h-3 bg-icon-active outline outline-4 outline-border"
                  : "h-2 w-2 bg-icon-muted "
              )}
              onClick={() => api.scrollTo(index)}
            ></button>
          ))}
      </div>
    </div>
  );
};

const teams1 = [
  {
    id: nanoid(),
    name: "Lucian Obrien",
    designation: "UX Designer",
    image: "https://shadcn-builder.s3.amazonaws.com/profiles/Base-1.png",
  },
  {
    id: nanoid(),
    name: "Reech Chung",
    designation: "Full Stack Developer",
    image: "https://shadcn-builder.s3.amazonaws.com/profiles/Base-1.png",
  },
  {
    id: nanoid(),
    name: "Harrison Stain",
    designation: "Marketer",
    image: "https://shadcn-builder.s3.amazonaws.com/profiles/Base-2.png",
  },
  {
    id: nanoid(),
    name: "Lainey Davidson",
    designation: "UI Designer",
    image: "https://shadcn-builder.s3.amazonaws.com/profiles/Base-3.png",
  },
  {
    id: nanoid(),
    name: "David Miller",
    designation: "Accountant",
    image: "https://shadcn-builder.s3.amazonaws.com/profiles/Base-1.png",
  },
  {
    id: nanoid(),
    name: "Harrison Stain",
    designation: "Marketer",
    image: "https://shadcn-builder.s3.amazonaws.com/profiles/Base-2.png",
  },
  {
    id: nanoid(),
    name: "Lainey Davidson",
    designation: "UI Designer",
    image: "https://shadcn-builder.s3.amazonaws.com/profiles/Base-3.png",
  },
];

/* dependencies */
// pnpm dlx shadcn-ui@latest add carousel
// pnpm add embla-carousel-autoplay

export default Team1;