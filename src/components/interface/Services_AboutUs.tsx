import React, { useState } from "react";
import JsFileDownloader from "js-file-downloader";
import GridGallery from "./GridGallery";
import file from "../../assets/file/Capability Statement.pdf";
import {
  ServicesSection,
  LargeInfo,
  TextSection,
  AboutUsDetails,
  AboutUsBackdrop,
  DownloadErrorMessage,
  Images,
  ImageOverlayHorizontal,
  ImageOverlayVertical,
} from "../styled_components/Services&AboutUs_styled";

import aboutUsImage1 from "../../assets/about-us-images/Building.png";
import aboutUsImage2 from "../../assets/about-us-images/Cleaning-2.png";
import aboutUsImage3 from "../../assets/about-us-images/Cleaning.png";
import aboutUsImage4 from "../../assets/about-us-images/Construction.png";
import aboutUsImage5 from "../../assets/about-us-images/Courier.png";
import aboutUsImage6 from "../../assets/about-us-images/medical.png";
import { Divider } from "../styled_components/Certification_styled";

const download = new JsFileDownloader({
  url: file,
  autoStart: false,
});

interface Services_AboutUsProps {
  contactHandler: React.Dispatch<React.SetStateAction<boolean>>;
}

//react component
const Services_AboutUs: React.FC<Services_AboutUsProps> = ({
  contactHandler,
}) => {
  const [error, setError] = useState<boolean>(false);
  return (
    <>
      <ServicesSection>
        <GridGallery contactHandler={contactHandler} />
      </ServicesSection>
      <Divider></Divider>
      <div>
        <Images>
          <ImageOverlayVertical>
            <img src={aboutUsImage3} alt="" />
          </ImageOverlayVertical>

          <div>
            <ImageOverlayHorizontal>
              <img src={aboutUsImage4} alt="" />
            </ImageOverlayHorizontal>
            <ImageOverlayHorizontal>
              <img src={aboutUsImage1} alt="" />
            </ImageOverlayHorizontal>
          </div>
        </Images>
        <Images>
          <div>
            <ImageOverlayHorizontal>
              <img src={aboutUsImage5} alt="" />
            </ImageOverlayHorizontal>
            <ImageOverlayHorizontal>
              <img src={aboutUsImage2} alt="" />
            </ImageOverlayHorizontal>
          </div>
          <ImageOverlayVertical>
            <img src={aboutUsImage6} alt="" />
          </ImageOverlayVertical>
        </Images>
      </div>
      <LargeInfo>
        We provide quality services to federal agencies, and state and local
        municipalities with high standards for efficiency and customer service.
      </LargeInfo>
      <AboutUsBackdrop>
        <div>
          <TextSection>
            <AboutUsDetails>
              <h2>About Us</h2>
              <p>
                Our commitment to ensuring successful customer engagement and
                experience is achieved through the development of robust client
                relationships, efficient deliveries, and personalized customer
                service. We strive to exceed the expectations of our valued
                clients by ensuring that all lifecycle requirements are met with
                the highest standard of quality in accordance with our core
                values.
                <br></br>
                <br></br>
                Nakia Solutions is personable with a diverse staff (maintenance,
                real estate & health care) We use the latest project management
                tools to streamline our purchase orders, quotes and delivery of
                products which makes us the one stop shop for quality building
                and maintenance, cleaning and medical supplies. We typically
                reply to request quotes within one business day and save you
                money and time on purchase orders.
              </p>
              <button
                style={{
                  color: "white",
                  backgroundColor: "#015001",
                  margin: "20px 0px",
                }}
                onClick={() => {
                  download
                    .start()
                    .then(function () {
                      // success
                    })
                    .catch(function () {
                      // handle errors
                      setError(true);
                    });
                }}
              >
                Download Capability Statement
              </button>
              {error && (
                <DownloadErrorMessage>
                  <i
                    className="fa-solid fa-triangle-exclamation fa-xl"
                    style={{ color: "#ff0000" }}
                  ></i>
                  An Error Occured. Please try again
                </DownloadErrorMessage>
              )}
            </AboutUsDetails>
          </TextSection>
        </div>
      </AboutUsBackdrop>
    </>
  );
};

export default Services_AboutUs;
