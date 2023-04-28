import React from "react";
import { Gallery } from "react-grid-gallery";
import image1 from "./gallery-images/pexels-alexander-grey-1148496.webp";
import image2 from "./gallery-images/pexels-artem-podrez-5025669.webp";
import image3 from "./gallery-images/pexels-damir-mijailovic-4953234.webp";
import image4 from "./gallery-images/pexels-diego-pontes-2314022.webp";
import image5 from "./gallery-images/pexels-kampus-production-7843960.webp";
import image6 from "./gallery-images/pexels-karolina-grabowska-4498136.webp";
import image7 from "./gallery-images/pexels-ksenia-chernaya-5691642.webp";
import image8 from "./gallery-images/pexels-ksenia-chernaya-5768314.webp";
import image9 from "./gallery-images/pexels-liliana-drew-9462678.webp";
import image10 from "./gallery-images/pexels-skylar-kang-6045041.webp";
import image11 from "./gallery-images/pexels-tima-miroshnichenko-6196677.webp";

const images = [
  {
    src: image1,
    width: 150,
    height: 100,
    tags: [{ value: "tag", title: "tag" }],
  },
  {
    src: image2,
    width: 170,
    height: 100,
    tags: [{ value: "tag", title: "tag" }],
  },
  {
    src: image3,
    width: 100,
    height: 100,
    tags: [{ value: "tag", title: "tag" }],
  },
  {
    src: image4,
    width: 100,
    height: 100,
    tags: [{ value: "tag", title: "tag" }],
  },
  {
    src: image5,
    width: 160,
    height: 100,
    tags: [{ value: "tag", title: "tag" }],
  },
  {
    src: image6,
    width: 110,
    height: 100,
    tags: [{ value: "tag", title: "tag" }],
  },
  {
    src: image7,
    width: 100,
    height: 100,
    tags: [{ value: "tag", title: "tag" }],
  },
  {
    src: image8,
    width: 100,
    height: 100,
    tags: [{ value: "tag", title: "tag" }],
  },
  {
    src: image9,
    width: 130,
    height: 80,
    tags: [{ value: "tag", title: "tag" }],
  },
  {
    src: image10,
    width: 50,
    height: 100,
    tags: [{ value: "tag", title: "tag" }],
  },
  {
    src: image11,
    width: 200,
    height: 120,
    tags: [{ value: "tag", title: "tag" }],
  },
];
const GalleryGrid = () => {
  return <Gallery images={images} enableImageSelection={false} />;
};

export default GalleryGrid;
