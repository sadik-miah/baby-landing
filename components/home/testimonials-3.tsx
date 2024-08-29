"use client";

import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { nanoid } from "nanoid";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";

const Testimonials3 = () => {
  return (
    <div className="w-full max-w-[1000px] relative mx-auto px-4 py-28">
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[Autoplay({ delay: 3000 })]}
      >
        <CarouselContent>
          {testimonials3.map(({ id, name, designation, comment, image }) => (
            <CarouselItem key={id} className="basis-full">
              <div className="relative px-6 pb-6 md:pb-9 pt-[60px]">
                <Quote className="w-10 h-6 absolute top-6 left-0" />
                <Quote className="w-24 h-16 absolute top-0 right-0 text-icon-muted" />
                <p className="text-lg md:text-2xl font-medium text-center text-secondary-foreground">
                  {comment}
                </p>
              </div>

              <div className="flex flex-col items-center justify-center relative z-0">
                <Avatar className="w-14 md:w-[70px] h-auto mb-4">
                  <AvatarImage src={image} alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="text-lg md:text-2xl font-semibold mb-2">
                    {name}
                  </p>
                  <p className="text-sm md:text-base text-secondary-foreground">
                    {designation}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex items-center justify-center gap-4 mt-6 pb-1">
          <CarouselPrevious
            style={{ position: "unset" }}
            className="translate-x-0 translate-y-0 h-10 w-10 bg-transparent hover:bg-primary border-primary text-primary hover:text-white"
          />
          <CarouselNext
            style={{ position: "unset" }}
            className="translate-x-0 translate-y-0 h-10 w-10 bg-transparent hover:bg-primary border-primary text-primary hover:text-white"
          />
        </div>
      </Carousel>
    </div>
  );
};

const testimonials3 = [
  {
    id: nanoid(),
    name: "Lucian Obrien",
    designation: "UX Designer",
    comment:
      "Our sales team has been able to make more data-driven decisions since we started using this CRM tool. The real-time sales tracking has been a game-changer for us, allowing us to make quick adjustments to our sales process.",
    image: "https://shadcn-builder.s3.amazonaws.com/profiles/Base-1.png",
  },
  {
    id: nanoid(),
    name: "Reech Chung",
    designation: "Full Stack Developer",
    comment:
      "Our sales team has been able to make more data-driven decisions since we started using this CRM tool. The real-time sales tracking has been a game-changer for us, allowing us to make quick adjustments to our sales process.",
    image: "https://shadcn-builder.s3.amazonaws.com/profiles/Base-1.png",
  },
  {
    id: nanoid(),
    name: "Harrison Stain",
    designation: "Marketer",
    comment:
      "Our sales team has been able to make more data-driven decisions since we started using this CRM tool. The real-time sales tracking has been a game-changer for us, allowing us to make quick adjustments to our sales process.",
    image: "https://shadcn-builder.s3.amazonaws.com/profiles/Base-2.png",
  },
];

/* dependencies */
// pnpm dlx shadcn-ui@latest add avatar
// pnpm dlx shadcn-ui@latest add carousel
// pnpm add embla-carousel-autoplay

export default Testimonials3;