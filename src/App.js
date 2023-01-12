import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

import { rows, columns } from "./Data";
import "./App.css";

function App() {
  return (
    <Box
      sx={{
        height: "80vh",
        width: "100%",
        "& .status.red": {
          backgroundColor: "rgba(255,0,0,0.6)",
          color: "black",
        },
        "& .status.green": {
          backgroundColor: "rgba(0,255,0,0.6)",
          color: "black",
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </Box>
  );
}

export default App;
