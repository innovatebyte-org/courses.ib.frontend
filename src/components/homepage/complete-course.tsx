import { Section } from "@/ui/section";
import { UserGroupIcon } from "@heroicons/react/20/solid";

export const CompleteCourse = () => (
  <Section className="bg-ib-blue-600">
    <Section.Body className="gap-5">
      <div className="my-flex-col gap-9 justify-center">
        <div className="my-flex-col gap-4 self-stretch">
          <h4 className="text-white text-h4-md lg:text-h2-md">
            Complete your course and receive your certificate immediately
          </h4>
          <p className="text-ib-grey-100 text-sub-headline lg:text-h6">
            Showcase your new skills and knowledge right away to boost your
            resume and advance your career. Use your certification to impress
            potential employers and open doors to new job opportunities.
          </p>
        </div>
        <div className="flex justify-center items-center gap-4 self-stretch">
          <div className="flex items-center justify-center -space-x-5">
            <div className="size-[52px] rounded-full border border-white"></div>
            <div className="size-[52px] rounded-full border border-white"></div>
            <div className="size-[52px] rounded-full border border-white"></div>
            <div className="size-[52px] rounded-full border border-white"></div>
            <div className="size-[52px] rounded-full border border-white hidden lg:flex"></div>
            <div className="size-[52px] rounded-full border border-white hidden lg:flex"></div>
            <div className="size-[52px] rounded-full border border-white hidden lg:flex"></div>
            <div className="size-[52px] rounded-full border border-white hidden lg:flex items-center justify-center bg-[#EFEFFD]">
              <UserGroupIcon className="size-7 text-[#4B4EEC]" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-h6-md text-white">20+</p>
            <span className="text-ib-grey-100 text-special-2-reg">
              Certified learners across various fields
            </span>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#CCDDF6] relative overflow-hidden h-[570px] lg:h-[647px] rounded-20"></div>
    </Section.Body>
  </Section>
);
