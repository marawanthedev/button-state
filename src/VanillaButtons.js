import { useEffect } from "react";

export default function VanillaButtons() {
    useEffect(() => {
        // ❌ Shared state for ALL buttons
        let count = 0;

        const buttons = document.querySelectorAll(".vanilla-shared-btn");

        buttons.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                count += 1;
                btn.textContent = `Clicked: ${count}`;
            });
        });

        // Cleanup on unmount
        return () => {
            buttons.forEach((btn) => {
                const newBtn = btn.cloneNode(true);
                btn.parentNode.replaceChild(newBtn, btn);
            });
        };
    }, []);

    return (
        <div className="container">
            <button className="vanilla-shared-btn" style={{ margin: "10px" }}>
                Clicked: 0
            </button>
            <button className="vanilla-shared-btn" style={{ margin: "10px" }}>
                Clicked: 0
            </button>
            <button className="vanilla-shared-btn" style={{ margin: "10px" }}>
                Clicked: 0
            </button>
        </div>
    );
}
