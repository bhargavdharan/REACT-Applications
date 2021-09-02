import React from "react";


class Post extends React.Component{

    render() {
        return(
            <div>
                <center>
                <h1>Using Rest API POST, Insert Record with Students and lectures</h1>
                <hr/>
                <h1>Select Student</h1>
                <select>
                    <option disabled selected="true">--select Student--</option>
                    <option></option>
                </select>
                <br/>
                
                <h1>Select Mentor</h1>
                <select>
                    <option disabled selected="true">--select Mentor--</option>
                    <option></option>
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
