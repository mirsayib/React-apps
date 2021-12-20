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

export default function PeopleGrid({ people }) {

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {people.map(((item) => (
                    <Grid item xs={6} md={3} key={item.id}>
                        <Item>
                            <div className='celeb-card'>
                                <img src={'https://image.tmdb.org/t/p/original/' + item.profile_path} alt="" />
                            </div>
                        </Item>
                    </Grid>
                )
                ))}
            </Grid>
        </Box>
    );
}
