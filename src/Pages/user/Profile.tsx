import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUpdateUserMutation } from "@/redux/Feature/Api/authApi";
import { useGetAllBookingsQuery } from "@/redux/Feature/Api/carApi";
import { RootState } from "@/redux/Feature/store";
import { useAppSelector } from "@/redux/hook";
import { useEffect, useState } from "react";

export function Profile() {
  const { user, accessToken } = useAppSelector(
    (state: RootState) => state.auth
  );
  const { data: bookingsCar, isLoading } = useGetAllBookingsQuery(undefined);
  const [newUser, setNewUser] = useState(user);
  const [updateUser, { isLoading: isUpdating, isError: isUpdateError }] =
    useUpdateUserMutation();

  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      const res = await updateUser(newUser).unwrap();
      if (res) {
        setNewUser(res.data);
        localStorage.setItem(
          "auth",
          JSON.stringify({
            accessToken: accessToken,
            user: res?.data,
          })
        );
      }

      setIsOpen(false);
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };
  useEffect(() => {
    console.log(bookingsCar);
  }, [bookingsCar]);
  if (isUpdating) return <p>Saving changes...</p>;
  if (isLoading) return <p>Loading ...</p>;
  if (isUpdateError) return <p>Failed to save changes...</p>;

  return (
    <>
      <h3 className="font-montserrat text-3xl uppercase font-extrabold text-[#333333]">
        {newUser?.name}
      </h3>
      <p className="font-lato text-xl text-[#333333] mt-3">
        E-Mail: {newUser?.email}
      </p>
      <p className="font-lato text-xl text-[#333333] mt-2">
        Phone: {newUser?.phone}
      </p>
      <p className="font-lato text-xl text-[#333333] mt-2">
        Adress: {newUser?.address}
      </p>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            className="w-24 mt-6 font-lato font-semibold bg-customBlue"
          >
            Edit Profile
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={newUser?.name}
                onChange={(e) =>
                  setNewUser({ ...newUser, name: e.target.value })
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                value={newUser?.email}
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input
                id="phone"
                value={newUser?.phone}
                onChange={(e) =>
                  setNewUser({ ...newUser, phone: e.target.value })
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="address" className="text-right">
                Address
              </Label>
              <Input
                id="address"
                value={newUser?.address}
                onChange={(e) =>
                  setNewUser({ ...newUser, address: e.target.value })
                }
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleSubmit}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="w-[200px] h-[200px] mt-6 bg-[#F0F8FF] flex flex-col justify-center items-center">
        <p className="font-lato text-xl mb-3 ">My Bookings</p>
        <h3 className="font-lato font-bold text-xl text-black">
          {bookingsCar ? bookingsCar?.data?.length : "No bookings"}
        </h3>
      </div>
    </>
  );
}
