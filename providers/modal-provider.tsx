"use client";

import { useEffect, useState } from "react";
import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) {
        return null;//stops hydration error(when client side ui and server side ui do not match)
    }

    return (
        <>
        <StoreModal />
        </>
    );
};