import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-windows w-screen h-screen text-white pl-10 md:pl-20 pt-40 pr-4 lg:pl-40 lg:pr-10 lg:py-20">
      <div className="text-[80px] md:text-[120px] lg:text-[150px]">{":("}</div>
      <div className="text-lg md:text-2xl lg:text-3xl">
        <div>Your device ran into a problem and needs to restart.</div>
        <div className="my-4">
          We're just collecting some error info, and then we'll restart for you.
        </div>
      </div>
      <div className="text-lg md:text-2xl lg:text-3xl my-8">35% complete</div>
      <div className="flex">
        <div>
          <Image
            src="/qrcode.png"
            alt="A wonderful link."
            className="w-[160px] md:w-[180px] lg:w-[200px]"
            width={200}
            height={200}
            priority={true}
          />
        </div>
        <div className="pl-4 lg:pl-6">
          <div className="text-base md:text-lg lg:text-xl flex flex-col gap-2">
            <div>
              For more infomation about this issue and possible fixes, visit
            </div>
            <div>https://www.windows.com/stopcode</div>
          </div>
          <div className="text-sm md:text-base lg:text-lg mt-6 flex flex-col gap-2">
            <div>If you call a support person, give them this info:</div>
            <div>Stop code: SYSTEM THREAD EXCEPTION NOT HANDLED</div>
            <div>What failed: csagent.sys</div>
          </div>
        </div>
      </div>
    </div>
  );
}
