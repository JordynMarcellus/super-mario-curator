import React, {memo} from 'react'
import {Box} from 'grommet'

export const Layout = memo(({children})=> (
    <Box
        justify="center"
    >
        {children}
    </Box>
))