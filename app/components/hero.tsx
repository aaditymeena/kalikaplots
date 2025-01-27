import React from "react";

export default function Hero() {
    return (
        <header
            className="bg-cover bg-center rounded-2xl overflow-hidden  "
            style={{
                backgroundImage:
                    "url('https://assets-global.website-files.com/65d96d247cdbea321b6baac5/65edf7206ef1975f6b1e8013_hero-v1-bg.png')",
            }}
        >
            <div className="px-5 md:px-10 max-w-7xl mx-auto py-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
                    {/* Left Content */}
                    <div>
                        <p className="text-base md:text-lg text-gray-600 mb-2">
                            Welcome to Airestates
                        </p>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                            Find Your Dream Home Today
                        </h1>
                        <p className="text-sm md:text-lg text-gray-600 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <div className="mt-6">
                            <div
                                className="hidden bg-red-100 p-4 rounded"
                                role="alert"
                            >
                                <p className="text-red-600">
                                    Oops! Something went wrong while submitting the form.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <img
                            src="https://cdn.prod.website-files.com/65d96d247cdbea321b6baac5/65edf7208dc418fda456ebd3_hero-v1.png"
                            alt="Airestates - Find Your Dream Home"
                            className="max-w-full rounded-lg lg:transform lg:scale-105 lg:translate-y-5 lg:-translate-x-10 object-cover"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
