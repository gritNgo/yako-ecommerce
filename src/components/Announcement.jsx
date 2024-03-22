import styled from "styled-components"
import { mobile } from "../responsive.js";

const Container = styled.div`
    height: 30px;
    background-color: white;
    color: black;    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-size: 500;
    font-weight: 900;
${mobile({ fontSize: "13px"})};
`




const Announcement = () => {
  return (
    <Container>
      The BIGGEST deals + Free Shipping on Orders over £50!
    </Container>
  )
}

export default Announcement
