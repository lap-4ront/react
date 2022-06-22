import { Button } from "components/Button/Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createShortLink } from "store/slice/linkSlice";

import classes from "./Form.module.scss";

const Form = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    mode: "onSubmit"
  });

  const onSubmit = ({ Url }) => {
    dispatch(createShortLink(Url));
  };

  return (
    <section className={classes.section}>
      <div className="container">
        <form
          className={classes.form}
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="url"
            placeholder="Shorten a link here..."
            className={classes.input}
            {...register("Url", {
              required: "Please add a link",
              pattern: {
                value:
                  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
                message: "Please, enter a valid url address"
              }
            })}
          />
          <Button variant="square" type="submit" size="medium">
            Shorten it!
          </Button>
          {errors.Url && (
            <div className={classes.error}>{errors.Url.message}</div>
          )}
        </form>
      </div>
    </section>
  );
};

export { Form };
