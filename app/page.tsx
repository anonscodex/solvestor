"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="flex justify-center items-center p-6">
        <Image
          src="/images/solvestor.png"
          alt="App Logo"
          width={120}
          height={1260}
          className="hover:opacity-80 transition-opacity"
        />
        
      </header>
      
      <main className="flex flex-col mb-24 items-center justify-center flex-1 p-6">
        <h1 className="text-5xl font-bold text-center">Decentralized AI Powered Investment Assistant</h1>
        <p className="mt-4 text-lg text-gray-400 text-center">
          Personalized insights, alerts, and sentiment analysis for Solana investors built on sonicSVM.
        </p>
        
        <button
          className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-300"
          onClick={() => router.push("/chat")}
        >
          Get Started →
        </button>
      </main>
    </div>
  );
}
