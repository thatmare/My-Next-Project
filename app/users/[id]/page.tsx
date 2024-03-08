import { User } from "@/types/user.interface";

async function getUsers(id: string) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();

  return data.data;
}

export default async function UserPage({ params } : { params: User }) {
  const user = await getUsers(params.id);

  return (
    <div className="bg-pink-300 my-6 p-6 rounded-xl">
      <img src={user.avatar} alt="" className="rounded-full m-auto" />
      <h3 className="font-bold">
        {user.first_name} {user.last_name}
      </h3>
      <p>email: {user.email}</p>
    </div>
  );
}
