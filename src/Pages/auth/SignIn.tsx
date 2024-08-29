import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSignInMutation } from "@/redux/Feature/Api/authApi";
import { userLoggedIn } from "@/redux/Feature/authSlice";
import { RootState } from "@/redux/Feature/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .min(2, "Email must be at least 2 characters long")
    .max(50, "Email must be at most 50 characters long"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(50, "Password must be at most 50 characters long"),
});

export function Signin() {
  const [signIn, { isLoading, isError }] = useSignInMutation();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  console.log(user);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const dataToSend = {
      email: values.email,
      password: values.password,
    };
    try {
      const result = await signIn(dataToSend);
      if (result.data) {
        const userInfo = {
          accessToken: result?.data?.data?.token,
          user: result?.data?.data?.user,
        };
        dispatch(userLoggedIn(userInfo));
        alert(result?.data?.message);
        console.log(userInfo);
      }
      if (result?.error) {
        console.log(result);
        alert(result.error.data.message);
      }
    } catch (error) {
      console.log(error);
    }
    form.reset();
  }
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>something went wrong...</p>;
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 max-w-[400px] mx-auto font-lato "
        >
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
          <Button
            type="submit"
            className="font-lato font-medium text-lg block mx-auto w-full"
          >
            Submit
          </Button>
        </form>
        <Link to="/register">
          <h3 className="text-center mt-4 font-lato">
            Do not Have Account?{" "}
            <span className="text-customBlue">Register</span>
          </h3>
        </Link>
      </Form>
    </>
  );
}
