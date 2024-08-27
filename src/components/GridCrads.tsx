import { Card } from "./Card";

export function GridCards() {
  return (
    <div>
      <div className="max-w-[1280px] mx-auto px-10 mt-20">
        <h3 className="font-montserrat text-3xl font bold text-black font-bold">
          <span className="text-customBlue">Feat</span>ured Cars
        </h3>
        <div className="w-[64px] border-b-2 border-blue-400 mb-10"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
