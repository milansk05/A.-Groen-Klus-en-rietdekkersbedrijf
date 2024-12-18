import Button from "./components/ui/button";

export default function Home() {
  return (
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
        <div className="w-full my-10 flex justify-center gap-20 items-center">
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
        <Button href="/contact" text="Neem contact op" />
      </div>
    </div>
  );
}
