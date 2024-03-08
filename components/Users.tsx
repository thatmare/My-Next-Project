import Link from "next/link";
import { User } from "@/types/user.interface";

interface UsersProps {
  users: User[];
}

export default function Users({ users }: UsersProps) {
  return (
    <ul>
      {users.map((user: User) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <li className="bg-slate-800 my-6 max-w-md p-8 rounded-lg flex justify-between">
            <div>
              <h5 className="font-bold">
                {user.first_name} {user.last_name}
              </h5>
              <p>{user.email}</p>
            </div>
            <img src={user.avatar} className="rounded-full w-20"/>
          </li>
        </Link>
      ))}
    </ul>
  );
}
