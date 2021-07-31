import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup";
import { FormField, Button, Label } from 'semantic-ui-react';
import DKTextInput from '../utilities/customFormControls/DKTextInput';

export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: 10 }
    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunludur.")
    })
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                <Form className="ui form">
                    <DKTextInput name="productName" placeholder="Ürün adı"></DKTextInput>
                    <DKTextInput name="unitPrice" placeholder="Ürün fiyatı"></DKTextInput>
                    <Button color="green" type="submit" >Ekle</Button>
                </Form>
            </Formik>
        </div>
    )
}
