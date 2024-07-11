import Link from "next/link";
export default function Instructions() {
  return (
    <div className="text-xs text-black/50 pb-2.5 border-b order-[#CECECF]">
      <ol className="list-decimal pl-5 flex flex-col gap-2.5 pb-2.5">
        <li>
          Software and content may be sold separately. Title availability is
          subject to change.
        </li>
        <li>
          SMS requires an iPhone or iPad with iOS 8.1 or later or iPadOS. Calls
          require an iPhone with iOS 8 or later
        </li>
        <li>
          Handoff requires an iPhone or iPad with iOS 8 or later or iPadOS.
        </li>
        <li>
          Screen size is measured diagonally. The 13-inch and 15-inch MacBook
          Air and 14-inch and 16-inch MacBook Pro displays have rounded corners
          at the top. When measured as a standard rectangle, the displays are
          13.6 inches, 15.3 inches, 14.2 inches, and 16.2 inches diagonally
          (actual display area is less).
        </li>
        <li>
          Testing conducted by Apple in January 2024 using preproduction 15-inch
          MacBook Air systems with the Apple M3 chip, 8-core CPU, and 10-core
          GPU, and preproduction 13-inch MacBook Air systems with the Apple M3
          chip, 8-core CPU, and 8-core GPU, all configured with 8GB of RAM and
          256GB SSD. Testing conducted by Apple in May 2022 using preproduction
          13-inch MacBook Air systems with the Apple M2 chip, 8-core CPU, 8-core
          GPU, 8GB of RAM, and 256GB SSD. The Wireless Internet Productivity
          test measures battery life by browsing 25 popular websites wirelessly
          with display brightness set to 8 clicks from the lowest setting. The
          video playback test in the Apple TV app measures battery life by
          playing 1080p HD content with the display brightness set to 8 clicks
          from the lowest setting. Battery life varies by use and settings. For
          more information, see{" "}
          <Link href={"#"} className="font-semibold underline">
            apple.com/co/batteries
          </Link>
          .
        </li>
        <li>
          Testing conducted by Apple in September and October 2023 using
          preproduction 16-inch MacBook Pro systems with the Apple M3 Pro chip,
          12-core CPU, 18-core GPU, 36GB of RAM, and 512GB SSD. The video
          playback test in the Apple TV app measures battery life by playing
          1080p HD content with display brightness set to 8 clicks from the
          lowest setting. Battery life varies by use and settings. For more
          information, see{" "}
          <Link href={"#"} className="font-semibold underline">
            apple.com/co/batteries
          </Link>
        </li>
        <li>The exact screen size is 23.5 inches diagonally</li>
        <li>Screen size is measured diagonally.</li>
      </ol>
      <ul className="flex flex-col gap-2.5 pb-2.5">
        <li>
          Not all configurations are available in all countries or authorized
          dealers. Performance claims vary by model and configuration.
        </li>
        <li>Some features may not be available in all regions or languages</li>
        <li>
          Some features require an Apple ID, compatible hardware, and compatible
          internet or cellular network access and may be subject to additional
          terms and fees.
        </li>
        <li>
          Some features require specific hardware and software. For more
          information, see “Feature Requirements” on page
          <Link href={"#"} className="font-semibold underline">
            11.support.apple.com/en-us/macos/upgrade.
          </Link>{" "}
          Lies of P © NEOWIZ. All rights reserved.
        </li>
      </ul>
    </div>
  );
}
