import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const termsAndConditions = [
  {
    title: "Interpretation and Definitions",
    content: [
      {
        subtitle: "Interpretation",
        description:
          "Words capitalized in these Terms have defined meanings under the conditions set forth below.",
      },
      {
        subtitle: "Definitions",
        description: "For the purposes of these Terms and Conditions:",
        list: [
          `"Affiliate" refers to an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of more than 50% of the voting securities or other ownership interests.`,
          `"Platform" denotes the PressChain service.`,
          `"Terms and Conditions", also known as "Terms", constitute the entire agreement between you and PressChain concerning the use of the Service.`,
          `"User" or "You" means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.`,
        ],
      },
    ],
  },
  {
    title: "Acknowledgment",
    description:
      "By accessing or using the Service, you acknowledge that you are bound by these Terms and Conditions.",
  },
  {
    title: "User Accounts",
    list: [
      "You are required to register an account to access certain features of the Service.",
      "You are responsible for maintaining the confidentiality of your account and password.",
    ],
  },
  {
    title: "Termination",
    description:
      "PressChain may terminate or suspend your account immediately, without prior notice, if you breach these Terms.",
  },
  {
    title: "Limitation of Liability",
    description:
      "PressChain shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.",
  },
  {
    title: "Governing Law",
    description:
      "These Terms shall be governed and construed in accordance with the laws of the location of PressChain’s headquarters, excluding its conflicts of law rules.",
  },
  {
    title: "Dispute Resolution",
    description:
      "Disputes arising from or related to these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of PressChain’s location.",
  },
  {
    title: "Changes to These Terms and Conditions",
    description:
      "PressChain reserves the right to modify or replace these Terms at any time, at our sole discretion.",
  },
  {
    title: "Contact Us",
    description:
      "If you have any questions about these Terms and Conditions, please contact us at support@presschain.com.",
  },
];

const Terms = () => {
  return (
    <Container
      sx={{
        mt: 10,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Terms and Conditions
      </Typography>

      {termsAndConditions.map((term, index) => (
        <Box key={index} mb={4}>
          <Typography variant="h5" gutterBottom>
            {term.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {term.list && (
              <List>
                {term.list.map((listItem, listIndex) => (
                  <ListItem key={listIndex}>
                    <ListItemText primary={listItem} />
                  </ListItem>
                ))}
              </List>
            )}
          </Box>
          {term.content ? (
            term.content.map((contentItem, contentIndex) => (
              <Box key={contentIndex} mt={2}>
                <Typography variant="h6">{contentItem.subtitle}</Typography>
                <Typography variant="bodyRegular">
                  {contentItem.description}
                </Typography>
                {contentItem.list && (
                  <List>
                    {contentItem.list.map((listItem, listIndex) => (
                      <ListItem key={listIndex}>
                        <Typography variant="bodyRegular">
                          {listItem}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                )}
              </Box>
            ))
          ) : (
            <Typography variant="bodyRegular">{term.description}</Typography>
          )}
        </Box>
      ))}
    </Container>
  );
};

export default Terms;
