import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export interface Booking {
  _id: string;
  startTime: string;
  endTime: string;
  totalCost: number;
  createdAt: string;
  updatedAt: string;
}

export function TableGrid({ myBookings }) {
  const currentDate = new Date();
  const pastBookings = myBookings?.filter((item) => {
    const endTime = new Date(item.endTime);
    return endTime < currentDate;
  });
  console.log(currentDate);
  console.log(pastBookings);

  return (
    <>
      <Table>
        <TableCaption>A list of your Upcoming Bookings.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Car Id</TableHead>
            <TableHead>booked At</TableHead>
            <TableHead>End At</TableHead>

            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {myBookings &&
            myBookings?.map((item) => (
              <TableRow key={item._id}>
                <TableCell className="font-medium">{item._id}</TableCell>
                <TableCell>{item.startTime}</TableCell>
                <TableCell>{item.endTime}</TableCell>
                <TableCell className="text-right">Cancel</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <div>
        <h3 className="font-lato text-2xl text-center py-2 mb-6 bg-[#F0F1FF] mt-10 mx-auto">
          {" "}
          My Booking History{" "}
        </h3>
        {pastBookings ? (
          <Table>
            <TableCaption>A list of your Bookings History.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Car Id</TableHead>
                <TableHead>booked At</TableHead>
                <TableHead>End At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pastBookings &&
                pastBookings?.map((item) => (
                  <TableRow key={item._id}>
                    <TableCell className="font-medium">{item._id}</TableCell>
                    <TableCell>{item.startTime}</TableCell>
                    <TableCell>{item.endTime}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        ) : (
          <p className="text-center font-lato text-2xl">No History Found</p>
        )}
      </div>
    </>
  );
}
