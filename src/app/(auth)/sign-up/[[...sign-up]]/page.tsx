import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-bl from-gray-900 via-[#300171fc] to-slate-900">
    <SignUp />
    </div>;
}