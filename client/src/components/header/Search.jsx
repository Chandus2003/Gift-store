import { InputBase, Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


// Styled component for the search box
const SetSearchBox = styled(Box)`
  width: 50%;
 border: 1px solid black;
  border-radius: 4px;
  display:flex;
  align-items: center;
  padding:5px;
  cursor:pointer;
`;

// Wrapper box to align search item to the centre

const Wrapper = styled(Box)`
  display: flex;
  justify-content: center;
//   background: #f5f5f5; 
`;

// Styled component for the input field
const Input = styled(InputBase)`
  margin : 0 auto;
  padding: 5px;
  border-radius: 4px;
  width: 100%;
`;

function Search() {
    return (
        <>
            <Wrapper>
                <SetSearchBox>
                    <SearchIcon />
                    <Input placeholder="Search for the stuff you love" />
                </SetSearchBox>
            </Wrapper>

        </>
    );
}

export default Search;
