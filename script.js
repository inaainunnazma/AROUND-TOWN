/* ============================================================
   AROUND TOWN — script.js
   Flashcards + Map Match + Quiz
   ============================================================ */

/* ------------------------------------------------------------
   1. VOCABULARY (9 places with detailed SVG scenes)
   ------------------------------------------------------------ */
const VOCAB = [
  {
    word: "HOSPITAL",
    display: "Hospital",
    icon: "🏥",
    desc: "A place where doctors and nurses take care of sick or injured people. Ambulances bring patients here.",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#bbdefb"/><stop offset="1" stop-color="#e3f2fd"/>
        </linearGradient>
        <linearGradient id="hWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#fafafa"/><stop offset="1" stop-color="#e0e0e0"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#hSky)"/>
      <circle cx="170" cy="28" r="14" fill="#fff59d"/>
      <rect y="150" width="200" height="50" fill="#c8e6c9"/>
      <rect y="148" width="200" height="4" fill="#a5d6a7"/>
      <!-- main building -->
      <rect x="38" y="58" width="124" height="92" fill="url(#hWall)" stroke="#b0bec5" stroke-width="1"/>
      <rect x="38" y="58" width="124" height="10" fill="#eceff1"/>
      <rect x="46" y="46" width="108" height="14" fill="#ef9a9a"/>
      <rect x="46" y="46" width="108" height="4" fill="#e57373"/>
      <!-- big cross -->
      <rect x="94" y="34" width="12" height="24" fill="#e53935"/>
      <rect x="88" y="40" width="24" height="12" fill="#e53935"/>
      <!-- windows -->
      <g fill="#90caf9" stroke="#64b5f6" stroke-width="1.2">
        <rect x="48" y="78" width="18" height="18" rx="2"/>
        <rect x="74" y="78" width="18" height="18" rx="2"/>
        <rect x="108" y="78" width="18" height="18" rx="2"/>
        <rect x="134" y="78" width="18" height="18" rx="2"/>
        <rect x="48" y="104" width="18" height="18" rx="2"/>
        <rect x="134" y="104" width="18" height="18" rx="2"/>
      </g>
      <!-- entrance -->
      <rect x="78" y="102" width="44" height="48" fill="#455a64" rx="3"/>
      <rect x="84" y="108" width="32" height="42" fill="#81d4fa"/>
      <line x1="100" y1="108" x2="100" y2="150" stroke="#455a64" stroke-width="1.6"/>
      <circle cx="95" cy="130" r="1.3" fill="#455a64"/>
      <circle cx="105" cy="130" r="1.3" fill="#455a64"/>
      <!-- ambulance -->
      <g>
        <rect x="12" y="126" width="42" height="24" rx="4" fill="#fff" stroke="#cfd8dc"/>
        <rect x="12" y="126" width="42" height="9" fill="#e53935"/>
        <rect x="16" y="138" width="10" height="8" fill="#90caf9" rx="1"/>
        <rect x="30" y="140" width="6" height="6" fill="#ff5252" rx="1"/>
        <circle cx="22" cy="152" r="4.5" fill="#37474f"/>
        <circle cx="44" cy="152" r="4.5" fill="#37474f"/>
        <circle cx="22" cy="152" r="1.6" fill="#cfd8dc"/>
        <circle cx="44" cy="152" r="1.6" fill="#cfd8dc"/>
      </g>
      <text x="100" y="178" text-anchor="middle" font-size="12" font-weight="900"
            fill="#37474f" font-family="Arial" letter-spacing="2">HOSPITAL</text>
    </svg>`
  },
  {
    word: "TRAIN STATION",
    display: "Train Station",
    icon: "🚉",
    desc: "A place where you wait for and catch trains. You buy tickets here and board the train to travel.",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#b3e5fc"/><stop offset="1" stop-color="#e1f5fe"/>
        </linearGradient>
        <linearGradient id="tTrain" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#ef5350"/><stop offset="1" stop-color="#b71c1c"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#tSky)"/>
      <!-- clouds -->
      <ellipse cx="40" cy="30" rx="18" ry="8" fill="#fff" opacity=".85"/>
      <ellipse cx="55" cy="28" rx="12" ry="7" fill="#fff" opacity=".85"/>
      <ellipse cx="160" cy="34" rx="20" ry="8" fill="#fff" opacity=".8"/>
      <!-- roof canopy -->
      <path d="M8 70 L100 42 L192 70 Z" fill="#546e7a"/>
      <path d="M8 70 L100 46 L192 70 Z" fill="#78909c"/>
      <rect x="20" y="70" width="160" height="4" fill="#455a64"/>
      <!-- support columns -->
      <rect x="24" y="74" width="6" height="72" fill="#455a64"/>
      <rect x="170" y="74" width="6" height="72" fill="#455a64"/>
      <!-- station sign -->
      <rect x="60" y="58" width="80" height="18" rx="3" fill="#1e88e5"/>
      <text x="100" y="71" text-anchor="middle" font-size="9" font-weight="900"
            fill="#fff" font-family="Arial">CENTRAL STATION</text>
      <!-- clock -->
      <circle cx="100" cy="50" r="7" fill="#fff" stroke="#37474f" stroke-width="1.5"/>
      <line x1="100" y1="50" x2="100" y2="45" stroke="#37474f" stroke-width="1.4"/>
      <line x1="100" y1="50" x2="104" y2="51" stroke="#37474f" stroke-width="1.4"/>
      <!-- train -->
      <g>
        <rect x="14" y="96" width="172" height="40" rx="10" fill="url(#tTrain)"/>
        <rect x="14" y="96" width="172" height="6" rx="3" fill="#fff" opacity=".4"/>
        <rect x="24" y="106" width="20" height="14" rx="2" fill="#81d4fa"/>
        <rect x="50" y="106" width="20" height="14" rx="2" fill="#81d4fa"/>
        <rect x="76" y="106" width="20" height="14" rx="2" fill="#81d4fa"/>
        <rect x="102" y="106" width="20" height="14" rx="2" fill="#81d4fa"/>
        <rect x="128" y="106" width="20" height="14" rx="2" fill="#81d4fa"/>
        <rect x="154" y="106" width="20" height="14" rx="2" fill="#81d4fa"/>
        <rect x="14" y="126" width="172" height="6" fill="#7f0000"/>
        <circle cx="40" cy="136" r="6" fill="#37474f"/>
        <circle cx="100" cy="136" r="6" fill="#37474f"/>
        <circle cx="160" cy="136" r="6" fill="#37474f"/>
        <circle cx="40" cy="136" r="2" fill="#b0bec5"/>
        <circle cx="100" cy="136" r="2" fill="#b0bec5"/>
        <circle cx="160" cy="136" r="2" fill="#b0bec5"/>
      </g>
      <!-- rails -->
      <rect x="0" y="146" width="200" height="3" fill="#78909c"/>
      <rect x="0" y="156" width="200" height="3" fill="#78909c"/>
      <g fill="#546e7a">
        <rect x="10" y="144" width="6" height="17"/>
        <rect x="40" y="144" width="6" height="17"/>
        <rect x="70" y="144" width="6" height="17"/>
        <rect x="100" y="144" width="6" height="17"/>
        <rect x="130" y="144" width="6" height="17"/>
        <rect x="160" y="144" width="6" height="17"/>
        <rect x="190" y="144" width="6" height="17"/>
      </g>
      <rect y="168" width="200" height="32" fill="#8d6e63"/>
      <text x="100" y="190" text-anchor="middle" font-size="12" font-weight="900"
            fill="#fff" font-family="Arial" letter-spacing="2">TRAIN STATION</text>
    </svg>`
  },
  {
    word: "RESTAURANT",
    display: "Restaurant",
    icon: "🍽️",
    desc: "A place where you sit down and eat delicious meals cooked by chefs. You order food from a menu.",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#ffe0b2"/><stop offset="1" stop-color="#fff3e0"/>
        </linearGradient>
        <linearGradient id="rWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#ffcc80"/><stop offset="1" stop-color="#e65100"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#rSky)"/>
      <circle cx="30" cy="30" r="12" fill="#ffb74d"/>
      <rect y="150" width="200" height="50" fill="#8d6e63"/>
      <!-- building -->
      <rect x="24" y="60" width="152" height="90" fill="url(#rWall)"/>
      <rect x="24" y="60" width="152" height="8" fill="#bf360c"/>
      <!-- awning -->
      <g>
        <path d="M20 72 L40 60 L60 72 L80 60 L100 72 L120 60 L140 72 L160 60 L180 72 Z" fill="#e53935"/>
        <path d="M20 72 Q100 82 180 72 L180 78 Q100 88 20 78 Z" fill="#c62828"/>
      </g>
      <!-- windows -->
      <rect x="36" y="92" width="50" height="42" rx="3" fill="#ffe082" stroke="#8d6e63" stroke-width="2"/>
      <rect x="114" y="92" width="50" height="42" rx="3" fill="#ffe082" stroke="#8d6e63" stroke-width="2"/>
      <line x1="61" y1="92" x2="61" y2="134" stroke="#8d6e63" stroke-width="2"/>
      <line x1="139" y1="92" x2="139" y2="134" stroke="#8d6e63" stroke-width="2"/>
      <!-- door -->
      <rect x="88" y="104" width="24" height="46" fill="#4e342e" rx="2"/>
      <circle cx="106" cy="128" r="1.5" fill="#ffd54f"/>
      <!-- sign -->
      <rect x="60" y="48" width="80" height="16" rx="4" fill="#fff"/>
      <text x="100" y="60" text-anchor="middle" font-size="10" font-weight="900"
            fill="#e53935" font-family="Arial" font-style="italic">RESTAURANT</text>
      <!-- chef emoji in window -->
      <text x="61" y="122" text-anchor="middle" font-size="22">👨‍🍳</text>
      <!-- table with food -->
      <g>
        <ellipse cx="139" cy="122" rx="16" ry="4" fill="#8d6e63"/>
        <text x="139" y="120" text-anchor="middle" font-size="14">🍽️</text>
      </g>
      <text x="100" y="188" text-anchor="middle" font-size="12" font-weight="900"
            fill="#fff" font-family="Arial" letter-spacing="2">RESTAURANT</text>
    </svg>`
  },
  {
    word: "PARK",
    display: "Park",
    icon: "🌳",
    desc: "A green open space with trees, grass, and playgrounds. People come here to relax, walk, or play.",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#81d4fa"/><stop offset="1" stop-color="#e1f5fe"/>
        </linearGradient>
        <radialGradient id="pSun" cx=".5" cy=".5" r=".5">
          <stop offset="0" stop-color="#fff59d"/><stop offset="1" stop-color="#ffb300"/>
        </radialGradient>
      </defs>
      <rect width="200" height="200" fill="url(#pSky)"/>
      <circle cx="165" cy="30" r="20" fill="url(#pSun)"/>
      <circle cx="165" cy="30" r="26" fill="#fff59d" opacity=".35"/>
      <!-- clouds -->
      <ellipse cx="40" cy="30" rx="18" ry="8" fill="#fff" opacity=".9"/>
      <ellipse cx="55" cy="28" rx="13" ry="7" fill="#fff" opacity=".9"/>
      <ellipse cx="110" cy="42" rx="16" ry="7" fill="#fff" opacity=".85"/>
      <!-- hills -->
      <path d="M0 130 Q60 100 120 128 T200 122 L200 200 L0 200 Z" fill="#a5d6a7"/>
      <path d="M0 145 Q70 122 140 145 T200 140 L200 200 L0 200 Z" fill="#81c784"/>
      <!-- trees -->
      <g>
        <rect x="28" y="112" width="6" height="30" fill="#5d4037"/>
        <circle cx="31" cy="102" r="18" fill="#388e3c"/>
        <circle cx="24" cy="108" r="11" fill="#43a047"/>
        <circle cx="38" cy="108" r="11" fill="#4caf50"/>
      </g>
      <g>
        <rect x="162" y="118" width="6" height="26" fill="#5d4037"/>
        <circle cx="165" cy="110" r="16" fill="#2e7d32"/>
        <circle cx="159" cy="114" r="9" fill="#43a047"/>
        <circle cx="172" cy="114" r="9" fill="#4caf50"/>
      </g>
      <!-- path -->
      <path d="M0 170 Q100 150 200 172 L200 200 L0 200 Z" fill="#bcaaa4"/>
      <path d="M0 180 Q100 162 200 182 L200 200 L0 200 Z" fill="#a1887f"/>
      <!-- bench -->
      <g>
        <rect x="70" y="140" width="60" height="5" rx="2" fill="#6d4c41"/>
        <rect x="70" y="146" width="60" height="5" rx="2" fill="#5d4037"/>
        <rect x="74" y="151" width="4" height="12" fill="#4e342e"/>
        <rect x="122" y="151" width="4" height="12" fill="#4e342e"/>
        <rect x="72" y="128" width="56" height="4" rx="2" fill="#6d4c41"/>
        <rect x="76" y="128" width="4" height="14" fill="#4e342e"/>
        <rect x="120" y="128" width="4" height="14" fill="#4e342e"/>
      </g>
      <!-- flowers -->
      <g>
        <circle cx="58" cy="182" r="3" fill="#f06292"/>
        <circle cx="58" cy="182" r="1.2" fill="#fff59d"/>
        <circle cx="150" cy="186" r="3" fill="#ba68c8"/>
        <circle cx="150" cy="186" r="1.2" fill="#fff59d"/>
        <circle cx="100" cy="192" r="3" fill="#64b5f6"/>
        <circle cx="100" cy="192" r="1.2" fill="#fff59d"/>
      </g>
      <!-- sun rays reflection -->
      <rect y="0" width="200" height="0" fill="none"/>
      <text x="100" y="60" text-anchor="middle" font-size="12" font-weight="900"
            fill="#1b5e20" font-family="Arial" letter-spacing="3">PARK</text>
    </svg>`
  },
  {
    word: "BANK",
    display: "Bank",
    icon: "🏦",
    desc: "A place where you keep your money safe. You can save, withdraw cash, or exchange currency here.",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#cfd8dc"/><stop offset="1" stop-color="#eceff1"/>
        </linearGradient>
        <linearGradient id="bWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#fafafa"/><stop offset="1" stop-color="#cfd8dc"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#bSky)"/>
      <rect y="150" width="200" height="50" fill="#b0bec5"/>
      <!-- stairs -->
      <rect x="20" y="146" width="160" height="6" fill="#90a4ae"/>
      <rect x="28" y="140" width="144" height="6" fill="#b0bec5"/>
      <!-- main building -->
      <rect x="28" y="86" width="144" height="54" fill="url(#bWall)"/>
      <!-- triangular pediment -->
      <polygon points="20,86 100,50 180,86" fill="#f5f5f5" stroke="#cfd8dc" stroke-width="1"/>
      <polygon points="30,84 100,54 170,84" fill="#eceff1"/>
      <!-- dollar sign -->
      <circle cx="100" cy="72" r="12" fill="#ffd54f" stroke="#f9a825" stroke-width="1.5"/>
      <text x="100" y="77" text-anchor="middle" font-size="15" font-weight="900"
            fill="#5d4037" font-family="Arial">$</text>
      <!-- columns -->
      <g fill="#eceff1" stroke="#b0bec5" stroke-width="1">
        <rect x="36" y="88" width="14" height="52"/>
        <rect x="60" y="88" width="14" height="52"/>
        <rect x="126" y="88" width="14" height="52"/>
        <rect x="150" y="88" width="14" height="52"/>
      </g>
      <g fill="#b0bec5">
        <rect x="34" y="86" width="18" height="4"/>
        <rect x="58" y="86" width="18" height="4"/>
        <rect x="124" y="86" width="18" height="4"/>
        <rect x="148" y="86" width="18" height="4"/>
        <rect x="34" y="138" width="18" height="4"/>
        <rect x="58" y="138" width="18" height="4"/>
        <rect x="124" y="138" width="18" height="4"/>
        <rect x="148" y="138" width="18" height="4"/>
      </g>
      <!-- door -->
      <rect x="84" y="104" width="32" height="36" fill="#5d4037" rx="2"/>
      <rect x="88" y="108" width="24" height="32" fill="#8d6e63"/>
      <line x1="100" y1="108" x2="100" y2="140" stroke="#5d4037" stroke-width="1.5"/>
      <circle cx="95" cy="124" r="1.4" fill="#ffd54f"/>
      <circle cx="105" cy="124" r="1.4" fill="#ffd54f"/>
      <!-- coins on steps -->
      <ellipse cx="60" cy="150" rx="6" ry="2" fill="#ffd54f"/>
      <ellipse cx="140" cy="150" rx="6" ry="2" fill="#ffd54f"/>
      <text x="100" y="178" text-anchor="middle" font-size="12" font-weight="900"
            fill="#37474f" font-family="Arial" letter-spacing="3">BANK</text>
    </svg>`
  },
  {
    word: "MUSEUM",
    display: "Museum",
    icon: "🏛️",
    desc: "A place that keeps old, rare and beautiful things for people to see and learn from. History lives here!",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#b39ddb"/><stop offset="1" stop-color="#ede7f6"/>
        </linearGradient>
        <linearGradient id="mWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#d7ccc8"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#mSky)"/>
      <rect y="152" width="200" height="48" fill="#d7ccc8"/>
      <!-- main building -->
      <rect x="24" y="80" width="152" height="72" fill="url(#mWall)"/>
      <rect x="24" y="80" width="152" height="6" fill="#bcaaa4"/>
      <!-- dome -->
      <ellipse cx="100" cy="80" rx="42" ry="6" fill="#bcaaa4"/>
      <path d="M62 80 Q100 26 138 80 Z" fill="#8d6e63"/>
      <path d="M70 80 Q100 36 130 80 Z" fill="#a1887f"/>
      <line x1="100" y1="34" x2="100" y2="26" stroke="#5d4037" stroke-width="2"/>
      <circle cx="100" cy="24" r="3" fill="#ffd54f" stroke="#f9a825" stroke-width="1"/>
      <!-- pediment with relief -->
      <polygon points="18,80 100,58 182,80" fill="#f5f5f5" stroke="#bcaaa4" stroke-width="1"/>
      <polygon points="28,78 100,62 172,78" fill="#eceff1"/>
      <!-- columns -->
      <g fill="#fafafa" stroke="#bcaaa4" stroke-width="1">
        <rect x="32" y="84" width="12" height="60"/>
        <rect x="54" y="84" width="12" height="60"/>
        <rect x="134" y="84" width="12" height="60"/>
        <rect x="156" y="84" width="12" height="60"/>
      </g>
      <g fill="#bcaaa4">
        <rect x="30" y="82" width="16" height="3"/>
        <rect x="52" y="82" width="16" height="3"/>
        <rect x="132" y="82" width="16" height="3"/>
        <rect x="154" y="82" width="16" height="3"/>
        <rect x="30" y="144" width="16" height="3"/>
        <rect x="52" y="144" width="16" height="3"/>
        <rect x="132" y="144" width="16" height="3"/>
        <rect x="154" y="144" width="16" height="3"/>
      </g>
      <!-- entrance -->
      <rect x="80" y="108" width="40" height="36" fill="#4e342e" rx="2"/>
      <rect x="84" y="112" width="32" height="32" fill="#8d6e63"/>
      <line x1="100" y1="112" x2="100" y2="144" stroke="#4e342e" stroke-width="1.5"/>
      <!-- statue in front -->
      <g>
        <rect x="60" y="150" width="10" height="8" fill="#9e9e9e"/>
        <ellipse cx="65" cy="148" rx="6" ry="2" fill="#bdbdbd"/>
        <rect x="62" y="138" width="6" height="12" fill="#bdbdbd"/>
        <circle cx="65" cy="135" r="3.5" fill="#bdbdbd"/>
      </g>
      <g>
        <rect x="130" y="150" width="10" height="8" fill="#9e9e9e"/>
        <ellipse cx="135" cy="148" rx="6" ry="2" fill="#bdbdbd"/>
        <rect x="132" y="138" width="6" height="12" fill="#bdbdbd"/>
        <circle cx="135" cy="135" r="3.5" fill="#bdbdbd"/>
      </g>
      <text x="100" y="180" text-anchor="middle" font-size="12" font-weight="900"
            fill="#4e342e" font-family="Arial" letter-spacing="3">MUSEUM</text>
    </svg>`
  },
  {
    word: "SUPERMARKET",
    display: "Supermarket",
    icon: "🛒",
    desc: "A big shop where you can buy food, drinks and things for your home. You push a cart and pay at the till.",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#b2dfdb"/><stop offset="1" stop-color="#e0f2f1"/>
        </linearGradient>
        <linearGradient id="sWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#cfd8dc"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#sSky)"/>
      <rect y="150" width="200" height="50" fill="#90a4ae"/>
      <!-- building -->
      <rect x="18" y="52" width="164" height="98" fill="url(#sWall)"/>
      <rect x="18" y="52" width="164" height="10" fill="#00897b"/>
      <!-- sign -->
      <rect x="52" y="42" width="96" height="16" rx="4" fill="#00897b"/>
      <text x="100" y="54" text-anchor="middle" font-size="10" font-weight="900"
            fill="#fff" font-family="Arial" letter-spacing="1">SUPERMARKET</text>
      <!-- window with goods -->
      <rect x="26" y="74" width="86" height="48" rx="3" fill="#b3e5fc" stroke="#607d8b" stroke-width="2"/>
      <g>
        <rect x="32" y="86" width="10" height="20" fill="#e57373" rx="2"/>
        <rect x="44" y="90" width="10" height="16" fill="#81c784" rx="2"/>
        <rect x="56" y="84" width="10" height="22" fill="#ffb74d" rx="2"/>
        <rect x="68" y="88" width="10" height="18" fill="#ba68c8" rx="2"/>
        <rect x="80" y="92" width="10" height="14" fill="#64b5f6" rx="2"/>
        <rect x="92" y="86" width="10" height="20" fill="#ffd54f" rx="2"/>
        <rect x="32" y="108" width="74" height="3" fill="#78909c"/>
      </g>
      <!-- door -->
      <rect x="122" y="92" width="50" height="58" fill="#455a64"/>
      <rect x="126" y="96" width="42" height="54" fill="#b3e5fc"/>
      <line x1="147" y1="96" x2="147" y2="150" stroke="#455a64" stroke-width="2"/>
      <circle cx="142" cy="126" r="1.5" fill="#455a64"/>
      <circle cx="152" cy="126" r="1.5" fill="#455a64"/>
      <!-- shopping cart -->
      <g>
        <path d="M20 132 L28 132 L36 156 L74 156 L82 138 L34 138" fill="none"
              stroke="#455a64" stroke-width="2.5" stroke-linejoin="round"/>
        <path d="M28 132 L24 122 L20 122" fill="none" stroke="#455a64" stroke-width="2.5"/>
        <circle cx="42" cy="164" r="4" fill="#37474f"/>
        <circle cx="66" cy="164" r="4" fill="#37474f"/>
        <circle cx="42" cy="164" r="1.5" fill="#cfd8dc"/>
        <circle cx="66" cy="164" r="1.5" fill="#cfd8dc"/>
        <!-- items in cart -->
        <rect x="38" y="142" width="8" height="14" fill="#e57373" rx="1"/>
        <rect x="48" y="140" width="8" height="16" fill="#81c784" rx="1"/>
        <rect x="58" y="144" width="8" height="12" fill="#ffd54f" rx="1"/>
      </g>
    </svg>`
  },
  {
    word: "CINEMA",
    display: "Cinema",
    icon: "🎬",
    desc: "A place with a huge screen and a dark room where you watch movies with popcorn in your hand.",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#311b92"/><stop offset="1" stop-color="#7c4dff"/>
        </linearGradient>
        <linearGradient id="cWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#263238"/><stop offset="1" stop-color="#101418"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#cSky)"/>
      <!-- stars -->
      <g fill="#fff">
        <circle cx="20" cy="20" r="1.2"/><circle cx="60" cy="14" r="1"/>
        <circle cx="140" cy="18" r="1.3"/><circle cx="176" cy="30" r="1"/>
        <circle cx="30" cy="42" r="1"/><circle cx="180" cy="52" r="1.2"/>
      </g>
      <!-- moon -->
      <circle cx="170" cy="22" r="7" fill="#fff59d" opacity=".9"/>
      <!-- building -->
      <rect x="14" y="70" width="172" height="82" fill="url(#cWall)"/>
      <!-- marquee lights -->
      <rect x="20" y="62" width="160" height="18" rx="3" fill="#d32f2f"/>
      <g fill="#fff59d">
        <circle cx="30" cy="71" r="2"/><circle cx="46" cy="71" r="2"/>
        <circle cx="62" cy="71" r="2"/><circle cx="78" cy="71" r="2"/>
        <circle cx="94" cy="71" r="2"/><circle cx="110" cy="71" r="2"/>
        <circle cx="126" cy="71" r="2"/><circle cx="142" cy="71" r="2"/>
        <circle cx="158" cy="71" r="2"/><circle cx="174" cy="71" r="2"/>
      </g>
      <text x="100" y="77" text-anchor="middle" font-size="11" font-weight="900"
            fill="#fff" font-family="Arial" letter-spacing="2">★ CINEMA ★</text>
      <!-- film reel decoration -->
      <circle cx="46" cy="110" r="14" fill="#455a64" stroke="#ffd54f" stroke-width="2"/>
      <circle cx="46" cy="110" r="3" fill="#ffd54f"/>
      <circle cx="46" cy="102" r="2.5" fill="#ffd54f"/>
      <circle cx="46" cy="118" r="2.5" fill="#ffd54f"/>
      <circle cx="38" cy="110" r="2.5" fill="#ffd54f"/>
      <circle cx="54" cy="110" r="2.5" fill="#ffd54f"/>
      <!-- poster -->
      <rect x="132" y="96" width="42" height="42" rx="3" fill="#fff59d" stroke="#fff" stroke-width="2"/>
      <rect x="136" y="100" width="34" height="26" fill="#7c4dff"/>
      <text x="153" y="116" text-anchor="middle" font-size="8" font-weight="900"
            fill="#fff" font-family="Arial">MOVIE</text>
      <text x="153" y="132" text-anchor="middle" font-size="7" font-weight="900"
            fill="#d32f2f" font-family="Arial">NOW!</text>
      <!-- entrance door -->
      <rect x="80" y="96" width="40" height="56" rx="3" fill="#1a1a1a"/>
      <rect x="84" y="100" width="32" height="52" fill="#455a64" opacity=".5"/>
      <line x1="100" y1="100" x2="100" y2="152" stroke="#263238" stroke-width="1.5"/>
      <circle cx="95" cy="126" r="1.4" fill="#ffd54f"/>
      <circle cx="105" cy="126" r="1.4" fill="#ffd54f"/>
      <!-- red carpet -->
      <path d="M82 152 L118 152 L124 178 L76 178 Z" fill="#b71c1c"/>
      <path d="M82 152 L118 152 L124 178 L76 178 Z" fill="none" stroke="#d32f2f" stroke-width="1.5"/>
      <!-- popcorn on carpet -->
      <text x="100" y="172" text-anchor="middle" font-size="14">🍿</text>
    </svg>`
  },
  {
    word: "HOTEL",
    display: "Hotel",
    icon: "🏨",
    desc: "A building with many rooms where travellers sleep, rest and stay for a night or more.",
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="h2Sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#90caf9"/><stop offset="1" stop-color="#e3f2fd"/>
        </linearGradient>
        <linearGradient id="h2Wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#fff3e0"/><stop offset="1" stop-color="#ffcc80"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#h2Sky)"/>
      <rect y="152" width="200" height="48" fill="#a1887f"/>
      <rect y="150" width="200" height="3" fill="#8d6e63"/>
      <!-- tall building -->
      <rect x="50" y="20" width="100" height="132" fill="url(#h2Wall)" stroke="#bf8f54" stroke-width="1"/>
      <rect x="50" y="20" width="100" height="8" fill="#8d6e63"/>
      <!-- sign -->
      <rect x="60" y="30" width="80" height="14" rx="3" fill="#c62828"/>
      <text x="100" y="41" text-anchor="middle" font-size="9" font-weight="900"
            fill="#ffd54f" font-family="Arial" letter-spacing="2">★ HOTEL ★</text>
      <!-- windows 3 columns x 4 rows -->
      <g fill="#81d4fa" stroke="#4e342e" stroke-width="1.2">
        <rect x="60" y="50" width="16" height="14" rx="1"/>
        <rect x="92" y="50" width="16" height="14" rx="1"/>
        <rect x="124" y="50" width="16" height="14" rx="1"/>
        <rect x="60" y="72" width="16" height="14" rx="1"/>
        <rect x="92" y="72" width="16" height="14" rx="1"/>
        <rect x="124" y="72" width="16" height="14" rx="1"/>
        <rect x="60" y="94" width="16" height="14" rx="1"/>
        <rect x="92" y="94" width="16" height="14" rx="1"/>
        <rect x="124" y="94" width="16" height="14" rx="1"/>
      </g>
      <!-- lit window with guest -->
      <rect x="92" y="94" width="16" height="14" fill="#fff59d" stroke="#4e342e" stroke-width="1.2"/>
      <text x="100" y="105" text-anchor="middle" font-size="9">🧳</text>
      <!-- awning -->
      <g>
        <path d="M48 118 L100 108 L152 118 L152 124 Q100 114 48 124 Z" fill="#c62828"/>
        <path d="M48 124 Q100 114 152 124 L152 128 Q100 118 48 128 Z" fill="#8e0000"/>
      </g>
      <!-- entrance -->
      <rect x="80" y="124" width="40" height="28" fill="#4e342e" rx="2"/>
      <rect x="84" y="128" width="32" height="24" fill="#fff59d"/>
      <line x1="100" y1="128" x2="100" y2="152" stroke="#4e342e" stroke-width="1.6"/>
      <circle cx="95" cy="142" r="1.4" fill="#4e342e"/>
      <circle cx="105" cy="142" r="1.4" fill="#4e342e"/>
      <!-- doorman -->
      <text x="120" y="148" text-anchor="middle" font-size="18">🛎️</text>
      <text x="70" y="148" text-anchor="middle" font-size="18">🧳</text>
      <!-- text -->
      <text x="100" y="180" text-anchor="middle" font-size="12" font-weight="900"
            fill="#4e342e" font-family="Arial" letter-spacing="3">HOTEL</text>
    </svg>`
  }
];

/* ------------------------------------------------------------
   2. PROFESSIONS for Map Match
   ------------------------------------------------------------ */
const PROFESSIONS = [
  { emoji: "👨‍⚕️", name: "doctor",    place: "HOSPITAL"     },
  { emoji: "👨‍🍳", name: "chef",      place: "RESTAURANT"   },
  { emoji: "👮",    name: "police officer", place: "BANK"   },   /* guard at bank */
  { emoji: "👩‍🎨", name: "artist",    place: "MUSEUM"       },
  { emoji: "🧑‍💼", name: "cashier",   place: "SUPERMARKET"  },
  { emoji: "🎬",    name: "film director", place: "CINEMA"  },
  { emoji: "🧳",    name: "traveller", place: "HOTEL"        },
  { emoji: "🚆",    name: "train driver", place: "TRAIN STATION" },
  { emoji: "👦",    name: "child",     place: "PARK"         }
];

/* ------------------------------------------------------------
   3. SOUND
   ------------------------------------------------------------ */
let audioCtx = null;
function getCtx() {
  if (!audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (AC) audioCtx = new AC();
  }
  if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}
function playChime() {
  const ctx = getCtx(); if (!ctx) return;
  [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = "triangle"; o.frequency.value = f;
    const t = ctx.currentTime + i * 0.07;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.16, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);
    o.connect(g).connect(ctx.destination); o.start(t); o.stop(t + 0.3);
  });
}
function playSuccess() {
  const ctx = getCtx(); if (!ctx) return;
  [659.25, 783.99, 987.77, 1318.5].forEach((f, i) => {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = "sine"; o.frequency.value = f;
    const t = ctx.currentTime + i * 0.09;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.22, t + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);
    o.connect(g).connect(ctx.destination); o.start(t); o.stop(t + 0.4);
  });
}
function playError() {
  const ctx = getCtx(); if (!ctx) return;
  [300, 200].forEach((f, i) => {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = "sawtooth"; o.frequency.value = f;
    const t = ctx.currentTime + i * 0.16;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.15, t + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
    o.connect(g).connect(ctx.destination); o.start(t); o.stop(t + 0.2);
  });
}
function speak(text, rate = 0.88) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US"; u.rate = rate; u.pitch = 1.05;
  const voices = window.speechSynthesis.getVoices();
  const en = voices.find(v => /en[-_]US/i.test(v.lang)) ||
             voices.find(v => /^en/i.test(v.lang));
  if (en) u.voice = en;
  window.speechSynthesis.speak(u);
}
if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
  window.speechSynthesis.getVoices();
}

/* ------------------------------------------------------------
   4. TABS
   ------------------------------------------------------------ */
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
    if (tab.dataset.tab === "map")  initMapGame();
    if (tab.dataset.tab === "quiz") initQuiz();
  });
});

/* ============================================================
   5. FLASHCARDS (flip)
   ============================================================ */
const flashcard = document.getElementById("flashcard");
const slideImg  = document.getElementById("slideImg");
const slideWord = document.getElementById("slideWord");
const backIcon  = document.getElementById("backIcon");
const backTitle = document.getElementById("backTitle");
const backDesc  = document.getElementById("backDesc");
const dotsWrap  = document.getElementById("dots");

let current = 0;
VOCAB.forEach((_, i) => {
  const d = document.createElement("button");
  d.className = "dot";
  d.setAttribute("aria-label", "Card " + (i + 1));
  d.addEventListener("click", () => showCard(i));
  dotsWrap.appendChild(d);
});

function renderCard(i) {
  const item = VOCAB[i];
  slideImg.innerHTML = item.svg;
  slideWord.textContent = item.word;
  backIcon.textContent = item.icon;
  backTitle.textContent = item.display;
  backDesc.textContent = item.desc;
  [...dotsWrap.children].forEach((d, idx) => d.classList.toggle("active", idx === i));
}
function showCard(i) {
  current = (i + VOCAB.length) % VOCAB.length;
  flashcard.classList.remove("flipped");
  renderCard(current);
}
flashcard.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
  playChime();
  if (flashcard.classList.contains("flipped")) {
    speak(VOCAB[current].word);
  } else {
    speak(VOCAB[current].display + ". " + VOCAB[current].desc);
  }
});
flashcard.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flashcard.click(); }
});
document.getElementById("prevBtn").addEventListener("click", () => showCard(current - 1));
document.getElementById("nextBtn").addEventListener("click", () => showCard(current + 1));
document.addEventListener("keydown", (e) => {
  if (!document.getElementById("slides").classList.contains("active")) return;
  if (e.key === "ArrowLeft")  showCard(current - 1);
  if (e.key === "ArrowRight") showCard(current + 1);
});
renderCard(0);

/* ============================================================
   6. MAP MATCH GAME
   ============================================================ */
const mapGrid    = document.getElementById("mapGrid");
const walker     = document.getElementById("walker");
const mapQuestion= document.getElementById("mapQuestion");
const profEmoji  = document.getElementById("profEmoji");
const mapScoreEl = document.getElementById("mapScore");
const mapTotalEl = document.getElementById("mapTotal");
const mapMsg     = document.getElementById("mapMsg");

let mapQueue = [];
let mapIndex = 0;
let mapScore = 0;
let mapLocked = false;

function shuffle(a) {
  const arr = a.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function initMapGame() {
  mapQueue = shuffle(PROFESSIONS);
  mapIndex = 0;
  mapScore = 0;
  mapLocked = false;
  mapScoreEl.textContent = "0";
  mapTotalEl.textContent = String(PROFESSIONS.length);
  mapMsg.textContent = "";
  mapMsg.className = "map-msg";

  /* reset walker to starting position */
  walker.style.transition = "none";
  walker.style.transform = "translate(-50%, 0)";
  walker.textContent = "🚶";

  buildMap();
  showMapQuestion();
}

function buildMap() {
  mapGrid.innerHTML = "";
  /* show all 9 places in random order */
  const all = shuffle(VOCAB.slice());
  all.forEach(item => {
    const cell = document.createElement("div");
    cell.className = "map-place";
    cell.dataset.word = item.word;
    cell.innerHTML = item.svg +
      `<div class="place-name">${item.display}</div>`;
    cell.addEventListener("click", () => onMapPick(cell, item));
    mapGrid.appendChild(cell);
  });
}

function showMapQuestion() {
  if (mapIndex >= mapQueue.length) {
    mapMsg.textContent = `🏆 All done! Final score: ${mapScore}/${PROFESSIONS.length}. Great job!`;
    mapMsg.className = "map-msg win";
    playSuccess();
    speak("Well done! You finished the whole map!");
    return;
  }
  const p = mapQueue[mapIndex];
  profEmoji.textContent = p.emoji;
  mapQuestion.textContent = `Where does the ${p.name} go?`;
  speak(`Where does the ${p.name} go?`);

  /* return walker to start position (bottom center) */
  walker.style.transition = "none";
  walker.style.transform = "translate(-50%, 0)";
  walker.textContent = "🚶";
  void walker.offsetWidth; /* force reflow */
}

function onMapPick(cell, item) {
  if (mapLocked) return;
  const p = mapQueue[mapIndex];
  const correct = item.word === p.place;

  mapLocked = true;

  /* walk the character to the clicked place */
  walkWalkerTo(cell, () => {
    if (correct) {
      cell.classList.add("correct");
      mapScore++;
      mapScoreEl.textContent = String(mapScore);
      playSuccess();
      const praise = ["Great!", "Correct!", "Yes!", "Awesome!", "Perfect!"][Math.floor(Math.random()*5)];
      mapMsg.textContent = `✅ ${praise} The ${p.name} works at the ${VOCAB.find(v => v.word === p.place).display}.`;
      mapMsg.className = "map-msg win";
      speak(`${praise} The ${p.name} works at the ${VOCAB.find(v => v.word === p.place).display}.`);
      walker.textContent = "🎉";

      setTimeout(() => {
        mapIndex++;
        mapLocked = false;
        mapMsg.textContent = "";
        mapMsg.className = "map-msg";
        showMapQuestion();
      }, 2200);
    } else {
      cell.classList.add("wrong");
      playError();
      const correctDisplay = VOCAB.find(v => v.word === p.place).display;
      mapMsg.textContent = `❌ Not quite! The ${p.name} doesn't go to the ${item.display}. The ${p.name} goes to the ${correctDisplay}.`;
      mapMsg.className = "map-msg err";
      speak(`Not quite. The ${p.name} doesn't go to the ${item.display}. The ${p.name} goes to the ${correctDisplay}.`);

      /* reveal the correct place with a green pulse */
      const correctCell = mapGrid.querySelector(`.map-place[data-word="${p.place}"]`);
      if (correctCell) {
        setTimeout(() => correctCell.classList.add("correct"), 900);
      }

      /* walk back and try again */
      setTimeout(() => {
        walkWalkerBack(() => {
          cell.classList.remove("wrong");
          if (correctCell) correctCell.classList.remove("correct");
          mapLocked = false;
          mapMsg.textContent = `Try again — where does the ${p.name} go?`;
          mapMsg.className = "map-msg";
          speak(`Try again. Where does the ${p.name} go?`);
        });
      }, 2400);
    }
  });
}

