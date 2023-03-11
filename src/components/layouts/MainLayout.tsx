import { Config } from "@/util/config";

interface MainLayoutProps {
  children: JSX.Element;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <header>
        <h1 className="text-5xl mb-20 font-extrabold font-neutra2 text-cyan-700 text-center">
          -{Config.site.title}-
        </h1>
      </header>
      <main>{children}</main>
    </div>
  );
};
