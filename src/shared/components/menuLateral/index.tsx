import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React, { ReactNode } from 'react'

const MenuLateral: React.FC<{children: ReactNode}> = ({children}) => {

    const theme = useTheme();

  return (
    <>
    <Drawer open={true} variant='permanent'>
        <Box width={theme.spacing(28)} display='flex' flexDirection='column'>
        
            <Box width='100%' height={theme.spacing(20)} display='flex' alignItems='center' justifyContent='center'>
                <Avatar 
                sx={{height: theme.spacing(13), width: theme.spacing(11)}}
                src='https://scontent.fcwb2-3.fna.fbcdn.net/v/t39.30808-6/298343652_1112811582640453_2321477602394916300_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=F13wi3qjv4QAX8-9TxJ&_nc_ht=scontent.fcwb2-3.fna&oh=00_AfAAdVmZMFtJn2o27p2FgQgBn7jHWUJDAyC6OhXb3rwjMg&oe=6364B5DE' />
            </Box>

            <Divider />

            <Box flex={1}>
                <List component='nav'>
                    <ListItemButton>
                        <ListItemIcon>
                            <Icon>home</Icon>
                        </ListItemIcon>
                        <ListItemText primary='Home'/>
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <Icon>home</Icon>
                        </ListItemIcon>
                        <ListItemText primary='Usuarios'/>
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemIcon>
                            <Icon>home</Icon>
                        </ListItemIcon>
                        <ListItemText primary='Vagas'/>
                    </ListItemButton>

                </List>
            </Box>
    
        </Box>
        
    </Drawer>

    <Box height='100vh' marginLeft={theme.spacing(28)} >
    {children}
    </Box>
    </>
  )
}

export default MenuLateral