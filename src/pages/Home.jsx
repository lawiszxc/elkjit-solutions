import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IoAlertCircleOutline } from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import PartnershipLoop from "@/components/PartnershipLoop";
import { CiLocationOn, CiPhone, CiMail, CiClock1 } from "react-icons/ci";

const Home = () => {
  return (
    <section className="block h-auto w-full min-w-0" id="home">
      <div className="flex flex-col gap-2 min-w-0">
        <h3 className="text-primary">Welcome to</h3>
        <h2>ELKJ I.T. SOLUTIONS</h2>

        <div className="w-19">
          <Separator className="!h-1 rounded !bg-primary" />
        </div>

        <h1 className="max-w-5xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Reliable Solutions.
          <br />
          <span className="text-primary">Smarter Connections.</span>
        </h1>

        <div className="mt-2 flex flex-wrap gap-2">
          <a href="#about-us">
            <Button
              className="transition-transform hover:scale-105"
              variant="default"
            >
              About Us <IoAlertCircleOutline className="text-secondary" />
            </Button>
          </a>

          <a href="#our-services">
            <Button
              variant="outline"
              className="transition-transform hover:scale-105"
            >
              Explore Services
              <MdMiscellaneousServices className="ml-2 text-primary" />
            </Button>
          </a>
        </div>

        <p className="mt-2 text-justify leading-8">
          Providing reliable and professional installation services for
          residential, commercial, and industrial projects. We specialize in
          CCTV surveillance systems, Fire Detection and Alarm Systems (FDAS),
          fire safety cabling, structured cabling, air conditioning
          installation, electrical installation, and fire protection solutions.
          Our goal is to deliver quality workmanship, dependable service, and
          practical technology solutions that help improve safety, security, and
          efficiency in every project.
        </p>

        {/* Contact Information */}
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <div className="flex min-w-0 items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <CiLocationOn className="text-primary" size={25} />
            </div>

            <div className="min-w-0">
              <h6 className="font-semibold">Our Location</h6>
              <p className="break-words text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
                Sinaloc, El Salvador City, Misamis Oriental
              </p>
            </div>
          </div>

          <div className="flex min-w-0 items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <CiPhone className="text-primary" size={25} />
            </div>

            <div className="min-w-0">
              <h6 className="font-semibold">Contact Number</h6>
              <p
                href="tel:+639050643177"
                className="break-words text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                +63 905 064 3177
              </p>
            </div>
          </div>

          <div className="flex min-w-0 items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <CiMail className="text-primary" size={25} />
            </div>

            <div className="min-w-0">
              <h6 className="font-semibold">Email Address</h6>
              <p
                href="mailto:lkjit.solutions@gmail.com"
                className="break-all text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                lkjit.solutions@gmail.com
              </p>
            </div>
          </div>

          <div className="flex min-w-0 items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <CiClock1 className="text-primary" size={25} />
            </div>

            <div className="min-w-0">
              <h6 className="font-semibold">Business Hours</h6>
              <p className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">
                Monday – Saturday
                <br />
                8:00 AM – 5:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Partnership */}
        <PartnershipLoop />

        {/* Why Choose Us */}
        <div className="mt-5 flex w-full min-w-0 rounded-md border border-muted-foreground bg-accent-foreground px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <div className="flex w-full min-w-0 flex-col gap-2">
            <p className="font-semibold text-primary">Why Choose Us?</p>

            <h3>Your Trusted Partner in Technical Solutions</h3>

            <p className="text-justify">
              We are committed to providing dependable installation services and
              practical solutions tailored to the needs of residential,
              commercial, and industrial clients.
            </p>

            <div className="mt-2">
              <Separator />
            </div>

            <div className="mt-2 flex items-start gap-3 sm:gap-4">
              <FaRegCheckCircle
                size={25}
                className="mt-1 shrink-0 text-primary"
              />
              <div className="flex min-w-0 flex-col gap-1">
                <h5>Quality Workmanship</h5>
                <small>
                  Careful installation and attention to detail in every project.
                </small>
              </div>
            </div>

            <div className="mt-2 flex items-start gap-3 sm:gap-4">
              <FaRegCheckCircle
                size={25}
                className="mt-1 shrink-0 text-primary"
              />
              <div className="flex min-w-0 flex-col gap-1">
                <h5>Safety and Reliability</h5>
                <small>
                  Solutions focused on dependable operation and safety
                  requirements.
                </small>
              </div>
            </div>

            <div className="mt-2 flex items-start gap-3 sm:gap-4">
              <FaRegCheckCircle
                size={25}
                className="mt-1 shrink-0 text-primary"
              />
              <div className="flex min-w-0 flex-col gap-1">
                <h5>Practical Technical Solutions</h5>
                <small>
                  Installation services suited to each project's needs.
                </small>
              </div>
            </div>

            <div className="mt-2 flex items-start gap-3 sm:gap-4">
              <FaRegCheckCircle
                size={25}
                className="mt-1 shrink-0 text-primary"
              />
              <div className="flex min-w-0 flex-col gap-1">
                <h5>Customer-Focused Service</h5>
                <small>
                  Clear communication and support throughout the project.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
