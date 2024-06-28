import { Form, Formik } from "formik";

import MUITextField from "components/forms/inputs/textField";
import { Box } from "@mui/material";
import getValidationSchema from "./getValidationSchema";
import { useDispatch, useSelector } from "react-redux";
import { apiCall } from "Redux/async/asyncThunk";
import { MuiButton } from "components/common/Button";
import { selectUser } from "Redux/features/user/userSlice";
import { presschain_azle_backend } from "declarations/presschain_azle_backend";

const CenteredBox = (props) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 2,
      ...props.sx,
    }}
    {...props}
  />
);

const FIELD_COMPONENTS = {
  email: MUITextField,
  password: MUITextField,
  text: MUITextField,
  number: MUITextField,
  file: "input",
};

const getInitialValues = (fields) => {
  return fields?.reduce((values, field) => {
    values[field.name] = field.value || "";
    return values;
  }, {});
};

const CreateForm = (formName, model, children, activeAsset) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const fields = model.fields;
  return (
    <CenteredBox key={activeAsset}>
      <Formik
        initialValues={getInitialValues(fields)}
        validationSchema={getValidationSchema(fields)}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          const operation = model.operation;
          const backendMethod = presschain_azle_backend.registerJournalist; //[operation];
          console.log(values);
          if (backendMethod) {
            backendMethod(values)
              .then((response) => {
                alert("Operation successful!");
                setSubmitting(false);
              })
              .catch((error) => {
                alert(`Operation failed: ${error.toString()}`);
                console.log(error);

                setSubmitting(false);
              });
          } else {
            alert(`Operation method ${model.operation} not found on backend.`);
            console.log(error);
            setSubmitting(false);
          }
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <CenteredBox
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <CenteredBox
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 3,
                }}
              >
                {fields.map((field, index) => {
                  const InputComponent = FIELD_COMPONENTS[field.type];
                  if (InputComponent) {
                    return (
                      <InputComponent
                        key={field.name}
                        type={field.type}
                        required={field.required}
                        label={field.label}
                        name={field.name}
                        value={field.value}
                        defaultValue={field.defaultValue}
                        placeholder={field.placeholder}
                        variant={model.variant}
                        disabled={field.disabled}
                        sx={model.sx}
                      />
                    );
                  }
                  return null;
                })}
              </CenteredBox>
              {children}
            </CenteredBox>
            <MuiButton
              variant="contained"
              type="submit"
              disabled={isSubmitting}
              sx={{
                width: "20rem",
                py: 1,
                mt: 2,
                borderRadius: "2rem",
                textTransform: "none",
                color: "white.main",
                ...model.buttonSx,
              }}
              content={formName}
            />
          </Form>
        )}
      </Formik>
    </CenteredBox>
  );
};

export default CreateForm;
