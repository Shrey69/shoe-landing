import React, { useState } from "react"

const Details = [
    {
    id:1,
    name: "shreyansh",
    email: "shreyansh@gmail.com"
},
{
    id:2,
    name: "agarwal",
    email: "agarwal@gmail.com"
},
{
    id:3,
    name: "elcamino",
    email: "elcamoino@gmail.com"
},
{
    id:4,
    name: "crazy",
    email: "crazy@gmail.com"
},

]

const Random = () =>{
    const [search, setSearch] = useState("");
    const [filterD, setFilterD] =useState(Details);


    const handleSearch = (e) => {
        setSearch(e.target.value);
    
        const filterData = Details.filter((i) =>
          i.name.includes(e.target.value) ||
          i.email.includes(e.target.value)
        );
        setFilterD(filterData);
      };
    

    return (
        <div className="flex justify-center items-center gap-8 py-8">
            <p>Search Bar</p>
            <input type="text"
            className="border border-2 hover:border-blue-800 rounded-lg"
            placeholder="Search here"
            onChange={handleSearch}
            value={search} />
           <ul>
        {filterD.map((i) => (
          <li key={i.id}>
            {i.id} - {i.name} - {i.email}
          </li>
        ))}
      </ul>
           
        </div>
    );
}

export default Random;