function walkWalkerTo(targetEl, done) {
  const boardRect = document.getElementById("mapBoard").getBoundingClientRect();
  const targetRect = targetEl.getBoundingClientRect();
  const walkerRect = walker.getBoundingClientRect();

  const dx = (targetRect.left + targetRect.width / 2) - (walkerRect.left + walkerRect.width / 2);
  const dy = (targetRect.top + targetRect.height / 2) - (walkerRect.top + walkerRect.height / 2);

  walker.style.transition = "transform 0.95s cubic-bezier(.5,.05,.3,1)";
  walker.style.transform = `translate(calc(-50% + ${dx}px), ${dy}px)`;

  setTimeout(() => { if (done) done(); }, 1000);
}

function walkWalkerBack(done) {
  walker.style.transition = "transform 0.9s cubic-bezier(.5,.05,.3,1)";
  walker.style.transform = `translate(-50%, 0)`;
  setTimeout(() => { if (done) done(); }, 950);
}

document.getElementById("mapNewBtn").addEventListener("click", () => {
  initMapGame();
  playChime();
});

/* ============================================================
   7. QUIZ
   ============================================================ */
const quizQuestionEl = document.getElementById("quizQuestion");
const quizOptionsEl  = document.getElementById("quizOptions");
const quizMsgEl      = document.getElementById("quizMsg");
const quizIndexEl    = document.getElementById("quizIndex");
const quizTotalEl    = document.getElementById("quizTotal");
const quizScoreEl    = document.getElementById("quizScore");

