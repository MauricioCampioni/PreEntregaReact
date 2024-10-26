


const StylesImg = {
    boxShadow: "3px 2px 5px rgb(9,6,6)",
    transition: "all 500ms",
    width: "350px",
    height: "380px",
    "&:hover":{
        transform: "scale(1.1)",
    },
}
   


const StyleNavBar = {
    fontSize: "20px",
    display: "flex",
    textDecoration: 'none',
    alignItems: "right",
    justifyContent: "space-evenly",
    backgroundColor: "Orange",
    listStyle: "none",
    height: "40px",
}
const StyleBanner = {
    width: "100%",
    height: "200px",
}
const StyleButton = {
    padding: '10px 20px',
    marginTop: '20px',
    marginBottom:'10px',
    borderRadius: '4px',
    fontFamily: 'Arial, Helvetica',
    fontSize: '20px',
    cursor: 'pointer'
}
const h4Styles = {
    fontFamily: 'Arial, Helvetica',
    fontSize:'20px'
}
const h2Styles = {
    fontFamily: 'Arial, Helvetica',
    fontSize:'30px',
    color: 'blue'
}

export {StylesImg, StyleNavBar, StyleBanner, StyleButton, h4Styles, h2Styles}