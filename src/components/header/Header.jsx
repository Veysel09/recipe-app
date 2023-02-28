import "./Header.style"
import { FoodInput, FormContainer, HeaderContainer, MainHeader } from "./Header.style"

const Header = () => {
  return (
    <HeaderContainer>
    <MainHeader>
        Recipe App
    </MainHeader>
    <FormContainer>
        <FoodInput type="text" placeholder="Search"
        onChange={(e)=> }
        />
    </FormContainer>
    </HeaderContainer>
  )
}

export default Header