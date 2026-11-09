"use client";

import { authClient } from "@/lib/auth-client";
import { Dropdown, Label, Avatar } from "@heroui/react";
import { User } from "better-auth";
import { useRouter } from "next/navigation";

type Props = {
  user: User;
};

export default function UserMenu({ user }: Props) {
  const router = useRouter();

  const signOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
          router.refresh();
        },
      },
    });
  };

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Avatar>
          <Avatar.Image alt={user.name} src={user.name.charAt(0)} />
          <Avatar.Fallback>JD</Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Popover>
        <Dropdown.Menu>
          <Dropdown.Item id="edit-profile" textValue="Edit profile">
            <Label>Edit profile</Label>
          </Dropdown.Item>

          <Dropdown.Item
            id="logout"
            textValue="Logout"
            variant="danger"
            onClick={signOut}
          >
            <Label>Logout</Label>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
