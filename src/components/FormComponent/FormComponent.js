import classes from "./FormComponent.module.css";

const FormComponent = (props) => {
  return (
    <main className={classes["form-ui"]}>
      <form onSubmit={props.onSubmit}>
        <h1>{props.headerText}</h1>
        {props.children}
      </form>
    </main>
  );
};

export default FormComponent;
