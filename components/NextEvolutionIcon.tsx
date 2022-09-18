import * as React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const NextEvolutionIcon: React.FC = () => {
  return (
    <>
      <ArrowForwardIosIcon
        sx={{
          marginTop: "100%",
          display: { xs: "none", sm: "none", md: "block" },
        }}
      />
      <KeyboardArrowDownIcon
        sx={{
          marginLeft: "48%",
          display: { md: "none", lg: "none" },
        }}
      />
    </>
  );
};

export default NextEvolutionIcon;
