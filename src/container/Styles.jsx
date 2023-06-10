

const Stylesdetail = {
    fontSize: "20px",
    color: "blue",
    fontFamily: "Roboto",
}
const StylesImg = {
    boxShadow: "3px 2px 5px rgb(9,6,6)",
    transition: "all 500ms",
    width: "350px",
    height: "380px",
    "&:hover":{
        transform: "scale(1.1)",
    },
};
   


const StyleNavBar = {
    fontSize: "20px",
    display: "flex",
    textdecoration: 'none',
    alignItems: "right",
    justifyContent: "space-around",
    backgroundColor: "Orange",
    listStyle: "none",
    height: "40px",
}
const StyleBanner = {
    width: "100%",
    height: "200px",
}
const StyleButton = {
    listStyle: "none",
    fontSize:"20px",
    borderRadius:"5px",
}


export {Stylesdetail, StylesImg, StyleNavBar, StyleBanner, StyleButton}