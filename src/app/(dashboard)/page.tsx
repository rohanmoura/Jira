import { getCurrent } from "@/features/auth/actions";
import UserButton from "@/features/auth/components/user-button";
import { redirect } from "next/navigation";






export default async function Home() {

  const user = await getCurrent();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <pre>
      This is a home page
    </pre>
  );
}














// email
// : 
// "convex@gmail.com"
// name
// : 
// "convex"
// password
// : 
// "Convex789456"
// voomboom@gmail.com
// VoomBoom123456