"use client";
import { useEffect, useState } from "react";
import bgAnimation from '@/public/waveloop.json'; 
import Lottie from "lottie-react";
import PIN_DATA from "@/app/data/F746ZG"
import Link from "next/link";

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
    <div className="relative min-h-screen bg-zinc-100 p-[1vh] flex flex-col items-center font-mono">
  
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
      <div className="fixed bottom-0 left-0 w-[50vw] z-0 pointer-events-none opacity-15">
          <Lottie 
            animationData={bgAnimation} 
            loop={true} 
          />
      </div>

      {/* KOMPONENT HEADER / LOGO APKI */}
      <div className="w-full max-w-4xl flex flex-col sm:flex-row justify-between items-center mb-4 px-4 py-4 sm:py-2 border-b-2 border-zinc-300 gap-4 sm:gap-0">
        
        {/* LEWA STRONA: LOGO */}
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
          <h1 className="text-xl font-black tracking-tighter text-zinc-800">
            NUCLEO<span className="text-blue-600">MAP</span>
          </h1>
        </div>
        
        {/* PRAWA STRONA: INFO I LINK */}
        <div className="text-[10px] text-zinc-500 text-center sm:text-right flex flex-col items-center sm:items-end gap-1">
          <div className="leading-tight">
            <p>STM32_PINOUT_VIEWER</p>
            <p className="font-bold">BOARD: F746ZG</p> 
          </div>

          <Link href="https://rumcajzdev.pl/" target="_blank" className="mt-1">
            <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
              <span className="text-[9px] sm:text-md text-muted-foreground tracking-wide">
                Developed by <span className="font-semibold">rumcajzdev</span>
              </span>
              <img
                src="/rumcajzdevlogowhite.png"
                alt="RumcajzDev Logo"
                className="w-6 h-6 object-contain invert" 
              />
            </div>
          </Link>
        </div>
      </div>

      {/* KOMPONENT INSTRUKCJI - ESTETYCZNY STATUS BAR */}
      <div className="w-full max-w-4xl mb-4 px-4 py-3 bg-white/50 backdrop-blur-sm rounded-md border border-zinc-200 shadow-sm flex flex-wrap items-center justify-between text-[11px] font-medium tracking-tight">
        
        {/* LEWA STRONA: PODPOWIEDZI */}
        <div className="flex items-start gap-4 text-zinc-500 flex-col sm:flex-row m-auto sm:m-0">
          <div className="flex items-center gap-2">
            <span className="bg-zinc-800 text-white text-[9px] px-1.5 py-0.5 rounded uppercase font-black tracking-widest">Search</span>
            <span>Min. 2 znaki</span>
          </div>

          <div className="h-4 w-px bg-zinc-300 hidden sm:block" /> {/* Separator */}

          <div className="flex items-center gap-2">
            <span className="bg-blue-600 text-white text-[9px] px-1.5 py-0.5 rounded uppercase font-black tracking-widest">STRICT</span>
            <span>Użyj cudzysłowa <code className="text-blue-700 font-bold">"PA4"</code></span>
          </div>
        </div>

        {/* PRAWA STRONA: LEGENDA */}
        <div className="flex items-center gap-5 mt-2 sm:mt-0 border-t sm:border-t-0 border-zinc-200 pt-2 sm:pt-0 w-full sm:w-auto  justify-around">
          <div className="flex items-center gap-2 ">
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
      <div className="relative z-10 w-full flex flex-col items-center">

        {/* BACKDROP / GLOW EFFECT */}
        <div className="absolute inset-0 bg-blue-500/10 blur-[60px] rounded-full scale-75 pointer-events-none" />

        {/* SZUKAJKA CONTAINER */}
        <div className="flex justify-center mb-6 relative w-full px-4">
          <div className="relative w-full max-w-[18rem]">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border text-black text-center border-zinc-300 px-4 py-2 text-base shadow-inner outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all bg-white relative z-10"
            />
            {search === "" && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                <span key={placeholderIndex} className="text-zinc-400 italic font-light text-sm animate-placeholder">
                  np. {examples[placeholderIndex]}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* KONTENER PŁYTKI */}
        <div className="
            relative 
            flex flex-nowrap gap-2 sm:gap-[1vw] 
            bg-[#BEC3C9] 
            p-2 sm:p-6 
            rounded-xl 
            shadow-[0_20px_50px_rgba(0,0,0,0.3),0_0_30px_rgba(59,130,246,0.1)]
            border border-zinc-400/50
            backdrop-blur-sm
            scale-[0.8]
            [@media(min-width:400px)]:scale-[0.9]
            [@media(max-width:300px)]:scale-[0.6]  
            sm:scale-100
            origin-top
            transition-transform duration-300
          ">
        
          {[PIN_DATA.left, PIN_DATA.right].map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col justify-between gap-2 sm:gap-[0.9rem]">
              {column.map((conn) => (
                <div key={conn.id} className="relative bg-[#D1D5DB] p-1 pt-4 sm:p-1 sm:pt-4 rounded-sm border border-zinc-400">
                  <span className="absolute -top-2 left-2 font-bold text-[0.6rem] sm:text-[0.8rem] text-zinc-700 bg-[#D1D5DB] px-1 border border-zinc-400">
                    {conn.id}
                  </span>
        
                  {conn.rows.map((row, i) => {
                    const matchP1 = isMatch(row.p1);
                    const matchP2 = isMatch(row.p2);

                    return (
                      <div key={i} className={`flex items-center h-[1.1rem] sm:h-[1.4rem] text-[0.55rem] sm:text-[0.7rem] font-bold ${(matchP1 || matchP2) ? 'bg-yellow-300/50 transition-all duration-250' : ''}`}>

                        {/* LEWA ETYKIETA */}
                        <div className="flex w-16 sm:w-24 justify-end items-center pr-1 sm:pr-2 gap-1">
                          <span className="w-8 sm:w-10 text-right truncate" style={{ color: getHex(row.colors[0]) }}>{row.p1[1]}</span>
                          <span className="w-10 sm:w-[2.8rem] text-right" style={{ color: getHex(row.colors[0]) }}>{row.p1[0]}</span>
                        </div>

                        {/* PIN 1 i 2 */}
                        <div className={` transition-all duration-250 w-4 h-4 sm:w-6 sm:h-6 shrink-0 flex items-center justify-center text-white border border-black/30 rounded-[1px] text-[0.5rem] sm:text-[0.7rem] ${matchP1 ? 'scale-125 ring-1 ring-black z-10' : ''}`} style={{ backgroundColor: getHex(row.colors[0]) }}>{row.ids[0]}</div>
                        <div className={`transition-all duration-250 w-4 h-4 sm:w-6 sm:h-6 shrink-0 flex items-center justify-center text-white border border-black/30 rounded-[1px] text-[0.5rem] sm:text-[0.7rem] ${matchP2 ? 'scale-125 ring-1 ring-black z-10' : ''}`} style={{ backgroundColor: getHex(row.colors[1]) }}>{row.ids[1]}</div>

                        {/* PRAWA ETYKIETA */}
                        <div className="flex w-16 sm:w-24 justify-start items-center pl-1 sm:pl-2 gap-1">
                          <span className="w-10 sm:w-[2.8rem] text-left" style={{ color: getHex(row.colors[1]) }}>{row.p2[0]}</span>
                          <span className="w-8 sm:w-10 text-left truncate" style={{ color: getHex(row.colors[1]) }}>{row.p2[1]}</span>
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