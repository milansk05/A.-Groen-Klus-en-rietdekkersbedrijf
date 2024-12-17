export default function Home() {
  return (
<<<<<<< Updated upstream
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
=======
    <div className="container mx-auto flex flex-col items-center my-20">
      <div className="flex flex-col items-center gap-6 w-full">
        <div className="w-full flex justify-center">
          <div className="relative w-[6rem]">
            <img className="absolute -top-2 left-0 w-10 h-10 object-cover rounded-full shadow-[0_0px_10px_0px_rgba(0,0,0,0.4)] border border-white" src="foto.jpg" />
            <img className="absolute -top-2 left-5 w-10 h-10 object-cover rounded-full shadow-[0_0px_10px_0px_rgba(0,0,0,0.4)] border border-white" src="foto.jpg" />
            <img className="absolute -top-2 left-10 w-10 h-10 object-cover rounded-full shadow-[0_0px_10px_0px_rgba(0,0,0,0.4)] border border-white" src="foto.jpg" />
          </div>
          <div className="flex">
            <img src="star.svg" />
            <img src="star.svg" />
            <img src="star.svg" />
            <img src="star.svg" />
            <img src="star.svg" />
          </div>
        </div>
        <h1 className="text-[32px] font-semibold text-center text-[#343333] leading-10">Uw Allround Specialist Voor <br></br> Huis En Dak</h1>
        <p className="text-[16px] text-center text-[#1F1F1F]/60">Professionele renovatie en onderhoud voor uw woning, van <br></br> kleine klussen tot complete dakprojecten</p>
        <div className="w-full mt-20 flex justify-center gap-20 items-center">
          <div className="w-[25rem] h-[12rem] bg-[url('/vloer.jpg')] bg-cover rounded-lg px-8 py-6 flex flex-col justify-between">
            <h2 className="text-white text-[22px] font-semibold">Klussen opties</h2>
            <div className="text-white flex flex-wrap gap-2 text-sm">
              <span className="bg-white/20 px-3 py-1 border rounded-full border-white/50 backdrop-blur-lg">kozijnen</span>
              <span className="bg-white/20 px-3 py-1 border rounded-full border-white/50 backdrop-blur-lg">zonnepanelen</span>
              <span className="bg-white/20 px-3 py-1 border rounded-full border-white/50 backdrop-blur-lg">renovaties</span>
              <span className="bg-white/20 px-3 py-1 border rounded-full border-white/50 backdrop-blur-lg">tuinen</span>
              <span className="bg-white/20 px-3 py-1 border rounded-full border-white/50 backdrop-blur-lg">daken</span>
            </div>
          </div>
          <span className="w-[2px] h-32 bg-gray-300"></span>
          <div className="w-[25rem] h-[12rem] bg-[url('/vloer.jpg')] bg-cover rounded-lg px-8 py-6 flex flex-col justify-between">
            <h2 className="text-white text-[22px] font-semibold">Klussen opties</h2>
            <div className="text-white flex flex-wrap gap-2 text-sm">
              <span className="bg-white/20 px-3 py-1 border rounded-full border-white/50 backdrop-blur-lg">kozijnen</span>
              <span className="bg-white/20 px-3 py-1 border rounded-full border-white/50 backdrop-blur-lg">zonnepanelen</span>
              <span className="bg-white/20 px-3 py-1 border rounded-full border-white/50 backdrop-blur-lg">renovaties</span>
              <span className="bg-white/20 px-3 py-1 border rounded-full border-white/50 backdrop-blur-lg">tuinen</span>
              <span className="bg-white/20 px-3 py-1 border rounded-full border-white/50 backdrop-blur-lg">daken</span>
            </div>
          </div>
        </div>
      </div>
>>>>>>> Stashed changes
    </div>
  );
}
