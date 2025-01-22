import Link from "next/link";
import Image from "next/image";
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
        <div className="max-w-[1320px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <div className="rounded-lg bg-gray-900/70 p-8 flex flex-col justify-start">
              <div className="pb-2">
                  <Link href={"https://docs.infinilabs.com/gateway/main/"}>
                    <Image
                      width={116}
                      height={36}
                      alt="INFINI Gateway"
                      src="/assets/logo/Gateway.svg"
                      className=""
                    />
                  </Link>
              </div>
              <Link className="text-gray-400 font-normal text-sm pt-4" href={"https://docs.infinilabs.com/gateway/main/docs/getting-started/install/"}>· Installing the Gateway</Link>
              <Link className="text-gray-400 font-normal text-sm pt-4" href={"https://docs.infinilabs.com/gateway/main/docs/getting-started/install/#system-service"}>· How to Install Gateway as a System Service</Link>
              <Link className="text-gray-400 font-normal text-sm pt-4" href={"https://docs.infinilabs.com/gateway/main/docs/getting-started/configuration/"}>· Configuring the Gateway</Link>
          </div>
          <div className="rounded-lg bg-gray-900/70 p-8 flex flex-col justify-start">
                <div className="pb-2">
                  <Link href={"https://docs.infinilabs.com/console/main/"}>
                    <Image
                      width={116}
                      height={36}
                      alt="INFINI Console"
                      src="/assets/logo/Console.svg"
                      className=""
                    />
                  </Link>
                </div>
                <Link className="text-gray-400 font-normal text-sm pt-4" href={"https://docs.infinilabs.com/console/main/docs/getting-started/install/"}>· Installing the Console</Link>
                <Link className="text-gray-400 font-normal text-sm pt-4" href={"https://docs.infinilabs.com/console/main/docs/getting-started/docker/"}>· Container deployment</Link>
                <Link className="text-gray-400 font-normal text-sm pt-4" href={"https://docs.infinilabs.com/console/main/docs/reference/setup/"}>· Setup wizard</Link>
          </div>
          <div className="rounded-lg bg-gray-900/70 p-8 flex flex-col justify-start">
                <div className="pb-2">
                  <Link href={"https://docs.infinilabs.com/loadgen/main/"}>
                    <Image
                      width={116}
                      height={36}
                      alt="INFINI Loadgen"
                      src="/assets/logo/Loadgen.svg"
                      className=""
                    />
                  </Link>
                </div>
                <Link className="text-gray-400 font-normal text-sm pt-4" href={"https://docs.infinilabs.com/loadgen/main/docs/getting-started/install/"}>· Installing the Loadgen</Link>
                <Link className="text-gray-400 font-normal text-sm pt-4" href={"https://docs.infinilabs.com/loadgen/main/en/docs/release-notes/"}>· Release Notes</Link>
          </div>
          <div className="rounded-lg bg-gray-900/70 p-8 flex flex-col justify-start">
                <div className="pb-2">
                  <Link href={"https://docs.infinilabs.com/framework/main/"}>
                    <Image
                      width={116}
                      height={36}
                      alt="INFINI Framework"
                      src="/assets/logo/Framework.svg"
                      className=""
                    />
                  </Link>
                </div>
                <Link className="text-gray-400 font-normal text-sm pt-4" href={"https://docs.infinilabs.com/framework/main/docs/development/setup_golang_environment/"}>· Setting up the Golang environment</Link>
                <Link className="text-gray-400 font-normal text-sm pt-4" href={"https://docs.infinilabs.com/framework/main/docs/development/setup_intellij_idea/"}>· Setup IntelliJ IDEA</Link>
                <Link className="text-gray-400 font-normal text-sm pt-4" href={"https://docs.infinilabs.com/framework/main/docs/development/create_new_application/"}>· Create new application</Link>
          </div>
          <div className="rounded-lg bg-gray-900/70 p-8 flex flex-col justify-start">
                <div className="pb-2">
                  <Link href={"https://docs.infinilabs.com/coco-server/main/"}>
                    <Image
                      width={116}
                      height={36}
                      alt="INFINI coco"
                      src="/assets/logo/Coco.svg"
                      className=""
                    />
                  </Link>
                </div>
                <Link className="text-gray-400 font-normal text-sm pt-4" href={"https://docs.infinilabs.com/coco-server/main/docs/getting-started/install/"}>· Getting started</Link>
                <Link className="text-gray-400 font-normal text-sm pt-4" href={"https://docs.infinilabs.com/coco-server/main/docs/references/"}>· API Reference</Link>
                <Link className="text-gray-400 font-normal text-sm pt-4" href={"https://docs.infinilabs.com/coco-server/main/docs/references/connectors/google_drive/"}>· Connect to your google drive</Link>
          </div>
        </div>
              
        </div>
    </main>
    <Footer></Footer>
    </div>
  );
}
