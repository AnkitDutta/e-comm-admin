import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation";
import { SettingsForm } from "./components/settings-form";

interface SettingsPageProps {
    params: {
        storeId: string,
    }
};

const SettingsPage: React.FC<SettingsPageProps> = async ({params}) => {
    const {userId} = auth();

    if(!userId)
        redirect("/sign-in");

    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId,
            userId
        }
    });

    //This next if clause if to protect from random user written store-id which should not open any store.
    if(!store)
        redirect("/"); 

    
  return (
    <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
            <SettingsForm initialData={store}/>
        </div>
    </div>
  )
}

export default SettingsPage;
