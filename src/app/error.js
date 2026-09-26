"use client";

export default function Error({ reset }) {
    return ( <
        main className = "min-h-screen bg-black px-6 py-20 text-white" >
        <
        div className = "mx-auto max-w-2xl text-center" >
        <
        p className = "mb-4 text-sm font-semibold tracking-[0.25em] text-[#ccff00]" >
        SOMETHING WENT WRONG <
        /p>

        <
        h1 className = "text-4xl font-black uppercase tracking-tight sm:text-6xl" >
        Something went wrong <
        /h1>

        <
        p className = "mx-auto mt-5 max-w-xl text-sm leading-6 text-white/60 sm:text-base" >
        We could not load this page right now.Please
        try again. <
        /p>

        <
        button onClick = {
            () => reset() }
        className = "mt-8 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-bold text-black transition hover:opacity-90" >
        Try Again <
        /button> <
        /div> <
        /main>
    );
}