import { cn } from "@/utils/cn";
import { ComponentProps, PropsWithChildren } from "react";

type SectionProps = PropsWithChildren & {
  className?: string;
};
export const Section = ({
  children,
  className,
  ...props
}: ComponentProps<"section">) => (
  <section
    className={cn(
      "my-flex-col items-center py-10 gap-16 px-5 lg:px-[100px]",
      className,
    )}
    {...props}
  >
    {children}
  </section>
);

const SectionHeading = ({ children }: PropsWithChildren) => (
  <div className="my-flex-col gap-4 items-center text-center">{children}</div>
);

const SectionTitle = ({ children, className }: SectionProps) => (
  <h4 className={cn("text-ib-grey-950 text-h4-md lg:text-h3-md", className)}>
    {children}
  </h4>
);
const SectionColoredTitle = ({ children }: PropsWithChildren) => (
  <span className="text-gradient">{children}</span>
);
const SectionDescription = ({ children }: PropsWithChildren) => (
  <p className="text-ib-grey-300 text-body-1-reg lg:text-h6">{children}</p>
);

const SectionBody = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => (
  <div className={cn("my-flex-col", className)} {...props}>
    {children}
  </div>
);

Section.Heading = SectionHeading;
Section.Description = SectionDescription;
Section.Title = SectionTitle;
Section.ColoredTitle = SectionColoredTitle;
Section.Body = SectionBody;
