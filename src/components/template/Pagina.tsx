import Navbar from "./Navbar";
import Header from "./Header";
import Main from "./Main";

export default function Pagina(props: any) {
  return (
    <div className="flex flex-1 min-h-screen h-screen fundoGradiente">
      <Navbar />
      <div className="flex flex-1 flex-col gap-8 pr-32 overflow-auto">
        <Header />
        <Main>{props.children}</Main>
      </div>
    </div>
  );
}
