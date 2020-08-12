import React from 'react'
import PropTypes from 'prop-types'

Profile.propTypes={data:PropTypes.array}
Profile.defaultProps={data:[{fullName:"",bio:"",profession:"",image:""}]}
function Profile({children, data, handleName}) {
    
    return (
        <div className="profile-style" onClick={() => handleName(data[0].fullName)} >
            {data.map(profile => 
            <div>
            <h1>{profile.fullName}</h1>
            <h3>{profile.bio}</h3>
            <h3>{profile.profession}</h3>
        
            <>{children} </>
            </div>)

            }
        </div>
    )
}


export default Profile
