function CustomBtn(props: { handleClick: () => void, label: string, class: string, id?: string, ref?: string }) {
    return (
        <>
            <button ref={props.ref} id={props.id} type="button" className={`px-3 my-2 border-2-transparent rounded-xl ${props.class}`} onClick={()=>props.handleClick()}> {props.label}</button >
        </>
    )
}

function CustomBtnParams(props: { handleClick: (...kwargs: any) => void, label: string, class: string, data: any, id?: string }) {
    // console.log("Data",props.data)
    return (
        <>
            <button id={props.id} type="button" className={`px-3 my-2 border-2-transparent rounded-xl ${props.class}`} onClick={() => props.handleClick(props.data)}> {props.label}</button>
        </>
    )
}


export default CustomBtn;
export { CustomBtnParams };