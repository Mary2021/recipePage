import { Button } from '@mui/material';

export default function Meal({ params }: { params: { slug: string } }) {
    return (<Button variant="outlined"><a href='/'>Go back</a></Button>)
}