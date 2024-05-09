import { Button, WarningReverceIcon } from '@/components/General';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Textarea, TextareaForm } from '.';
import { Form } from '../Form';

const meta: Meta<typeof Textarea> = {
  title: 'Data Entry/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    className: 'min-w-[400px]',
    name: '',
    disabled: false,
    placeholder: 'Placeholder',
    minRows: 3,
    maxRows: 5,
  },
  argTypes: {
    minRows: {
      table: {
        type: { summary: 'number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    maxRows: {
      table: {
        type: { summary: 'number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
};

export const FormExample: Story = {
  render: () => {
    const FormSchema = z.object({
      description: z.string().min(1, { message: 'Description is required!' }),
    });

    const form = useForm<z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        description: '',
      },
    });

    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => alert(JSON.stringify(data)))}
          className="min-w-[400px]"
        >
          <TextareaForm<z.infer<typeof FormSchema>>
            name="description"
            placeholder="Description"
            label="Descrption"
            required
            minRows={4}
            maxRows={6}
            description={
              <div className="flex items-center gap-3">
                <WarningReverceIcon />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </div>
            }
          />

          <Button type="submit" className="mt-5">
            Submit
          </Button>
        </form>
      </Form>
    );
  },
};
