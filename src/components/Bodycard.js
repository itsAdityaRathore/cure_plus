import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../../src/App.css'

function Bodycard() {
    return (
        <Card className='card'  sx={{ minWidth: 275 , marginX:0.2, boxShadow:20}}>
            <CardContent >
                heloo world
            </CardContent>
        </Card>
    )
}

export default Bodycard






