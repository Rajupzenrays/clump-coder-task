import './Home.css'
function Home (){
	return(
		<>
			<div className="cointainer">
				<div className="covid">
					Get the latest on our COVID-19 response
				</div>
				<div className="mainDiv">
					<div className="switchtohostingMain">
						<div className="switch"><b>Switch to hosting</b> &nbsp;<i class="fas fa-globe"></i></div>
						<div><button className = "btn"><i class="fas fa-bars"></i>&nbsp;&nbsp;<i class="fas fa-user-circle"></i></button></div>

					</div>
					<div className="placetostay"><u>Place to stay</u></div>
					<div className="maincontainerforFiveDiv">
						<div className="inside location">Location<br/> Where are you going?</div>
						<div className="inside Checkin">Check in<br/>Adds dates</div>
						<div className="inside Checkout">Check out<br/> Add dates</div>
						<div className="inside Guest">Guest <br/> Add guest</div>
						<div className="search"><i class="fas fa-search"></i></div>
						
					</div>

					<div className="GoNear">
						<div > <h1>Go <br/>Near</h1></div>
						<div><button  className="explore">Explore nearby stays</button></div>
					</div>
				</div>
			</div>
			
		</>)

}
export default Home;