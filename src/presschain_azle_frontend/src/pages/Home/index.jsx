import { Box, Grid, Typography, Button, useTheme } from "@mui/material";
import { MuiButton } from "components/common/Button";
import Footer from "./Footer";

const Features = [
  {
    title: "Real-Time Reporting",
    description:
      "Participate in live reporting sessions where journalists and contributors collaborate in real-time, bringing transparency and immediacy to the forefront of news delivery.",
  },
  {
    title: "Advanced Analytical Tools",
    description:
      "Harness cutting-edge tools for data analysis and visualization, enabling detailed scrutiny and interpretation of news before it's published on our decentralized platform.",
  },
  {
    title: "Comprehensive Portfolio Management",
    description:
      "Manage your contributions, track engagement, and analyze your impact within the ecosystem, all through a user-friendly dashboard designed for journalists and contributors.",
  },
  {
    title: "Up-to-Date Market Insights",
    description:
      "Gain access to the latest developments and trends across various industries and regions, ensuring that you are always informed and ahead of the curve.",
  },
  {
    title: "In-depth Research Resources",
    description:
      "Utilize our extensive library of resources and research materials to deepen your understanding of complex topics and enhance your journalistic accuracy.",
  },
];

const stats = [
  {
    title: "100M",
    subtitle: "Articles Published",
  },
  {
    title: "200K",
    subtitle: "Active Contributors",
  },
  {
    title: "300+",
    subtitle: "Countries Reached",
  },
  {
    title: "100%",
    subtitle: "Community Driven",
  },
];

const whyUs = [
  {
    iconPath: "/img/marketdata.png",
    title: "Tailored Insights",
    description:
      "Get customized insights and data relevant to your interests and reporting needs.",
  },
  {
    iconPath: "/img/security.png",
    title: "Enhanced Security",
    description:
      "Experience a secure environment with advanced protocols to protect your work and identity.",
  },
  {
    iconPath: "/img/24hrs.png",
    title: "24/7 Access",
    description:
      "Enjoy uninterrupted access to our platform, allowing you to report and publish anytime.",
  },
  {
    iconPath: "/img/support.png",
    title: "Dedicated Support",
    description:
      "Rely on our expert team for technical and editorial support to enhance your reporting.",
  },
];

const Home = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: theme.spacing(10),
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: theme.spacing(2),
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(1),
          }}
        >
          <Typography variant="h2">
            Elevate Your Reporting. Transform the Media Landscape.
          </Typography>
          <Typography variant="bodyRegular">
            Explore the frontier of decentralized journalism with PressChain.
            Our platform equips you with the necessary tools and insights,
            enabling you to craft stories that matter and drive change.
          </Typography>
          <Box>
            <MuiButton
              variant="contained"
              color="primary"
              content="Get Started"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <img src="/img/home3.webp" alt="hero" width={600} />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: theme.spacing(2),
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            alignItems: "center",
            gap: theme.spacing(1),
          }}
        >
          <Typography variant="h2">Platform Features</Typography>
          <Typography variant="bodyRegular">
            Discover the powerful features that make PressChain the go-to
            platform for journalists and contributors worldwide.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row-reverse" },
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box sx={{ maxWidth: "100%", overflow: "hidden" }}>
            <img
              src="/img/dashboard.png"
              alt="dashboard"
              width={1200}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: theme.spacing(2),
            }}
          >
            {Features.map((item) => (
              <Box
                key={item.title}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: theme.spacing(1),
                }}
              >
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="bodyRegular">
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: theme.spacing(2),
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            alignItems: "center",
            gap: theme.spacing(1),
          }}
        >
          <Typography variant="h2">Platform Metrics at a Glance</Typography>
          <Typography variant="bodyRegular">
            Showcasing our impressive quarterly volumes and expansive global
            reach.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: theme.spacing(2),
          }}
        >
          {stats.map((item) => (
            <Box
              key={item.title}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: theme.spacing(1),
                minWidth: 200,
              }}
            >
              <Typography variant="h2">{item.title}</Typography>
              <Typography variant="bodyRegular">{item.subtitle}</Typography>
            </Box>
          ))}
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: theme.spacing(2),
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            alignItems: "center",
            gap: theme.spacing(1),
          }}
        >
          <Typography variant="h2">Why Users Trust Us</Typography>
          <Typography variant="bodyRegular">
            Beyond features, it's our reliability, expertise, and unwavering
            commitment to user success that sets us apart. Discover why.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            alignItems: "center",
            gap: theme.spacing(2),
          }}
        >
          {whyUs.map((item) => (
            <Box
              key={item.title}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 150,
                }}
              >
                <img src={item.iconPath} alt="icon" width={120} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: theme.spacing(1),
                }}
              >
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="bodyRegular">
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
