import { Button, Typography } from '@/components/General';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Radio, { RadioForm, radioOptions } from '.';
import { Form } from '../Form';

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
    checked: true,
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
export const FormExample: Story = {
  render: () => {
    const FormSchema = z.object({
      item: z.object(
        {
          value: z.string(),
          label: z.string(),
        },
        { message: '1111' },
      ),
    });

    const RadioFormExample = () => {
      const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          item: RADIOS[0],
        },
      });

      return (
        <Form {...form}>
          <form
            className="w-96"
            onSubmit={form.handleSubmit((data) => alert(JSON.stringify(data)))}
          >
            <div className="border rounded px-5 py-3">
              <Typography variant="h5" className="mb-3">
                Demo radio
              </Typography>
              <RadioForm<z.infer<typeof FormSchema>>
                name="item"
                options={radioOptions}
                description="Select the items you want to display."
              />
            </div>

            <Button type="submit" className="mt-5">
              Submit
            </Button>
          </form>
        </Form>
      );
    };

    return <RadioFormExample />;
  },
};
