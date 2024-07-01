import { Section } from "@/ui/section";
import {
  AcademicCapIcon,
  IdentificationIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";
import { ReactNode } from "react";

export const EffortlessLearning = () => (
  <Section>
    <Section.Heading>
      <Section.Title>
        Effortless learning in your{" "}
        <Section.ColoredTitle>comfort</Section.ColoredTitle> zone
      </Section.Title>
      <Section.Description>
        Enjoy effortless learning from the comfort of your home. Our platform
        allows you to study at your own pace, anytime, anywhere.
      </Section.Description>
    </Section.Heading>

    <div className="my-flex-col gap-5">
      <div className="my-flex-col gap-5">
        <Learning
          icon={<IdentificationIcon className="text-current" />}
          title="Expert Instructors"
          text="Learn from industry leaders and experienced professionals who are passionate about teaching. Our instructors provide valuable insights and practical knowledge, guiding you through every step of your learning journey to ensure you gain the skills you need."
        />
        <Learning
          icon={<AcademicCapIcon className="text-current" />}
          title="Flexible Learning"
          text="Access courses anytime, anywhere, and study at your own pace to fit learning into your busy schedule seamlessly. Whether you're balancing work, family, or other commitments, our flexible learning options make it easy to continue your education without compromise."
        />
        <Learning
          icon={<LightBulbIcon className="text-current" />}
          title="Interactive content"
          text="Engage with dynamic and interactive materials, including videos, quizzes, and discussions, designed to enhance your learning experience.

"
        />
      </div>
    </div>
  </Section>
);

type LearningProps = {
  icon: ReactNode;
  title: string;
  text: string;
};
const Learning = ({ title, text, icon }: LearningProps) => (
  <div className="p-6 my-flex-col gap-3 rounded-20 bg-ib-blue-50">
    <span className="size-10 p-2 flex items-center justify-center rounded-full bg-ib-primary text-white">
      {icon}
    </span>
    <h5 className="text-left text-ib-grey-950 text-sub-headline-md">{title}</h5>
    <p className="text-left text-ib-grey-400 text-body-2">{text}</p>
  </div>
);
