"use client";

import { ChatWindow } from "@/components/ChatWindow";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    const InfoCard = (
        <div className="p-4 md:p-8 rounded bg-black w-full max-h-[85%] overflow-hidden">
            <div className="border border-gray-700 rounded-lg p-6 bg-[#1a1a1a]">
                <h1 className="text-3xl font-bold mb-3 text-white">
                    Solvestor terminal
                </h1>
                <h5 className="text-gray-400 text-lg mb-6">
                    Perform onchain actions here by chatting with the AI
                </h5>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {/* Current Terminal Card */}
                    <div className="border border-gray-700 rounded-lg p-4 bg-gray-900 hover:bg-[#2a2a2a] transition-colors">
                        <h3 className="text-xl font-semibold text-white mb-2">
                            💻 Terminal Actions
                        </h3>
                        <p className="text-gray-400">
                            Execute transactions and manage your assets
                        </p>
                    </div>
                    
                    {/* Investment Insights Card */}
                    <div 
                        className="border border-gray-700 rounded-lg p-4 bg-[#252525] hover:bg-[#2a2a2a] transition-colors cursor-pointer"
                        onClick={() => router.push("/insights")}
                    >
                        <h3 className="text-xl font-semibold text-white mb-2">
                            📊 Investment Insights
                        </h3>
                        <p className="text-gray-400">
                            Get detailed analysis and market insights
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
    return (
        <ChatWindow
            endpoint="api/chat"
            emoji="🤖"
            titleText="Solana agent"
            placeholder="I'm your friendly Solana agent! Ask me anything..."
            emptyStateComponent={InfoCard}
        ></ChatWindow>
    );
}