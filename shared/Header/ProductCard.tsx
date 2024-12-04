import Image from 'next/image';

export default function ProductCard() {
  return (
    <div className="absolute bottom-20 right-20 bg-white rounded-xl p-2 shadow-lg flex items-center gap-4 max-w-[280px] animate-float border border-[#CCCCCC] ">
      <div className="w-[60px] h-[60px] relative rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src="/smallcardimg.svg"
          alt="Designer Clothes Thumbnail"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-sm">Designer Clothes</h3>
        <div className="text-xs text-[#475367] mt-0.5">
          <p>
            Color: <span className="font-semibold">Black</span>
          </p>
          <p>
            Size: <span className="font-semibold">41</span>
          </p>
        </div>
      </div>
      <div className="text-sm font-semibold">N20k</div>
    </div>
  );
}
