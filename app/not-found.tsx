"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

function NotFound() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/");
        }, 3000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl mb-6">Oops! The page you’re looking for doesn’t exist.</p>
            <p className="text-gray-600">Redirecting to homepage in 3 seconds...</p>
        </div>
    );
}

export default NotFound