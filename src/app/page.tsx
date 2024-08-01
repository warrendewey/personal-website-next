import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>
        <Link href="/projects/projectId">Daddy's home!</Link>
      </Button>
    </main>
  );
}
