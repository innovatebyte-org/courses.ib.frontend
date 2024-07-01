import { Button } from "@/ui/buttons";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import hero_image from "@/assets/hero_image.png";
import { Section } from "@/ui/section";

export const Hero = () => (
  <Section className="gap-52 bg-hero items-start bg-cover">
    <div className="my-flex-col gap-9">
      <div className="my-flex-col gap-4 text-center">
        <h4 className="text-ib-grey-950 text-h4-md">
          Discover, Learn, Succeed: Your{" "}
          <span className="text-gradient">Path</span> Starts Here
        </h4>
        <p className="text-ib-grey-400 text-body-1-reg">
          Experience the convenience of learning at your own pace, on your own
          schedule, from anywhere in the world.
        </p>
      </div>
      <Button
        link="/sign-up"
        icon={<ArrowRightIcon className="text-current size-6" />}
      >
        Get Started
      </Button>
    </div>
    <Image src={hero_image} alt="Hero Image" width={390} height={428} />
  </Section>
  // <div className="w-full flex flex-col gap-52 items-start bg-hero bg-cover">
  //
  // </div>
);
