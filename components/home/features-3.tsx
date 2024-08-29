import {
  Pen,
  Palette,
  BookText,
  Database,
  PieChart,
  RefreshCcw,
  SwatchBook,
  LayoutDashboard,
} from "lucide-react";
import { nanoid } from "nanoid";

const Features3 = () => {
  return (
    <div className="container px-4 py-24">
      <div className="max-w-[600px] mx-auto text-center mb-[60px]">
        <h4 className="font-bold mb-4">Stop wasting your time</h4>
        <p className="font-medium text-secondary-foreground">
          AI writers analyze text and generate content using NLP and machine
          learning.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
        {features3.map((feature) => (
          <div
            key={feature.id}
            className="bg-card py-14 px-6 rounded-2xl text-center"
          >
            <feature.Icon className="mx-auto mb-6" />
            <p className="text-lg font-semibold mb-3">{feature.title}</p>
            <p className="text-secondary-foreground">{feature.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const features3 = [
  {
    id: nanoid(),
    Icon: LayoutDashboard,
    title: "8 Dashboards",
    details: "Unique dashboard templates.",
  },
  {
    id: nanoid(),
    Icon: Palette,
    title: "Light/Dark theme",
    details: "Dark and light theme integrated.",
  },
  {
    id: nanoid(),
    Icon: PieChart,
    title: "Charts/Table",
    details: "Feature reach charts & tables yet easy to use.",
  },
  {
    id: nanoid(),
    Icon: Database,
    title: "200+ Components",
    details: "Carefully designed 200+ reusable components.",
  },
  {
    id: nanoid(),
    Icon: SwatchBook,
    title: "35+ Pages",
    details: "We have 35+ templates pages to build any project.",
  },
  {
    id: nanoid(),
    Icon: Pen,
    title: "Easy to Customize",
    details: "You can easily customize this template.",
  },
  {
    id: nanoid(),
    Icon: RefreshCcw,
    title: "Lifetime Update",
    details: "We provide lifetime update for all user.",
  },
  {
    id: nanoid(),
    Icon: BookText,
    title: "Well Documentation",
    details: "Detail documentation to help you get started fast.",
  },
];

/* dependencies */

export default Features3;