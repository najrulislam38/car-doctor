import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  //
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [url]);

  const handleDeleteBooking = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = bookings?.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
              Swal.fire(
                "Deleted!",
                "Your booking has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };

  const handleBookingConfirm = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "success",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ status: "confirm" }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              const remaining = bookings?.filter(
                (booking) => booking._id !== id
              );
              const updateBooking = bookings?.find(
                (booking) => booking._id === id
              );
              updateBooking.status = "confirm";
              const newBookings = [updateBooking, ...remaining];
              setBookings(newBookings);

              // setBookings(remaining);
              Swal.fire(
                "Confirm!",
                "Your booking has been Confirmed.",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto my-20">
        <table className="table text-center">
          {/* head */}
          <thead>
            <tr className="text-black">
              <th className="text-lg font-semibold">Control</th>
              <th className="text-lg font-semibold">Image</th>
              <th className="text-lg font-semibold">Service Title</th>
              <th className="text-lg font-semibold">Service Id</th>
              <th className="text-lg font-semibold">Date</th>
              <th className="text-lg font-semibold">Price</th>
              <th className="text-lg font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDeleteBooking={handleDeleteBooking}
                handleBookingConfirm={handleBookingConfirm}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
