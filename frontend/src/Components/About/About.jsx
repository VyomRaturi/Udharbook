import React, { useState, useEffect } from "react";

export function useTypewriter(texts, speed = 150) {
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const currentText = texts[index % texts.length];
        let charIndex = 0;

        const type = () => {
            if (charIndex < currentText.length) {
                setDisplayText((prev) => prev + currentText[charIndex]);
                charIndex++;
                setTimeout(type, speed);
            } else {
                setTimeout(() => {
                    setDisplayText("");
                    setIndex((prev) => prev + 1);
                }, 1000);
            }
        };

        type();

        return () => setDisplayText("");
    }, [index, texts, speed]);

    return displayText;
}

function About() {
    const introTexts = ["MANAGE YOUR EXPENSES"];
    const animatedText = useTypewriter(introTexts);

    return (
        <div className="flex gap-6 justify-between items-center max-md:flex-wrap max-xl:justify-center">
            
            <div className="w-1/2 max-xl:w-full text-left max-md:text-center">
                <h1 className="text-5xl max-md:text-4xl mb-5 h-20 text-white transition-transform duration-300 hover:translate-x-2 hover:-translate-y-1">
                    <span className="text-accent-primary">{animatedText}</span>
                </h1>
                <section className="hero bg-light-pink py-10">
                    <div className="container mx-auto">
                        <h1 className="text-4xl font-bold text-white">MANAGE EXPENSES WITH EASE</h1>
                        <p className="text-lg text-white mt-4">Effortlessly track expenses and manage accounts with udhaarBOOK.</p>
                        
                        <button className="bg-purple-500 text-white px-6 py-3 mt-6 rounded-lg text-lg hover:bg-purple-600 transition duration-300">
                            Get Started
                        </button>
                    </div>
                </section>
            </div>

            
            <div className="w-1/2 max-xl:w-full flex justify-center relative">
                <div className="relative w-full h-full flex justify-center items-center">
                    <img
                        src="/Public/analyze.svg"
                        alt="analyze SVG"
                        className="absolute top-1/8 right-1/2 transform transition-transform duration-300 hover:scale-110"
                        style={{ width: "40%", maxWidth: "400px" }}
                    />
                    <img
                        src="/Public/analytics.svg"
                        alt="Decorative SVG"
                        className="absolute top-1/3 right-1/4 transform transition-transform duration-300 hover:scale-110"
                        style={{ width: "50%", maxWidth: "450px" }}
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
