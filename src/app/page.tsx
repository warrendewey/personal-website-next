import { Button } from "@/components/ui/button";
import { Badge, Link } from "lucide-react";

export default function Home() {
  const projects: Array<string> = [
    "Jewelry",
    "Photography",
    "Apps",
    "Research",
    "Jobs",
  ];
  return (
    <div>
      {projects.map((project, idx) => (
        <Badge>
          key={"${project}-${idx}"}
          variant={"outline"}
          className="border-orange-800 text-gray-900 text-lg mx-2 my-1
          hover:cursor-pointer bg-orange-50 hover:scale-110 ease-in
          duration-200"
          {project}
        </Badge>
      ))}
    </div>
  );
}
