import { Grid } from "@mui/material";
import MUIDataGrid from "components/common/Datagrid";
import React from "react";

const ArticlesGrid = ({ title, userInfo }) => {
  const columns = [
    { field: "Title", headerName: "Title", width: 200 },
    { field: "Status", headerName: "Reference Number", width: 200 },
    { field: "Readcount", headerName: "Accout Number", width: 200 },
    { field: "Amount", headerName: "Amount", width: 200 },
    { field: "Status", headerName: "Status", width: 150 },
    { field: "Date", headerName: "Date", width: 200 },
  ];
  const rows = [];
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        px: 1,
      }}
    >
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      ></Grid>
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MUIDataGrid title={title} columns={columns} rows={rows} />
      </Grid>
    </Grid>
  );
};

export default ArticlesGrid;
