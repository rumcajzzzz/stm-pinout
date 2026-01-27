"use client";
import { useEffect, useState } from "react";
import bgAnimation from '@/public/waveloop.json'; 
import Lottie from "lottie-react";

// --- DANE PINÓW (JSON) ---
const PIN_DATA = {
  left: [
    {
      id: "CN8",
      rows: [
        { p1: ["NC", "NC"], p2: ["D43", "PC8"], ids: [1, 2], colors: ["pink", "blue"] },
        { p1: ["IOREF", "IOREF"], p2: ["D44", "PC9"], ids: [3, 4], colors: ["pink", "blue"] },
        { p1: ["RESET", "RESET"], p2: ["D45", "PC10"], ids: [5, 6], colors: ["pink", "blue"] },
        { p1: ["+3V3", "+3V3"], p2: ["D46", "PC11"], ids: [7, 8], colors: ["pink", "blue"] },
        { p1: ["+5V", "+5V"], p2: ["D47", "PC12"], ids: [9, 10], colors: ["pink", "blue"] },
        { p1: ["GND", "GND"], p2: ["D48", "PD2"], ids: [11, 12], colors: ["pink", "blue"] },
        { p1: ["GND", "GND"], p2: ["D49", "PG2"], ids: [13, 14], colors: ["pink", "blue"] },
        { p1: ["VIN", "VIN"], p2: ["D50", "PG3"], ids: [15, 16], colors: ["pink", "blue"] }
      ]
    },
    {
      id: "CN9",
      rows: [
        { p1: ["PA3", "A0"], p2: ["D51", "PD7"], ids: [1, 2], colors: ["pink", "blue"] },
        { p1: ["PC0", "A1"], p2: ["D52", "PD6"], ids: [3, 4], colors: ["pink", "blue"] },
        { p1: ["PC3", "A2"], p2: ["D53", "PD5"], ids: [5, 6], colors: ["pink", "blue"] },
        { p1: ["PF3", "A3"], p2: ["D54", "PD4"], ids: [7, 8], colors: ["pink", "blue"] },
        { p1: ["PF5", "A4"], p2: ["D55", "PD3"], ids: [9, 10], colors: ["pink", "blue"] },
        { p1: ["PF10", "A5"], p2: ["GND", "GND"], ids: [11, 12], colors: ["pink", "blue"] },
        // Od pinu 13 dla CN9 przechodzimy na same granatowe (blue)
        { p1: ["NC", "D72"], p2: ["D56", "PE2"], ids: [13, 14], colors: ["blue", "blue"] },
        { p1: ["PA7", "D71"], p2: ["D57", "PE4"], ids: [15, 16], colors: ["blue", "blue"] },
        { p1: ["PF2", "D70"], p2: ["D58", "PE5"], ids: [17, 18], colors: ["blue", "blue"] },
        { p1: ["PF1", "D69"], p2: ["D59", "PE6"], ids: [19, 20], colors: ["blue", "blue"] },
        { p1: ["PF0", "D68"], p2: ["D60", "PE3"], ids: [21, 22], colors: ["blue", "blue"] },
        { p1: ["GND", "GND"], p2: ["D61", "PF8"], ids: [23, 24], colors: ["blue", "blue"] },
        { p1: ["PD0", "D67"], p2: ["D62", "PF7"], ids: [25, 26], colors: ["blue", "blue"] },
        { p1: ["PD1", "D66"], p2: ["D63", "PF9"], ids: [27, 28], colors: ["blue", "blue"] },
        { p1: ["PG0", "D65"], p2: ["D64", "PG1"], ids: [29, 30], colors: ["blue", "blue"] }
      ]
    }
  ],
  right: [
    {
      id: "CN7",
      rows: [
        // Parzyste (p2) są różowe przez cały CN7
        { p1: ["PC6", "D16"], p2: ["D15", "PB8"], ids: [1, 2], colors: ["blue", "pink"] },
        { p1: ["PB15", "D17"], p2: ["D14", "PB9"], ids: [3, 4], colors: ["blue", "pink"] },
        { p1: ["PB13", "D18"], p2: ["AVDD", "AVDD"], ids: [5, 6], colors: ["blue", "pink"] },
        { p1: ["PB12", "D19"], p2: ["GND", "GND"], ids: [7, 8], colors: ["blue", "pink"] },
        { p1: ["PA15", "D20"], p2: ["D13", "PA5"], ids: [9, 10], colors: ["blue", "pink"] },
        { p1: ["PC7", "D21"], p2: ["D12", "PA6"], ids: [11, 12], colors: ["blue", "pink"] },
        { p1: ["PB5", "D22"], p2: ["D11", "PA7"], ids: [13, 14], colors: ["blue", "pink"] },
        { p1: ["PB3", "D23"], p2: ["D10", "PD14"], ids: [15, 16], colors: ["blue", "pink"] },
        { p1: ["PA4", "D24"], p2: ["D9", "PD15"], ids: [17, 18], colors: ["blue", "pink"] },
        { p1: ["PB4", "D25"], p2: ["D8", "PF12"], ids: [19, 20], colors: ["blue", "pink"] }
      ]
    },
    {
      id: "CN10",
      rows: [
        // Parzyste różowe do pinu 16
        { p1: ["AVDD", "AVDD"], p2: ["D7", "PF13"], ids: [1, 2], colors: ["blue", "pink"] },
        { p1: ["AGND", "AGND"], p2: ["D6", "PE9"], ids: [3, 4], colors: ["blue", "pink"] },
        { p1: ["GND", "GND"], p2: ["D5", "PE11"], ids: [5, 6], colors: ["blue", "pink"] },
        { p1: ["PB1", "A6"], p2: ["D4", "PF14"], ids: [7, 8], colors: ["blue", "pink"] },
        { p1: ["PC2", "A7"], p2: ["D3", "PE13"], ids: [9, 10], colors: ["blue", "pink"] },
        { p1: ["PF4", "A8"], p2: ["D2", "PF15"], ids: [11, 12], colors: ["blue", "pink"] },
        { p1: ["PB6", "D26"], p2: ["D1", "PG14"], ids: [13, 14], colors: ["blue", "pink"] },
        { p1: ["PB2", "D27"], p2: ["D0", "PG9"], ids: [15, 16], colors: ["blue", "pink"] },
        // Od pinu 17 same granatowe
        { p1: ["GND", "GND"], p2: ["D42", "PE8"], ids: [17, 18], colors: ["blue", "blue"] },
        { p1: ["PD13", "D28"], p2: ["D41", "PE7"], ids: [19, 20], colors: ["blue", "blue"] },
        { p1: ["PD12", "D29"], p2: ["GND", "GND"], ids: [21, 22], colors: ["blue", "blue"] },
        { p1: ["PD11", "D30"], p2: ["D40", "PE10"], ids: [23, 24], colors: ["blue", "blue"] },
        { p1: ["PE2", "D31"], p2: ["D39", "PE12"], ids: [25, 26], colors: ["blue", "blue"] },
        { p1: ["GND", "GND"], p2: ["D38", "PE14"], ids: [27, 28], colors: ["blue", "blue"] },
        { p1: ["PA0", "D32"], p2: ["D37", "PE15"], ids: [29, 30], colors: ["blue", "blue"] },
        { p1: ["PB0", "D33"], p2: ["D36", "PB10"], ids: [31, 32], colors: ["blue", "blue"] },
        { p1: ["PE0", "D34"], p2: ["D35", "PB11"], ids: [33, 34], colors: ["blue", "blue"] }
      ]
    }
  ]
};

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