const HomePage = () => {
  const bodyStyle = {
    backgroundImage: "linear-gradient(to right, WhiteSmoke , WhiteSmoke, Thistle)"
    }
    
    const carruselStyle = {
        width: 600,
        height: 550,
     }
    
    
     const presentName = {
    color: "DarkOrchid",
    textAlign: "center",
    fontSyle: "monospace",
    letterSpacing: "5px",
    textShadow: "2px 2px GreenYellow",
    paddingTop: "80px",
    }
    
     const cardsStyle = {
      backgroundColor: 'white',
      paddingBottom: "50px"
    }
    
    const buttonStyle1 = {
      height: 35,
      width: 300,
      backgroundColor: "#FAD5E5",
      cursor: "pointer",
      borderRadius: "9px",
      borderStyle: "none",
      color: "Magenta"
    }
    
    const buttonStyle2 = {
      height: 35,
      width: 300,
      backgroundColor: "#6C37CC",
      cursor: "pointer",
      borderRadius: "9px",
      borderStyle: "none",
      color: "Thistle"
    }
    
    const buttonStyle3 = {
      height: 35,
      width: 300,
      backgroundColor: "#D8BFD8",
      cursor: "pointer",
      borderRadius: "9px",
      borderStyle: "none",
      color: "Indigo"
    }
    
    
    const imgCrds = {
      width: '280px', 
      height: '330px', 
      margin: '5px',
      borderRadius: "9px",
    }

  return (
  <>
  <div  style={bodyStyle}>
  <div className="container text-center">
  <div className="row">
  <div style={carruselStyle} > 
  <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
  <div className="carousel-inner">
  <div className="carousel-item active">
    <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1689210807/2_mmfgsc.png" className="d-block w-100" alt="..." />
  </div>
  <div className="carousel-item">
    <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1689210740/1_u9wkny.png" className="d-block w-100" alt="..." />
  </div>
  <div className="carousel-item">
    <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1689210821/3_euszns.png" className="d-block w-100" alt="..." />
  </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

<div className='col'>
  <h1 class="font-effect-neon" style={presentName}>UNOUNOSHIRTS x LY DIEGO</h1>  <br /> 
  <p style={{textAlign: "center", fontSize: 20, fontFamily: "'Courier New', monospace"}}>
  Todas las piezas son pintadas a mano, bajo pedido, esto <br /> 
  garantiza que el producto que adquieres será pintado exclusivamente para ti. <br /> <br /> 
  El trabajo es realizado con pinturas textiles y acrílicas <br /> hechas en México. <br /><br />
  Tus prendas pueden lavarse en máquina, plancharse y <br /> seguirán luciendo fantásticas.</p>
</div>
</div>
</div>

<div style={cardsStyle}>
<div className="container text-center">
  <div className="row">
    <div className="col-md"> 
    <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1689525601/12_hfgnvz.png" className="rounded float-start" alt="Helga Patiki" width={320} />
    <button style={buttonStyle1}>
    
      Hey Patinki!
    
    </button>
    </div>
    <div className="col-md">
    <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1689525609/13_vd6woc.png" className="rounded mx-auto d-block" alt="Lisa" width={320}/>
    <button style={buttonStyle2}>Lisa M. Simpson</button>
    </div>
    <div className="col-md">
    <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1689525602/14_buoqcf.png"  alt="Aneglica" width={320} />
    <button style={buttonStyle3}>Angelica Pickles</button>
    </div>
  </div>
</div>
</div>

<div className="container text-center">
  <div className="row row-cols-1 row-cols-md-3 g-5">
    <div className="col">     
    <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1689539510/britney-snake_cte0ym.png" style={imgCrds} alt='1'/>
    <p>SLAVE 4 U <br /><b>$599.00 MXN</b></p></div>
    <div className="col">    
    <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1688428587/vogue_vhmhts.png" style={imgCrds} alt='2' />
      <p>BRING BACK MY GIRL (B&W) <br /><b>$599.00</b></p></div>
    <div className="col"> 
    <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1689539443/tifannys_tj2gzy.png" style={imgCrds} alt='3' />
      <p>MOON RIVER<br /><b>$599.00 MXN</b></p></div>
    <div className="col">
      <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1689539236/cruella_cou8cy.png" style={imgCrds} alt='4' />
      <p>CRUELLA<br /><b>$610.00 MXN</b></p></div>
    <div className="col">
      <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1689539235/him_vsmpgw.png" style={imgCrds} alt='5' />
      <p>HIM<br /><b>$610.00 MXN</b></p></div>
    <div className="col">
      <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1689539236/the-devil-w-prada_carmpn.png" style={imgCrds} alt='6' />
      <p>THE DEVIL W PRADA<br /><b className="w3-text-red">$601.00 MXN</b></p></div>
    <div className="col">
      <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1689539236/I-didnt-again_ibladr.png" style={imgCrds} alt='7' />
      <p>I DID IT AGAIN<br /><b>$599.00 MXN</b></p></div>
    <div className="col">
      <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1689539236/life-in-plastic_mqfunr.png" style={imgCrds} alt='8' />
      <p>LIFE IN PLASTIC<br /><b>$600.00 MXN</b></p></div>
    <div className="col">    <div className="col">
      <img src="https://res.cloudinary.com/dujrua0vo/image/upload/v1689539516/barbie_zl1m5e.png" style={imgCrds} alt='9' />
      <p>STACY MALIBU<br /><b>$640.00 MXN</b></p></div>
    <div className="col"></div>
    </div>
  
  </div>
</div>
</div>
</>
  );
};

export default HomePage;
