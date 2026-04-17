interface DeviceFrameProps {
  children: React.ReactNode;
}

export function DeviceFrame({ children }: DeviceFrameProps) {
  return (
    <div className="mx-auto w-full max-w-[1200px]">
      <div className="overflow-hidden rounded-xl border border-stone-200 bg-stone-900 shadow-2xl">
        <div className="flex items-center gap-2 border-b border-stone-700 px-4 py-3">
          <div className="h-3 w-3 rounded-full bg-stone-600" />
          <div className="h-3 w-3 rounded-full bg-stone-600" />
          <div className="h-3 w-3 rounded-full bg-stone-600" />
        </div>
        <div className="aspect-video bg-stone-bg">{children}</div>
      </div>
    </div>
  );
}
