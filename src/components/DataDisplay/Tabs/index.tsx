import { cn } from '@/utils';
import { Tab, TabGroup, TabList, TabPanels } from '@headlessui/react';
import { VariantProps, cva } from 'class-variance-authority';
import { Fragment, ReactNode, useMemo, useState } from 'react';

const buttonTabStyles = cva(
  'py-2 cursor-pointer rounded-lg outline-none transition-colors duration-300 ease-in-out',
  {
    variants: {
      variant: {
        underline:
          'border-b-2 border-transparent hover:text-primaryButtonLight rounded-none dark:text-white',
        underlineSelected:
          'border-b-2 border-primaryButtonLight text-primaryButtonLight rounded-none',
        fillGray: '',
        fillGraySelected: 'bg-[#F3F4F6] dark:bg-[rgba(58,59,60,1)]',
        fillGreen: 'text-textSecondaryLight dark:text-textSecondaryDark font-semibold',
        fillGreenSelected: 'bg-primaryButtonLight dark:bg-textSecondaryDark text-white',
      },
    },
    defaultVariants: {
      variant: 'underline',
    },
  },
);

export type TabRenderProps = {
  name: string | ReactNode;
  key: string;
  children: ReactNode;
  disabled?: boolean;
};

export type TabsProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonTabStyles> & {
    tabs: TabRenderProps[];
    variantTab?: 'underline' | 'fillGray' | 'fillGreen';
    widthTabList?: number;
  };

export const Tabs = ({
  tabs,
  variantTab = 'underline',
  widthTabList,
  ...buttonProps
}: TabsProps) => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const { variant, className, ...props } = buttonProps;

  const getTabListCn = useMemo(() => {
    switch (variantTab) {
      case 'underline':
        return 'border-b border-gray-200 dark:border-white/10 gap-8';
      case 'fillGray':
        return 'bg-[#E5E6E8]  rounded-lg';
      case 'fillGreen':
        return 'bg-white rounded-lg dark:bg-primaryColorDark';
    }
  }, [variantTab]);

  return (
    <TabGroup as={Fragment} selectedIndex={tabIndex} onChange={setTabIndex}>
      <TabList
        className={`flex w-full dark:bg-[rgba(24,25,26,1)] ${getTabListCn}`}
        style={{ width: widthTabList }}
      >
        {tabs.map((tab) => (
          <Tab as={Fragment} key={tab.key}>
            {({ selected }) => (
              <button
                className={cn(
                  buttonTabStyles({
                    variant: selected ? `${variantTab}Selected` : variantTab,
                    className,
                  }),
                  'font-semibold flex-1 dark:text-[#fff]',
                )}
                {...props}
              >
                {tab.name}
              </button>
            )}
          </Tab>
        ))}
      </TabList>
      <TabPanels>{tabs[tabIndex].children}</TabPanels>
    </TabGroup>
  );
};
