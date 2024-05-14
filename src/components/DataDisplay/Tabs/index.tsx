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
        fillGray: 'px-[56px] ',
        fillGraySelected: 'px-[56px] bg-[#F3F4F6]',
        fillGreen: 'text-textSecondaryLight px-[56px] dark:text-textSecondaryDark font-semibold',
        fillGreenSelected: 'px-[56px] bg-primaryButtonLight dark:bg-textSecondaryDark text-white',
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
  };

export const Tabs = ({ tabs, variantTab = 'underline', ...buttonProps }: TabsProps) => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const { variant, className, ...props } = buttonProps;

  const getTabListCn = useMemo(() => {
    switch (variantTab) {
      case 'underline':
        return 'border-b border-gray-200 dark:border-white/10 gap-8';
      case 'fillGray':
        return 'bg-[#E5E6E8]  rounded-lg';
      case 'fillGreen':
        return 'bg-white w-max rounded-lg dark:bg-primaryColorDark';
    }
  }, [variantTab]);

  return (
    <TabGroup as={Fragment} selectedIndex={tabIndex} onChange={setTabIndex}>
      <TabList className={`flex ${getTabListCn}`}>
        {tabs.map((tab) => (
          <Tab as={Fragment} key={tab.key}>
            {({ selected }) => (
              <button
                className={cn(
                  buttonTabStyles({
                    variant: selected ? `${variantTab}Selected` : variantTab,
                    className,
                  }),
                  'font-semibold',
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
