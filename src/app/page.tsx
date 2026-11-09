import { Button } from "@heroui/react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl text-red-300">Hello World!</h1>
      <Button>
        <Link href={"/members"}>
          Click me
        </Link>
      </Button>
    </div>
  );
}
