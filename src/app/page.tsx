import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="h1-bold">
      <UserButton afterSignOutUrl="/"/>
      <h1 className="middleh1">Geist.</h1> <Button>Click me</Button></div>
  
  );
}
