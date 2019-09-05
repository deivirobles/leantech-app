import React from 'react';
import OrderList from './components/OrderList'
import Logo from './logo.png'

function App() {
  return (    
			<div className="App">
				<div className="container">
					<div className="row navigation">
						<div className="col-2 logo">
							<a href="/">
								<img src={Logo} alt="Logo" className="img-fluid" />
							</a>
						</div>
						<div className="col align-self-center menu">
							<ul className="list-group list-group-horizontal">
								<li className="list-group-item active"><a href="/"><i className="fas fa-home"></i><br/>Home</a></li>
								<li className="list-group-item"><a href="#"><i className="fas fa-envelope"></i><br/>Message</a></li>
								<li className="list-group-item"><a href="#"><i className="fas fa-certificate"></i><br/>Wishlist</a></li>
								<li className="list-group-item"><a href="#"><i className="fas fa-cog"></i><br/>Settings</a></li>
								<li className="list-group-item"><a href="#"><i className="fas fa-envelope"></i><br/>Account</a></li>
							</ul>
						</div>
					</div>
					<div className="row filters">
						<div className="col-2" id="filtersSeparator">
							<div id="labelFilter">
								<span><i className="far fa-lightbulb"></i>&nbsp;Smart Filters</span>
							</div>
							<div className="separator"></div>
							<div className="filterOptions">
								<ul className="list-unstyled">
									<li>
										<div className="row">
											<div className="col" id="filterIcon"><i className="fas fa-star-of-life"></i></div>
											<div className="col">
												<div className="custom-control custom-switch">
													<input type="checkbox" className="custom-control-input" id="customSwitch1"/>
													<label className="custom-control-label" htmlFor="customSwitch1"></label>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="row">
											<div className="col" id="filterIcon"><i className="far fa-calendar-alt"></i></div>
											<div className="col">
												<div className="custom-control custom-switch">
													<input type="checkbox" className="custom-control-input" id="customSwitch2"/>
													<label className="custom-control-label" htmlFor="customSwitch2"></label>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="row">
											<div className="col" id="filterIcon"><i className="fas fa-heart"></i></div>
											<div className="col">
												<div className="custom-control custom-switch">
													<input type="checkbox" className="custom-control-input" id="customSwitch3"/>
													<label className="custom-control-label" htmlFor="customSwitch3"></label>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div className="separator"></div>
							<div id="labelStatus">
								<span>Status</span>
							</div>
							<form id="">
								<input className="form-control form-control-lg" type="text" placeholder="Search"/>
								<br/>
								<button type="button" className="btn btn-light btn-block">DELIVERED</button>
							</form>
						</div>
						<div className="col">
							<div className="row">
								<div className="col">
									<OrderList/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}

export default App;
