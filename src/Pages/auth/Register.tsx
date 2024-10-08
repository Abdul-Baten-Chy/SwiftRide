import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCreateUserMutation } from "@/redux/Feature/Api/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters long")
      .max(50, "Name must be at most 50 characters long"),
    email: z
      .string()
      .email("Invalid email address")
      .min(2, "Email must be at least 2 characters long")
      .max(50, "Email must be at most 50 characters long"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(50, "Password must be at most 50 characters long"),
    confirmPassword: z
      .string()
      .min(8, "Confirm Password must be at least 8 characters long")
      .max(50, "Confirm Password must be at most 50 characters long"),
    address: z
      .string()
      .min(8, "Address must be at least 8 characters long")
      .max(50, "Address must be at most 50 characters long"),
    terms: z.boolean(),
    phone: z
      .string()
      .min(11, "Phone number must be at least 11 characters long")
      .max(50, "Phone number must be at most 50 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // Path to show the error message on confirmPassword field
  });

export function Register() {
  const [createUser, { isLoading, isError, error }] = useCreateUserMutation();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      address: "",
      terms: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const dataToSend = {
      name: values.name,
      email: values.email,
      password: values.password,
      address: values.address,
      phone: values.phone,
      role: "user",
    };
    try {
      const result = await createUser(dataToSend);
      if (result?.data) {
        toast(result?.data?.message);
        navigate("/signIn");
      }
      if (result?.error) {
        toast(result?.error?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
    form.reset();
  }

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>gg</p>;
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 max-w-[400px] mx-auto font-lato"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-lato font-medium text-lg text-gray-500">
                  Name
                </FormLabel>
                <FormControl>
                  <Input placeholder="name" {...field} />
                </FormControl>
                <FormMessage>{form.formState.errors.name?.message}</FormMessage>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-lato font-medium text-lg text-gray-500">
                  E-mail
                </FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.email?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-lato font-medium text-lg text-gray-500">
                  Phone
                </FormLabel>
                <FormControl>
                  <Input placeholder="phone number" {...field} />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.phone?.message}
                </FormMessage>
              </FormItem>
            )}
          />

          <div className="flex gap-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-lato font-medium text-lg text-gray-500">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="password" {...field} />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.password?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-lato font-medium text-lg text-gray-500">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="confirm password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.confirmPassword?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-lato font-medium text-lg text-gray-500">
                  Address
                </FormLabel>
                <FormControl>
                  <Input placeholder="address" {...field} />
                </FormControl>
                <FormMessage>
                  {form.formState.errors.address?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="font-lato text-gray-500">
                    I agree to terms and conditions.{" "}
                    <a href="https://shorturl.at/vn3Eq" target="_blank">
                      <span className="font-lato text-customBlue">
                        {" "}
                        Read Here
                      </span>
                    </a>
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="font-lato font-medium text-lg block mx-auto w-full"
          >
            Register
          </Button>
        </form>
        <Link to="/signin">
          <h3 className="text-center mt-4 font-lato">
            Already Have Account?{" "}
            <span className="text-customBlue">Sign In</span>
          </h3>
        </Link>
      </Form>
    </>
  );
}
