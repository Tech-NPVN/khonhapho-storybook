import { Button, Typography } from '@/components/General';
import { zodResolver } from '@hookform/resolvers/zod';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { CheckBox, CheckboxForm, CheckboxOption } from '.';
import { Form } from '../Form';

const meta: Meta<typeof CheckBox> = {
  title: 'Data Entry/Checkbox',
  component: CheckBox,
  tags: ['autodocs'],
  args: {
    variant: 'default',
    label: 'Label',
    checked: false,
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['default', 'success', 'error'],
      table: {
        defaultValue: { summary: 'default' },
        type: {
          summary: 'default | success | error',
        },
      },
      control: { type: 'select' },
    },
    label: {
      table: {
        defaultValue: { summary: 'Label' },
        type: {
          summary: 'string',
        },
      },
    },
    onChange: {
      type: 'function',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

/**
 * You can control the checkbox with the `checked` and `onChange` props:
 */
export const Controlled: Story = {
  render: () => {
    const CheckboxControlled = () => {
      const [checkedSuccess, setCheckedSuccess] = useState<boolean>(false);
      const [checkedDefault, setCheckedDefault] = useState<boolean>(false);
      const [checkedError, setCheckedError] = useState<boolean>(false);

      return (
        <div className="flex items-center gap-10">
          <CheckBox
            checked={checkedSuccess}
            onChange={() => setCheckedSuccess(!checkedSuccess)}
            label="Success"
            variant="success"
          />
          <CheckBox
            checked={checkedDefault}
            onChange={() => setCheckedDefault(!checkedDefault)}
            label="Default"
            variant="default"
          />
          <CheckBox
            checked={checkedError}
            onChange={() => setCheckedError(!checkedError)}
            label="Error"
            variant="error"
          />
        </div>
      );
    };

    return <CheckboxControlled />;
  },
};

export const FormExample: Story = {
  render: () => {
    const FormSchema = z.object({
      isAccept: z
        .boolean()
        .default(false)
        .refine((value) => value === true, {
          message: 'Accept is required!',
        }),
    });

    const CheckboxFormExample = () => {
      const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          isAccept: false,
        },
      });

      return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit((data) => alert(JSON.stringify(data)))}>
            <div className="border rounded px-5 py-3">
              <CheckboxForm<z.infer<typeof FormSchema>>
                name="isAccept"
                label="Accept terms and conditions"
                description="You agree to our Terms of Service and Privacy Policy."
              />
            </div>
            <Button type="submit" className="mt-5">
              Submit
            </Button>
          </form>
        </Form>
      );
    };

    return <CheckboxFormExample />;
  },
};

const items: CheckboxOption[] = [
  {
    value: 'recents',
    label: 'Recents',
  },
  {
    value: 'home',
    label: 'Home',
  },
  {
    value: 'applications',
    label: 'Applications',
  },
  {
    value: 'desktop',
    label: 'Desktop',
  },
  {
    value: 'downloads',
    label: 'Downloads',
  },
  {
    value: 'documents',
    label: 'Documents',
  },
];

export const FormExampleCheckboxMultiple: Story = {
  render: () => {
    const FormSchema = z.object({
      items: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: 'You have to select at least one item.',
      }),
    });

    const CheckboxMultipleFormExample = () => {
      const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          items: ['recents'],
        },
      });

      return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit((data) => alert(JSON.stringify(data)))}>
            <div className="border rounded px-5 py-3">
              <Typography variant="h5" className="mb-3">
                List checkbox option
              </Typography>
              <CheckboxForm<z.infer<typeof FormSchema>>
                name="items"
                options={items}
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

    return <CheckboxMultipleFormExample />;
  },
};
