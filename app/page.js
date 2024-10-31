
import { auth } from "@/auth";
import LoginForm from "@/components/LoginForm";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (session?.user) redirect("/dashboard");
  return (
    <div>
      <Link href={`signin`}>g</Link>
    </div>
  );
}