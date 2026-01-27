"use client";
import { useEffect, useState } from "react";
import bgAnimation from '@/public/waveloop.json'; 
import Lottie from "lottie-react";
import PIN_DATA from "@/app/data/F746ZG"

export default function Home() {
  const [search, setSearch] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  

  const examples = ["PA4", "GND", "PC13", "VIN", "RESET", '"PB0"'];
  const colors = { pink: "#E6007E", blue: "#003399"};
  const s = search.trim().toLowerCase();


  const isMatch = (labels: any[]) => {
    if (s.length === 0) return false;
    const isQuoted = s.startsWith('"') && s.endsWith('"');
    
    if (isQuoted) {
      const exactQuery = s.slice(1, -1);
      return labels.some(label => label?.toString().toLowerCase() === exactQuery);
    }
    if (s.length < 2) return false;
  
    return labels.some(label => {
      const txt = label?.toString().toLowerCase();
      return txt === s || txt?.includes(s);
    });
  };
  const getHex = (c: string) => (c === "pink" ? colors.pink : colors.blue);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % examples.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="overflow-x-hidden relative min-h-screen bg-zinc-100 p-[1vh] flex flex-col items-center font-mono">
  
     <style>{`
      @keyframes fadeSlide {
        0% { opacity: 0; transform: translateY(8px); }
        15% { opacity: 1; transform: translateY(0); }
        85% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-8px); }
      }
      .animate-placeholder {
        animation: fadeSlide 4s ease-in-out infinite;
      }
    `}</style>

    {/* TŁO 1 - TEKSTURA NA CAŁĄ STRONĘ */}
    <div 
      className="fixed inset-0 z-0 opacity-[0.08] pointer-events-none"
      style={{
        backgroundImage: `url('/bg2.jpg')`, 
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100vh', 
        backgroundPositionX: "50vw"
      }}
    />

    {/* TŁO 2 - TEKSTURA NA CAŁĄ STRONĘ */}
    <div className="fixed bottom-0 left-0 w-[50vw] z-[0] pointer-events-none opacity-15">
        <Lottie 
          animationData={bgAnimation} 
          loop={true} 
        />
    </div>

      {/* KOMPONENT HEADER / LOGO APKI */}
      <div className="w-full max-w-4xl flex items-center justify-between mb-4 px-4 py-2 border-b-2 border-zinc-300">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
          <h1 className="text-xl font-black tracking-tighter text-zinc-800">
            NUCLEO<span className="text-blue-600">MAP</span>
          </h1>
        </div>
        <div className="text-[10px] text-zinc-500 text-right hidden sm:block">
          <p>STM32_PINOUT_VIEWER</p>
          <p className="font-bold">BOARD: F746ZG</p>
        </div>
      </div>

      {/* KOMPONENT INSTRUKCJI - ESTETYCZNY STATUS BAR */}
      <div className="w-full max-w-4xl mb-4 px-4 py-3 bg-white/50 backdrop-blur-sm rounded-md border border-zinc-200 shadow-sm flex flex-wrap items-center justify-between text-[11px] font-medium tracking-tight">
        
        {/* LEWA STRONA: PODPOWIEDZI */}
        <div className="flex items-center gap-4 text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="bg-zinc-800 text-white text-[9px] px-1.5 py-0.5 rounded uppercase font-black tracking-widest">Search</span>
            <span>Min. 2 znaki</span>
          </div>

          <div className="h-4 w-[1px] bg-zinc-300 hidden sm:block" /> {/* Separator */}

          <div className="flex items-center gap-2">
            <span className="bg-blue-600 text-white text-[9px] px-1.5 py-0.5 rounded uppercase font-black tracking-widest">STRICT</span>
            <span>Użyj cudzysłowa <code className="text-blue-700 font-bold">"PA4"</code></span>
          </div>
        </div>

        {/* PRAWA STRONA: LEGENDA */}
        <div className="flex items-center gap-5 mt-2 sm:mt-0 border-t sm:border-t-0 border-zinc-200 pt-2 sm:pt-0 w-full sm:w-auto">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full border border-black/10 bg-[#E6007E]" />
              <span className="text-zinc-600 uppercase">Arduino</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full border border-black/10 bg-[#003399]" />
              <span className="text-zinc-600 uppercase">Morpho</span>
            </div>
          </div>
        </div>
      </div>

      {/* KOMPONENT GŁÓWNY - PINOUT */}
      <div className="z-999">

        {/* BACKDROP / GLOW EFFECT - warstwa pod płytką */}
        <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full scale-90 pointer-events-none" />

        {/* SZUKAJKA CONTAINER */}
        <div className="flex justify-center mb-[2vh] relative">
              <div className="relative w-[18rem]">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="
                    w-full rounded-2xl border text-black text-center
                    border-zinc-300 px-[1rem] py-[0.5rem] text-[1rem] 
                    shadow-inner outline-none focus:border-blue-400 
                    focus:ring-2 focus:ring-blue-100 transition-all 
                    bg-white relative z-10
                  "
                />
                {search === "" && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                    <span 
                      key={placeholderIndex} 
                      className="text-zinc-400 italic font-light text-[0.8rem] animate-placeholder"
                    >
                      np. {examples[placeholderIndex]}
                    </span>
                  </div>
                )}
              </div>
        </div>

        {/* KONTENER PŁYTKI */}
        <div className="
              relative
              flex gap-[1vw] 
              bg-[#BEC3C9] 
              p-[1.5rem] 
              rounded-xl 
              /* Wyraźny cień (shadow-2xl) + subtelna niebieska poświata (ring) */
              shadow-[0_20px_50px_rgba(0,0,0,0.3),0_0_30px_rgba(59,130,246,0.1)]
              border border-zinc-400/50
              backdrop-blur-sm
              w-[90vw]        
              max-w-fit        
              min-w-fit        
              overflow-x-auto  
              justify-center   
              transition-all
              duration-500
            ">
        
          {[PIN_DATA.left, PIN_DATA.right].map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col justify-between gap-[0.9rem]">
              {column.map((conn) => (
                <div key={conn.id} className="relative bg-[#D1D5DB] p-[0.25rem] pt-[1rem] rounded-sm border border-zinc-400">
                  <span className="absolute -top-[0.5rem] left-[1.25rem] font-bold text-[0.8rem] text-zinc-700 bg-[#D1D5DB] px-[0.25rem] border border-zinc-400">
                    {conn.id}
                  </span>
        
                  {conn.rows.map((row, i) => {
                    const matchP1 = isMatch(row.p1);
                    const matchP2 = isMatch(row.p2);

                    return (
                      <div key={i} className={`flex items-center h-[1.4rem] text-[0.7rem] font-bold leading-none ${(matchP1 || matchP2) ? 'bg-yellow-300/50' : ''}`}>

                        {/* LEWA ETYKIETA (p1) */}
                        <div className="flex w-24 justify-end items-center pr-[0.5rem] gap-[0.4rem]">
                          <span className="w-[2.5rem] text-right overflow-hidden text-ellipsis" style={{ color: getHex(row.colors[0]) }}>
                            {row.p1[1]}
                          </span>
                          <span className="w-[2.8rem] text-right" style={{ color: getHex(row.colors[0]) }}>
                            {row.p1[0]}
                          </span>
                        </div>

                        {/* PIN 1 */}
                        <div
                          className={`w-6 h-6 shrink-0 flex items-center justify-center text-white border border-black/30 rounded-[1px] text-[0.7rem] transition-transform ${matchP1 ? 'scale-125 ring-1 ring-black z-10' : 'opacity-90'}`}
                          style={{ backgroundColor: getHex(row.colors[0]) }}
                        >
                          {row.ids[0]}
                        </div>

                        {/* PIN 2 */}
                        <div
                          className={`w-6 h-6 shrink-0 flex items-center justify-center text-white border border-black/30 rounded-[1px] text-[0.7rem] transition-transform ${matchP2 ? 'scale-125 ring-1 ring-black z-10' : 'opacity-90'}`}
                          style={{ backgroundColor: getHex(row.colors[1]) }}
                        >
                          {row.ids[1]}
                        </div>

                        {/* PRAWA ETYKIETA (p2) */}
                        <div className="flex w-24 justify-start items-center pl-2 gap-[0.4rem]">
                          <span className="w-[2.8rem] text-left" style={{ color: getHex(row.colors[1]) }}>
                            {row.p2[0]}
                          </span>
                          <span className="w-10 text-left overflow-hidden text-ellipsis" style={{ color: getHex(row.colors[1]) }}>
                            {row.p2[1]}
                          </span>
                        </div>

                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          ))}
        </div>
  
      </div>

    </div>
  );
}