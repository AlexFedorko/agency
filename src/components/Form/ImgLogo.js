import React, {memo} from 'react'


function ImgLogo () {
    return (
        <img
            className="avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            alt="logo"
            height='28px'
        />
    )
}

export default memo(ImgLogo);