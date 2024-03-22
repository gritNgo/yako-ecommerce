import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive.js";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px"})};
  background-color: black;
  color: white;

`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px"})}

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ width: "120px"})}
`;
const Language = styled.span`
  font-size: 14;
  font-weight: 600;
  cursor: pointer;
  ${mobile({ display: "none" })}
  background-color: black;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  padding: 5px;
  border-radius: 5px;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ height: "25px" ,width: "80px", marginLeft: "-15px", marginRight: "-10px"})}
  border-radius: 5px;
  width: 350px;
  height: 30px;
  padding-left: 5px;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: "2", justifyContent: "center" })}
  padding-right: 5px;

`;

const MenuItem = styled.div`
  font-size: 14;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "10px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container className="container">
      <Wrapper>
        <Left className="left">
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "white", fontSize: 25, paddingLeft: 10}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>YAKO.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={8} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
