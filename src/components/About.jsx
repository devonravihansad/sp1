import { Container, Typography } from '@mui/material';

export default function About() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4">About Us</Typography>

      <Typography>We manufacture premium Kithul-based products.</Typography>
    </Container>
  );
}
