/* eslint-disable react/prop-types */
import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
  // CartItems
  const cartItems = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Button
        type="button"
        onClick={handleOpen}
        className="w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent dark:border-gray-700 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-100 rounded-xl"
      >
        Place Order
      </Button>
      {cartItems.length > 0 ? (
        <Dialog open={open} handler={handleOpen} className=" bg-blue-50">
          <DialogBody>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                value={addressInfo.name}
                onChange={(e) => {
                  setAddressInfo({
                    ...addressInfo,
                    name: e.target.value,
                  });
                }}
                placeholder="Enter your name"
                className="bg-blue-50 border border-blue-200 px-2 py-2 w-full rounded-md outline-none text-blue-600 placeholder-blue-300"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="address"
                value={addressInfo.address}
                onChange={(e) => {
                  setAddressInfo({
                    ...addressInfo,
                    address: e.target.value,
                  });
                }}
                placeholder="Enter your address"
                className="bg-blue-50 border border-blue-200 px-2 py-2 w-full rounded-md outline-none text-blue-600 placeholder-blue-300"
              />
            </div>

            <div className="mb-3">
              <input
                type="number"
                name="pincode"
                value={addressInfo.pincode}
                onChange={(e) => {
                  setAddressInfo({
                    ...addressInfo,
                    pincode: e.target.value,
                  });
                }}
                placeholder="Enter your pincode"
                className="bg-blue-50 border border-blue-200 px-2 py-2 w-full rounded-md outline-none text-blue-600  placeholder-blue-300"
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                name="mobileNumber"
                value={addressInfo.mobileNumber}
                onChange={(e) => {
                  setAddressInfo({
                    ...addressInfo,
                    mobileNumber: e.target.value,
                  });
                }}
                placeholder="Enter your mobileNumber"
                className="bg-blue-50 border border-blue-200 px-2 py-2 w-full rounded-md outline-none text-blue-600 placeholder-blue-300"
              />
            </div>

            <div className="">
              <Button
                type="button"
                onClick={() => {
                  handleOpen();
                  buyNowFunction();
                }}
                className="w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent dark:border-gray-700 rounded-lg"
              >
                Confirm Order
              </Button>
            </div>
          </DialogBody>
        </Dialog>
      ) : (
        <Dialog open={open} handler={handleOpen} className="bg-blue-50">
          <DialogBody>
            <div className="flex justify-center items-center flex-col">
              <h1 className="text-2xl font-bold text-gray-700">
                No Items in Cart
              </h1>
              <button
                onClick={handleOpen}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg mt-3"
              >
                Close
              </button>
            </div>
          </DialogBody>
        </Dialog>
      )}
    </>
  );
};

export default BuyNowModal;
