import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


// Validation Schema using yup


const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format")
        .required("email is required"),
    password: Yup.string().min(6, "Must be atleast 6 characters")
        .required("Password is required"),
});


function FormikForm() {
    return (
        <Formik
            initialValues={{ username: "", email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                alert("Form submitted Succesfully with formik!");
                conaole.log("User registered:", values);
            }}
        >
            <Form>
                <h2>Registration Form (Formik +Yup)</h2>

                <div>
                    <label> Username: </label>
                    <Field type="text" name="username" />
                    <ErrorMessage
                        name="username"
                        component="p"
                        style={{ color: "red" }}
                    />
                </div>
                <div>
                    <label> Email: </label>
                    <Field type="email" name="email" />
                    <ErrorMessage
                        name="email"
                        component="p"
                        style={{ color: "red" }}
                    />
                </div>

                <div>
                    <label> Password: </label>
                    <Field type="password" name="password" />
                    <ErrorMessage
                        name="password"
                        component="p"
                        style={{ color: "red" }}
                    />
                </div>
                <button type="submit">Register</button>
            </Form>

        </Formik>
    );
}

export default FormikForm;