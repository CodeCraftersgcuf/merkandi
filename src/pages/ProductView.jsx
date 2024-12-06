import React from "react";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import News from "../components/News/News";
import { render } from "react-dom";
import ImageViewer from "react-simple-image-viewer";
import { shippingData } from "../utils/deliveryCountries";
import Product_Swipper from "./pageComponents/Product_Swipper";
import { products } from "../utils/products";
import Related_Search from "../components/Related_search/Related_Search";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductDetail from "../components/ProductDetail";
import ProductDescription from "../components/ProductDescription";
import PaymentOptions from "../components/PaymentOptions";
import DeliveryOptions from "../components/DeliveryOptions";
import TagsSection from "../components/TagsSection";
import WholesalerData from "../components/WholesalerData";

const ProductView = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);
  const [isDelivery, setisDelivery] = React.useState(false);
  const [isdetail, setIsdetail] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTblJRG5o6QR989lq7rmmfuWbEF6x8J2QC_1A&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaJf_ISxyfHDw5cBbtFhe6G_oigFyhNl6SXw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhdW6_AMXWN70u4mci8f3eUs0bY0Ady7cwow&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAyr4Xx6yVgyBXPcLGaTVFFqtGCM-WdcopTw&s",
  ];

  const openImageViewer = React.useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const hours = {
    Mon: "09:00 - 18:00",
    Tues: "09:00 - 18:00",
    Wed: "09:00 - 18:00",
    Thurs: "09:00 - 18:00",
    Fri: "09:00 - 18:00",
    Sat: "Closed",
    Sun: "Closed",
  };

  const dayMap = {
    Monday: "Mon",
    Tuesday: "Tues",
    Wednesday: "Wed",
    Thursday: "Thurs",
    Friday: "Fri",
    Saturday: "Sat",
    Sunday: "Sun",
  };
  const currentDay = new Date().toLocaleString("en-US", { weekday: "long" });
  const todayHours = hours[dayMap[currentDay]];
  const [hoveredHours, setHoveredHours] = React.useState(todayHours);

  const breadcrumbItems = [
    "Merkandi",
    "Offers' database",
    "Clothing",
    "Fashion accessories",
    "STOCK CLOTHING, UNDERWEAR AND SHOES FOR WOMEN, MEN, CHILDREN",
  ];
  const productData = {
    title: "STOCK CLOTHING, UNDERWEAR AND SHOES FOR WOMEN, MEN, CHILDREN",
    price: "$1000",
    pricePerPiece: "/piece",
    priceExclVat: "price excl. VAT",
    orderButtonLabel: "Order",
    addToCartLabel: "Add to cart",
    details: [
      { label: "Minimal order", value: "100 pieces" },
      { label: "Available quantity", value: "no limits" },
      { label: "Country", value: "Italy" },
      { label: "Grade", value: "New" },
    ],
  };

  const descriptionData = {
    title:
      "STOCK CLOTHING, UNDERWEAR AND SHOES FOR WOMEN, MEN, CHILDREN - description",
    descriptionPoints: [
      "Stock of WOMEN'S MEN'S CHILDREN'S clothing, shoes, underwear and accessories and household items.",
      "General offer of all available brands.",
      "Price per unit or kg (starting from €0.90 per piece or 4.50 per KG).",
      "Ideal product for OUTLETS and STREET VENDORS coming from the past season.",
      "Shipments to all destinations in the world.",
      "Small and large quantities sold (from 100 pieces to one truck).",
      "Ask for information, photos, videos, offers, packing lists.",
      "Warehouse of +10,000 sqm.",
      "Visit our 1,000 sqm showroom: - in person, in Italy - via video link via smartphone.",
      "Note: Brands may only be available for sale in specific countries. Ask for all the information.",
      "We are based in Northern Italy, in the province of Turin.",
    ],
  };

  const paymentData = {
    title: "Payment options",
    options: ["Cash", "VISA", "MasterCard", "American Express", "Maestro"],
  };
  const deliveryData = {
    title: "Delivery options",
    options: [
      "Collection in person",
      "National delivery",
      "International delivery",
    ],
  };
  const tagData = ["Women", "Men", "Kids"];

  const wholesaler = {
    name: "ABC Wholesaler",
    country: "USA",
    city: "New York",
    postalCode: "10001",
    street: "123 Market St",
    contactName: "John Doe",
    languages: ["English", "Spanish"],
    phoneNumber: "+1 123 456 7890",
    mobilePhoneNumber: "+1 987 654 3210",
  };

  const isDetailInitial = false;

  return (
    <>
      <TopNavbar />

      <div className="py-12 max-w-[1280px] px-4 md:px-0 container mx-auto">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="flex flex-wrap mt-8">
          <div className="product-view md:p-0 md:w-[70%]">
            <div className="flex flex-wrap md:gap-2 lg:gap-0">
              <div className="product-view-image w-full md:w-[100%] lg:w-1/2 lg: flex flex-wrap justify-center border">
                {images.map((src, index) => (
                  <img
                    src={src}
                    onClick={() => openImageViewer(index)}
                    width={index === 0 ? "100%" : "50"}
                    key={index}
                    style={{
                      margin: "2px",
                      maxHeight: `${index === 0 ? "300px" : "50px"}`,
                      marginTop: `${index === 0 ? "0" : "20px"}`,
                      objectFit: "contain",
                    }}
                    alt=""
                  />
                ))}
                {isViewerOpen && (
                  <ImageViewer
                    src={images}
                    currentIndex={currentImage}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    onClose={closeImageViewer}
                  />
                )}
              </div>
              <ProductDetail {...productData} />
            </div>
            <div className="border my-8 p-4">
              <ProductDescription {...descriptionData} />
              <hr className="my-4" />
              <PaymentOptions {...paymentData} />
              <hr className="my-4" />
              <DeliveryOptions {...deliveryData} />
              <hr className="my-4 " />
              <div className="Shipping-countries">
                <h1
                  className="my-4 font-bold text-xl cursor-pointer"
                  onClick={() => setisDelivery(!isDelivery)}
                >
                  Shipping to countries
                </h1>
                <div className="">
                  {isDelivery && (
                    <ul className="flex flex-col gap-4">
                      {shippingData.map((delivery, index) => {
                        return (
                          <>
                            <li className="flex flex-col gap-2">
                              <h1 className="font-bold text-lg ">
                                {delivery.continent}
                              </h1>
                              <h3 className="flex items-center gap-2 \">
                                <i className="text-green-500 fa-solid fa-check"></i>{" "}
                                {delivery.description}
                              </h3>
                            </li>
                          </>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </div>
              <hr className="my-4 " />
              <TagsSection title="Tags" tags={tagData} />
            </div>
          </div>
          <WholesalerData
            wholesaler={wholesaler}
            isDetailInitial={isDetailInitial}
            hours={hours}
            currentDay={currentDay} // Pass the currentDay to the component
          />
        </div>
        <div className="my-10 bg-">
          <Product_Swipper
            heading={"Other offers of this wholesaler"}
            link={"#"}
            products={products}
          />
          <Product_Swipper
            heading={"Other offers in this category"}
            link={"#"}
            products={products}
          />
          <div className="my-4">
            <Related_Search />
          </div>
        </div>
      </div>

      <News />
      <Footer />
    </>
  );
};

export default ProductView;
