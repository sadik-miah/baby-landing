

const Footer1 = () => {
  const date = new Date();

  return (
    <div className="container px-4">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-16">
        <div className="w-full md:max-w-[420px]">
          <p className="text-lg font-medium">ShadcnKit</p>

          <p className="font-medium text-secondary-foreground mt-6">
            Your customer deserve clean and beautifull Website , dont pull your
            hair making one . just choose a prebuilt blocks and use it in your
            project built with shadcnui , Nextjs and Figma
          </p>
        </div>
        <div className="w-full md:max-w-[650px] flex flex-col md:flex-row justify-between gap-10">
          <div>
            <p className="text-xl font-semibold mb-[30px]">Products</p>
            <ul className="flex flex-col gap-5 text-secondary-foreground">
              <li>Project Management</li>
              <li>Multi-tenancy</li>
              <li>Scalability</li>
              <li>Customization</li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-semibold mb-[30px]">Features</p>
            <ul className="flex flex-col gap-5 text-secondary-foreground">
              <li>User management</li>
              <li>Workflow automation</li>
              <li>API access</li>
              <li>Data visualization</li>
            </ul>
          </div>
          <div>
            <p className="text-xl font-semibold mb-[30px]">Explore</p>
            <ul className="flex flex-col gap-5 text-secondary-foreground">
              <li>
                <a href="#">Docs</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-lg text-secondary-foreground p-6 text-center">
        Copyright © {date.getFullYear()}{" "}
        <a href="https://ui-lib.com/">UI Lib</a>. All rights reserved
      </p>
    </div>
  );
};

export default Footer1;