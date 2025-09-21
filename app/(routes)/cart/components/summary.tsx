"use client";
import axios from "axios";
import { useEffect } from "react";
import { UserSearch } from "lucide-react";
import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";

const Summary= () => {
    return(
        <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:mt-0 lg:p-8">
           <h2 className="text-lg font-medium text-gray-900">
            Order Summary
            </h2> 
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                </div>
            </div>
        </div>
    )
};
export default Summary;