import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export default async function Home() {
    const session = await auth();
  if (session?.user) redirect("/dashboard");
    return (
        <div className="flex flex-col justify-center items-center m-4">
            <h1 className="text-3xl my-3">Hey, time to Sign In</h1>
            <LoginForm />
        </div>
    );
}