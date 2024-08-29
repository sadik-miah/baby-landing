"use client";

import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  name: z.string(),
  email: z.string(),
  subject: z.string(),
  message: z.string(),
});

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm1 = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="bg-card py-24">
      <div className="container px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-20">
        <div className="w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full md:max-w-[484px] space-y-6"
            >
              <h4 className="font-bold mb-6">Say Hello!</h4>

              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Name"
                        className="p-4 h-[52px] rounded-[10px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email"
                        className="p-4 h-[52px] rounded-[10px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="subject"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Subject"
                        className="p-4 h-[52px] rounded-[10px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="subject"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Message" rows={8} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="h-12 px-7 mt-6">
                Submit
              </Button>
            </form>
          </Form>
        </div>

        <div className="w-full flex justify-center md:justify-start">
          <img
            src="https://shadcn-builder.s3.amazonaws.com/component-images/contact-map.png"
            className="w-full h-auto max-w-[484px]"
            alt="shadcnkit"
          />
        </div>
      </div>
    </div>
  );
};

/* dependencies */
// pnpm dlx shadcn-ui@latest add form
// pnpm dlx shadcn-ui@latest add input
// pnpm dlx shadcn-ui@latest add toast
// pnpm dlx shadcn-ui@latest add button
// pnpm dlx shadcn-ui@latest add textarea

export default ContactForm1;