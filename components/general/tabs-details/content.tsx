type Options = {
  mac?: boolean;
};
export default function Content({ mac }: Options) {
  return (
    <div className=" bg-white">
      <div className="grid gap-6 lg:grid-cols-4 max-w-screen-lg mx-auto px-6 py-14">
        {mac && (
          <>
            <div className="flex flex-col gap-2">
              <p className="text-xs text-zinc-600">Meet the Mac</p>
              <p className="text-xl font-semibold">See All Mac Models</p>
              <p className="text-xl font-semibold">Macbook Air</p>
              <p className="text-xl font-semibold">Macbook Pro</p>
              <p className="text-xl font-semibold">iMac</p>
              <p className="text-xl font-semibold">Mac Mini</p>
              <p className="text-xl font-semibold">Mac Studio</p>
              <p className="text-xl font-semibold">Mac Pro</p>
              <p className="text-xl font-semibold">Monitors</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs text-zinc-600">Meet the Mac</p>
              <p className="text-xs">Support For Mac OS</p>
              <p className="text-xs text-zinc-600">macOS Sequoias Preview</p>
              <p className="text-xs text-zinc-600">Apple Intelligence</p>
              <p className="text-xs text-zinc-600">Apple Apps</p>
              <p className="text-xs text-zinc-600">Continuity</p>
              <p className="text-xs text-zinc-600">iCloud+</p>
              <p className="text-xs text-zinc-600">Mac for business</p>
              <p className="text-xs text-zinc-600">Eduction</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
