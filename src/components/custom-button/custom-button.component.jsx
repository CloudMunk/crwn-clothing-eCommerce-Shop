import React from 'react'


import { CustomButtonContainer } from './custom-button.styles'

const CustomButtom = ({children, ...props}) => (
    <CustomButtonContainer {...props}> 
        {children}
    </CustomButtonContainer>
)

export default CustomButtom;