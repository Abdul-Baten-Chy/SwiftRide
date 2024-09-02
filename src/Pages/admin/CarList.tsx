import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
export interface Booking {
  _id: string;
  startTime: string;
  endTime: string;
  totalCost: number;
  createdAt: string;
  updatedAt: string;
}

export function CarList({ cars }) {
  return (
    <>
      <Table>
        <TableCaption>A list of Cars.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Price per Hour</TableHead>
            <TableHead>color</TableHead>
            <TableHead>Action</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cars &&
            cars?.map((item) => (
              <TableRow key={item._id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.pricePerHour}</TableCell>
                <TableCell>{item.color}</TableCell>
                <Link to={`/dashboard/edit/${item._id}`}>
                  <TableCell className="text-right">Upadate</TableCell>
                </Link>
                <TableCell className="text-right">Delete</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}
