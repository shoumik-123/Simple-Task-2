import {useNavigate, useParams} from "react-router-dom";
import {Fragment, useEffect, useState} from "react";
import {getUsersDetails} from "../../Helper/SessionHelper.js";
// import { SingleUser } from "../../ApiRequest/ApiRequest.js";


const UserDetails = () => {
    const [user, setUser] = useState()
    const { id } = useParams();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                setUser(getUsersDetails()[id-1]);

            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, [id]);
    console.log(user)

    const navigate = useNavigate()


    const backBtn = () => {
        navigate('/')
    };
    return (
        <Fragment>
            <button onClick={backBtn} className="backBtn">Go Back</button>
            <div className="userDetails">

                <img
                    className="userImage"
                    src={user?.image}
                    alt="img"
                />


                <div>
                    <div className="detailsBlock-1">
                        <div>
                            <h1>{user?.firstName} {user?.lastName}</h1>
                            <p>Username : {user?.username}</p>
                        </div>

                    </div>


                    <div className="detailsBlock-2">

                        <p>Phone No : {user?.phone}</p>
                        <p>Email : {user?.email}</p>
                        <p>Address : {user?.address.address},  {user?.address.city},  {user?.address.state}</p>

                    </div>

                    <div className="detailsBlock-3">

                        <p>Age : {user?.age}</p>
                        <p>Date of Birth : {user?.birthDate}</p>
                        <p>Blood Group : {user?.bloodGroup}</p>
                        <p>Height : {user?.height}</p>
                        <p>Weidth : {user?.weidth}</p>
                        <p>Eye color : {user?.eyeColor}</p>
                        <p>Hair color : {user?.hair.color}</p>

                    </div>

                    <div className="detailsBlock-4">
                        <h2>University Name :</h2>
                        <p> {user?.university}</p>
                        <h2>Company :</h2>
                        <p>Conpany name : {user?.phone}</p>
                        <p>Position : {user?.company.title} dept of <b> {user?.company.department}</b></p>
                        <p>Address : {user?.company.address.address},  {user?.company.address.city},  {user?.company.address.state}</p>
                    </div>

                </div>
            </div>


        </Fragment>
    );
};

export default UserDetails;
