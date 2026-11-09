import { getCurrentUser } from "@/lib/auth";
import { Surface } from "@heroui/react";
import Link from "next/link";
import { Suspense } from "react";

export default async function MembersPage() {
  return (
    <div>
      <h3 className="text-2xl">Members page</h3>
      <Link href="/">Go back home</Link>
      <Suspense fallback={<div>Loading members...</div>}>
        <MemberContent />
      </Suspense>
    </div>
  );
}

async function MemberContent() {
  const user = await getCurrentUser();

  return (
    <div>
      {user ? (
        <Surface className="p-4 rounded-2xl">
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </Surface>
      ) : (
        <div>Not signed in</div>
      )}
    </div>
  );
}
