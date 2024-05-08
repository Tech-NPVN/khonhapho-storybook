import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  InputFormPassword,
} from './components/DataEntry';
import { AlarmClock, Button } from './components/General';

const FormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

const App = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => console.log(data))}>
        <FormField
          control={form.control}
          name="username"
          render={({ field, fieldState: { error } }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Username"
                  className={`${error && 'border-red'}`}
                  suffixIcon={<AlarmClock />}
                  prefixIcon={<AlarmClock />}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <InputFormPassword name="password" label="Password" />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default App;
