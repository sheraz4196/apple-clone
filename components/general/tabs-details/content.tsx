type Options = {
  mac?: boolean;
  ipad?: boolean;
  iPhone?: boolean;
};
export default function Content({ mac, ipad, iPhone }: Options) {
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
              <p className="text-xs text-zinc-600">More for the the Mac</p>
              <p className="text-xs font-semibold">Support For Mac OS</p>
              <p className="text-xs font-semibold text-zinc-600">
                macOS Sequoias Preview
              </p>
              <p className="text-xs font-semibold text-zinc-600">
                Apple Intelligence
              </p>
              <p className="text-xs font-semibold text-zinc-600">Apple Apps</p>
              <p className="text-xs font-semibold text-zinc-600">Continuity</p>
              <p className="text-xs font-semibold text-zinc-600">iCloud+</p>
              <p className="text-xs font-semibold text-zinc-600">
                Mac for business
              </p>
              <p className="text-xs font-semibold text-zinc-600">Eduction</p>
            </div>
          </>
        )}
        {ipad && (
          <>
            <div className="flex flex-col gap-2">
              <p className="text-xs text-zinc-600">Meet the iPad</p>
              <p className="text-xl font-semibold">See All iPad Models</p>
              <p className="text-xl font-semibold">iPad Air</p>
              <p className="text-xl font-semibold">iPa d Pro</p>
              <p className="text-xl font-semibold">iPad</p>
              <p className="text-xl font-semibold">iPad Mini</p>
              <p className="text-xl font-semibold">iPad Studio</p>
              <p className="text-xl font-semibold">Apple Pencil</p>
              <p className="text-xl font-semibold">Keywords</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs text-zinc-600">Meet the iPad</p>
              <p className="text-xs font-semibold">iPad Stand</p>
              <p className="text-xs font-semibold text-zinc-600">
                iPadOS 18 Preview
              </p>
              <p className="text-xs font-semibold text-zinc-600">
                Apple Intelligence
              </p>
              <p className="text-xs font-semibold text-zinc-600">iCloud+</p>
              <p className="text-xs font-semibold text-zinc-600">Eduction</p>
            </div>
          </>
        )}
        {iPhone && (
          <>
            <div className="flex flex-col gap-2">
              <p className="text-xs text-zinc-600">Meet the iPad</p>
              <p className="text-xl font-semibold">See All iPhone Models</p>
              <p className="text-xl font-semibold">iPad 15</p>
              <p className="text-xl font-semibold">iPhone 15 Pro</p>
              <p className="text-xl font-semibold">iPhone 14</p>
              <p className="text-xl font-semibold">iPhone 13</p>
              <p className="text-xl font-semibold">iPhone SE</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs text-zinc-600">Meet the iPhone</p>
              <p className="text-xs font-semibold">How to buy the iPhone?</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs text-zinc-600">More for the iPhone</p>
              <p className="text-xs font-semibold">iPhone Support</p>
              <p className="text-xs font-semibold">iOS 18 Preview</p>
              <p className="text-xs font-semibold">Apple intelligence</p>
              <p className="text-xs font-semibold">Apple Apps</p>
              <p className="text-xs font-semibold">iPhone Privacy</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
