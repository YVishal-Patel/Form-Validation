import { useForm } from "react-hook-form";
import './Component/form.css'


function App() {
  const {register,handleSubmit, formState: { errors },reset, trigger,} = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="container ">
       <div className="header">
          <h2>Form Validation</h2>
          </div>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form_items">
              <label>Name:</label>
              <input type="text" placeholder="Enter username" {...register("name", { required: "Name is Required",
                minLength: {
                  value: 6,
                  message: "Minimum Required length is 6",
                } })}
                onKeyUp={() => {
                  trigger("name");}}/>
              {errors.name && (
                <small className="small_element">{errors.name.message}</small>
              )} </div>

            <div className="form_items">
              <label >Age:</label>
              <input type="text" placeholder="Enter Age"    {...register("age", { required: "Age is Required",
                  min: {
                    value: 13,
                    message: "Minimum Required age is 13",
                  },
                  max: {
                    value: 65,
                    message: "Maximum allowed age is 65",
                  },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Only numbers are allowed",
                  } })}
                onKeyUp={() => {
                  trigger("age");
                }}  />
              {errors.age && (
                <small  className="small_element">{errors.age.message}</small>
              )} </div>

            <div className="form_items">
              <label >Email:</label>
              <input  type="email" placeholder="Enter email"   {...register("email", { required: "Email is Required" ,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }})}
                onKeyUp={() => {
                  trigger("email");
                }}  />
              {errors.email && (
                <small className="small_element" >{errors.email.message}</small>
              )} </div>
            <div className="form_items">

              <label >Phone:</label>
              <input type="number" placeholder="Enter number" {...register("phone", { required: "Phone is Required",
                pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Invalid phone no",
                } })}
               onKeyUp={() => {
                trigger("phone");
              }}  />
              {errors.phone && (
                <small className="small_element">{errors.phone.message}</small>
              )} </div>

                <div className="form_items">
              <label >Password:</label>
              <input type="password" placeholder="Enter Password" {...register("password", { required: "Password is Required",
                 pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                  message: "Password should contain 1 capital letter ,small letters,numbers. ",
                  } })}
               onKeyUp={() => {
                trigger("");
              }}  />
              {errors.password && (
                <small className="small_element">{errors.password.message}</small>
              )} </div>
            <input
              type="submit"
              className="Submit_btn"
              value="Submit" />
          </form>
        </div>
  );
}

export default App;
