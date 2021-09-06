import React from "react";

const students = [
    {
        id: 1,
        Name: "Arun"
    },
    {
        id: 2,
        Name:"Dhruv"
    },
]

const Mentors = [
    {
        id: 1,
        Name:"Venkat",
    },
    {
        id: 2,
        Name:"Faraz"
    }
]

class Post extends React.Component{
    
    render() {
        const newStudents = students.map((student,index) => {
            return "key" + { index } + { student };
        })
        const newMentors = Mentors.map((mentor,index) => {
            return "key" + { index } + { mentor };
        })

        return(
            <div>
                <center>
                <h1>Using Rest API POST, Insert Record with Students and lectures</h1>
                <hr/>
                <h1>Select Student</h1>
                <select>
                    <option disabled selected="true">--select Student--</option>
                        <option>{newStudents }</option>
                </select>
                <br/>
                
                <h1>Select Mentor</h1>
                <select>
                    <option disabled selected="true">--select Mentor--</option>
                        <option>{newMentors }</option>
                </select>
                <br/>
                <br/>

                <button type="submit">Change</button>
                </center>

            </div>
        )

    }

}


export default Post;
