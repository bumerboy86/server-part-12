import { Formik, Field, ErrorMessage, Form } from "formik";
import { useEffect, useState } from "react";
import { IUserPre } from "../../interfaces/IUserPre.ts";
import { userFormSchema } from "../../schema/userFormSchema.ts";
import {
  useAddUserMutation,
  useLoginUserMutation,
} from "../../store/controllers/userApi.ts";
import styles from "./CreateUserForm.module.css";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../store/hooks.ts";
import { setUser } from "../../store/slices/user.slice.ts";
import FormContainer from "../../components/FormContainer/FormContainer.tsx";

const CreateUserForm = () => {
  const [addUser, { isSuccess, data }] = useAddUserMutation();
  const dispatch = useAppDispatch();
  const [login, { isSuccess: LoginSuccess, data: loginData }] =
    useLoginUserMutation();
  const [reg, setReg] = useState<boolean>(false);

  const [userData] = useState<IUserPre>({
    password: "",
    email: "",
  });

  useEffect(() => {
    isSuccess && toast.success(`Пользователь ${data?.email} добавлен`);
  }, [isSuccess]);

  useEffect(() => {
    if (LoginSuccess && loginData) {
      toast.success(`Вход ${loginData?.email} выполнен`);
      dispatch(setUser(loginData));
    }
  }, [LoginSuccess]);

  return (
    <FormContainer>
      <article>
        <button onClick={() => setReg(false)}>Вход</button>
        <button onClick={() => setReg(true)}>Регист</button>
      </article>
      <Formik
        initialValues={userData}
        validateOnBlur
        validationSchema={userFormSchema}
        onSubmit={async (values, { resetForm }) => {
          reg ? await addUser(values) : await login(values);
          resetForm();
        }}
      >
        {({ isValid }) => (
          <Form className={styles.addForm}>
            <Field
              className={styles.addFormInput}
              name='email'
              type='text'
              placeholder='Введите Email'
            />
            <ErrorMessage name='email' component='div' />
            <Field
              className={styles.addFormInput}
              name='password'
              type='text'
              placeholder='Введите пароль'
            />
            <ErrorMessage name='password' component='div' />
            <button disabled={!isValid} type='submit'>
              {reg ? "Зарегестрировать" : "Войти"}
            </button>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default CreateUserForm;
