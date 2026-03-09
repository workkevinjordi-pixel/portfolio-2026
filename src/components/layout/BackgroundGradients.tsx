export function BackgroundGradients() {
    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden flex items-center justify-center">
            {/* 
              This creates the wide horizontal stripe behind the center of the screen.
              Decreased the blur and increased the opacity to make the colors much more defined and clear.
            */}
            <div
                className="w-[120vw] h-[20vh] md:h-[30vh] bg-gradient-to-r from-teal/60 via-teal/40 to-lime/60 mix-blend-screen filter blur-[60px] md:blur-[80px] opacity-70 -rotate-12 transform scale-150"
            ></div>
        </div>
    );
}
