import Image from "next/image";
const company = () => {
  const footerNavigation = {
    main: [
      { name: "Blog", href: "#" },
      { name: "Jobs", href: "#" },
      { name: "Press", href: "#" },
      { name: "Accessibility", href: "#" },
      { name: "Partners", href: "#" },
    ],
    social: [
      {
        name: "Facebook",
        href: "#",
        icon: (props) => (
          <svg fill="#1877F2" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: "Instagram",
        href: "#",
        icon: (props) => (
          <svg fill="#FE0D53" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: "LinkedIn",
        href: "#",
        icon: (props) => (
          <svg fill="#0A66C2" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22.225 0H1.771C.792 0 0 .774 0 1.728v20.543C0 23.226.792 24 1.771 24h20.451C23.207 24 24 23.226 24 22.271V1.728C24 .774 23.207 0 22.225 0zM7.086 20.452H3.565V9.042h3.521v11.41zM5.326 7.678a2.04 2.04 0 110-4.079 2.04 2.04 0 010 4.08zm14.631 12.774h-3.52v-5.682c0-1.353-.027-3.094-1.885-3.094-1.886 0-2.174 1.474-2.174 2.997v5.779h-3.521V9.042h3.38v1.561h.048c.47-.89 1.619-1.828 3.332-1.828 3.562 0 4.217 2.344 4.217 5.392v6.284z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  };
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16 mb-8">
        <h2 className="text-center text-2xl font-bold leading-8 text-gray-900 m-[4rem]">
          Our Partners
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          <Image
            alt="Transistor"
            src="https://utfs.io/f/P4auCx0rGutTsCjo3EQfSi0MH17qg9vLmBGzyJRZe83ox4nN"
            width={158}
            height={48}
            className="max-h-12 object-contain"
          />
          <Image
            alt="Reform"
            src="https://utfs.io/f/P4auCx0rGutTYjfUsQnm45rQV91X8yPk3DbZEKHGNMeFjAh7"
            width={158}
            height={48}
            className="max-h-12 object-contain"
          />
          <Image
            alt="Tuple"
            src="https://utfs.io/f/P4auCx0rGutTFz5kuipMUAIsLHvcfoVk1iXOryz4RT3G0ajY"
            width={158}
            height={48}
            className="max-h-12 object-contain"
          />
          <Image
            alt="SavvyCal"
            src="https://utfs.io/f/P4auCx0rGutTWbZEOGlwBgaVYeH4UqN6ujEsLJMXic2tmxzb"
            width={158}
            height={48}
            className="max-h-12 object-contain"
          />
          <Image
            alt="Statamic"
            src="https://utfs.io/f/P4auCx0rGutTwdUB2byl8z3vcLXqjC1Ufd7OBKYgpnaho02b"
            width={158}
            height={48}
            className="max-h-12 object-contain"
          />
          <Image
            alt="Statamic"
            src="https://utfs.io/f/P4auCx0rGutTFy8bOvpMUAIsLHvcfoVk1iXOryz4RT3G0ajY"
            width={158}
            height={48}
            className="max-h-12 object-contain"
          />
          <Image
            alt="SavvyCal"
            src="https://utfs.io/f/P4auCx0rGutTdJFCZbxXZ1hbrjft5gA9W3QSLPx2qYdiUB80"
            width={158}
            height={48}
            className="max-h-12 object-contain"
          />
          <Image
            alt="SavvyCal"
            src="https://utfs.io/f/P4auCx0rGutTXrnvVEI2L4ZrkJW0NcwG8qnptSmvbdKEMfOz"
            width={158}
            height={48}
            className="max-h-12 object-contain"
          />
          <Image
            alt="SavvyCal"
            src="https://utfs.io/f/P4auCx0rGutTc7kVWhGIGtZyHbPrAOpsd3M5BYeai9JcqlX0"
            width={158}
            height={48}
            className="max-h-12 object-contain"
          />
        </div>
      </div>
      {/* <footer className="mx-auto mt-20 max-w-7xl overflow-hidden px-6 pb-20  lg:px-8">
        <nav
          aria-label="Footer"
          className="mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
        ></nav>
        <div className="mt-10 mb-10 flex justify-center space-x-10">
          {footerNavigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="h-6 w-6" />
            </a>
          ))}
        </div>
        <div className="footer-section flex flex-col items-center space-y-2  md:mb-0 flex-grow md:border-r border-white-600 px-4">
          <p>info@b2b-recycle.com</p>

          <p>+918527862446</p>
        </div>
       
      </footer> */}
    </>
  );
};
export default company;
