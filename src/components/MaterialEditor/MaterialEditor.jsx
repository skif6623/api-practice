import { Formik, Form, Field } from 'formik';

export const MaterialEditor = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    console.log(values);
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <label>
            Опис
            <Field name="title" type="text" />
          </label>
          <label>
            Посилання
            <Field name="link" type="text"></Field>
          </label>
          <button type="submit" disabled={isSubmitting}>
            Добавити матеріал
          </button>
        </Form>
      )}
    </Formik>
  );
};
