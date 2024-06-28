import { Form, Formik } from "formik";
import MUITextField from "components/forms/inputs/textField";
import { Box } from "@mui/material";
import getValidationSchema from "./getValidationSchema";
import { MuiButton } from "components/common/Button";
import { presschain_azle_backend } from "declarations/presschain_azle_backend";
import { useDispatch } from "react-redux";

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
  const fields = model.fields;
  const dispatch = useDispatch();

  return (
    <CenteredBox key={activeAsset}>
      <Formik
        initialValues={getInitialValues(fields)}
        validationSchema={getValidationSchema(fields)}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          const backendMethod = presschain_azle_backend[model.operation];
          const args = model.fields.map((field) => values[field.name]);
          if (backendMethod) {
            backendMethod(...args)
              .then((response) => {
                const res = JSON.parse(response);
                if (res.type === "error") {
                  setSubmitting(false);
                  model.dispatch &&
                    dispatch(model.dispatch.error({ error: res.message }));
                  return;
                }
                model.dispatch && dispatch(model.dispatch.success(res));
                setSubmitting(false);
              })
              .catch((error) => {
                console.log(error);
                model.dispatch &&
                  dispatch(model.dispatch.error({ error: error.message }));
                setSubmitting(false);
              });
          } else {
            alert(`Operation method ${model.operation} not found on backend.`);
            console.log(error);
            model.dispatch &&
              dispatch(model.dispatch.error({ error: error.message }));
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
