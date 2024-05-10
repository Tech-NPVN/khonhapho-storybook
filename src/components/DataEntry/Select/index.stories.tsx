import { Button } from '@/components/General';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Select, SelectForm } from '.';
import { Form } from '../Form';

interface IOption {
  value: string;
  label: string;
  disabled?: boolean;
}

const OPTIONS = [
  { value: 'Nguyễn Phương Nam', label: 'Nguyễn Phương Nam' },
  { value: 'Nguyễn Đăng Trung', label: 'Nguyễn Đăng Trung' },
  { value: 'Lương Quang Trọng', label: 'Lương Quang Trọng', disabled: true },
  { value: 'Hoàng Văn Anh', label: 'Hoàng Văn Anh' },
  { value: 'Nguyễn Lâm Chúc', label: 'Nguyễn Lâm Chúc' },
  { value: 'Hà Bảo Khiêm', label: 'Hà Bảo Khiêm' },
  { value: 'Phạm Anh Tuấn', label: 'Phạm Anh Tuấn' },
  { value: 'Nguyễn Đức An', label: 'Nguyễn Đức An' },
  { value: 'Nguyễn Bình Minh', label: 'Nguyễn Bình Minh' },
  { value: 'Nguyễn Thu Hiền', label: 'Nguyễn Thu Hiền' },
  { value: 'Đặng Thị Quỳnh Anh', label: 'Đặng Thị Quỳnh Anh' },
  { value: 'Nguyễn Thu Hà', label: 'Nguyễn Thu Hà' },
  { value: 'Nguyễn Khánh Linh', label: 'Nguyễn Khánh Linh' },
] as IOption[];

const meta: Meta<typeof Select> = {
  title: 'Data Entry/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    value: null,
  },
  argTypes: {
    options: {
      description: '',
      table: {
        defaultValue: {
          summary: 'null',
        },
        type: {
          summary: 'IOption[] | null|',
          detail: `interface IOption {
            value: string;
            label: string;
            disabled?: boolean;
          }`,
        },
      },
    },
    value: {
      table: {
        type: {
          summary: 'IOption | IOption[] | null|',
          detail: `interface IOption {
            value: string;
            label: string;
            disabled?: boolean;
          }`,
        },
        defaultValue: {
          summary: 'null',
        },
      },
      description: '',
    },
    className: {
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
    isLoading: {
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    multiple: {
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
    placeholder: {
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const SelectSingle = () => {
      const [selected, setSelected] = useState<IOption>();
      return (
        <div className="min-h-80 w-52">
          <Select options={OPTIONS} value={selected} onChange={setSelected} />
        </div>
      );
    };
    return <SelectSingle />;
  },
};

export const Multiple: Story = {
  render: () => {
    const SelectMultiple = () => {
      const [selected, setSelected] = useState<IOption[]>([]);
      return (
        <div className="min-h-80 w-96">
          <Select options={OPTIONS} value={selected} onChange={setSelected} multiple />
        </div>
      );
    };
    return <SelectMultiple />;
  },
};

export const FormExample: Story = {
  render: () => {
    const FormSchema = z.object({
      items: z.object({
        value: z.string(),
        label: z.string(),
        disable: z.boolean().optional(),
      }),
    });

    const SelectSingleForm = () => {
      const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          items: undefined,
        },
      });

      return (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => alert(JSON.stringify(data)))}
            className="min-w-[400px] min-h-80"
          >
            <SelectForm<z.infer<typeof FormSchema>> name="items" options={OPTIONS} />
            <Button type="submit" className="mt-5">
              Submit
            </Button>
          </form>
        </Form>
      );
    };

    return <SelectSingleForm />;
  },
};

export const FormSelectMultipleExample: Story = {
  render: () => {
    const FormSchema = z.object({
      items: z.array(
        z.object({
          value: z.string(),
          label: z.string(),
          disable: z.boolean().optional(),
        }),
      ),
    });

    const SelectMultipleForm = () => {
      const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          items: [],
        },
      });

      return (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => alert(JSON.stringify(data)))}
            className="min-w-[400px] min-h-80"
          >
            <SelectForm<z.infer<typeof FormSchema>> name="items" options={OPTIONS} multiple />
            <Button type="submit" className="mt-5">
              Submit
            </Button>
          </form>
        </Form>
      );
    };

    return <SelectMultipleForm />;
  },
};
