import { Separator } from "@/components/ui/separator";

const AboutUs = () => {
  return (
    <section className="flex h-auto min-w-0 flex-col gap-4" id="about-us">
      <div className="flex w-fit flex-col gap-1">
        <h3>About Us</h3>
        <Separator className="!h-1 !w-full rounded !bg-primary" />
      </div>

      <h6>Your Primary Edge of Technology.</h6>

      <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2">
        {/* Our Mission */}
        <div className="group relative min-h-[280px] min-w-0 overflow-hidden rounded-xl border border-muted-foreground/40 sm:min-h-[320px]">
          <img
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            src="/vision.jfif"
            alt="Our Mission"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-[#101827]/80 transition-colors duration-300 group-hover:bg-[#101827]/70" />

          <div className="relative z-10 flex min-h-[280px] flex-col justify-end gap-4 p-4 sm:min-h-[320px] sm:p-6">
            <h4 className="text-xl font-bold text-primary">Our Mission</h4>

            <p className="text-justify leading-7 text-primary-foreground/90">
              To deliver reliable, innovative, and cost-effective IT and
              engineering solutions that enhance safety, connectivity, and
              comfort for every client.
            </p>
          </div>
        </div>

        {/* Our Vision */}
        <div className="group relative min-h-[280px] min-w-0 overflow-hidden rounded-xl border border-muted-foreground/40 sm:min-h-[320px]">
          <img
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            src="/vision.jfif"
            alt="Our Vision"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-[#101827]/80 transition-colors duration-300 group-hover:bg-[#101827]/70" />

          <div className="relative z-10 flex min-h-[280px] flex-col justify-end gap-4 p-4 sm:min-h-[320px] sm:p-6">
            <h4 className="text-xl font-bold text-primary">Our Vision</h4>

            <p className="text-justify leading-7 text-primary-foreground/90">
              To be the trusted partner in integrated technology and engineering
              services across the Philippines recognized for quality, and
              efficiency satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="mt-6 flex min-w-0 flex-col gap-3 sm:mt-10">
        <div className="flex w-full flex-col items-center">
          <h3 className="flex flex-col items-center gap-1 text-center">
            Meet Our Team
            <Separator className="!h-1 !w-full rounded !bg-primary" />
          </h3>
        </div>

        <div className="flex justify-center">
          <div className="flex h-4 w-fit items-center justify-center rounded-xl border bg-primary px-1 py-2">
            <small className="text-[10px]">Coming Soon.</small>
          </div>
        </div>

        <div className="flex min-w-0 justify-center">
          <p className="text-center">
            We're preparing something for you. Our team profiles will be
            available soon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
