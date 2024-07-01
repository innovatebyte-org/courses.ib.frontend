import { VerifyAccountPage } from "@/components/(auth)/verify-account";

export default function VerifyAccount({
  params: { email },
}: {
  params: { email: string };
}) {
  return <VerifyAccountPage email={email as string} />;
}
