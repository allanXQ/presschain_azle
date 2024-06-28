import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const AboutUs = () => {
  const content = [
    {
      title: "Who We Are",
      subtitle: "Redefining Journalism through Decentralization",
      description:
        "PressChain stands at the forefront of a new era in journalism. We're not just a news outlet; we are a decentralized platform that champions transparency and freedom of expression. By leveraging blockchain technology, PressChain empowers contributors around the globe to share and verify news, ensuring authenticity and combating misinformation. Our mission is to make news accessible to all, free from the influence of centralized power.",
      imagePath: "/img/aboutus.jpeg",
      width: 2000,
    },
    {
      title: "Our Team",
      subtitle: "Innovators Committed to Truth",
      imagePath: "/img/team.jpeg",
      width: 2000,
      description:
        "Our team is a diverse group of passionate journalists, blockchain experts, and advocates for press freedom. United by a shared vision of ethical journalism, we work tirelessly to provide a platform where every voice can be heard. From our tech innovators who ensure the robustness of our platform to our editorial staff upholding the highest journalistic standards, each member plays a crucial role in the integrity of PressChain.",
    },
    {
      title: "Our Journey",
      subtitle: "Empowering Voices Globally",
      imagePath: "/img/journey.jpeg",
      width: 2000,
      description:
        "Launched in the wake of growing censorship and media monopolization, PressChain was founded to restore power to the public. What began as a grassroots initiative has blossomed into a global movement, with millions of active users across continents. Each story published on PressChain not only informs but also fosters a participatory culture of journalism, where truth prevails and stories matter.",
    },
  ];

  const mission = [
    {
      title: "Mission",
      imagePath: "/img/mission.png",
      color: "#f14724",
      description:
        "To ensure the free flow of information by providing a decentralized platform where news is created, shared, and verified by the global community, fostering a world where media integrity and independence are paramount.",
    },
    {
      title: "Vision",
      imagePath: "/img/vision.png",
      color: "#00a875",
      description:
        "To set the global standard for participatory journalism, where every individual has the power to report, document, and influence the world through unfiltered news.",
    },
    {
      title: "Values",
      imagePath: "/img/values.png",
      color: "#0aafdc",
      description:
        "Our core values are rooted in transparency, collaboration, and integrity. We believe in empowering individuals, protecting freedom of speech, and promoting ethical journalism practices across our decentralized network.",
    },
  ];

  return (
    <Grid
      container
      sx={{
        mt: 10,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {content.map((item, index) => (
        <Grid
          item
          xs={12}
          key={item.title}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <Typography variant="h3">{item.title}</Typography>
            <Typography variant="bodySmallBold">{item.subtitle}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: index % 2 === 0 ? "row" : "row-reverse",
              },
              gap: { sm: 10 },
            }}
          >
            <Box sx={{ maxWidth: "100%", overflow: "hidden" }}>
              <img
                src={item.imagePath}
                alt={item.title}
                width={item.width}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
            <Typography
              variant="bodyRegular"
              sx={{
                mt: { lg: 10 },
                maxWidth: { lg: 700 },
              }}
            >
              {item.description}
            </Typography>
          </Box>
        </Grid>
      ))}
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          gap: 10,
        }}
      >
        {mission.map((item, index) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: 300,
              maxHeight: 500,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={item.imagePath}
                alt={item.title}
                width={120}
                style={{ maxWidth: "100%", height: 100 }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  color: item.color,
                  fontWeight: "bold",
                  fontSize: 20,
                  textTransform: "uppercase",
                  borderBottom: "5px solid",
                }}
              >
                {item.title}
              </Typography>
              <Typography variant="bodyRegular">{item.description}</Typography>
            </Box>
          </Box>
        ))}
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Join Us On Our Journey
        </Typography>
        <Typography variant="bodySmallBold" sx={{ textAlign: "center" }}>
          Be Part of the Verdant Capital Story
        </Typography>
        <Typography variant="bodyRegular" sx={{ textAlign: "center" }}>
          As we continue to break barriers and set new benchmarks, we invite you
          to be a part of our story. Trade, learn, and grow with Verdant Capital
          — where every trader finds a home.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
