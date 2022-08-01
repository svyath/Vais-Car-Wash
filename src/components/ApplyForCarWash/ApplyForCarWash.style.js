import styled from "@emotion/styled";
import { MenuItem, TextField } from "@mui/material";
import { Container, device, font, PrimaryBtn } from "../../GlobalStyles";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import mapWithPin from "../../assets/images/mapWithPin.png";

export const ApplyForCarWashSection = styled.section`
  margin-bottom: 120px;
  @media (${device.tablet}) {
    background: url(${mapWithPin}) center right no-repeat;
    background-size: contain;
  }
`;
export const ApplyForCarWashContainer = styled(Container)`
  padding: 0 60px 0 60px;
`;
export const ApplyForCarWashInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;
  @media (${device.tablet}) {
    display: block;
  }
`;
export const Map = styled.div`
  width: 50%;
  @media (${device.tablet}) {
    display: none;
  }
  img {
    max-width: 500px;
    width: 100%;
  }
`;
export const FormForBooking = styled.div`
  width: 50%;
  @media (${device.tablet}) {
    width: 100%;
  }
  & > form {
    & > div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      gap: 20px;
      &:last-of-type {
        margin-bottom: 40px;
      }
      @media (${device.mobileM}) {
        display: block;
      }
    }
  }
`;
export const FlexDiv = styled.div``;
export const FormTitle = styled.h2`
  font-weight: 700;
  font-size: 40px;
  line-height: 57px;
  letter-spacing: 0.2px;
  margin: 40px 0 24px 0;
`;

export const CustomField = styled(TextField)`
  width: 50%;
  font-family: ${font.roboto};
  @media (${device.mobileM}) {
    width: 100%;
  }
  // TODO:to look
  .MuiInputLabel-root {
    color: #737373;
    font-family: inherit;
    font-size: 14px;
    letter-spacing: 0.2px;

    &.Mui-focused {
      color: #737373;
    }
    &.Mui-error {
      color: #d32f2f;
    }
  }
  & .MuiOutlinedInput-root {
    background: transparent;
    &:hover .MuiOutlinedInput-notchedOutline {
      border-width: 2px;
      border-color: #e6e6e6;
    }
    & .MuiOutlinedInput-input {
      color: #737373;
    }
    & .MuiOutlinedInput-notchedOutline {
      border-color: #e6e6e6;
      legend: {
        color: #e6e6e6;
      }
    }
    &.Mui-error {
      &:hover .MuiOutlinedInput-notchedOutline {
        border-width: 2px;
      }
      & .MuiOutlinedInput-input {
        color: #d32f2f;
      }
      & .MuiOutlinedInput-notchedOutline {
        border-color: #d32f2f;
      }
    }
  }
`;

export const FullNameField = styled(CustomField)`
  @media (${device.mobileM}) {
    margin-bottom: 20px;
  }
`;
export const TelField = styled(CustomField)``;

export const AddressField = styled(CustomField)`
  @media (${device.mobileM}) {
    margin-bottom: 20px;
  }
  .MuiOutlinedInput-root {
    & .MuiSelect-icon {
      color: #737373;
    }
  }
`;
export const AdressMenuItem = styled(MenuItem)`
  font-size: 14px;
  font-family: ${font.roboto};
  color: #737373;
`;
export const TimePickerField = styled(MobileTimePicker)``;

export const TimePickerInputField = styled(CustomField)``;
export const MessageField = styled(CustomField)`
  width: 100%;
`;

export const BookAppointmentBtn = styled(PrimaryBtn)`
  padding: 15px 40px;
  text-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
  font-size: 14px;
  line-height: 28px;
  letter-spacing: 0.2px;
`;
