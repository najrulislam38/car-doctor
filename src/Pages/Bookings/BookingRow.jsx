const BookingRow = ({ booking, handleDeleteBooking, handleBookingConfirm }) => {
  const { _id, img, service_title, service_id, date, price, status } = booking;
  return (
    <tr>
      <th>
        <button
          onClick={() => handleDeleteBooking(_id)}
          className="btn btn-sm btn-neutral btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="w-32 h-32 rounded-lg">
            <img
              src={img}
              alt="Avatar Tailwind CSS Component"
              className="rounded-lg"
            />
          </div>
        </div>
      </td>
      <td className=" font-semibold">{service_title}</td>
      <td className=" font-semibold">{service_id}</td>
      <td className=" font-semibold">{date}</td>
      <td className=" font-semibold">$ {price}</td>
      <th>
        {status ? (
          <span className="font-bold text-lg text-[#FF3811]">Confirmed</span>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn btn-accent"
          >
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
