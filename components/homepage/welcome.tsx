export default function WelcomeSection() {
  return (
    <section className="pt-14 lg:pt-24 mx-6 lg:mx-auto max-w-screen-lg">
      <header className="text-[rgb(29, 29, 31)] flex flex-col lg:flex-row gap-2 lg:items-center lg:justify-between pb-14 lg:pb-20">
        <h1 className="text-7xl font-semibold">Mac</h1>
        <p className="w-56 text-xl font-semibold">
          Dream big, the Mac can do it.
        </p>
      </header>
      <div className="max-w-screen-xl w-full h-[680px]">
        <div className="h-full w-full bg-gray-400 rounded-3xl"></div>
      </div>
    </section>
  );
}
