import { useForm } from "react-hook-form";
import { ring2 } from "ldrs";
import { useDispatch, useSelector } from "react-redux";
import { setCityName } from "../../store/slice/city-name-slice";
import { NavLink, Outlet } from "react-router";
import { NavbarContext } from "../../utils";
import { RootState } from "../../store";
ring2.register();

type FormValues = {
  country_name: string;
};

function Home() {
  const cityName = useSelector((state: RootState) => state.cityName);
  const dispatch = useDispatch();
  const { register, handleSubmit, formState } = useForm<FormValues>();
  const { errors } = formState;
  const onSubmit = (data: FormValues) => {
    dispatch(setCityName(data.country_name));
  };
  const navbarContext: NavbarContext[] = [
    {
      id: 1,
      name: "Currently",
      path: "/current",
    },
    {
      id: 2,
      name: "Forecast",
      path: "/forecast",
    },
  ];
  return (
    <section className="bg-primary-blue h-screen w-screen flex flex-col items-center ">
      <form
        className="mt-[7%]"
        action=""
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="flex items-center space-x-5">
          <input
            className={`w-[30vw] outline-none capitalize select-none hover:outline-4 hover:outline-black/30 rounded-lg px-4 py-2 space-x-2 bg-white border-2 border-transparent flex items-center ${
              errors.country_name ? " !border-[#F5004F]" : ""
            }`}
            autoComplete="off"
            {...register("country_name", {
              required: {
                value: true,
                message: "Country name is required",
              },
            })}
            type="search"
            placeholder="Enter Country Name"
          />
          <button className="bg-black p-3 rounded-lg hover:bg-black/80 text-white font-medium">
            Get Weather
          </button>
        </div>
        <p className="text-[#F5004F]">{errors.country_name?.message}</p>
      </form>
      <nav className="flex items-center space-x-5 my-10">
        {cityName &&
          navbarContext.map((item: NavbarContext) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={`rounded-full bg-white px-4 font-medium border-2 cursor-pointer border-black py-2`}
            >
              {item.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </section>
  );
}

export default Home;
