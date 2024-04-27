// category
import { useNavigate } from "react-router";
import fashionIcon from "../../assets/fashion.svg";
import shirtIcon from "../../assets/shirt.svg";
import jacketIcon from "../../assets/jacket.svg";
import mobileIcon from "../../assets/mobile.svg";
import laptopIcon from "../../assets/laptop.svg";
import shoesIcon from "../../assets/shoes.svg";
import homeIcon from "../../assets/home.svg";
import booksIcon from "../../assets/books.svg";
const category = [
  {
    image: fashionIcon,
    name: "fashion",
  },
  {
    image: shirtIcon,
    name: "shirt",
  },
  {
    image: jacketIcon,
    name: "jacket",
  },
  {
    image: mobileIcon,
    name: "mobile",
  },
  {
    image: laptopIcon,
    name: "laptop",
  },
  {
    image: shoesIcon,
    name: "shoes",
  },
  {
    image: homeIcon,
    name: "home",
  },
  {
    image: booksIcon,
    name: "books",
  },
];

const Category = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col mt-5">
        {/* main 1 */}
        <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
          {/* main 2  */}
          <div className="flex ">
            {/* category  */}
            {category.map((item, index) => {
              return (
                <div key={index} className="px-3 lg:px-10">
                  {/* Image  */}
                  <div
                    onClick={() => navigate(`/category/${item.name}`)}
                    className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-blue-300 transition-all hover:bg-white cursor-pointer mb-1 "
                  >
                    <div className="flex justify-center mb-12">
                      {/* Image tag  */}
                      <img
                        src={item.image}
                        alt="category"
                        className="w-20 h-20 lg:w-20 lg:h-20"
                      />
                    </div>
                  </div>

                  {/* Name Text  */}
                  <h1 className=" text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase ">
                    {item.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* style  */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}",
        }}
      />
    </div>
  );
};

export default Category;
