import { DarkIcon, LightIcon } from '@/components/General';
import { useMode } from '@/hooks/useMode';
import { Outlet } from 'react-router-dom';

export const NoAuthLayout = () => {
  const { theme, toggleTheme } = useMode();

  return (
    <section
      className={`relative bg-[url('/background.png')] bg-no-repeat bg-cover flex justify-center items-center min-h-screen w-full md:py-10 overflow-auto`}
    >
      <Outlet context={[theme]} />

      <div className="fixed top-5 right-5">
        <button
          onClick={toggleTheme}
          className="border border-white/20 p-3 rounded hover:bg-white/10 transition-all duration-300"
        >
          {theme === 'light' ? (
            <LightIcon className="[&>path]:fill-white" />
          ) : (
            <DarkIcon className="[&>path]:stroke-white" />
          )}
        </button>
      </div>
    </section>
  );
};
