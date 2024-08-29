"use client";

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { nanoid } from "nanoid";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun } from "lucide-react";

const ThemeToggle1 = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>Light</DropdownMenuItem>
        <DropdownMenuItem>Dark</DropdownMenuItem>
        <DropdownMenuItem>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Navigation1 = () => {
  return (
    <Card className="container bg-card py-3 px-4 border-0 flex items-center justify-between gap-6 rounded-2xl">
      <p className="text-lg font-semibold cursor-pointer">ShadcnKit</p>

      <ul className="hidden md:flex items-center gap-10 text-card-foreground">
        <li className="text-foreground font-medium">
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#faqs">FAQs</a>
        </li>
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span className="cursor-pointer">Pages</span>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start">
              {pages1.map((page) => (
                <DropdownMenuItem key={page.id}>
                  <a href={page.route}>{page.title}</a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </ul>

      <div className="flex items-center">
        <Button variant="secondary" className="hidden md:block px-2">
          Login
        </Button>
        <Button className="hidden md:block ml-2 mr-2">Get Started</Button>

        <div className="flex md:hidden mr-2 items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span className="py-2 px-2 bg-gray-100 rounded-md">Pages</span>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start">
              {pages1.map((page) => (
                <DropdownMenuItem key={page.id}>
                  <a href={page.route}>{page.title}</a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5 rotate-0 scale-100" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <a href="#home">Home</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#features">Features</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#pricing">Pricing</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#faqs">FAQs</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button variant="secondary" className="w-full text-sm">
                  Login
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button className="w-full text-sm">Get Started</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <ThemeToggle1 />
      </div>
    </Card>
  );
};

const pages1 = [
  {
    id: nanoid(),
    title: "Landing 01",
    route: "#",
  },
  {
    id: nanoid(),
    title: "Landing 02",
    route: "#",
  },
  {
    id: nanoid(),
    title: "Landing 03",
    route: "#",
  },
  {
    id: nanoid(),
    title: "Landing 04",
    route: "#",
  },
  {
    id: nanoid(),
    title: "Landing 05",
    route: "#",
  },
  {
    id: nanoid(),
    title: "Landing 06",
    route: "#",
  },
  {
    id: nanoid(),
    title: "Landing 07",
    route: "#",
  },
  {
    id: nanoid(),
    title: "Landing 08",
    route: "#",
  },
  {
    id: nanoid(),
    title: "Landing 09",
    route: "#",
  },
];

/* dependencies */
// pnpm dlx shadcn-ui@latest add card
// pnpm dlx shadcn-ui@latest add button
// pnpm dlx shadcn-ui@latest add dropdown-menu

export default Navigation1;