import { Button } from '@mui/material';
import React from 'react'
import { useDrawerContext } from '../../shared/contexts'

const Home = () => {

    const { toggleDrawerOpen } = useDrawerContext();

    function handleClick() {
        console.log("clicou no botao!");
        toggleDrawerOpen
    }

  return (
    <div>
        <h1>Home</h1>
        <Button variant='contained' color='primary' onClick={handleClick}>Toggle drawer</Button>
    </div>
  )
}

export default Home