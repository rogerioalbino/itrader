import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";


export default function Dashboard(): ReactElement {
  const buttons = [
    { id: 0, view: "Dashboard", path: "/" },
    { id: 1, view: "Strategy", path: "/strategy" },
  ];

  return (
    <>
      <h5>Dashboard</h5>
      {buttons.map((element: any): any => (
        <Button
          key={element.id}
          size="small"
          component={Link}
          to={element.path}
        >
          {element.view}
        </Button>
      ))}
    </>
  );
}
