import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <div className="flex min-h-screen w-full items-center justify-center dark:bg-gradient-to-bl dark:from-gray-900 dark:via-[#300171fc] dark:to-slate-900">
    <SignIn />
    </div>
}