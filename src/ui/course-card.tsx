import { Stroke1Bar, Stroke2Bar, Stroke3Bar } from "@/assets/icons";
import { cn } from "@/utils/cn";
import { StarIcon } from "@heroicons/react/20/solid";
import {
  BuildingOfficeIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";
import { PropsWithChildren, ReactNode } from "react";

export const CourseCard = ({ children }: PropsWithChildren) => (
  <div className="w-full rounded-20 gap-5 flex flex-col items-center self-stretch pb-5 bg-white overflow-hidden hover:shadow-course">
    {children}
  </div>
);

const CourseHeading = ({
  coverImage,
  tutor: { image, name },
}: {
  coverImage: StaticImageData;
  tutor: {
    image: ReactNode;
    name: string;
  };
}) => (
  <div
    className="h-[220px] w-full relative overflow-hidden"
  // style={{ backgroundImage: `url(${coverImage.src})` }}
  >
    <Image
      src={coverImage.src}
      alt="Course Cover"
      fill
      className="w-full h-full object-center object-cover hover:scale-125 transition-all duration-500 ease-out"
    />
    <div className="absolute bottom-2 left-6 inline-flex p-1 items-center justify-center gap-1.5 rounded-full bg-black/50">
      <span className="size-6 rounded-full bg-white flex items-center justify-center">
        {image}
      </span>
      <p className="text-white text-special-1">{name}</p>
    </div>
  </div>
);

const CourseContent = ({ children }: PropsWithChildren) => (
  <div className="px-4 w-full flex flex-col gap-4 items-start">{children}</div>
);

const CoursePrice = ({ price }: { price: string }) => (
  <p className="text-ib-accent-100 text-body-1-sb">₦ {price}</p>
);

const CourseTitle = ({ title }: { title: string }) => (
  <h6 className="text-ib-grey-950 line-clamp-2 text-h6-md">{title}</h6>
);

const CourseRate = ({
  level,
  rate,
}: {
  level: "beginner" | "intermediate" | "expert";
  rate: number;
}) => (
  <div className="w-full flex justify-between items-start self-stretch">
    <div className="flex items-center gap-3">
      <div className="flex items-end gap-[5px]">
        <Stroke1Bar className="text-ib-primary" />
        <Stroke2Bar
          className={cn("text-ib-blue-100", {
            "text-ib-primary": level === "intermediate" || level === "expert",
          })}
        />
        <Stroke3Bar
          className={cn("text-ib-blue-100", {
            "text-ib-primary": level === "expert",
          })}
        />
      </div>
      <span className="text-ib-grey-600 text-body-2 capitalize">{level}</span>
    </div>

    <div className="flex items-center gap-3">
      <StarIcon className="size-5 text-ib-accent-100" />
      <span className="text-ib-grey-600 text-body-2">{rate}</span>
    </div>
  </div>
);

const CourseInfo = ({
  noOfModules,
  hours,
  category,
}: {
  noOfModules: number;
  hours: number;
  category: string;
}) => (
  <div className="flex items-start gap-6">
    <div className="flex items-center gap-2">
      <ClipboardDocumentListIcon className="size-5 text-ib-grey-500" />
      <span className="text-ib-grey-500 text-special-1">
        {noOfModules} Modules
      </span>
    </div>
    <div className="flex items-center gap-2">
      <ClockIcon className="size-5 text-ib-grey-500" />
      <span className="text-ib-grey-500 text-special-1">{hours} Hours</span>
    </div>
    <div className="flex items-center gap-2">
      <BuildingOfficeIcon className="size-5 text-ib-grey-500" />
      <span className="text-ib-grey-500 text-special-1 capitalize">
        {category}
      </span>
    </div>
  </div>
);

CourseCard.Heading = CourseHeading;
CourseCard.Content = CourseContent;
CourseCard.Price = CoursePrice;
CourseCard.Title = CourseTitle;
CourseCard.Rate = CourseRate;
CourseCard.Info = CourseInfo;
