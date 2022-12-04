import React from "react";
import isString from "lodash/isString";
import { useDropzone } from "react-dropzone";
import { Typography, Box } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import RejectionFiles from "../rejectionFiles/RejectionFiles";
import "./uploadAvatar.css";


const RootStyle = styled("div")(({ theme }) => ({
  width: 144,
  height: 144,
  margin: "auto",
  borderRadius: "50%",
  padding: theme.spacing(1),
  border: `1px dashed ${alpha("#919EAB", 0.32)}`,
  "&:hover": {

  },
}));

const DropZoneStyle = styled("div")({
  width: "100%",
  height: "100%",
  outline: "none",
  display: "flex",
  overflow: "hidden",
  borderRadius: "50%",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 0,
  "& > *": { width: "100%", height: "100%" },
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "#232323",
    opacity: 0.8,
    "& .placeholder": {
    },
  },
});


function UploadAvatar({ error, file, helperText, sx, ...other }) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    fileRejections,
    // isDragReject,
  } = useDropzone({
    multiple: false,
    ...other,
  });

  return (
    <>
      <RootStyle
        sx={{
          backgroundColor: "#E3E3E3",
          //backgroundColor: "#FFF",
          borderColor: "sucess.light",
          width: "120px", height: "120px"
        }}
      >
        <DropZoneStyle className="dropZoneStyle"
          {...getRootProps()}
          sx={{
            ...(isDragActive && { opacity: 0.72 }),
          }}
        >

          <input {...getInputProps()} />


          {file && (
            <Box
              sx={{
                zIndex: 8,
                overflow: "hidden",
                "& img": { objectFit: "cover", width: 1, height: 1 },
              }}
            >
              <img alt="avatar" src={isString(file) ? file : file.preview} />
            </Box>
          )}
          {
            !file && (
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img alt="" src="icon/Popup.png"
                  style={{
                    heigth: "16px",
                    width: "16px",
                    marginTop: "40px"
                  }}
                />

                <Typography
                  sx={{
                    mt: "12px",
                    color: "#8C8C8C",
                    fontSize: "12px",
                    fontWeight: 500,
                    fontFamily: "popponis",
                  }}
                  variant="caption">
                  {file ? "Update photo" : "Brand Logo"}
                </Typography>
              </Box>
            )
          }
          <div className="text-change-logo">
            CHANGE <br />LOGO
          </div>
        </DropZoneStyle>

      </RootStyle>

      {helperText && helperText}

      {fileRejections.length > 0 && (
        <RejectionFiles fileRejections={fileRejections} />
      )}
    </>
  );
}

export default UploadAvatar;
