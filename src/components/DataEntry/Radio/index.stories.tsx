import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Radio from '.';

const meta: Meta<typeof Radio> = {
  title: 'Data Entry/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

const RADIOS = [
  {
    value: '1',
    label: 'One',
    checked: false,
  },
  {
    value: '2',
    label: 'Two',
    checked: false,
  },
];
export const Default: Story = {
  args: {
    label: 'Default',
    value: '',
    checked: false,
    disabled: false,
    className: '',
    name: '',
  },
  argTypes: {
    checked: {
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    disabled: {
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
};
export const Demo: Story = {
  render: () => {
    const [radios, setRadios] = useState(RADIOS);
    return (
      <>
        {radios.map((r) => (
          <Radio
            key={r.value}
            label={r.label}
            value={r.value}
            checked={r.checked}
            className="demo"
            onChecked={() => {
              setRadios(radios.map((radio) => ({ ...radio, checked: r.value === radio.value })));
            }}
            name=""
          />
        ))}
      </>
    );
  },
};
