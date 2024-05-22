import clsx from 'clsx';
import { ReactNode, useEffect, useState } from 'react';

export interface ITabList {
  name: string;
  items: ReactNode[] | string[];
  defaultIndex?: number;
  className?: string;
}

export interface ITabPanel {
  name: string;
  children: ReactNode;
  tabIndex: number;
}

export function TabList({ name, items, defaultIndex, className }: Readonly<ITabList>) {
  const [selected, setSelected] = useState<number>(defaultIndex ?? -1);

  const handleChange = (tab: number) => {
    items.forEach((_, i) => {
      document.getElementById(`tab-panel-${name}-${i}`)?.setAttribute('data-display', 'false');
    });
    document.getElementById(`tab-panel-${name}-${tab}`)?.setAttribute('data-display', 'true');
    setSelected(tab);
  };

  useEffect(() => {
    defaultIndex != -1 && handleChange(defaultIndex ?? -1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full">
      <ul
        className="relative flex p-1 list-none rounded-xl bg-secondaryColorLightD2 dark:bg-black"
        data-tabs="tabs"
      >
        {items.map((item, i) => (
          <li
            key={'tabpanel' + i}
            onClick={() => {
              handleChange(i);
            }}
            className={clsx(
              'z-10 flex-auto text-center rounded-lg cursor-pointer',
              selected != i ? 'hover:bg-black/5' : '',
            )}
            style={{ width: `calc(100% / ${items.length}` }}
          >
            <span
              className={`flex items-center justify-center w-full px-0 py-1 mb-0 border-0 rounded-lg font-medium text-black dark:text-white ${className}`}
            >
              {item}
            </span>
          </li>
        ))}
        <li
          className="flex-auto text-center absolute transition-all duration-500 bg-white dark:bg-white/15 rounded-lg"
          style={{
            width: `calc(100% / ${items.length} - 8px)`,
            left: `calc(${(selected * 100) / items.length}% + 4px)`,
            display: selected == -1 ? 'none' : '',
          }}
        >
          <span
            className={`text-transparent flex items-center justify-center w-full px-0 py-1 mb-0 border-0 ${className}`}
          >
            -
          </span>
        </li>
      </ul>
    </div>
  );
}

export const TabPanel = ({ children, name, tabIndex }: ITabPanel) => {
  return (
    <div className="hidden data-[display=true]:block" id={`tab-panel-${name}-${tabIndex ?? -1}`}>
      {children}
    </div>
  );
};
