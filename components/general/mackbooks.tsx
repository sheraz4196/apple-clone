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
          <div className="flex flex-col gap-2">
            <span className="text-[#b64400] text-xs font-semibold">
              Nuevos modelos con chip M3
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}
