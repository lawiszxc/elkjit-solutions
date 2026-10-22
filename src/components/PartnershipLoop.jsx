import partnerships from "@/lib/partnerships";
import { motion, useAnimationControls, useMotionValue } from "motion/react";
import { Separator } from "./ui/separator";
import { useEffect } from "react";

const LogoLoop = () => {
  const controls = useAnimationControls();
  const x = useMotionValue(0);

  useEffect(() => {
    controls.start({
      x: "-50%",
      transition: {
        duration: 90,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <div className="flex flex-col gap-4 mt-10 mb-10">
      <div className="flex-col w-full items-center flex">
        <h3 className="gap-1 flex flex-col text-center">
          Our Certified and Accredited Partners
          <Separator className="!h-1 !w-full rounded !bg-primary" />
        </h3>
      </div>

      <p className="text-center">
        We work with a growing network of certified and accredited partners,
        trusted suppliers, and technology providers to deliver reliable products
        and quality installation services. Through these partnerships, we aim to
        provide dependable, up-to-date solutions that meet the needs of
        residential, commercial, and industrial clients.
      </p>

      <div className="overflow-hidden whitespace-nowrap">
        <div className="overflow-hidden">
          <motion.div
            className="flex w-max items-center gap-8 cursor-grab active:cursor-grabbing touch-pan-y"
            animate={controls}
            drag="x"
            dragMomentum={false}
            dragElastic={0}
            style={{ x }}
            onDragStart={() => controls.stop()}
            onDragEnd={() => {
              controls.start({
                x: "-50%",
                transition: {
                  duration: 90,
                  repeat: Infinity,
                  ease: "linear",
                },
              });
            }}
          >
            {[...partnerships, ...partnerships].map((partnership, index) => (
              <div
                key={`${partnership.id}-${index}`}
                className="mt-4 hover:scale-96 hover:shrink-0 flex h-63 w-48 shrink-0 flex-col items-center justify-center gap-3 rounded-xl border border-muted-foreground bg-accent-foreground p-3"
              >
                <img
                  className="h-30 w-30 select-none shrink-0 rounded-lg object-fill"
                  src={partnership.image}
                  alt={partnership.name}
                />

                <p className="w-full whitespace-normal break-words text-center text-sm font-bold leading-5">
                  {partnership.name}
                </p>

                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Accredited Partner
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoLoop;
