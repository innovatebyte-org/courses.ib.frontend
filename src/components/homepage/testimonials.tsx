import { TestimonialStarIcon } from "@/assets/icons";
import { Section } from "@/ui/section";
import { StarIcon } from "@heroicons/react/20/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export const Testimonials = () => (
  <Section>
    <Section.Body className="gap-5">
      <div className="flex flex-col h-full justify-between items-start gap-12">
        <q className="text-sub-headline-md lg:text-h4-md text-ib-grey-900">
          InnovateByte has completely transformed my learning experience! The
          courses are well-structured and the content is engaging, making
          complex topics easy to understand.
        </q>
        <div className="flex flex-col items-start gap-2">
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-5">
              <div className="size-[52px] rounded-full border border-white bg-ib-primary flex-none"></div>
              <div className="my-flex-col gap-1">
                <p className="text-ib-grey-950 text-sub-headline-md lg:text-h6-md">
                  Dana White
                </p>
                <p className="text-ib-grey-400 text-body-2 lg:text-sub-headline">
                  A short description about your career
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <StarIcon className="text-ib-tertiaryy-100 size-5 lg:size-6" />
              <StarIcon className="text-ib-tertiaryy-100 size-5 lg:size-6" />
              <StarIcon className="text-ib-tertiaryy-100 size-5 lg:size-6" />
              <StarIcon className="text-ib-tertiaryy-100 size-5 lg:size-6" />
              <StarIcon className="text-ib-tertiaryy-100 size-5 lg:size-6" />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button
              className="size-16 rounded-full p-4 flex items-center justify-center"
              disabled
            >
              <ArrowLeftIcon className="text-ib-grey-200 size-8" />
            </button>
            <button className="size-16 rounded-full p-4 flex items-center justify-center border border-ib-grey-400">
              <ArrowLeftIcon className="text-ib-grey-950 size-8 rotate-180" />
            </button>
          </div>
        </div>
      </div>
      <div className="order-first lg:order-last w-full h-[610px] rounded-20 self-stretch bg-ib-primary flex items-center justify-center shadow-testimonial">
        <div className="size-24 lg:size-[180px] flex items-center justify-center p-5 rounded-20 border border-white/[0.26] bg-white/10 backdrop-blur-md shadow-star">
          <TestimonialStarIcon className="lg:size-[100px]" />
        </div>
      </div>
    </Section.Body>
  </Section>
);
