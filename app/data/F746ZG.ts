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

export default PIN_DATA