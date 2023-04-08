import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NOSTR Hackaton - La Crypta</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#15162c] to-[#2e026d] text-2xl text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <Title />
          <div className="space-y-4 text-center">
            <div>Primero necesitas la extensión en el Explorador</div>
            <div className="flex justify-center">
              <Button
                onClick={() => window.open("https://getalby.com/", "_blank")}
              >
                Descargar Alby
              </Button>
            </div>

            <div>Conectá la wallet al sitio</div>
            <div className="flex justify-center">
              <Button
                onClick={() => {
                  void login();
                }}
              >
                Conectar con Alby
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;