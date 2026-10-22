import { Separator } from "@/components/ui/separator";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { CiClock1, CiLocationOn, CiPhone, CiMail } from "react-icons/ci";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactUs = () => {
  return (
    <section className="flex h-auto min-w-0 flex-col gap-4" id="contact-us">
      <div className="flex w-fit flex-col gap-1">
        <h3>Contact Us</h3>
        <Separator className="!h-1 !w-full rounded !bg-primary" />
      </div>

      <div className="flex h-auto w-full min-w-0 flex-col overflow-hidden rounded-md border border-muted-foreground lg:flex-row">
        {/* Location and Map */}

        {/* Location and Map */}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex min-w-0 flex-col gap-4 p-3 sm:p-4 lg:p-5">
            <div>
              <h3 className="text-xl font-bold text-primary">
                Explore Our Location
              </h3>

              <p className="text-sm">
                Find ELKJ I.T. SOLUTIONS through Google Maps Street View.
              </p>
            </div>

            {/* Responsive Google Maps */}
            <div className="h-[300px] w-full min-w-0 overflow-hidden rounded-xl border sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[860px]">
              <iframe
                title="ELKJ I.T. SOLUTIONS Street View"
                src="https://maps.google.com/maps?q=8.5687092,124.5166473&layer=c&cbll=8.5687092,124.5166473&cbp=12,41.08,,0,0&output=svembed"
                className="block h-full w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href="https://www.google.com/maps/place/ELKJ+I.T.+SOLUTIONS/@8.5684546,124.5164241,6a,75y,41.08h,90t/data=!3m7!1e1!3m5!1s_EL_e3TkZ-aTRMz1VzY6sQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.clients6.google.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3D_EL_e3TkZ-aTRMz1VzY6sQ%26yaw%3D41.07873!7i16384!8i8192!4m6!3m5!1s0x32fff700398bd8e1:0x51264ff01bc6327d!8m2!3d8.5687092!4d124.5166473!16s%2Fg%2F11xyc7yjv0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-sm font-semibold text-primary hover:underline"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </div>

        {/* Contact Information and Form */}
        <div className="flex min-w-0 flex-1 flex-col border-t border-muted-foreground lg:border-l lg:border-t-0">
          {/* Contact Information */}
          <div className="flex min-w-0 flex-col gap-5 bg-accent-foreground p-3 sm:p-4 lg:p-5">
            <div>
              <h3 className="font-semibold text-primary">Get in Touch.</h3>
              <Separator className="!mt-1 !h-1 !w-17 rounded !bg-primary" />
            </div>

            <div className="flex min-w-0 flex-col gap-1">
              <h6>Let's Work Together!</h6>
              <small className="break-words text-justify transition-colors hover:text-primary">
                Have a project in mind? Contact us for reliable technology
                solutions and professional service.
              </small>
            </div>

            <Separator className="bg-muted-foreground" />

            <div className="flex min-w-0 flex-col gap-4">
              {/* Location */}
              <div className="flex min-w-0 items-start gap-2">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                  <CiLocationOn className="text-primary" size={30} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-semibold">Our Location</p>
                  <small className="break-words font-semibold text-muted-foreground transition-colors hover:text-primary">
                    Sinaloc, El Salvador City, Misamis Oriental
                  </small>
                </div>
              </div>

              {/* Phone */}
              <div className="flex min-w-0 items-start gap-2">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                  <CiPhone className="text-primary" size={30} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-semibold">Phone Number</p>
                  <a
                    href="tel:+639050643177"
                    className="break-words text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
                  >
                    +63 905 064 3177
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex min-w-0 items-start gap-2">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                  <CiMail className="text-primary" size={30} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-semibold">Email Address</p>
                  <a
                    href="mailto:lkjit.solutions@gmail.com"
                    className="break-all text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
                  >
                    lkjit.solutions@gmail.com
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex min-w-0 items-start gap-2">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                  <CiClock1 className="text-primary" size={30} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-semibold">Business Hours</p>
                  <small className="break-words font-semibold text-muted-foreground">
                    Monday – Saturday · 8:00 AM – 5:00 PM
                  </small>
                </div>
              </div>
            </div>

            <Separator className="bg-muted-foreground" />
          </div>

          {/* Contact Form */}
          <div className="flex min-w-0 flex-col gap-4 p-3 sm:p-4 lg:p-5">
            <div>
              <h5>Send us a message.</h5>
              <small>
                Fill out the form and tell us what service you need.
              </small>
            </div>

            <FieldSet className="min-w-0">
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="full_name">Full name</FieldLabel>
                  <Input
                    id="full_name"
                    autoComplete="name"
                    placeholder="Full name"
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="subject">Subject</FieldLabel>
                  <Input id="subject" placeholder="Subject" />
                </Field>

                <Field>
                  <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
                  <Textarea
                    id="textarea-message"
                    placeholder="Type your message here."
                    className="min-h-28"
                  />
                </Field>
              </FieldGroup>

              <Button type="button" className="w-full sm:w-fit">
                Send Message
              </Button>
            </FieldSet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