let quizQuestions = [];
let quizIdx = 0;
let quizScore = 0;
let quizLocked = false;

/* Build a pool of questions with 4 options each */
function buildQuizQuestions() {
  const bank = [];

  /* TYPE 1: "Which place is [description]?" */
  VOCAB.forEach(v => {
    const wrongs = shuffle(VOCAB.filter(x => x.word !== v.word)).slice(0, 3);
    bank.push({
      q: `Which place is described here: "${v.desc}"`,
      answer: v.word,
      options: shuffle([v.word, ...wrongs.map(w => w.word)])
    });
  });

  /* TYPE 2: "What can you do at the [place]?" */
  const activities = {
    HOSPITAL: "See a doctor when you are sick",
    "TRAIN STATION": "Catch a train to another city",
    RESTAURANT: "Eat a delicious meal",
    PARK: "Play and relax in the grass",
    BANK: "Save or withdraw money",
    MUSEUM: "Look at old and rare objects",
    SUPERMARKET: "Buy food and things for your home",
    CINEMA: "Watch a movie on a big screen",
    HOTEL: "Sleep and stay overnight when travelling"
  };
  VOCAB.forEach(v => {
    const correctAct = activities[v.word];
    const wrongs = shuffle(
      Object.entries(activities)
        .filter(([k]) => k !== v.word)
        .map(([, act]) => act)
    ).slice(0, 3);
    bank.push({
      q: `What do people usually do at the ${v.display}?`,
      answer: correctAct,
      options: shuffle([correctAct, ...wrongs]),
      textOnly: true
    });
  });

  /* TYPE 3: "Where does the [person] go?" */
  PROFESSIONS.forEach(p => {
    const correctPlace = VOCAB.find(v => v.word === p.place);
    const wrongs = shuffle(VOCAB.filter(v => v.word !== p.place)).slice(0, 3);
    bank.push({
      q: `Where does the ${p.name} go?`,
      answer: correctPlace.word,
      options: shuffle([correctPlace.word, ...wrongs.map(w => w.word)]),
      withImages: true
    });
  });

  return shuffle(bank).slice(0, 10);
}

