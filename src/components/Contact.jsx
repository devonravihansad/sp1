import { Container, Typography, TextField, Button } from '@mui/material';

export default function Contact() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4">Contact Us</Typography>

      <TextField label="Name" fullWidth margin="normal" />

      <TextField label="Message" multiline rows={4} fullWidth margin="normal" />

      <Button variant="contained">Send</Button>
    </Container>
  );
}
