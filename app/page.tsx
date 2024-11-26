import Link from "next/link";
import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";

export default function Home() {
  return (
    <div className="min-h-screen ">
    <Header></Header>
    <main className="px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-48">
      <div className="w-full h-[460px] bg-center bg-no-repeat mt-32 xl:mt-24" style={{backgroundImage:"url(/assets/img/home/bg.svg)"}}>
      </div>
      <div className="w-full mt-16 flex justify-center">
        <div className="max-w-[1320px] grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="rounded-lg bg-gray-900/70 p-8 flex flex-col justify-start">
                <div className="text-gray-300 text-xl font-medium pb-2">
                  INFINI Gateway
                </div>
                <Link className="text-gray-400 font-normal text-sm pt-4" href={"https://docs.infinilabs.com/gateway/main/docs/getting-started/install/"}>· Installing the Gateway</Link>
                <Link className="text-gray-400 font-normal text-sm pt-4" href={"https://docs.infinilabs.com/gateway/main/docs/getting-started/install/#system-service"}>· How to Install Gateway as a System Service</Link>
                <Link className="text-gray-400 font-normal text-sm pt-4" href={"https://docs.infinilabs.com/gateway/main/docs/getting-started/configuration/"}>· Configuring the Gateway</Link>
              </div>
              <div className="rounded-lg bg-gray-900/70 p-8 flex flex-col justify-start">
                <div className="text-gray-300 text-xl font-medium pb-2">
                  INFINI Console
                </div>
                <Link className="text-gray-400 font-normal text-sm pt-4" href={"https://docs.infinilabs.com/console/main/docs/getting-started/install/"}>· Installing the Console</Link>
                <Link className="text-gray-400 font-normal text-sm pt-4" href={"https://docs.infinilabs.com/console/main/docs/getting-started/docker/"}>· Container deployment</Link>
                <Link className="text-gray-400 font-normal text-sm pt-4" href={"https://docs.infinilabs.com/console/main/docs/reference/setup/"}>· Setup wizard</Link>
              </div>
        </div>
              
        </div>
    </main>
    <Footer></Footer>
    </div>
  );
}
