export default function AuthLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex justify-center items-center h-full ">
            {children}
        </div>
    )
}

// This Layout page will be carried down all the Auth Pages(sign in, sign up, etc).