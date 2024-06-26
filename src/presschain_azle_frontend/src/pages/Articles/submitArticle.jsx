import React, { useState } from "react";
import { Button, Container, Typography, Box, Grid } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill stylesheet
import "./styles.css";

const SubmitArticle = () => {
  const [article, setArticle] = useState({
    title: "",
    content: "",
  });

  const handleInputChange = (value, field) => {
    setArticle((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Article Submitted:", article);
  };

  return (
    <Container component="main" maxWidth="lg">
      <Typography
        component="h1"
        variant="h4"
        align="center"
        style={{ marginTop: "20px" }}
      >
        Submit Article
      </Typography>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          display: "flex",

          flexDirection: "column",
          gap: 5,
          mt: 3,
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            gap: 2,
          }}
        >
          <Grid
            item
            sx={{
              width: 550,
              height: 500,
            }}
          >
            <ReactQuill
              theme="snow"
              value={article.content}
              onChange={(value) => handleInputChange(value, "content")}
              placeholder="Enter your content here..."
              modules={SubmitArticle.modules}
              formats={SubmitArticle.formats}
              style={{ height: "100%" }}
            />
          </Grid>
          <Grid
            item
            sx={{
              width: 550,
              height: 500,
              borderLeft: "1px solid #ccc",
              overflowY: "auto",
              wordWrap: "break-word",
              padding: "0 20px",
            }}
          >
            <Typography
              component="div"
              variant="body1"
              className="review-content"
            >
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </Typography>
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Submit Article
        </Button>
      </Box>
    </Container>
  );
};

// Toolbar options for React-Quill editor
SubmitArticle.modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    [{ align: [] }],
    ["clean"],
  ],
};

SubmitArticle.formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "align",
];

export default SubmitArticle;
