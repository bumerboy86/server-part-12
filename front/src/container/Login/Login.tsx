import { useEffect } from "react";
import Container from "../../components/Container/Container.tsx";
import { useDeleteUserMutation } from "../../store/controllers/userApi.ts";
import { useAppDispatch, useAppSelector } from "../../store/hooks.ts";
import styles from "./Login.module.css";
import { toast } from "react-toastify";
import EditUserForm from "../EditUserForm/EditUserForm.tsx";
import { clearUser } from "../../store/slices/user.slice.ts";
import CreateUserForm from "../CreateUserForm/CreateUserForm.tsx";

const Login = () => {
  const { user } = useAppSelector((state) => state.user);
  const [deleteHandler, { isSuccess, data: deleteData }] =
    useDeleteUserMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    isSuccess && toast.info(`Пользователь ${deleteData?.email} удален`);
  }, [isSuccess]);
  return (
    <Container>
      <div>
        {!user ? (
          <CreateUserForm />
        ) : (
          <button onClick={() => dispatch(clearUser())}>Выход</button>
        )}
        {user && (
          <div key={user.id} className={styles.userItems}>
            <p className={styles.userText}>email: {user.email}</p>
            <p className={styles.userText}>password: {user.password}</p>
            <button onClick={() => deleteHandler(user.id)}>Удалить</button>
            <EditUserForm data={user} />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Login;
