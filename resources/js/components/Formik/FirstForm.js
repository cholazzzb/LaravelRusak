import React from "react";
import { useFormik } from "formik";

function FirstForm() {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            channel: ""
        }
    });

    console.log('Form values', formik.values)
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                ></input>

                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                ></input>

                <label htmlFor="channel">Channel</label>
                <input
                    type="text"
                    id="channel"
                    name="channel"
                    onChange={formik.handleChange}
                    value={formik.values.channel}
                ></input>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FirstForm;
