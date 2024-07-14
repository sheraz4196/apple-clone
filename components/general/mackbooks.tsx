import Image from "next/image";
import Link from "next/link";

export default function MacBooks() {
  return (
    <div className="grid grid-cols-3 py-2.5 gap-x-3 md:gap-x-5">
      <article className="flex flex-col items-center">
        <header>
          <Link
            href={"#"}
            className="block w-[228px] h-[114px] md:w-[270px] md:h-[134px] lg:w-[354px] lg:h-[176px] md:mb-9 lg:mb-10"
          >
            <Image
              src={"/assets/macs/mac-1.png"}
              alt="MacBook"
              width={354}
              height={176}
              className="w-full h-full"
            />
          </Link>
        </header>
        <ol className="mb-7 flex items-center gap-2">
          <li className="h-2.5 w-2.5 inset-1 rounded-full bg-black" />
          <li className="h-2.5 w-2.5 inset-1 rounded-full bg-gray-400" />
          <li className="h-2.5 w-2.5 inset-1 rounded-full bg-cyan-300" />
          <li className="h-2.5 w-2.5 inset-1 rounded-full bg-yellow-300" />
        </ol>
        <div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-[#b64400] text-xs font-semibold">
              Nuevos modelos con chip M3
            </span>
            <h6 className="text-[#1d1d1f] text-xl md:text-2xl lg:text-3xl font-semibold">
              MacBook Air 13” and 15”
            </h6>
            <p className="text-[#1d1d1f] text-sm lg:text-base font-semibold">
              M2 or M3 chip
            </p>
          </div>
          <p className="mt-3 mx-auto md:text-center max-w-[260px]">
            Incredibly thin and fast, so you can work, play, and create
            anywhere.
          </p>
          <div className="my-10 border-b">
            <Link
              className="px-5 py-2.5 rounded-full block bg-[#0071e3] text-sm lg:text-base text-white max-w-[260px] text-center mx-auto"
              href={"#"}
            >
              More Information
            </Link>
          </div>
          <div className="pt-14 text-[#1d1d1f]">
            <div className="mv-10">
              <h6 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                MacBook Air 13” and 15”
              </h6>
              <p className="mt-2.5">
                Liquid Retina display with 500 nits of brightness and support
                for 1 billion colors 4
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
