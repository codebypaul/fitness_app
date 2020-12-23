import React from 'react';
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterWrapper className="footer mt-5">
            <div className="container text-center">
                <span className="">@2020 GeneralFit</span>
            </div>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
    background-color: #FE5F55;
    color: white;
`
export default Footer;