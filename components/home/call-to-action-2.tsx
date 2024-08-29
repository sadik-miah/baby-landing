import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const CallToAction2 = () => {
  return (
    <div className="bg-card px-4 py-12">
      <div className="w-full max-w-[1040px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-20 md:gap-4">
        <div className="w-full max-w-md">
          <h4 className="font-bold">How can we help you?</h4>
          <div className="mt-[30px] relative">
            <Input
              type="text"
              placeholder="Search Question"
              className="p-4 pl-11 h-[52px] w-full rounded-[10px] placeholder:text-muted-foreground"
            />
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-icon" />
          </div>
        </div>

        <img
          className="w-full max-w-[260px]"
          src="https://shadcn-builder.s3.amazonaws.com/component-images/faqs.png"
          alt="shadcnkit"
        />
      </div>
    </div>
  );
};

/* dependencies */
// pnpm dlx shadcn-ui@latest add input

export default CallToAction2;