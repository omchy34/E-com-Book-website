import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import "./Profile.css";
import { NavLink } from "react-router-dom";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

const Profile = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(
    (state) => state.AccRefToken.AccRefToken.accessToken
  );
  const [showSideNav, setshowSideNav] = useState(false);
  const [UserData, setUserData] = useState({
    name: "",
    userName: "",
    email: "",
    phone: "",
    avatar: "",
  });

  function HandleNav() {
    setshowSideNav(!showSideNav);
  }

  async function fetchData() {
    try {
      const response = await axios.post(
        "https://backend-1-te09.onrender.com/api/v1/users/userData",
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response) {
        console.log(response.data);
        setUserData({
          name: response.data.data.user.fullName,
          userName: response.data.data.user.userName,
          email: response.data.data.user.email,
          phone: response.data.data.user.phone,
          avatar: response.data.data.user.avatar,
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Token not found");
      alert("please login again")
    }
  }

  useEffect(() => {
    if (accessToken) {
      fetchData();
    }
  }, [accessToken]);

  return (
      <>
      <section className="full bg-pink-100  backdrop-blur-3xl h-full w-full">
        <section className="inner flex">
      {/* left */}
          <div
            className="left bg-pink-900 max-h-screen w-60 backdrop-blur-3xl"
            id={showSideNav ? "sideNav" : ""}
          >
            <div className="sideNavFiled h-full w-full overflow-hidden">
              <div className="cross flex justify-end pr-10 pt-8" id="cross">
                <RxCross2 onClick={HandleNav} />
              </div>
              <section className="ProfileItem h-full w-full">
                <div className="image p-10">
                  <img
                    src={UserData.avatar}
                    alt="user img err"
                    className="rounded-full h-40 w-40 border-double border-8 border-red-500"
                    id="profileImg"
                  />
                </div>
                <h1 className="text-center text-2xl text-red-100">
                  {UserData.name}
                </h1>

                <section className="QuickLinks">
                  <div className="nav-links flex flex-col justify-center items-center pt-5 text-xl">
                    <ol className="flex flex-col gap-2 w-60 text-center">
                      <li className="bg-pink-800 rounded-2xl">
                        <NavLink to="#">Profile</NavLink>
                      </li>
                      <li className="bg-pink-800 rounded-2xl">
                        <NavLink to="#">Address</NavLink>
                      </li>
                      <li className="bg-pink-800 rounded-2xl">
                        <NavLink to="/OrderTracking">Orders</NavLink>
                      </li>
                    </ol>
                  </div>
                </section>
              </section>
            </div>
          </div>
          <section className="right bg-pink-200 h-screen w-screen">
            {/* right */}
            <section className="all">
              <div className={showSideNav ? "burgur" : "del"}>
                <RxHamburgerMenu className="ml-9 mt-6" onClick={HandleNav} />
              </div>

              <aside className="full m-10 h-screen">
               <div className="flex gap-5 text-xl flex-wrap flex-col">

               <div className="fullname flex gap-5"><p className="text-red-600">FullName:</p> <input type="text" value={UserData.name} /></div>
               <div className="email flex gap-5"><p className="text-red-600">Email:</p>  <input type="text" value={UserData.email}/></div>
               <div className="UserName flex gap-5"><p className="text-red-600">UserName:</p> <input type="text" value={UserData.userName}/></div>
               <div className="phone flex gap-5"><p className="text-red-600">Phone: </p> <input type="text" value={UserData.phone}/></div>
               <div className="PassWord flex gap-5"><p className="text-red-600">Password: </p>underProccess</div>
                <btn className='bg-red-600 p-1 w-24 text-center text-white cursor-pointer rounded-lg hover:bg-red-800'>Update</btn>

               </div>
              </aside>

            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Profile;
