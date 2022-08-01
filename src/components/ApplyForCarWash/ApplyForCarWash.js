import { MenuItem } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import mapWithPin from "../../assets/images/mapWithPin.png";
import {
  AddressField,
  AdressMenuItem,
  ApplyForCarWashContainer,
  ApplyForCarWashInner,
  ApplyForCarWashSection,
  BookAppointmentBtn,
  FlexDiv,
  FormForBooking,
  FormTitle,
  FullNameField,
  Map,
  MessageField,
  TelField,
  TimePickerField,
  TimePickerInputField,
} from "./ApplyForCarWash.style";

const validationSchema = yup.object({
  fullName: yup
    .string("Enter your full name")
    .required("Full name is required")
    .matches(/^ *[\w]+ +[\w]+ *$/, "full name is not valid"),
  phone: yup
    .string("Enter your phone number")
    .matches(
      /^\+? *[\d]* *\(? *0 *[\d]{2,2} *\)?( *|-)([\d]{4,4}( *|-)[\d]{3,3} *|[\d]{7,7} *)$/,
      "Not valid format"
    )
    .required("Phone number is required"),
  address: yup.string("Select address").required("Address is required"),
  availableTime: yup
    .string("Select available time")
    .required("Time is required"),
  message: yup
    .string("Type some text")
    .required("Message is required")
    .min(10, "Message should be a bit longer")
    .max(200, "Message too longer"),
});
const addresses = [
  {
    value: "777 N CAPITOL WASHINGTON DC 20002-4290 USA",
    label: "Washington, D.C",
  },
  {
    value: "549 N. Tarkiln Hill Ave. Brooklyn, NY 11233",
    label: "New York",
  },
  {
    value: "7368 Squaw Creek Court Lake Forest, CA 92630",
    label: "California",
  },
  {
    value: "67 Windsor St. Miami, FL 33179",
    label: "Florida",
  },
];
export const ApplyForCarWash = () => {
  // data from form
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    availableTime: new Date(),
    message: "",
  });
  const today = new Date();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      address: "",
      availableTime: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate(),
        10,
        0,
        0
      ),
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      setFormData((state) => {
        return {
          ...values,
          availableTime: new Date(values.availableTime),
        };
      });
      resetForm();
    },
  });
  console.log(formik);

  return (
    <ApplyForCarWashSection>
      <ApplyForCarWashContainer>
        <ApplyForCarWashInner>
          <Map>
            <img src={mapWithPin} alt="" />
          </Map>
          <FormForBooking>
            <FormTitle>Apply for a car wash.</FormTitle>
            <form onSubmit={formik.handleSubmit}>
              <FlexDiv>
                <FullNameField
                  id="fullName"
                  name="fullName"
                  label="Full Name*"
                  variant="outlined"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.fullName && Boolean(formik.errors.fullName)
                  }
                  helperText={formik.touched.fullName && formik.errors.fullName}
                />
                <TelField
                  id="phone"
                  label="Phome No*"
                  name="phone"
                  variant="outlined"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
              </FlexDiv>
              <FlexDiv>
                <AddressField
                  id="address"
                  name="address"
                  select
                  label="Address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.touched.address && formik.errors.address}
                >
                  {addresses.map((option) => (
                    <AdressMenuItem key={option.value} value={option.value}>
                      {option.label}
                    </AdressMenuItem>
                  ))}
                </AddressField>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePickerField
                    id="availableTime"
                    name="availableTime"
                    label="Available time"
                    value={formik.values.availableTime}
                    minutesStep={60}
                    onChange={(value) => {
                      formik.setFieldValue("availableTime", Date.parse(value));
                    }}
                    error={
                      formik.touched.fullName && Boolean(formik.errors.fullName)
                    }
                    helperText={
                      formik.touched.fullName && formik.errors.fullName
                    }
                    renderInput={(params) => (
                      <TimePickerInputField {...params} />
                    )}
                  />
                </LocalizationProvider>
              </FlexDiv>
              <FlexDiv>
                <MessageField
                  id="message"
                  label="Message"
                  multiline
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  rows={4}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helperText={formik.touched.message && formik.errors.message}
                />
              </FlexDiv>
              <BookAppointmentBtn type="submit">
                Book Appointment
              </BookAppointmentBtn>
            </form>
          </FormForBooking>
        </ApplyForCarWashInner>
      </ApplyForCarWashContainer>
    </ApplyForCarWashSection>
  );
};
