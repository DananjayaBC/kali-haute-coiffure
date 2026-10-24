import { Logo } from "./Decor";

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="#111" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#111" aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.3H7.4V14h2.8v8h3.3Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="mt-6 w-full rounded-t-[40px] bg-ink px-6 pb-10 pt-12 text-white sm:rounded-t-[70px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center">
          <Logo size={140} className="shadow-[0_0_0_6px_#1c1c1c]" />
          <h2 className="font-condensed mt-10 text-center text-[26px] font-semibold uppercase tracking-wide text-gold">
            Subscribe for offers
          </h2>
          <form className="mt-8 flex w-full max-w-[1150px] flex-col sm:flex-row" action="#" method="post">
            <label htmlFor="footer-email" className="sr-only">
              Enter your email
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="font-condensed h-[52px] w-full min-w-0 bg-white px-6 text-[15px] tracking-[0.12em] text-ink placeholder:text-[#9a9a9a] focus:outline-none sm:flex-1 sm:px-8"
            />
            <button
              type="submit"
              className="font-condensed h-[52px] w-full bg-tan text-[14px] font-medium uppercase tracking-[0.12em] text-ink hover:bg-gold sm:w-[240px]"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-[1fr_180px_180px] lg:grid-cols-[1fr_250px_250px]">
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="font-condensed text-[20px] font-medium uppercase tracking-wide">About Us</h3>
            <p className="mt-6 max-w-[440px] text-[12px] italic leading-[1.9] text-[#d7d7d7]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry
            </p>
            <p className="mt-4 max-w-[400px] text-[15px] leading-[1.5] tracking-wide text-[#e4e4e4]">
              2346 Lakeshore Rd W, Oakville, ON L6L 1H5, Canada
            </p>
            <p className="mt-3 text-[15px] tracking-wide text-[#e4e4e4] break-words">
              Email:{" "}
              <a href="mailto:info@salonapsa.com" className="hover:text-gold">
                info@salonapsa.com
              </a>
            </p>
            <p className="mt-3 text-[15px] tracking-wide text-[#e4e4e4]">
              Phone:{"  "}
              <a href="tel:+19055825111" className="hover:text-gold">
                +1 905-582-5111
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-condensed text-[20px] font-medium uppercase tracking-wide">Quick Links</h3>
            <ul className="mt-6 space-y-3 text-[15px] tracking-wide text-[#e4e4e4]">
              <li><a href="#about" className="hover:text-gold">About</a></li>
              <li><a href="#about" className="hover:text-gold">About</a></li>
              <li><a href="#services" className="hover:text-gold">Services</a></li>
              <li><a href="#contact" className="hover:text-gold">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-condensed text-[20px] font-medium uppercase tracking-wide">Follow Us</h3>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-md bg-tan hover:bg-gold">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-md bg-tan hover:bg-gold">
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-[#555] px-6 pt-8 text-center text-[13px] text-[#e4e4e4] md:flex-row">
          <p>Copyright &copy; 2023 Salon Apsa</p>
          <p>Powered by Salon Apsa</p>
        </div>
      </div>
    </footer>
  );
}
