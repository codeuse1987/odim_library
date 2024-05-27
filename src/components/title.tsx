import CustomBtn from "./customBtn";

function Title(props:{handleClick:() => void}) {



    return (
        <>
            <div className="bg-gray-500 flex flex-row justify-between px-3">
                <h1 className="text-white px-3 my-2 text-3xl">Library</h1>
                {/* <button className="px-3 my-2 text-2xl border-2-transparent rounded-xl bg-sky-200" onClick={()=>props.handleClick()}> Add Book</button> */}
                <CustomBtn class="text-2xl bg-sky-200" handleClick={props.handleClick} label="Add Book"/>
                {/* <div className="flex align-middle">
                    { <button > Add Book</button> 
                </div> */}
            </div>
        </>
    )
}

export default Title;