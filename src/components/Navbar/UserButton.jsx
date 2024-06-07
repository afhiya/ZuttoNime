import Link from "next/link";
import { authUser } from "@/libs/auth-libs";

const UserButton = async() => {
    const user = await authUser()
    const actionLabel = user ? "Sign Out" : "Sign In";
    const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";

    return (
        <div className="flex gap-5 items-center md:text-md sm:text-sm text-xs">
            {user ? <Link href="/users/dashboard">Dashboard</Link> : null}
            <Link
                className="text-center border-2 border-color-dark-1 bg-color-dark-1 md:p-1.5 md:px-3 p-1 px-2 text-color-primary font-bold rounded-md hover:bg-color-secondary hover:text-color-dark-1 transition-all duration-150"
                href={actionUrl}
            >
                {actionLabel}
            </Link>
        </div>
    );
};

export default UserButton;