function initQuiz() {
  quizQuestions = buildQuizQuestions();
  quizIdx = 0;
  quizScore = 0;
  quizLocked = false;
  quizTotalEl.textContent = String(quizQuestions.length);
  quizScoreEl.textContent = "0";
  quizMsgEl.textContent = "";
  quizMsgEl.className = "quiz-msg";
  renderQuizQuestion();
}

function renderQuizQuestion() {
  if (quizIdx >= quizQuestions.length) {
    quizQuestionEl.textContent = "🎉 Quiz complete!";
    quizOptionsEl.innerHTML = "";
    quizMsgEl.textContent = `You scored ${quizScore} out of ${quizQuestions.length}. ` +
      (quizScore === quizQuestions.length ? "Perfect! 🏆" : "Good job — try again for a perfect score!");
    quizMsgEl.className = "quiz-msg win";
    playSuccess();
    speak(`Quiz complete. You scored ${quizScore} out of ${quizQuestions.length}.`);
    return;
  }

  const q = quizQuestions[quizIdx];
  quizIndexEl.textContent = String(quizIdx + 1);
  quizQuestionEl.textContent = q.q;
  quizMsgEl.textContent = "";
  quizMsgEl.className = "quiz-msg";
  speak(q.q);

  quizOptionsEl.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "quiz-option";
    btn.dataset.value = opt;

    if (q.withImages) {
      const v = VOCAB.find(x => x.word === opt);
      btn.innerHTML = v.svg + `<div class="opt-name">${v.display}</div>`;
    } else if (q.textOnly) {
      btn.innerHTML = `<div class="opt-name" style="font-size:.95rem;letter-spacing:.3px;text-transform:none;">${opt}</div>`;
    } else {
      const v = VOCAB.find(x => x.word === opt);
      btn.innerHTML = v.svg + `<div class="opt-name">${v.display}</div>`;
    }

    btn.addEventListener("click", () => onQuizAnswer(btn, opt, q.answer));
    quizOptionsEl.appendChild(btn);
  });
}

