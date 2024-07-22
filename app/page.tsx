import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-windows w-screen h-screen text-white pl-40 pr-10 py-20">
      <div className="text-[150px]">{":("}</div>
      <div className="text-3xl">
        <div>Your device ran into a problem and needs to restart.</div>
        <div className="my-4">
          We're just collecting some error info, and then we'll restart for you.
        </div>
      </div>
      <div className="text-3xl my-8">35% complete</div>
      <div className="flex">
        <div>
          <Image
            src="/qrcode.png"
            alt="A wonderful link."
            width={200}
            height={200}
          />
        </div>
        <div className="pl-6">
          <div className="text-xl flex flex-col gap-2">
            <div>
              For more infomation about this issue and possible fixes, visit
            </div>
            <div>https://www.windows.com/stopcode</div>
          </div>
          <div className="text-lg mt-6 flex flex-col gap-2">
            <div>If you call a support person, give them this info:</div>
            <div>Stop code: SYSTEM THREAD EXCEPTION NOT HANDLED</div>
            <div>What failed: csagent.sys</div>
          </div>
        </div>
      </div>
    </div>
  );
}
