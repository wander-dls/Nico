import { Button } from "@/components/ui/button";


export default function Home() {
  return (
  <div>
    <h1 className="text-2xl underline">Welcome to my SaaS app</h1>
    <Button variant="default" className="pointer-fine:hover:cursor-pointer">
      Get Started
    </Button>
  </div>
  );
}
