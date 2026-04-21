interface IPhoneFrameProps {
  children: React.ReactNode;
}

export function IPhoneFrame({ children }: IPhoneFrameProps) {
  return (
    <div className="relative mx-auto w-[280px]">
      <div className="overflow-hidden rounded-[40px] border-[6px] border-[#1a1a1a] bg-[#1a1a1a] shadow-2xl">
        <div className="relative">
          <div className="absolute left-1/2 top-[10px] z-10 h-[18px] w-[60px] -translate-x-1/2 rounded-full bg-[#1a1a1a]" />
          <div className="relative aspect-[9/19.5] overflow-hidden bg-white">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
