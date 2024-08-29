import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { nanoid } from "nanoid";

const Faq1 = () => {
  return (
    <div className="container px-4 py-28 flex flex-col md:flex-row items-start justify-between gap-12 md:gap-7">
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <h4 className="font-bold mb-[60px]">Frequently asked questions</h4>

        <div className="flex flex-col gap-4">
          {faqs1.map(({ id, name, question, answer }) => (
            <AccordionItem
              key={id}
              value={name}
              className="border border-border rounded-2xl"
            >
              <AccordionTrigger className="text-start text-lg px-7 py-6 font-medium hover:no-underline">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-start px-7 py-6">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </div>
      </Accordion>

      <img
        src="https://shadcn-builder.s3.amazonaws.com/profiles/Base-4.png"
        className="w-full max-w-[494px]"
        alt="shadcnkit"
      />
    </div>
  );
};

const faqs1 = [
  {
    id: nanoid(),
    name: "item-1",
    question: "What is project management software?",
    answer:
      "Project management software helps teams to stay organized and on track by providing a central hub for project information, task assignment & progress tracking.",
  },
  {
    id: nanoid(),
    name: "item-2",
    question: "How does project management software help teams?",
    answer:
      "Project management software helps teams to stay organized and on track by providing a central hub for project information, task assignment & progress tracking.",
  },
  {
    id: nanoid(),
    name: "item-3",
    question: "What features should I look for in project management software?",
    answer:
      "Project management software helps teams to stay organized and on track by providing a central hub for project information, task assignment & progress tracking.",
  },
  {
    id: nanoid(),
    name: "item-4",
    question: "Is project management software easy to use?",
    answer:
      "Project management software helps teams to stay organized and on track by providing a central hub for project information, task assignment & progress tracking.",
  },
  {
    id: nanoid(),
    name: "item-5",
    question: "Can project management software be used by remote teams?",
    answer:
      "Project management software helps teams to stay organized and on track by providing a central hub for project information, task assignment & progress tracking.",
  },
];

/* dependencies */
// pnpm dlx shadcn-ui@latest add accordion

export default Faq1;