function onQuizAnswer(btn, picked, correct) {
  if (quizLocked) return;
  quizLocked = true;

  const allOptions = quizOptionsEl.querySelectorAll(".quiz-option");
  allOptions.forEach(o => o.classList.add("disabled"));

  if (picked === correct) {
    btn.classList.add("correct");
    quizScore++;
    quizScoreEl.textContent = String(quizScore);
    playSuccess();
    quizMsgEl.textContent = "✅ Correct!";
    quizMsgEl.className = "quiz-msg win";
    speak("Correct!");
  } else {
    btn.classList.add("wrong");
    playError();
    const correctBtn = [...allOptions].find(o => o.dataset.value === correct);
    if (correctBtn) {
      setTimeout(() => correctBtn.classList.add("correct"), 400);
    }
    const correctDisplay = VOCAB.find(v => v.word === correct)?.display || correct;
    quizMsgEl.textContent = `❌ Oops! The correct answer is: ${correctDisplay}`;
    quizMsgEl.className = "quiz-msg err";
    speak(`Oops. The correct answer is ${correctDisplay}.`);
  }

  setTimeout(() => {
    quizIdx++;
    quizLocked = false;
    renderQuizQuestion();
  }, 1800);
}

document.getElementById("quizNewBtn").addEventListener("click", () => {
  initQuiz();
  playChime();
});

/* ------------------------------------------------------------
   8. INITIALISE (make sure the games are ready)
   ------------------------------------------------------------ */
initMapGame();
initQuiz();