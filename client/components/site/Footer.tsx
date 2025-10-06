import { Button } from "@/components/ui/button";

const columns = [
  {
    title: "Solutions",
    links: [
      { label: "Power Skills", href: "#solutions" },
      { label: "Leadership", href: "#solutions" },
      { label: "Sales Enablement", href: "#solutions" },
      { label: "Onboarding", href: "#solutions" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Communication", href: "#programs" },
      { label: "Productivity", href: "#programs" },
      { label: "Collaboration", href: "#programs" },
      { label: "Wellbeing", href: "#programs" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "#about" },
      { label: "Careers", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Press", href: "#about" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#resources" },
      { label: "Customer stories", href: "#impact" },
      { label: "Events", href: "#resources" },
      { label: "Guides", href: "#resources" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container-tight py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-extrabold tracking-tight">
              Power up your people
            </h3>
            <p className="mt-3 text-foreground/70 max-w-sm">
              Measurable impact through blended learning — online, in the flow
              of work, and in person.
            </p>
            <div className="mt-6 flex gap-4 items-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M32 16.0401C32 7.18596 24.832 0 16 0C7.168 0 0 7.18596 0 16.0401C0 23.8035 5.504 30.2677 12.8 31.7594V20.8521H9.6V16.0401H12.8V12.0301C12.8 8.93434 15.312 6.41604 18.4 6.41604H22.4V11.2281H19.2C18.32 11.2281 17.6 11.9499 17.6 12.8321V16.0401H22.4V20.8521H17.6V32C25.68 31.198 32 24.3649 32 16.0401Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM26 11.8C26 8.6 23.4 6 20.2 6H11.8C10.2617 6 8.78649 6.61107 7.69878 7.69878C6.61107 8.78649 6 10.2617 6 11.8V20.2C6 23.4 8.6 26 11.8 26H20.2C21.7383 26 23.2135 25.3889 24.3012 24.3012C25.3889 23.2135 26 21.7383 26 20.2V11.8ZM9.05442 9.05442C9.72955 8.37928 10.6452 8 11.6 8H20.4C22.39 8 24 9.61 24 11.6V20.4C24 21.3548 23.6207 22.2705 22.9456 22.9456C22.2705 23.6207 21.3548 24 20.4 24H11.6C9.61 24 8 22.39 8 20.4V11.6C8 10.6452 8.37928 9.72955 9.05442 9.05442ZM22.1339 9.86612C21.8995 9.6317 21.5815 9.5 21.25 9.5C20.9185 9.5 20.6005 9.6317 20.3661 9.86612C20.1317 10.1005 20 10.4185 20 10.75C20 11.0815 20.1317 11.3995 20.3661 11.6339C20.6005 11.8683 20.9185 12 21.25 12C21.5815 12 21.8995 11.8683 22.1339 11.6339C22.3683 11.3995 22.5 11.0815 22.5 10.75C22.5 10.4185 22.3683 10.1005 22.1339 9.86612ZM19.5355 12.4645C18.5979 11.5268 17.3261 11 16 11C14.6739 11 13.4021 11.5268 12.4645 12.4645C11.5268 13.4021 11 14.6739 11 16C11 17.3261 11.5268 18.5979 12.4645 19.5355C13.4021 20.4732 14.6739 21 16 21C17.3261 21 18.5979 20.4732 19.5355 19.5355C20.4732 18.5979 21 17.3261 21 16C21 14.6739 20.4732 13.4021 19.5355 12.4645ZM13.8787 13.8787C14.4413 13.3161 15.2044 13 16 13C16.7956 13 17.5587 13.3161 18.1213 13.8787C18.6839 14.4413 19 15.2044 19 16C19 16.7956 18.6839 17.5587 18.1213 18.1213C17.5587 18.6839 16.7956 19 16 19C15.2044 19 14.4413 18.6839 13.8787 18.1213C13.3161 17.5587 13 16.7956 13 16C13 15.2044 13.3161 14.4413 13.8787 13.8787Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM25.0235 9.31769C25.2484 9.57226 25.4096 9.87667 25.4938 10.2058C25.725 11.0968 26 12.7252 26 15.4268C26 18.1283 25.725 19.7549 25.4938 20.6477C25.4097 20.977 25.2486 21.2816 25.0237 21.5363C24.7987 21.7911 24.5164 21.9887 24.2 22.1128C21.2705 23.2439 16.6786 23.2832 16.0589 23.2832H15.9411C15.3214 23.2832 10.7321 23.2439 7.8 22.1128C7.48361 21.9887 7.20129 21.7911 6.97634 21.5363C6.75138 21.2816 6.59025 20.977 6.50625 20.6477C6.275 19.7567 6 18.1283 6 15.4268C6 12.7252 6.275 11.0968 6.50625 10.2058C6.59038 9.87667 6.75157 9.57226 6.97651 9.31769C7.20146 9.06311 7.48372 8.86567 7.8 8.74164C10.8367 7.56889 15.6557 7.57022 15.9928 7.57031L16 7.57032L16.0072 7.57031C16.3443 7.57022 21.1633 7.56889 24.2 8.74164C24.5163 8.86567 24.7985 9.06311 25.0235 9.31769ZM14.7696 18.5809L19.0554 15.7241C19.1043 15.6915 19.1445 15.6473 19.1723 15.5954C19.2001 15.5435 19.2146 15.4856 19.2146 15.4268C19.2146 15.3679 19.2001 15.31 19.1723 15.2581C19.1445 15.2063 19.1043 15.1621 19.0554 15.1295L14.7696 12.2726C14.7158 12.2367 14.6533 12.2161 14.5887 12.2129C14.5241 12.2098 14.4599 12.2243 14.4029 12.2548C14.3458 12.2853 14.2982 12.3308 14.265 12.3862C14.2318 12.4417 14.2142 12.5052 14.2143 12.5699V18.2836C14.2142 18.3483 14.2318 18.4118 14.265 18.4673C14.2982 18.5228 14.3458 18.5682 14.4029 18.5987C14.4599 18.6292 14.5241 18.6437 14.5887 18.6406C14.6533 18.6374 14.7158 18.6168 14.7696 18.5809Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold mb-3">{col.title}</h4>
              <ul className="space-y-2 text-foreground/80">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      className="hover:underline underline-offset-4"
                      href={l.href}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t">
        <div className="container-tight py-6 flex flex-col gap-3 md:flex-row items-center justify-between text-sm text-foreground/70">
          <p>© {new Date().getFullYear()} Lepaya. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a href="#" className="hover:underline underline-offset-4">
              Privacy
            </a>
            <a href="#" className="hover:underline underline-offset-4">
              Terms
            </a>
            <a href="#" className="hover:underline underline-offset-4">
              Security
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
