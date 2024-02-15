import styled from "styled-components"

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
`




const Announcement = () => {
  return (
    <Container>
      The BIGGEST deals + Free Shipping on Orders over £50!
    </Container>
  )
}

export default Announcement
