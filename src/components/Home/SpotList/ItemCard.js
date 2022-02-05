import React from "react";
import styled from "styled-components";

const StyledCard = styled.section`
  border: 1.5px solid black;
  padding: 1em;

  :hover {
    background: #EBF5FB;
  }
`;

const Content = styled.p`
  font-size: 1em;
  color: black;
`;

function ItemCard({ key, ImageURL, StoreName, StoreType, OpeningHours, Address }) {
    return (
      <StyledCard className="component component--item_card" key={key}>
        <img src={ImageURL} className="image--itemcard" alt="" width="300" height="250" />
        <Content>
          {StoreName}
        </Content>
        <Content>
          {StoreType}
        </Content>
        <Content>
          영업시간 : {OpeningHours}
        </Content>
        <Content>
          주소 : {Address}
        </Content>
      </StyledCard>
    );
}

export default ItemCard;