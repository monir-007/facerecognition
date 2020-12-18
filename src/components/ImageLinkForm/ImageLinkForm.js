import React  from 'react';
import './ImageLinkForm.css'
const ImageLinkForm = () => {
    return (
        <div className="">
            <p className="f3">
                {"This Magic Brain will detect faces in your ppictures. Give it a try."}
            </p>
            <div className="center form">
                <div className=" center pa4 br3 shadow-5">
                    <input className="f4 pa2 w-70 center" type="text"/>
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple br2 pointer">Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;