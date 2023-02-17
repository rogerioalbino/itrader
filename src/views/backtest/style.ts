import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    container: {
      position: "relative",
      width: "100%",
      height: "100%",
      "&:hover": {
          cursor: "crosshair",
      },
      "&:active": {
          cursor: "grabbing",
      },
      },
      info: {
        width:'920px',
        height:'40px',
        padding: 4,
        backgroundColor:'transparent',
        position:'absolute',
        top:'0px',
        left:'0px',
        color: "white",
        fontSize: 12,
        zIndex: 2
      },
      indicators: {
        width:'180px',
        height:'40px',
        backgroundColor:'transparent',
        position:'absolute',
        top:'40px',
        left:'0px',
        color: "white",
        zIndex: 2
      }
      
});

export default useStyles;
