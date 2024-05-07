import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment } from 'react';

type TabsProps = {};

export const Tabs = () => {
  return (
    <TabGroup manual>
      <TabList>
        <Tab as={Fragment}>
          {({ hover, selected }) => (
            <button className={clsx(hover && 'underline', selected && 'bg-blue-500 text-white')}>
              Tab 1
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ hover, selected }) => (
            <button className={clsx(hover && 'underline', selected && 'bg-blue-500 text-white')}>
              Tab 2
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ hover, selected }) => (
            <button className={clsx(hover && 'underline', selected && 'bg-blue-500 text-white')}>
              Tab 3
            </button>
          )}
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Content 1</TabPanel>
        <TabPanel>Content 2</TabPanel>
        <TabPanel>Content 3</TabPanel>
      </TabPanels>
    </TabGroup>
  );
};
