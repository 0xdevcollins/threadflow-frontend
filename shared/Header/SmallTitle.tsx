import { ShieldTick } from 'iconsax-react';
import type React from 'react';

interface SmallTitleProps {
  text: string;
}

const SmallTitle: React.FC<SmallTitleProps> = ({
  text = 'The #1 On-Demand Product-as-a-Service Platform in Africa',
}) => {
  return (
    <div className="max-w-fit bg-[#F9FAFB] rounded-[32px] border border-black/20 py-3 px-4 flex gap-2 items-center">
      <span className="rounded-full bg-white shadow p-1">
        <ShieldTick size={12} color="#000000" />
      </span>
      <p className="text-center text-xs font-medium uppercase text-black">
        {text}
      </p>
    </div>
  );
};

export default SmallTitle;
