"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { StartScreen } from "@/components/StartScreen";

// Helper to convert a File object to a data URL string
const fileToDataURL = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};

export const Home: React.FC = () => {
    const router = useRouter();

    const handleFileSelect = async (files: FileList | null) => {
        if (files && files[0]) {
            try {
                const dataUrl = await fileToDataURL(files[0]);
                sessionStorage.setItem("uploaded-image", dataUrl);
                router.push("/editor");
            } catch (error) {
                console.error("Failed to read file:", error);
                // You could add user-facing error handling here
            }
        }
    };

    return (
        <div className="min-h-screen text-gray-100 flex flex-col">
            <Header />
            <main className="flex-grow w-full max-w-[1600px] mx-auto p-4 md:p-8 flex justify-center items-center">
                <StartScreen onFileSelect={handleFileSelect} />
            </main>
        </div>
    );
};
