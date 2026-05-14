import { useRef } from "react";

function TextItem(){
    const inputRef = useRef(null);

    // const focused = () => {
    //     inputRef.current.focus()
    // }

    return(
        <div>
            <input ref={inputRef} type="text" />
            {/* <button onClick={focused}>Text focus</button> */}
        </div>
    )
}

export default TextItem;