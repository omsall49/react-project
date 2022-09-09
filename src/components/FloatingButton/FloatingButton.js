import * as React from "react";
import Fab from "@mui/material/Fab";
import CreateIcon from "@mui/icons-material/Create";
import { useNavigate } from "react-router-dom";

export default function FloatingButton() {
  const navigate = useNavigate();
  return (
    <div id="floating-button">
      <Fab
        variant="extended"
        onClick={function () {
          navigate("/upload");
        }}
      >
        <CreateIcon />
        글쓰기
      </Fab>
    </div>
  );
}
