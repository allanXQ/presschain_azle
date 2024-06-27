import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Box, Paper } from "@mui/material";

const ViewArticle = () => {
  const { articleId } = useParams(); // If using React Router and dynamic routes
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Fetch the article data from an API or local state
    fetchArticle(articleId);
  }, [articleId]);

  const fetchArticle = async (id) => {
    // Placeholder for fetch API
    const response = await fetch(`https://api.example.com/articles/${id}`);
    const data = await response.json();
    setArticle(data);
  };

  if (!article) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} sx={{ padding: 2, marginTop: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {article.title}
        </Typography>
        <Box sx={{ mt: 2, mb: 2 }}>
          <Typography variant="body1" component="div">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </Typography>
        </Box>
        <Typography variant="subtitle1" color="textSecondary">
          Author: {article.author}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          Published on: {new Date(article.publishDate).toLocaleDateString()}
        </Typography>
      </Paper>
    </Container>
  );
};

export default ViewArticle;
