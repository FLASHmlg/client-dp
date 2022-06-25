// import {
//   Facebook,
//   Instagram,
//   MailOutline,
//   Phone,
//   Room,
//   Twitter,
// } from "@mui/icons-material";
import styled from "styled-components";
// import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  background-color: grey;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container className="d-flex bg-color:#f2f2">
      <Center>
        <Title>Useful links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>My account</ListItem>
          <ListItem>Order tracking</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          {/* <Room style={{ marginRight: "10px" }} /> */}
          вул. 15 Квітня 6, Тернопіль
        </ContactItem>
        <ContactItem>
          {/* <Phone style={{ marginRight: "10px" }} /> */}
          063 250 4356
        </ContactItem>
        <ContactItem>
          {/* <MailOutline style={{ marginRight: "10px" }} /> */}
          contact@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"></Payment>
      </Right>
    </Container>
  );
};

export default Footer;
