import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function MovieGrid({movies}) {

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {movies.map(((item)=>(
                    <Grid item xs={6} md={3} key={item.id}>
                        <Item>
                            <div className='media-card'>
                                <img src={'https://image.tmdb.org/t/p/original/'+item.poster_path} alt="" />
                                <h2>{item.title?item.title:item.name}</h2>
                            </div>
                        </Item>
                    </Grid>
                ) 
                ))}
            </Grid>
        </Box>
    );
}
