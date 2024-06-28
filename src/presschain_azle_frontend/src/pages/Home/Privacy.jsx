import React from "react";
import { Typography, Container, Box } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>
        Privacy Policy for PressChain
      </Typography>

      <Typography variant="bodyRegular" paragraph>
        Effective date: September 23, 2023
      </Typography>

      <Box my={3}>
        <Typography variant="h6">Introduction</Typography>
        <Typography variant="bodyRegular" paragraph>
          At PressChain, your privacy is paramount. This document details our
          commitments and practices concerning the protection and use of your
          personal information.
        </Typography>
      </Box>

      <Box my={3}>
        <Typography variant="h6">Data Collection</Typography>
        <Typography variant="bodyRegular" paragraph>
          We collect essential information to enhance our services:
        </Typography>
        <Typography variant="bodyRegular" paragraph>
          1. Identifiable Information: Information such as your username,
          contact details, and other personal identifiers.
        </Typography>
        <Typography variant="bodyRegular" paragraph>
          2. Interaction Data: Data regarding your interactions with our
          services that helps us tailor and optimize your experience.
        </Typography>
      </Box>

      <Box my={3}>
        <Typography variant="h6">Data Use</Typography>
        <Typography variant="bodyRegular" paragraph>
          The information we collect is utilized in the following ways:
        </Typography>
        <Typography variant="bodyRegular" paragraph>
          1. To enhance the functionality and security of our platform.
        </Typography>
        <Typography variant="bodyRegular" paragraph>
          2. To address and respond to service or support requests from you.
        </Typography>
        <Typography variant="bodyRegular" paragraph>
          3. To communicate pertinent updates and offers to you, subject to your
          consent.
        </Typography>
      </Box>

      <Box my={3}>
        <Typography variant="h6">Data Sharing and Third Parties</Typography>
        <Typography variant="bodyRegular" paragraph>
          We commit to not selling your data. Information may be shared with
          trusted partners under strict confidentiality agreements to facilitate
          better service delivery.
        </Typography>
      </Box>

      <Box my={3}>
        <Typography variant="h6">User Rights</Typography>
        <Typography variant="bodyRegular" paragraph>
          You retain the right to access, amend, or delete your personal data
          collected by us, under the guidelines of our operational protocols.
        </Typography>
      </Box>

      <Box my={3}>
        <Typography variant="h6">Changes to This Policy</Typography>
        <Typography variant="bodyRegular" paragraph>
          Updates to this policy will be posted and communicated through our
          platform, ensuring you remain informed of any changes.
        </Typography>
      </Box>

      <Box my={3}>
        <Typography variant="h6">Contact Us</Typography>
        <Typography variant="bodyRegular" paragraph>
          For inquiries regarding our privacy practices, reach out at:
          privacy@presschain.com
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
