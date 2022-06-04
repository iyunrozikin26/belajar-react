import React from "react";

const Profile = () => {
    const access_token = localStorage.getItem("access_token");

    return (
        <>
            {access_token && (
                <>
                    <div className="text-white font-bold flex justify-center items-center">
                        <span className="mr-3">Pemuda Tersesat</span>
                        <img className="w-10 h-10 rounded-full" src="https://play-lh.googleusercontent.com/I-Yd5tJnxw7Ks8FUhUiFr8I4kohd9phv5sRFHG_-nSX9AAD6Rcy570NBZVFJBKpepmc=w240-h480-rw" alt="Rounded avatar" />
                    </div>
                </>
            )}
        </>
    );
};

export default Profile;
