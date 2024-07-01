import { Fragment, PropsWithChildren } from "react";

export const Heading = ({ children }: PropsWithChildren) => (
  <Fragment>{children}</Fragment>
);

// const HeadingTitle = () => <
// <h4 className="text-ib-grey-950 text-h4-md">
//   Discover, Learn, Succeed: Your{" "}
//   <span className="text-gradient">Path</span> Starts Here
// </h4>
// <p className="text-ib-grey-400 text-body-1-reg">
//   Experience the convenience of learning at your own pace, on your own
//   schedule, from anywhere in the world.
// </p>
