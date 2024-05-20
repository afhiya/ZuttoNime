import Text from "@/components/Dashboard/Text"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import { authUser } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"

const Page = async () => {
    
    const user = await authUser()

    return (
        <div className="md:p-14 sm:p-10 p-6">
            <HeaderMenu Title="Dashboard" />
            <div className="flex flex-col gap-8 justify-center items-center p-5 bg-color-dark-3 ">
                <div className="flex sm:flex-row flex-col p-3 gap-5 items-center">
                    <Image src={user.image} alt="Image" width={100} height={100} className="rounded-full" />
                    <div className="text-color-primary">
                        <Text title="Name :" text={user.name} />
                        <Text title="Email :" text={user.email} />
                        <h2 className="text-center ">Sign in with {user.provider}</h2>
                    </div>
                </div>
                <div className="flex gap-5 m-2">
                    <div>
                        <Link href="/users/dashboard/collection" className="bg-color-secondary rounded-md md:p-3 p-2  md:text-md sm:text-sm text-xs text-bold hover:bg-color-dark-1 hover:text-color-primary transition-all " >My Collection</Link>
                    </div>
                    <div>
                        <Link href="/users/dashboard/comment" className="bg-color-secondary rounded-md md:p-3 p-2  md:text-md sm:text-sm text-xs text-bold hover:bg-color-dark-1 hover:text-color-primary transition-all " >My Comment</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page