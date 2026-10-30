import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

function App() {
  return (
    <main className="min-h-screen px-4 py-4 sm:px-8 lg:px-[clamp(18px,5vw,72px)] lg:py-7 bg-[radial-gradient(circle_at_12%_18%,rgba(91,132,255,0.12),transparent_24rem),radial-gradient(circle_at_88%_84%,rgba(245,176,92,0.16),transparent_24rem),#edf1f7] font-sans text-[#17233c]">
      <nav className="mx-auto mb-4 flex h-[60px] w-full max-w-[1180px] items-center justify-between lg:mb-7" aria-label="Navigation principale">
        <a className="flex items-center gap-2.5 font-extrabold tracking-[0.16em] text-[#17233c] no-underline" href="#" aria-label="Accueil Soundly">
          <span className="grid h-[38px] w-[38px] place-items-center rounded-full bg-gradient-to-br from-[#4169e1] to-[#7b9bf3] text-white shadow-[0_9px_20px_rgba(65,105,225,0.22)]">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[2]" aria-hidden="true">
              <path d="M4 13v-2M8 17V7m4 12V5m4 10V9m4 5v-4" />
            </svg>
          </span>
          SOUNDLY
        </a>
        <button className="relative grid h-11 w-11 place-items-center rounded-full border-0 bg-white text-[#17233c] shadow-[0_8px_24px_rgba(32,49,84,0.09)]" type="button" aria-label="Voir le panier">
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
            <path d="M6 8h12l-1 12H7L6 8Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" />
          </svg>
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-[#ff8d68]"></span>
        </button>
      </nav>

      <article className="group mx-auto grid w-full max-w-[1180px] overflow-hidden rounded-[20px] bg-white/90 shadow-[0_24px_70px_rgba(36,52,83,0.15)] backdrop-blur-xl lg:min-h-[620px] lg:grid-cols-[52%_48%] lg:rounded-[28px]">
        <div className="relative min-h-[310px] overflow-hidden bg-gradient-to-br from-[#dce6f7] via-[#f3f5fa] to-[#d8dfee] sm:min-h-[420px] lg:min-h-[620px]">
          <span className="absolute left-7 top-7 z-[2] rounded-full bg-white/80 px-3 py-2 text-[0.68rem] font-extrabold tracking-[0.12em] text-[#536176] shadow-[0_8px_20px_rgba(36,52,83,0.08)]">ÉDITION 2026</span>
          <Image />
          <span className="absolute bottom-6 left-7 z-[2] h-3 w-3 rounded-full bg-[#2b3240] shadow-[0_0_0_3px_rgba(255,255,255,.5)]"></span>
          <span className="absolute bottom-6 left-12 z-[2] h-3 w-3 rounded-full bg-[#c9c2ae] shadow-[0_0_0_3px_rgba(255,255,255,.5)]"></span>
        </div>

        <div className="flex flex-col justify-center px-6 py-10 sm:px-8 lg:px-[clamp(38px,5vw,72px)] lg:py-14">
          <div className="mb-5 flex items-center gap-3 text-[0.78rem] font-bold text-[#7a8498]">
            <span className="tracking-[0.08em] text-[#f1a85b]" aria-label="5 étoiles">★★★★★</span>
            <span>4.9 · 128 avis</span>
          </div>
          <Name />
          <Description />

          <div className="my-[30px] flex flex-wrap gap-3">
            <span className="flex items-center gap-1.5 rounded-[10px] bg-[#f1f4f9] px-3 py-2.5 text-[0.78rem] font-bold text-[#536176]">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-[#5578df] stroke-[2]" aria-hidden="true"><path d="M7 7l10 10-5 4V3l5 4L7 17" /></svg>
              Bluetooth 5.3
            </span>
            <span className="flex items-center gap-1.5 rounded-[10px] bg-[#f1f4f9] px-3 py-2.5 text-[0.78rem] font-bold text-[#536176]">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-[#5578df] stroke-[2]" aria-hidden="true"><rect x="3" y="6" width="16" height="12" rx="2" /><path d="M21 10v4M7 9h8" /></svg>
              40 heures
            </span>
          </div>

          <div className="flex flex-col items-stretch gap-5 border-t border-[#edf0f5] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Price />
            <button className="flex h-[58px] w-full items-center justify-center gap-4 rounded-[14px] border-0 bg-gradient-to-br from-[#4169d8] to-[#6e90ea] px-5 text-white shadow-[0_14px_28px_rgba(65,105,216,0.24)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(65,105,216,0.32)] sm:min-w-[210px] sm:w-auto" type="button">
              Ajouter au panier
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[2]" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}

export default App;
