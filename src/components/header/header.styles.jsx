import styled from 'styled-components';
import { Link } from 'react-router-dom';


// css allows us to create blocks of styles that we can import directly into other components.


export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

// Here we are using the css styles to import styles into multiple different component that need the same styles.
export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;