import { Form, IOption, SelectForm } from '@/components/DataEntry';
import { Button, Typography } from '@/components/General';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
const PROPERTY_TYPE = [
  { label: 'Thổ cư', value: 'Tho-cu' },
  { label: 'Chung cư', value: 'Chung-cu' },
  { label: 'Dự án', value: 'Du-an' },
] as IOption[];
function WarehouseForm() {
  const FormSchema = z.object({
    property_type: z.object(
      {
        value: z.string(),
        label: z.string(),
        disable: z.boolean().optional(),
      },
      { message: 'Bạn phải mục này' },
    ),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
  });

  console.log(form.formState.errors);
  return (
    <div className="w-full rounded-lg min-h-96 bg-white dark:bg-primaryColorDark">
      <div className="px-6 w-full py-4">
        <Typography variant="h2" className="text-lg uppercase font-medium dark:text-white">
          Kho Tài Nguyên
        </Typography>
      </div>
      <div className="w-full h-[1px] bg-black/5 dark:bg-white/10"></div>
      <div className="px-6 w-full py-3">
        <Form {...form}>
          <form
            className="flex pt-4 flex-wrap"
            onSubmit={form.handleSubmit((data) => alert(JSON.stringify(data)))}
          >
            <div className="flex flex-1 justify-between flex-wrap">
              <div className="flex-1 me-2">
                <label htmlFor="id-1" className="inline-block mb-4 text-sm dark:text-white">
                  Nhân bản tin đăng
                </label>
                <div>
                  <Button type="button" id="id-1">
                    Chọn tin
                  </Button>
                </div>
              </div>
              <div className="flex-1 ms-2">
                <label
                  htmlFor="property_type"
                  className="inline-block mb-4 text-sm dark:text-white"
                >
                  Loại hình
                </label>
                <div>
                  <SelectForm<z.infer<typeof FormSchema>>
                    name="property_type"
                    value={form.watch('property_type')}
                    options={PROPERTY_TYPE}
                    placeholder="Tình trạng"
                  />
                </div>
              </div>
              <div className="w-full ms-2">
                <label
                  htmlFor="property_type"
                  className="inline-block mb-4 text-sm dark:text-white"
                >
                  Đặc điểm
                </label>
                <div>
                  <SelectForm<z.infer<typeof FormSchema>>
                    name="property_type"
                    value={form.watch('property_type')}
                    options={PROPERTY_TYPE}
                    placeholder="Đặc điểm"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1"></div>
            <div className="w-full mt-3 justify-center flex">
              <Button type="submit" className="w-72">
                Đăng Tin
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default WarehouseForm;
