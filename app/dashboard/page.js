import { auth } from "@/auth";
import { redirect } from "next/navigation";
import UserInfo from "@/components/UserInfo";
import DataManagement from "@/components/DataManagement";
import PermissionsControl from "@/components/PermissionsControl";

const DashboardPage = async () => {
    const session = await auth();

    if (!session?.user) redirect("/");

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

            {/* User Info Section */}
            <UserInfo user={session.user} />

            {/* Data Management Section */}
            <div className="my-6">
                <h2 className="text-xl font-semibold mb-3">Your Data</h2>
                <DataManagement />
            </div>

            {/* Permissions Control Section */}
            <div className="my-6">
                <h2 className="text-xl font-semibold mb-3">Manage Permissions</h2>
                <PermissionsControl />
            </div>
        </div>
    );
};

export default DashboardPage;
