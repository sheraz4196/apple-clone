import Link from "next/link";
export default function DealerSection() {
  return (
    <section className="pt-9 pb-3">
      <div className="flex items-center justify-between pb-4 border-b">
        <p className="text-xs">
          <Link className="text-blue-800 underline" href={"#"}>
            Find a dealer
          </Link>{" "}
          near you.
        </p>
      </div>
      <div className="pt-4 pb-2.5 flex items-center justify-between">
        <div className="flex items-center gap-7">
          <p className="text-xs">
            Copyright &copy; 2024 Apple Inc. All rights reserved
          </p>
          <div className="flex gap-1.5">
            <Link href={"#"} className="text-xs">
              Privacy Policy
            </Link>
            <span className="border-l" />
            <Link href={"#"} className="text-xs">
              Legal Warning
            </Link>
            <span className="border-l" />
            <Link href={"#"} className="text-xs">
              Site Map
            </Link>
          </div>
        </div>
        <Link href={"#"} className="text-xs">
          Colombia
        </Link>
      </div>
    </section>
  );
}
