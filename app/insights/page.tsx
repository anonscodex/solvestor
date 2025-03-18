"use client";

import { useState } from "react"; // eslint-disable-line no-unused-vars

export default function Insights() {
    const [tasks, setTasks] = useState<string>("");
    const [plan, setPlan] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://todoai-wn6s.onrender.com/plan-day`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ tasks }),
            });
            const data = await response.json();
            setPlan(data.plan);
        } catch (err) {
            setError("Failed to fetch analysis. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-screen">
            {/* Fixed Header */}
            <div className="p-4 md:p-8 bg-black">
                <div className="border border-gray-700 rounded-lg p-6 bg-[#1a1a1a]">
                    <h1 className="text-3xl font-bold mb-3 text-white">
                        Investment Insights
                    </h1>
                    <h5 className="text-gray-400 text-lg mb-6">
                        Get detailed analysis and insights about your Solana investments
                    </h5>
                    
                    <div className="mt-6">
                        <textarea
                            className="w-full p-4 border bg-gray-900 text-white border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
                            rows={4}
                            placeholder="Enter your investment goals and questions..."
                            value={tasks}
                            onChange={(e) => setTasks(e.target.value)}
                        />
                        <button
                            className={`font-bold px-6 py-2 rounded-md ${
                                isLoading 
                                    ? "bg-gray-500 text-gray-300 cursor-not-allowed" 
                                    : "bg-white text-black hover:bg-gray-300"
                            }`}
                            onClick={handleSubmit}
                            disabled={isLoading}
                        >
                            {isLoading ? "Analyzing..." : "Get Insights"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4 md:p-8">
                {isLoading && (
                    <div className="text-white mb-4">
                        <div className="dot-typing"></div>
                    </div>
                )}

                {error && <p className="text-red-500 mb-4">{error}</p>}

                {plan && (
                    <div className="border border-gray-700 rounded-lg p-6 bg-[#1a1a1a]">
                        <h2 className="text-xl font-semibold text-white mb-2">Analysis Results:</h2>
                        <pre className="text-white whitespace-pre-wrap overflow-x-auto">{plan}</pre>
                    </div>
                )}
            </div>
        </div>
    );
}
