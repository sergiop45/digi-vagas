import { Icon, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React, { ReactNode } from "react";
import { useDrawerContext } from "../contexts";

interface ILayoutBase {
    titulo: string;
    barraFerramenta?: ReactNode;
    children: ReactNode;
}

export const LayoutBase: React.FC<ILayoutBase> = ({children, titulo, barraFerramenta}) => {
    
    
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    const { toggleDrawerOpen } = useDrawerContext();

    return (
        <Box  height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)} display='flex' flexDirection='column' gap={1}>
            


            <Box padding={2} height={theme.spacing(12)} alignItems='center' display='flex'>
                
                {smDown && 
                <IconButton onClick={toggleDrawerOpen}>
                    <Icon>menu</Icon>
                </IconButton>}

                <Typography variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'} 
                            whiteSpace='nowrap'
                            overflow='hidden' textOverflow='ellipsis'>
                    {titulo}
                </Typography>
            </Box>
            
            {barraFerramenta && <Box>
                {barraFerramenta}
            </Box>}

            <Box flex={1} overflow='auto'>
                {children}
            </Box>
        </Box>
    )
}