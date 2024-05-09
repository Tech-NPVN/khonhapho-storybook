import { Button, LockIcon, UserIcon } from '@/components/General';
import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input, InputForm, InputFormPassword } from '.';
import { Form } from '../Form';

const meta: Meta<typeof Input> = {
  title: 'Data Entry/Input',
  component: Input,
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
    placeholder: 'Placeholder',
    disabled: false,
    name: '',
    onChange: () => {},
    sizeInput: 'normal',
  },
  argTypes: {
    sizeInput: {
      options: ['small', 'normal', 'large'],
      table: {
        defaultValue: { summary: 'normal' },
        type: {
          summary: 'small | normal | large',
        },
      },
      control: { type: 'radio' },
    },
  },
};

export const PrefixAndSuffixIcon: Story = {
  render: () => (
    <div className="min-w-[400px] flex flex-col gap-5">
      <Input prefixIcon={<UserIcon />} placeholder="Username" />
      <Input suffixIcon={<LockIcon />} placeholder="Password" />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => {
    const LoginFormSchema = z.object({
      username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
      }),
      password: z.string().min(8, {
        message: 'Password must be at least 8 characters.',
      }),
    });

    const form = useForm<z.infer<typeof LoginFormSchema>>({
      resolver: zodResolver(LoginFormSchema),
      defaultValues: {
        username: '',
        password: '',
      },
    });

    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => alert(JSON.stringify(data)))}
          className="min-w-[400px]"
        >
          <h3 className="text-2xl font-bold mb-5">Login</h3>
          <InputForm
            name="username"
            label="Username"
            className="mb-5"
            placeholder="Username"
            prefixIcon={<UserIcon />}
            required
          />
          <InputFormPassword
            name="password"
            label="Password"
            className="mb-8"
            placeholder="Password"
            prefixIcon={<LockIcon />}
            required
          />

          <div className="w-full">
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    );
  },
};
