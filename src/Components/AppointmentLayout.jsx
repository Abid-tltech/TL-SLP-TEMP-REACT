import {
  Box,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import Button from "@mui/material/Button";
import { BiBorderRadius, BiWorld } from "react-icons/bi";
import {
  FaLocationDot,
  FaInstagram,
  FaPinterest,
  FaFacebookF,
} from "react-icons/fa6";
import { FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import TL_Logo from "../images/Logo-TL.png";
import { styled } from "@mui/material/styles";
import { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { IoIosCloseCircleOutline } from "react-icons/io";
const countries = [
  { code: "+1", label: "USA (+1)" },
  { code: "+44", label: "UK (+44)" },
  { code: "+91", label: "IND (+91)" },
  { code: "+86", label: "CHN (+86)" },
  { code: "+81", label: "JPN (+81)" },
  { code: "+49", label: "GER (+49)" },
  { code: "+7", label: "RUS (+7)" },
  { code: "+55", label: "BRA (+55)" },
  { code: "+33", label: "FRA (+33)" },
  { code: "+92", label: "PAK (+92)" },
  { code: "+234", label: "NGA (+234)" },
  { code: "+62", label: "IDN (+62)" },
  { code: "+880", label: "BGD (+880)" },
  { code: "+7", label: "KAZ (+7)" },
  { code: "+90", label: "TUR (+90)" },
  { code: "+27", label: "ZAF (+27)" },
  { code: "+20", label: "EGY (+20)" },
  { code: "+82", label: "KOR (+82)" },
  { code: "+60", label: "MYS (+60)" },
  { code: "+63", label: "PHL (+63)" },
]; // Array of country codes and labels
const AppointmentLayout = () => {
  // <================ dropdown values =====================>
  const dropdown = [
    {
      value: "Option 1",
      label: "Option 1",
    },
    {
      value: "Option 2",
      label: "Option 2",
    },
    {
      value: "Option 3",
      label: "Option 3",
    },
    {
      value: "Option 4",
      label: "Option 4",
    },
    {
      value: "Option 5",
      label: "Option 5",
    },
    {
      value: "Option 6",
      label: "Option 6",
    },
    {
      value: "Option 7",
      label: "Option 7",
    },
    {
      value: "Option 8",
      label: "Option 8",
    },
    {
      value: "Option 9",
      label: "Option 9",
    },
    {
      value: "Option 10",
      label: "Option 10",
    },
  ];
  //<==================== tooltip =======================>
      // Tooltip component with styled customization
  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} placement="right" />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#777777",
      color: "rgba(255, 255, 255)",
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }));
  const infoTooltipContent = "hello there";
  // State for form fields and errors
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    selectedOption: [],
    message: "",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});
  // Handler for form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error message when user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  // <=================== Form validation =====================>
  const validateForm = () => {
    let formValid = true;
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please Enter Your Name";
      formValid = false;
    }
    if (!formData.number.trim()) {
      newErrors.number = "Please Enter Your Phone Number";
      formValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please Enter Your Email";
      formValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      formValid = false;
    }
    if (!formData.selectedOption) {
      newErrors.selectedOption = "Please select an option";
      formValid = false;
    }
                    // Validation for checkbox 
    // if (!formData.termsAccepted) {
    //   newErrors.termsAccepted = "Please accept terms and conditions";
    //   formValid = false;
    // }
    setErrors(newErrors);
    return formValid;
  };
  // <================ Handle form submission ===================>
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const name = encodeURIComponent(formData.name);
      const email = encodeURIComponent(formData.email);
      const countryCode = encodeURIComponent(formData.countryCode);
      const phoneNumber = encodeURIComponent(formData.number);
      const selectedOptions = formData.selectedOption.join(", ");
      const userMessage = encodeURIComponent(formData.message);
      const fullPhoneNumber = `${countryCode}${phoneNumber}`;
      const message = `Name: ${name}%0AEmail: ${email}%0APhone Number: ${fullPhoneNumber}%0ASelected Options: ${selectedOptions}%0AUser Message: ${userMessage}`;
      const whatsappUrl = `https://wa.me/917736149126?text=${message}`;
      window.open(whatsappUrl, "_blank");
      console.log("Form submitted:", formData);
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };
    // State and handler for country code and phone number
  const [formDatas, setFormDatas] = useState({
    countryCode: countries[0].code,
    phoneNumber: "",
  });
  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      <Box
        className={'boxx w-[285px] md:w-[480px] rounded-md'}
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          
        }}
      >
        <form onSubmit={handleSubmit} className="ml-5">
          <h2 className="mt-10 md:mr-0">Get In Touch</h2>
          {/* <===========Input section starts here=================>  */}
          <div
            className="inputt w-[280px] md:w-[350px] text-center"
            style={{ display: "flex" }}
          >
            <TextField
              id="name"
              name="name"
              label="Name"
              fullWidth
              value={formData.name}
              onChange={handleInputChanges}
              error={!!errors.name}
              helperText={errors.name}
            />
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">Type your Name here</Typography>
                  <p>This phone number will be used for contact purpose</p>
                </React.Fragment>
              }
              placement="right"
            >
              <IconButton aria-label="info">
                <InfoRoundedIcon />
              </IconButton>
            </HtmlTooltip>
          </div>
                    {/* Country code and phone number inputs with tooltips */}
          <div
            className="inputt w-[280px] md:w-[350px]  mt-3"
            style={{ display: "flex" }}
          >
            <Select
              id="countryCode"
              name="countryCode"
              value={formData.countryCode}
              onChange={handleInputChange}
              style={{ width: "60px", height: "53px" }}
            >
              {countries.map((country) => (
                <MenuItem key={country.code} value={country.code}>
                  {country.label}
                </MenuItem>
              ))}
            </Select>
            <TextField
              id="outlined-number"
              name="number"
              label="Phone Number"
              type="tel"
              fullWidth
              value={formDatas.number}
              onChange={handleInputChange}
              error={!!errors.number}
              helperText={errors.number}
              inputProps={{ maxLength: 13 }}
            />
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">
                    Enter your Phone NUmber
                  </Typography>
                  <p>This phone number will be used for contact purpose</p>
                </React.Fragment>
              }
              placement="right"
            >
              <IconButton aria-label="info">
                <InfoRoundedIcon />
              </IconButton>
            </HtmlTooltip>
          </div>
                    {/* Email input with tooltip */}
          <div
            className="inputt w-[280px] md:w-[350px]  mt-3"
            style={{ display: "flex" }}
          >
            <TextField
              id="outlined- "
              name="email"
              label="Email"
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleInputChange}
              error={!!errors.email}
              helperText={errors.email}
            />
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">Enter your Email</Typography>
                  <p>This phone number will be used for contact purpose</p>
                </React.Fragment>
              }
              placement="right"
            >
              <IconButton aria-label="info">
                <InfoRoundedIcon />
              </IconButton>
            </HtmlTooltip>
          </div>
          {/* Dropdown for selecting multiple options */}
          <div
            className="inputt w-[280px] md:w-[350px] mt-3"
            style={{ display: "flex", flexDirection: "column", color: "black" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Select
                fullWidth
                multiple
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                label="Select"
                name="selectedOption"
                value={formData.selectedOption}
                onChange={handleInputChange}
              >
                {dropdown.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              <HtmlTooltip
                title={
                  <React.Fragment>
                    <Typography color="inherit">
                      Select one or more options
                    </Typography>
                    <p>
                      Select option from the below dropdown. you can select
                      multiple options
                    </p>
                  </React.Fragment>
                }
              >
                <IconButton aria-label="info">
                  <InfoRoundedIcon />
                </IconButton>
              </HtmlTooltip>
            </div>
            <div
              style={{
                marginTop: "10px",
                maxHeight: "80px",
                overflowY: "auto",
              }}
            >
              {formData.selectedOption.length > 0 ? (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {formData.selectedOption.map((selected, index) => (
                    <div
                      key={index}
                      style={{
                        marginBottom: "5px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span>{selected}</span>
                      <IconButton
                        aria-label="remove"
                        onClick={() => {
                          const updatedOptions = [...formData.selectedOption];
                          updatedOptions.splice(index, 1);
                          setFormData({
                            ...formData,
                            selectedOption: updatedOptions,
                          });
                        }}
                      >
                        <IoIosCloseCircleOutline />
                      </IconButton>
                    </div>
                  ))}
                </div>
              ) : (
                <span>No items selected</span>
              )}
            </div>
          </div>
                    {/* Message input with tooltip */}
          <div
            className=" inputt w-[280px] md:w-[350px]  mt-3"
            style={{ display: "flex" }}
          >
            <TextField
              id="outlined-multiline-static"
              name="message"
              label="Message"
              multiline
              rows={4}
              fullWidth
              value={formData.message}
              onChange={handleInputChange}
              error={!!errors.message}
              helperText={errors.message}
            />
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="inherit">
                    Tell us what's on your mind
                  </Typography>
                  <p>
                    We value your opinions and feedback. we love to here it from
                    you
                  </p>
                </React.Fragment>
              }
              placement="right"
            >
              <IconButton aria-label="info">
                <InfoRoundedIcon />
              </IconButton>
            </HtmlTooltip>
          </div>
          {/* Terms and conditons box  */}
          {/* <div className="inputt" style={{ marginRight: "105px" }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      termsAccepted: e.target.checked,
                    })
                  }
                />
              }
              label="Accept Terms and Conditions"
              error={!!errors.termsAccepted}
              helperText={errors.termsAccepted}
            />
          </div> */}
          {/* Terms and conditons box ends here */}
          {/* <=================Input section ends here==================> */}
          <div
            style={{ display: "grid", placeItems: "center", marginTop: "30px" }}
          >
            <Button variant="contained" color="success" type="submit">
              Submit
            </Button>
          </div>
          {/* <===============Social media icons starts here =============>*/}
          <div className="grid grid-cols-8 md:grid-cols-8 gap-0 md:gap-0 justify-center items-center w-full mt-4">
            <a href="https://www.google.com/maps/place/TL+TECHNOLOGIES+PRIVATE+LIMITED/@8.5795247,76.8567485,16z/data=!4m6!3m5!1s0x3b05bfb13fa37fc1:0xf89d4bd32e84246f!8m2!3d8.5799619!4d76.8632868!16s%2Fg%2F11p5shtd3y?entry=ttu">
              <FaLocationDot className="text-blue-500 w-6 h-5 md:h-8" />
            </a>
            <a href="https://www.facebook.com/tltechnologiespvtltd">
              <FaFacebookF className="text-blue-500 w-6 h-4 md:h-8" />
            </a>
            <a href="https://www.instagram.com/tltechnologiespvtltd/">
              <FaInstagram className="text-red-500 w-6 h-6 md:h-8" />
            </a>
            <a href="https://www.youtube.com/channel/UC66DHUJ0uCcSbAqhppInx5Q">
              <FaYoutube className="text-red-500 w-6 h-6 md:h-8" />
            </a>
            <a href="https://www.linkedin.com/company/tltechnologiespvtltd/">
              <FaLinkedinIn className="text-blue-500 w-6 h-6 md:h-8" />
            </a>
            <a href="https://in.pinterest.com/tltechnologiespvtltd/">
              <FaPinterest className="text-red-500 w-6 h-6 md:h-8" />
            </a>
            <a href="https://twitter.com/tl_technologies">
              <FaTwitter className="text-blue-500 w-6 h-6 md:h-8" />
            </a>
            <a href="https://tltechnologies.net/">
              <BiWorld className="text-lightblue-500 w-7 h-7 md:h-8" />
            </a>
          </div>
        </form>
        {/*<================ Social media icons end here====================> */}
        {/* <=================Footer section starts here====================> */}
        <div className="footer-container flex flex-col md:flex-row justify-between items-center text-white bg-gray-400 p-4 md:p-6 rounded-lg mt-4 md:mt-8 md:mb-3 mb-3">
          <span className="text-sm md:text-base mr-0 md:mr-8 mb-4 md:mb-0">
            to know more about our service
            <br />
            <a href="https://connect.tltechnologies.net/service.html" target="_blank" rel="noopener noreferrer">
              <button className="tlbutton text-white bg-blue-700 py-1 px-3 md:py-2 md:px-4 rounded-md">
                TL TECHNOLOGIES
              </button>
            </a>
          </span>
          <div className="powered flex items-center text-xs md:text-sm">
            powered by
            <img
              src={TL_Logo}
              className="h-9 w-9 md:h-16 md:w-16"
              alt="TL Technologies Logo"
            />
          </div>{" "}
        </div>
        {/*<======================== Footer section ends Here=====================> */}
      </Box>
    </>
  );
};
export default AppointmentLayout;
