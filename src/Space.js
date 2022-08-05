const Space = ({colorValue}) => {
    return (
     <section 
     className="space"
     style={{backgroundColor: colorValue}}
     >
      <fieldset>
    <p>
      {colorValue? colorValue: "add something"}
  </p>      
      </fieldset>
  
  
     </section>
    )
   
  }
   Space.defaultProps = {
      colorValue: "Empty Place"
    }
  
  export default Space