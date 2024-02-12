import { Fragment, useEffect, useState } from "react";
import { allUsers } from "../../ApiRequest/ApiRequest.js";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineSearch } from "react-icons/ai";
import {Link} from "react-router-dom";
import {setUsersDetails} from "../../Helper/SessionHelper.js";

const Home = () => {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortType, setSortType] = useState("ascending");
    const [sortByField, setSortByField] = useState("name");


    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const result = await allUsers();
                setUsers(result.users);
            } catch (e) {
                console.log(e);
            }
        };
        fetchAllData();
    }, []);
    setUsersDetails(users)


    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSortByFieldChange = (event) => {
        setSortByField(event.target.value);
    };

    const handleSortTypeChange = (event) => {
        setSortType(event.target.value);
    };

    const sortFunc = (results, sortType, sortByField) => {
        const sortedResults = [...results];
        sortedResults.sort((a, b) => {
            let fieldA = a[sortByField] || '';
            let fieldB = b[sortByField] || '';

            // Handle sorting by email
            if (sortByField === 'email') {
                fieldA = a.email || '';
                fieldB = b.email || '';
            }

            // Handle sorting by company name
            if (sortByField === 'companyName') {
                fieldA = (a.company && a.company.name) || '';
                fieldB = (b.company && b.company.name) || '';
            }

            // Perform sorting based on the selected field and sort type
            if (sortType === 'ascending') {
                return fieldA.localeCompare(fieldB);
            } else if (sortType === 'descending') {
                return fieldB.localeCompare(fieldA);
            }
        });
        return sortedResults;
    };

    const filteredUsers = users.filter(user =>
        user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.company.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedUsers = sortFunc(filteredUsers, sortType, sortByField);

    return (
        <Fragment>
            <div className="nav">
                <div className="logo"><VscAccount className="profileIcon" /></div>
                <div className="nav-search">
                    <AiOutlineSearch style={{ fontSize: "25px" }} />
                    <input type="search" value={searchQuery} onChange={handleSearch} placeholder="Search by name" />
                </div>
                <div className="sortSection">
                    <span>Sort By</span>
                    <select value={sortByField} onChange={handleSortByFieldChange}>
                        <option value="name">Name</option>
                        <option value="email">Email</option>
                        <option value="companyName">Company Name</option>
                    </select>

                    <span>Sort Order</span>
                    <select value={sortType} onChange={handleSortTypeChange}>
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                </div>
            </div>

            <div className="users">
                {sortedUsers.map((user, index) => (
                    <div key={index} className="userCard">
                        <img
                            className="userImg"
                            src={user.image}
                            alt=""
                        />
                        <div className="userDetailsDiv">
                            <div className="nameDiv">
                                <Link to={`user/${users[index].id}`} id>{user.firstName} {user.lastName}</Link>
                            </div>
                            <div>
                                <span>Email : {user.email}</span>
                                <br />
                                <span>Address : {user.address.address}, {user.address.city}</span>
                                <br />
                                <span>Company Name : {user.company.name}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default Home;
