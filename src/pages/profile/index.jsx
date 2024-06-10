import React from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Avatar,
  Grid,
  Typography,
} from "@mui/material";
import profileImg from "../../asset/Images/navbar/Ellipse.png";
const ProfilePage = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            my: 3,
          }}
          maxWidth="sm"
        >
          <Typography variant="h4" gutterBottom>
            Edit profile
          </Typography>
          <Avatar
            alt="Remy Sharp"
            src={profileImg}
            sx={{ width: 120, height: 120 }}
          />
        </Box>
        <Grid container spacing={2} maxWidth="sm">
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              defaultValue=""
              variant="outlined"
              sx={{ backgroundColor: "#9b95955e" }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              defaultValue=""
              variant="outlined"
              sx={{ backgroundColor: "#9b95955e" }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              defaultValue=""
              variant="outlined"
              sx={{ backgroundColor: "#9b95955e" }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              defaultValue=""
              variant="outlined"
              sx={{ backgroundColor: "#9b95955e" }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contact Number"
              defaultValue=""
              variant="outlined"
              sx={{ backgroundColor: "#9b95955e" }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="City"
              defaultValue=""
              variant="outlined"
              sx={{ backgroundColor: "#9b95955e" }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="State"
              defaultValue=""
              variant="outlined"
              sx={{ backgroundColor: "#9b95955e" }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              defaultValue=""
              variant="outlined"
              sx={{ backgroundColor: "#9b95955e" }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                padding: "0px 20px",
                color: "#fff",
                background:
                  "linear-gradient(93.36deg, #7B42F6 0%, #B01EFF 100%)",
                border: "2px solid rgba(123, 66, 246, 1)",
                "&:hover": {
                  background:
                    "linear-gradient(93.36deg, #7B42F6 0%, #B01EFF 100%)",
                  border: "2px solid rgba(123, 66, 246, 1)",
                  borderColor: "rgba(123, 66, 246, 1)",
                },
              }}
            >
              Save
            </Button>
            <Button
              variant="outlined"
              sx={{
                padding: "0px 20px",
                color: "rgba(123, 66, 246, 1)",
                border: "2px solid rgba(123, 66, 246, 1)",
                "&:hover": {
                  background:
                    "linear-gradient(93.36deg, #7B42F6 0%, #B01EFF 100%)",
                  color: "white",
                  border: "2px solid rgba(123, 66, 246, 1)",
                  borderColor: "rgba(123, 66, 246, 1)",
                },
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProfilePage;
