import { Separator } from "@/components/ui/separator";
import { MdOutlineVerified } from "react-icons/md";
import services from "@/lib/services";

const OurServices = () => {
  return (
    <section className="flex h-auto min-w-0 flex-col gap-4" id="our-services">
      <div className="flex w-fit flex-col gap-1">
        <h3>Our Services</h3>
        <Separator className="!h-1 w-full rounded !bg-primary" />
      </div>

      <p className="text-justify">
        From security systems to electrical and network installations, we
        deliver integrated solutions tailored to your project requirements.
      </p>

      <div className="grid min-w-0 grid-cols-1 gap-3 xl:grid-cols-2">
        {services.map((service) => (
          <div
            className="relative flex min-w-0 flex-col overflow-hidden rounded-sm border border-muted-foreground sm:flex-row hover:scale-95"
            key={service.id}
          >
            {/* Service Image */}
            <div className="h-44 w-full shrink-0 overflow-hidden p-1 sm:h-44 sm:w-36 md:w-44 lg:w-48">
              <img
                className="h-full w-full rounded-xs object-cover"
                src={service.image}
                alt={service.title}
                loading="lazy"
              />
            </div>

            {/* Service Details */}
            <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 px-3 py-4 pr-9 sm:px-4 sm:py-3">
              <h2 className="break-words text-lg sm:text-xl">
                <span className="text-primary">{service.span}</span>{" "}
                {service.title}
              </h2>

              <Separator className="!h-1 !w-13 !bg-primary" />

              <small className="break-words text-justify">
                {service.description}
              </small>
            </div>

            <MdOutlineVerified
              size={25}
              className="absolute right-1 top-1 shrink-0 text-primary"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
