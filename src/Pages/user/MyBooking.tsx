import { TableGrid } from "@/components/TableGrid";
import { useGetAllBookingsQuery } from "@/redux/Feature/Api/carApi";

export function MyBooking() {
  const {
    data: myBookings,
    isLoading,
    isError,
  } = useGetAllBookingsQuery(undefined);
  if (isLoading) <p>Data fetching...</p>;
  if (isError) <p>Somthing went wrong</p>;

  console.log(myBookings);

  return (
    <>
      <div className="mr-20">
        <h3 className="font-lato text-2xl text-center py-2 mb-6 bg-[#F0F1FF] mt-10 mx-auto ">
          My Upcoming Bookings
        </h3>
        {myBookings && <TableGrid myBookings={myBookings.data}></TableGrid>}
      </div>
    </>
  );
}
