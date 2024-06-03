import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ data }) => {
    const { snippet } = data;
    // console.log(snippet)
    return (
        <Link to={"/watch?v=" + data.id}>
            <div className="w-80 rounded-lg">
                <img
                    className="rounded-lg"
                    alt="video card"
                    src={snippet.thumbnails.medium.url}
                ></img>

                <div className="w-72">
                    <h3 className="font-bold">{snippet.title.split("|")[0]}</h3>
                </div>
            </div>
        </Link>
    );
};

export default VideoCard;
