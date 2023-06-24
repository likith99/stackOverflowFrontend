
const Avatar=({children,background,fontsize,color,px,py,borderRadius,cursor})=>{
    const style={
        background,
        borderRadius,
        color:color||"black",
        fontsize,
        textAlign:"center",
        cursor:cursor|| null,
        padding:`${px} ${py}`
        

    }

return(
    <div style={style}>
        {children}
    </div>
)
}
export default Avatar