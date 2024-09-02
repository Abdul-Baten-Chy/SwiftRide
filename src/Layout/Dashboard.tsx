import useAuthCheck from "@/hook/useAuthCheck";
import { RootState } from "@/redux/Feature/store";
import { useAppSelector } from "@/redux/hook";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const userStatus = useAuthCheck();
  const { user } = useAppSelector((state: RootState) => state.auth);

  let content;
  if (user?.role == "user") {
    content = (
      <>
        <li className="text-3xl my-5 font-lato">User Panel</li>
        <li>
          <NavLink to={"profile"} className="font-lato">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to={"myBookings"} className="mt-2 font-lato">
            My Bookings
          </NavLink>
        </li>
        <li>
          <NavLink to={"/products"} className="mt-2 font-lato">
            Bookings
          </NavLink>
        </li>
      </>
    );
  }
  if (user?.role == "admin") {
    content = (
      <>
        <li className="text-3xl my-5 font-lato">Admin Panel </li>
        <li>
          <NavLink to={"profile"}>Profile</NavLink>{" "}
        </li>
        <li>
          <NavLink to={"addCar"}>Add Car</NavLink>{" "}
        </li>
        <li>
          <NavLink to={"allcars"}>All Cars</NavLink>{" "}
        </li>
      </>
    );
  }

  return (
    <>
      {userStatus ? (
        <div>
          <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col mt-8 md:mt-10 ml-6">
              {/* Page content here */}

              <Outlet></Outlet>
              <label
                htmlFor="my-drawer-2"
                className="btn btn-primary drawer-button lg:hidden"
              >
                Click
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <Link to={"/"}>
                  <li>Home</li>
                </Link>
                {content}

                {/* <li onClick={signOutUser} className="cursor-pointer">
              <span>Log Out</span>
            </li> */}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <p className="font-lato text-3xl font-bold text-center mt-20">
          Authenticating...
        </p>
      )}
    </>
  );
};

export default Dashboard;
