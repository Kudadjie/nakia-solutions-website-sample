import React from "react";
import galleryImage1 from "../../assets/gallery/gallery-item-1.webp";
import galleryImage2 from "../../assets/gallery/gallery-item-2.webp";
import galleryImage3 from "../../assets/gallery/gallery-item-3.webp";
import galleryImage4 from "../../assets/gallery/gallery-item-4.webp";
import galleryImage5 from "../../assets/gallery/gallery-item-5.webp";
import galleryImage6 from "../../assets/gallery/gallery-item-6.webp";
import galleryImage7 from "../../assets/gallery/gallery-item-7.webp";
import galleryImage8 from "../../assets/gallery/gallery-item-8.webp";
import galleryImage9 from "../../assets/gallery/gallery-item-9.webp";
import galleryImage10 from "../../assets/gallery/gallery-item-10.webp";
import galleryImage11 from "../../assets/gallery/gallery-item-11.webp";
import galleryImage12 from "../../assets/gallery/gallery-item-12.webp";
import galleryImage13 from "../../assets/gallery/gallery-item-13.webp";
import galleryImage14 from "../../assets/gallery/gallery-item-14.webp";
import galleryImage15 from "../../assets/gallery/gallery-item-15.webp";
import galleryImage16 from "../../assets/gallery/gallery-item-16.webp";
import galleryImage17 from "../../assets/gallery/gallery-item-17.webp";
import galleryImage18 from "../../assets/gallery/gallery-item-18.webp";
import galleryImage20 from "../../assets/gallery/gallery-item-20.webp";
import galleryImage21 from "../../assets/gallery/gallery-item-21.webp";
import galleryImage22 from "../../assets/gallery/gallery-item-22.webp";
import galleryImage23 from "../../assets/gallery/gallery-item-23.webp";
import galleryImage24 from "../../assets/gallery/gallery-item-24.webp";
import galleryImage25 from "../../assets/gallery/gallery-item-25.webp";
import {
  GridGalleryStyled,
  LookingForMoreText,
  Image,
} from "./GridGallery_styled";

interface GridGalleryProps {
  contactHandler: React.Dispatch<React.SetStateAction<boolean>>;
}
//react component
const GridGallery: React.FC<GridGalleryProps> = ({ contactHandler }) => {
  return (
    <>
      <GridGalleryStyled>
        <div>
          <Image src={galleryImage1} alt="" />
          <p>JCI Actuators</p>
        </div>
        <div>
          <Image src={galleryImage2} alt="" />
          <p>JCI VMAs</p>
        </div>
        <div>
          <Image src={galleryImage3} alt="" />
          <p>AirFlow 24x24x4 Filters</p>
        </div>
        <div>
          <Image src={galleryImage4} alt="" />
          <p>Box Filters</p>
        </div>
        <div>
          <Image src={galleryImage5} alt="" />
          <p>Ball Valves</p>
        </div>
        <div>
          <Image src={galleryImage6} alt="" />
          <p>Griswold Valves</p>
        </div>
        <div>
          <Image src={galleryImage7} alt="" />
          <p>Flourescent Bulbs</p>
        </div>
        <div>
          <Image src={galleryImage8} alt="" />
          <p>Light Bulbs - Pin</p>
        </div>
        <div>
          <Image src={galleryImage9} alt="" />
          <p>V-Belts</p>
        </div>
        <div>
          <Image src={galleryImage10} alt="" />
          <p>Pulleys</p>
        </div>
        <div>
          <Image src={galleryImage11} alt="" />
          <p>Power Tools</p>
        </div>
        <div>
          <Image src={galleryImage12} alt="" />
          <p>Safety Gear</p>
        </div>
        <div>
          <Image src={galleryImage13} alt="" />
          <p>Blinds</p>
        </div>
        <div>
          <Image src={galleryImage14} alt="" />
          <p>Vacuum / Floor Cleaners</p>
        </div>
        <div>
          <Image src={galleryImage15} alt="" />
          <p>Power Drills</p>
        </div>
        <div>
          <Image src={galleryImage16} alt="" />
          <p>Glass Wipers</p>
        </div>
        <div>
          <Image src={galleryImage17} alt="" />
          <p>Buckets</p>
        </div>
        <div>
          <Image src={galleryImage18} alt="" />
          <p>Trash Bags</p>
        </div>
        <div>
          <Image src={galleryImage20} alt="" />
          <p>Lockers</p>
        </div>
        <div>
          <Image src={galleryImage21} alt="" />
          <p>Clorox Wipes</p>
        </div>
        <div>
          <Image src={galleryImage22} alt="" />
          <p>Door Hardware</p>
        </div>
        <div>
          <Image src={galleryImage23} alt="" />
          <p>Mops and Buckets</p>
        </div>
        <div>
          <Image src={galleryImage24} alt="" />
          <p>Toilet Seats</p>
        </div>
        <div>
          <Image src={galleryImage25} alt="" />
          <p>Drop Ceiling Lights</p>
        </div>
      </GridGalleryStyled>
      <LookingForMoreText>
        <a onClick={() => contactHandler(true)}>Looking for something else?</a>
      </LookingForMoreText>
    </>
  );
};

export default GridGallery;
