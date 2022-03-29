import React from "react";
import { useSelector } from "react-redux";
import {
  CollectionOverviewContainer,
  GridContainer,
} from "./collection-overview.styles";

import { Link, useLocation, Outlet } from "react-router-dom";
 
import { getCategoryArtworks } from "../../utils/utils.js";

const CollectionOverview = () => {
  const artworks = useSelector((state) => state.gallery.gallery);
  const currentCategory = useSelector((state) => state.gallery.currentCategory);
  const categoryItems = getCategoryArtworks(artworks, currentCategory);
  let { pathname } = useLocation();


  return (
    <CollectionOverviewContainer>
      <h2>{currentCategory} category content </h2>
      {/* <GridContainer> */}

      {categoryItems.map((artwork, index) => (
        <Link
        to={`${pathname}/${artwork.id}`}>
          <h1 key={index}>{artwork.title}</h1>
        </Link>

      ))}

      {/* </GridContainer> */}
    </CollectionOverviewContainer>
  );
};

export default CollectionOverview;