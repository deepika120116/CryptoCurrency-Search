

const ImageCard = (props) => {
    const { image, name, current_price, market_cap_rank, market_cap } = props;
  return (
      <div className="card" style={{ width: "18rem", marginTop: "10px" ,display:"flex", justifyContent:"center", alignItems:"center", marginRight:15}}>
          <div className="mt-3"> 
            <img src={image} alt={name} height="80" width="80"/>
          </div>
  <div className="card-body">
    <h5 className="card-title" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>{name}</h5>
              <p style={{display:"flex", justifyContent:"center", alignItems:"center"}}>Price: {`$${current_price}`}</p>   
              <p style={{display:"flex", justifyContent:"center", alignItems:"center"}}>Rank:{market_cap_rank}</p>
              <p style={{display:"flex", justifyContent:"center", alignItems:"center"}}>Market Cap: {market_cap}</p>
  </div>
</div>
  )
}

export default ImageCard