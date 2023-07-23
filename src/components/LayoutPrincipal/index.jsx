import Navegador from "./Navegador";

export default function Layout({children}) {
  return (
    <div className="bg-red-900 min-h-screen flex">
        <Navegador />
      <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
        {children}
      </div>
    </div>
  );
}
