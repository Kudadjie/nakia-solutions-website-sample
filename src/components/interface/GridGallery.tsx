import React, { useState } from "react";
import {
  GridGalleryStyled,
  LookingForMoreText,
  Image,
  FilterSection,
  FilterBtn,
} from "../styled_components/GridGallery_styled";
import { products } from "../../lib/products";

interface GridGalleryPropTypes {
  contactHandler: React.Dispatch<React.SetStateAction<boolean>>;
}

type ProductType = {
  imageURL: string;
  key: string;
  nameOfItem: string;
  altText: string;
  category: string;
};

function returnFilteredProducts(
  products: ProductType[],
  filterCategory: string
) {
  if (filterCategory) {
    return products
      .filter((product) => product.category === filterCategory)
      .map((product) => {
        if (product.category) {
          return (
            <div key={product.key}>
              <Image src={product.imageURL} alt={product.altText} />
              <p>{product.nameOfItem}</p>
            </div>
          );
        }
      });
  }

  return products.map((product) => {
    return (
      <div key={product.key}>
        <Image src={product.imageURL} alt={product.altText} />
        <p>{product.nameOfItem}</p>
      </div>
    );
  });
}

const GridGallery: React.FC<GridGalleryPropTypes> = ({ contactHandler }) => {
  const [filterEngaged, setFilterEngaged] = useState<string>("");
  const [filterAllEngaged, setFilterAllEngaged] = useState<boolean>(true);
  const [filterOneEngaged, setFilterOneEngaged] = useState<boolean>(false);
  const [filterTwoEngaged, setFilterTwoEngaged] = useState<boolean>(false);
  const [filterThreeEngaged, setFilterThreeEngaged] = useState<boolean>(false);

  return (
    <>
      <FilterSection>
        <span>
          <FilterBtn
            onClick={() => {
              setFilterEngaged("");
              setFilterAllEngaged(true);
              setFilterOneEngaged(false);
              setFilterTwoEngaged(false);
              setFilterThreeEngaged(false);
            }}
            style={{
              border: !filterAllEngaged ? "1px solid grey" : "",
              color: !filterAllEngaged ? "grey" : "",
            }}
          >
            All
          </FilterBtn>
        </span>
        <span>
          <FilterBtn
            style={{
              border: !filterOneEngaged ? "1px solid grey" : "",
              color: !filterOneEngaged ? "grey" : "",
            }}
            onClick={() => {
              setFilterEngaged("Building and Maintenance Supplies");
              setFilterAllEngaged(false);
              setFilterOneEngaged(true);
              setFilterTwoEngaged(false);
              setFilterThreeEngaged(false);
            }}
          >
            Building and Maintenance Supplies
          </FilterBtn>
        </span>
        <span>
          <FilterBtn
            style={{
              border: !filterTwoEngaged ? "1px solid grey" : "",
              color: !filterTwoEngaged ? "grey" : "",
            }}
            onClick={() => {
              setFilterEngaged("Medical Supplies");
              setFilterAllEngaged(false);
              setFilterOneEngaged(false);
              setFilterTwoEngaged(true);
              setFilterThreeEngaged(false);
            }}
          >
            Medical Supplies
          </FilterBtn>
        </span>
        <span>
          <FilterBtn
            style={{
              border: !filterThreeEngaged ? "1px solid grey" : "",
              color: !filterThreeEngaged ? "grey" : "",
            }}
            onClick={() => {
              setFilterEngaged("Cleaning Supplies");
              setFilterAllEngaged(false);
              setFilterOneEngaged(false);
              setFilterTwoEngaged(false);
              setFilterThreeEngaged(true);
            }}
          >
            Janitorial and Cleaning Supplies
          </FilterBtn>
        </span>
      </FilterSection>
      <GridGalleryStyled>
        {returnFilteredProducts(products, filterEngaged)}
      </GridGalleryStyled>
      <LookingForMoreText>
        <a onClick={() => contactHandler(true)}>Looking for something else?</a>
      </LookingForMoreText>
    </>
  );
};

export default GridGallery;
