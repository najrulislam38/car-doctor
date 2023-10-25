import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const CheckOut = () => {
  const { _id, title, price, img } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleBookServices = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email || form.email.value;
    const date = form.date.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const booking = {
      customer_name: name,
      email,
      img,
      service_id: _id,
      service_title: title,
      date,
      phone,
      price: price,
      message,
    };

    console.log(booking);

    //
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Booking Successful!");
        }
      });
  };

  return (
    <div>
      <div></div>
      <div className="my-20">
        <form
          onSubmit={handleBookServices}
          className="w-full p-5 md:p-10 lg:p-20 bg-base-200 rounded-xl space-y-7"
        >
          <div className="flex flex-col md:flex-row gap-5">
            <div className=" w-full md:w-1/2">
              <label htmlFor="" className="text-lg font-medium p-1 block">
                Name:{" "}
              </label>
              <input
                type="text"
                name="name"
                id=""
                defaultValue={user?.displayName}
                className="w-full px-5 py-3 border rounded-lg"
                placeholder="Name"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="" className="text-lg font-medium p-1 block">
                Date
              </label>
              <input
                type="date"
                name="date"
                id=""
                className="w-full px-5 py-3 border rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <label htmlFor="" className="text-lg font-medium p-1 block">
                Phone No.
              </label>
              <input
                type="text"
                name="phone"
                id=""
                className="w-full px-5 py-3 border rounded-lg block"
                placeholder="Your Phone"
              />
            </div>
            <div className="w-full">
              <label htmlFor="" className="text-lg font-medium p-1 block">
                Email
              </label>
              <input
                type="text"
                name="email"
                id=""
                defaultValue={user?.email}
                className="w-full px-5 py-3 border rounded-lg"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full">
              <label htmlFor="" className="text-lg font-medium p-1 block">
                Due Amount
              </label>
              <input
                type="text"
                name="amount"
                id=""
                defaultValue={price}
                className="w-full px-5 py-3 border rounded-lg block"
                readOnly
              />
            </div>
            <div className="w-full">
              {/* <label htmlFor="" className="text-lg font-medium p-1 block">
                Email
              </label>
              <input
                type="text"
                name="email"
                id=""
                className="w-full px-5 py-3 border rounded-lg"
                placeholder="Your Email"
              /> */}
            </div>
          </div>

          <div className="">
            <label htmlFor="" className="text-lg font-medium p-1 block">
              Your message
            </label>
            <textarea
              name="message"
              id=""
              rows="10"
              placeholder="Your Message"
              className="w-full px-5 py-3 rounded-lg"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 bg-[#FF3811] text-white text-xl rounded-lg hover:bg-[#ff7741] duration-300"
            >
              Oder Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
