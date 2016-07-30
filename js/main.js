;(function () {
	
	'use strict';

	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// OffCanvass
	var offCanvass = function() {
		$('body').on('click', '.js-fh5co-menu-btn.menu-opener, .js-fh5co-offcanvass-close,.menu-closer', function(){
			$('#fh5co-offcanvass').toggleClass('fh5co-awake');
		});
	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {
		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvass, .js-fh5co-menu-btn");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	if ( $('#fh5co-offcanvass').hasClass('fh5co-awake') ) {
	    		$('#fh5co-offcanvass').removeClass('fh5co-awake');
	    	}
	    }
		});

		$(window).scroll(function(){
			if ( $(window).scrollTop() > 500 ) {
				if ( $('#fh5co-offcanvass').hasClass('fh5co-awake') ) {
		    		$('#fh5co-offcanvass').removeClass('fh5co-awake');
		    	}
	    	}
		});
	};

	// Magnific Popup
	
	var magnifPopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
			titleSrc: 'title',
			gallery:{
				enabled:true
			},
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it

				duration: 300, // duration of the effect, in milliseconds
				easing: 'ease-in-out', // CSS transition easing function

				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function(openerElement) {
				// openerElement is the element on which popup was initialized, in this case its <a> tag
				// you don't need to add "opener" option if this code matches your needs, it's defailt one.
				return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});
	};



	var animateBoxWayPoint = function() {

		if ($('.animate-box').length > 0) {
			$('.animate-box').waypoint( function( direction ) {

				if( direction === 'down' && !$(this).hasClass('animated') ) {
					$(this.element).addClass('bounceIn animated');
				}

			} , { offset: '92%' } );
		}

	};
	var contractorHowItWorks = function(){
		$('.contractor.how-it-works,.menu-contractor').magnificPopup({
			items:{
				type:'inline',
				src:'<div class="how-it-works popup-content clearfix">\
					<div class="col-sm-7 p-lr0">\
						<img src="images/contractor_filled-icons-greenbackcrop.png" />\
					</div>\
					<div class="description col-sm-5">\
						<h3>For Contractor </h3>\
						<ul>\
							<li class="tick"><span class="text">Construction Companies, Builders & \
							Individuals engaged in Construction.</span></li>\
							<li class="tick"><span class="text">Setup your projects, add or modify requirements \
							and we will take care of getting you the best \
							prices for delivery to your project site.</span></li> \
							<li class="tick"><span class="text">Real time quotes available always.</span></li> \
							<li class="tick"><span class="text">No need to request for a quote ever.</span></li> \
							<li class="tick"><span class="text">Secured payment mechanism through Nodal Account. </span></li>\
							<li class="tick"><span class="text">Payment released to Vendor only after receipt of goods.</span></li>\
						</ul>\
					</div>\
					</div>'
			},
			zoom: {
					enabled: true, // By default it's false, so don't forget to enable it

					duration: 300, // duration of the effect, in milliseconds
					easing: 'ease-in-out', // CSS transition easing function

					// The "opener" function should return the element from which popup will be zoomed in
					// and to which popup will be scaled down
					// By defailt it looks for an image tag:
					opener: function(openerElement) {
					// openerElement is the element on which popup was initialized, in this case its <a> tag
					// you don't need to add "opener" option if this code matches your needs, it's defailt one.
					return openerElement.is('img') ? openerElement : openerElement.find('img');
					}
				}
		})
	}
	var vendorHowItWorks = function(){
		$('.vendor.how-it-works,.menu-vendor').magnificPopup({
			items:{
				type:'inline',
				src:'<div class="how-it-works popup-content clearfix">\
					<div class="col-sm-7 p-lr0">\
						<img src="images/vendor_filled-icons_geenbackcrop.png" />\
					</div>\
					<div class="description col-sm-5">\
						<h3>For Vendor </h3>\
						<ul>\
							<li class="tick"><span class="text">Material Suppliers, Machinery Suppliers, Labor Contractors, HR Consultants & \
							Piece Rate Work Contractors</span></li>\
							<li class="tick"><span class="text">Setup your price list & we will get you business. \
							Easy upload facility to modify price list as frequently as you want.</span></li>\
							<li class="tick"><span class="text">Order confirmation only upon receipt of payment to our Nodal account or verified payment instrument </span></li>\
							<li class="tick"><span class="text">Payments released within 24 Hrs of receipt of goods.</span></li>\
							<li class="tick"><span class="text">Qty based pricing through special Quotes</span></li>\
						</ul>\
					</div>\
					</div>'
			},
			zoom: {
					enabled: true, // By default it's false, so don't forget to enable it

					duration: 300, // duration of the effect, in milliseconds
					easing: 'ease-in-out', // CSS transition easing function

					// The "opener" function should return the element from which popup will be zoomed in
					// and to which popup will be scaled down
					// By defailt it looks for an image tag:
					opener: function(openerElement) {
					// openerElement is the element on which popup was initialized, in this case its <a> tag
					// you don't need to add "opener" option if this code matches your needs, it's defailt one.
					return openerElement.is('img') ? openerElement : openerElement.find('img');
					}
				}
		})
	}
	var transporterHowItWorks = function(){
		$('.transporter.how-it-works,.menu-transporter').magnificPopup({
			items:{
				type:'inline',
				src:'<div class="how-it-works popup-content clearfix">\
					<div class="col-sm-7 p-lr0">\
						<img src="images/transporter_filled-icons_greenbackcrop.png" />\
					</div>\
					<div class="description col-sm-5">\
						<h3>For Transporter </h3>\
						<ul>\
							<li class="tick"><span class="text">Logistics handling companies and anybody engaged in transport services</span></li>\
							<li class="tick"><span class="text">Setup your price list & we will get you business.</span></li>\
							<li class="tick"><span class="text">Easy upload facility to modify price list as frequently as you want.</span></li>\
							<li class="tick"><span class="text">Order confirmation only upon receipt of payment to our Nodal account or verified payment instrument </span></li>\
							<li class="tick"><span class="text">Payments released within 24 Hrs of receipt of goods.</span></li>\
							<li class="tick"><span class="text">Mandatory transit insurance for risk free transportation</span></li>\
						</ul>\
					</div>\
					</div>'
			},
			zoom: {
					enabled: true, // By default it's false, so don't forget to enable it

					duration: 300, // duration of the effect, in milliseconds
					easing: 'ease-in-out', // CSS transition easing function

					// The "opener" function should return the element from which popup will be zoomed in
					// and to which popup will be scaled down
					// By defailt it looks for an image tag:
					opener: function(openerElement) {
					// openerElement is the element on which popup was initialized, in this case its <a> tag
					// you don't need to add "opener" option if this code matches your needs, it's defailt one.
					return openerElement.is('img') ? openerElement : openerElement.find('img');
					}
				}
		})
	}
	// var aboutUspopupOpener = function () {
	//    $('.popupOpener-aboutus,.menu-aboutus').magnificPopup({
	//       items : {
	//          src:'<div class="popup-content aboutUs">\
	//          		<h2 class="popup-header">About Us</h2><hr>\
	//          		<br>\
	//           		<p>AYNIC was incorporated by passionate individuals with vast experience in Construction, IT and Supply Chain Management to increase operational efficiency in the construction industry through a  dedicated industry specific B2B market place.</p>\
	// 		         <ul>\
	// 		         	<li class="tick"><span class="text">Cut down the time required for Order Processing by more than 500% with the elimination of the RFQ & Comparitive Analysis in finalising the Order.</span></li>\
	// 		         	<li class="tick"><span class="text">No more transportation worries as all quotes are for delivery to project site including transportation.</span></li>\
	// 		      		<li class="tick"><span class="text">Single platform to procure goods (construction materials machinery & spares) and services (hire machinery, labor, technical staff and work quotes from qualified labor and PRW contractors).</span></li>\
	// 		   		</ul>\
	// 		   		<h6>Why AYNIC is different</h6>\
	// 		   		<div class="points">\
	// 		   			<div class="card">\
	// 					<div class="traditional-point">Quotes sourced only from 3 to 5 Vendors leaving a vast chunk of vendors who may offer lower rates and quick delivery.</div\
	// 					<div class="aynic-point"><div class="aynic-point">Multiple quotes from different vendors across the country. Choose the best quote based on price, distance and time to deliver.\
	// 					Quantity based discount quotes for clearance sales / optimal factory utilisation.</div>\
	// 					</div>\
	// 					<div class="card">\
	// 					<div class="traditional-point">Transportation mostly left out of Vendors scope increasing overhead and lead time for delivery of goods.</div>\
	// 					<div class="aynic-point">Transportation fulfilled by AYNIC for Ex-Works quotes from Vendors.</div>\
	// 					</div>\
	// 					<div class="card">\
	// 					<div class="traditional-point">Lack of trust & payment mechanisms to safeguard mutual interests leading to restricted dealings between Contractors and Vendors. </div>\
	// 					<div class="aynic-point">Secured payment mechanism to safeguard Contractor and Vendor interests.\
	// 					Legal & Financial Services for Order fulfilment.</div>\
	// 					</div>\
	// 					<div class="card">\
	// 					<div class="traditional-point">Non availability of real time pricing and last mile delivery quotes.</div>\
	// 					<div class="aynic-point">Real time last mile delivery Quotes against specific project requirements from Vendors across geographical regions.\
	// 					Internal credit rating for Vendors & Contractors to facilitate differential pricing.</div>\
	// 					</div>\
	// 		   		</div>\
 //     			</div>'
	//       }
	//    })    
	// }
	var whatWeDoOpener = function () {
 $('.popupOpener-aboutus,.menu-aboutus').magnificPopup({
 	      items : {
	         src:'<div class="popup-content whatwedo">\
	         		<h2 class="popup-header">What we do</h2><hr>\
	         		<br>\
	          		<p>Operate an industry specific B2B Market place for constuction industry connecting contractors with Vendors and Transporters to increase operational efficency in procurement of goods, Services, Man power and Spares.</p>\
			   		<img src="images/whatwedo1.png" />\
     			</div>'
	      }
	   })    
	}
		var aboutUspopupOpener = function () {
	   $('.popupOpener-whatwedo,.menu-whatwedo').magnificPopup({
	      items : {
	         src:'<div class="popup-content whatwedo">\
	         <h2 class="popup-header">About Us</h2><hr>\
	         		<br>\
	          		<p>AYNIC was incorporated by passionate individuals with vast experience in Construction, IT and Supply Chain Management to increase operational efficiency in the construction industry through a  dedicated industry specific B2B market place.</p>\
			         <ul>\
			         	<li class="tick"><span class="text">Cut down the time required for Order Processing by more than 500% with the elimination of the RFQ & Comparitive Analysis in finalising the Order.</span></li>\
			         	<li class="tick"><span class="text">No more transportation worries as all quotes are for delivery to project site including transportation.</span></li>\
			      		<li class="tick"><span class="text">Single platform to procure goods (construction materials machinery & spares) and services (hire machinery, labor, technical staff and work quotes from qualified labor and PRW contractors).</span></li>\
			   		</ul>\
			   		<div class="text-center">\
			   		<img src="images/presentation2crop.png" class="w-75" />\
			   		</div>\
     			</div>'
	      }
	   })    
	}
	var manpower = function(){
		$('.popupOpener-manpower').magnificPopup({
			items:{
				src:'<div class="popup-content row text-center category">\
						<div class="card-header">Man Power</div>\
						<div class="col-sm-3 text-center">\
							<div class="icon"><img src="images/icons/project_manager_256.png" alt=""></div>\
							<div class="image-name">Project Manager</div>\
						</div>\
						<div class="col-sm-3 text-center">\
							<div class="icon"><img src="images/icons/site_engineer_256.png" alt=""></div>\
							<div class="image-name">Site Engineer</div>\
						</div>\
						<div class="col-sm-3 text-center">\
							<div class="icon"><img src="images/icons/foreman_256.png" alt=""></div>\
							<div class="image-name">Foreman</div>\
						</div>\
						<div class="col-sm-3 text-center">\
							<div class="icon"><img src="images/icons/lab_technician_256.png" alt=""></div>\
							<div class="image-name">Lab Technician</div>\
						</div>\
						<div class="col-sm-3 text-center">\
							<div class="icon"><img src="images/icons/superviser_256.png" alt=""></div>\
							<div class="image-name">Superviser</div>\
						</div>\
						<div class="col-sm-3 text-center">\
							<div class="icon"><img src="images/icons/mate_256.png" alt=""></div>\
							<div class="image-name">Mate</div>\
						</div>\
						<div class="col-sm-3 text-center">\
							<div class="icon"><img src="images/icons/mazdoor_256.png" alt=""></div>\
							<div class="image-name">Mazdoor</div>\
						</div>\
						<div class="col-sm-3 text-center">\
							<div class="icon"><img src="images/icons/machine_operator_256.png" alt=""></div>\
							<div class="image-name">Machine Operator</div>\
						</div>\
						<div class="many-more">and many more ... Please <a href="http://aynicportal.herokuapp.com/#/page/signup"> Register</a> to explore further</div>\
					</div>'
			}
		})
	}
	var machinery = function(){
		$('.popupOpener-machinery').magnificPopup({
			items:{
				src:'<div class="popup-content row text-center category">\
						<div class="card-header">Machinery</div>\
						<div class="col-sm-3 text-center">\
							<div class="icon"><img src="images/icons/excavator_256.png" alt=""></div>\
							<div class="image-name">Excavator</div>\
						</div>\
						<div class="col-sm-3 text-center">\
							<div class="icon"><img src="images/icons/dumper_256.png" alt=""></div>\
							<div class="image-name">Dumper</div>\
						</div>\
						<div class="col-sm-3 text-center">\
							<div class="icon"><img src="images/icons/roller_256.png" alt=""></div>\
							<div class="image-name">Rollers</div>\
						</div>\
						<div class="col-sm-3 text-center">\
							<div class="icon"><img src="images/icons/paver_256.png" alt=""></div>\
							<div class="image-name">Pavers</div>\
						</div>\
						<div class="col-sm-3 text-center">\
							<div class="icon"><img src="images/icons/plant_256.png" alt=""></div>\
							<div class="image-name">Plants</div>\
						</div>\
						<div class="col-sm-3 text-center">\
							<div class="icon"><img src="images/icons/grader_256.png" alt=""></div>\
							<div class="image-name">Graders</div>\
						</div>\
						<div class="col-sm-3 text-center">\
							<div class="icon"><img src="images/icons/generator_256.png" alt=""></div>\
							<div class="image-name">DGs</div>\
						</div>\
						<div class="col-sm-3 text-center">\
							<div class="icon"><img src="images/icons/admixture_256.png" alt=""></div>\
							<div class="image-name">Concrete Mixture</div>\
						</div>\
						<div class="many-more">and many more ... Please <a href="http://aynicportal.herokuapp.com/#/page/signup"> Register</a> to explore further</div>\
					</div>'
			}
		})
	}
	var services = function(){
		$('.popupOpener-services').magnificPopup({
			items:{
				src:'<div class="popup-content row text-center category">\
						<div class="card-header">Services</div>\
						<div class="col-sm-3 text-center">\
							<div class="icon"><img src="images/icons/orm_256.png" alt=""></div>\
							<div class="image-name">O&M of Plant</div>\
						</div>\
						<div class="col-sm-3 text-center">\
							<div class="icon"><img src="images/icons/earthworks_256.png" alt=""></div>\
							<div class="image-name">Earth Works</div>\
						</div>\
						<div class="col-sm-3 text-center">\
							<div class="icon"><img src="images/icons/drilling_256.png" alt=""></div>\
							<div class="image-name">Drilling and Blasting</div>\
						</div>\
						<div class="col-sm-3 text-center">\
							<div class="icon"><img src="images/icons/centering_256.png" alt=""></div>\
							<div class="image-name">Centering</div>\
						</div>\
						<div class="col-sm-3 text-center">\
							<div class="icon"><img src="images/icons/truck_256.png" alt=""></div>\
							<div class="image-name">Transport Of Material</div>\
						</div>\
						<div class="col-sm-3 text-center">\
							<div class="icon"><img src="images/icons/design_256.png" alt=""></div>\
							<div class="image-name">Design and Drawings</div>\
						</div>\
						<div class="col-sm-3 text-center">\
							<div class="icon"><img src="images/icons/pmc_256.png" alt=""></div>\
							<div class="image-name">PMC</div>\
						</div>\
						<div class="col-sm-3 text-center">\
							<div class="icon"><img src="images/icons/survey_256.png" alt=""></div>\
							<div class="image-name">Survey</div>\
						</div>\
						<div class="many-more">and many more ... Please <a href="http://aynicportal.herokuapp.com/#/page/signup"> Register</a> to explore further</div>\
					</div>'
			}
		})
	}
	
	var material = function(){
		$('.popupOpener-material').magnificPopup({
			items:{
				src:'<div class="popup-content"><div class="row category">\
					<div class="card-header">Material</div>\
					<div class="col-sm-3 text-center">\
						<div class="icon"><img src="images/icons/cement_256.png" alt=""></div>\
						<div class="image-name">Cement</div>\
					</div>\
					<div class="col-sm-3 text-center">\
						<div class="icon"><img src="images/icons/steel_256.png" alt=""></div>\
						<div class="image-name">Steel</div>\
					</div>\
					<div class="col-sm-3 text-center">\
						<div class="icon"><img src="images/icons/aggregate_256.png" alt=""></div>\
						<div class="image-name">Aggregate and Sand</div>\
					</div>\
					<div class="col-sm-3 text-center">\
						<div class="icon"><img src="images/icons/oil_256.png" alt=""></div>\
						<div class="image-name">Oil and Lubricants</div>\
					</div>\
					<div class="col-sm-3 text-center">\
						<div class="icon"><img src="images/icons/bitumen_256.png" alt=""></div>\
						<div class="image-name">Bitumen</div>\
					</div>\
					<div class="col-sm-3 text-center">\
						<div class="icon"><img src="images/icons/brick_256.png" alt=""></div>\
						<div class="image-name">bricks</div>\
					</div>\
					<div class="col-sm-3 text-center">\
						<div class="icon"><img src="images/icons/cable_256.png" alt=""></div>\
						<div class="image-name">Cables</div>\
					</div>\
					<div class="col-sm-3 text-center">\
						<div class="icon"><img src="images/icons/pipe_256.png" alt=""></div>\
						<div class="image-name">Pipes</div>\
					</div>\
					<div class="many-more">and many more ... Please <a href="http://aynicportal.herokuapp.com/#/page/signup"> Register</a> to explore further</div>\
				</div></div>'
			}
		})
	}
	var spares = function(){
		$('.popupOpener-spares').magnificPopup({
			items:{
				src:'<div class="popup-content"><div class="row category">\
					<div class="card-header">Spares</div>\
					<div class="col-sm-3 text-center">\
						<div class="icon"><img src="images/icons/bolt_256.png" alt=""></div>\
						<div class="image-name">Nuts and Bolts</div>\
					</div>\
					<div class="col-sm-3 text-center">\
						<div class="icon"><img src="images/icons/filter_256.png" alt=""></div>\
						<div class="image-name">Filters</div>\
					</div>\
					<div class="col-sm-3 text-center">\
						<div class="icon"><img src="images/icons/tyre_256.jpg" alt=""></div>\
						<div class="image-name">Tyres</div>\
					</div>\
					<div class="col-sm-3 text-center">\
						<div class="icon"><img src="images/icons/bearing_256.jpg" alt=""></div>\
						<div class="image-name">Bearings</div>\
					</div>\
					<div class="col-sm-3 text-center">\
						<div class="icon"><img src="images/icons/crane2_256.png" alt=""></div>\
						<div class="image-name">Crane Tool</div>\
					</div>\
					<div class="col-sm-3 text-center">\
						<div class="icon"><img src="images/icons/gear_256.png" alt=""></div>\
						<div class="image-name">Gear</div>\
					</div>\
					<div class="col-sm-3 text-center">\
						<div class="icon"><img src="images/icons/wheel_256.png" alt=""></div>\
						<div class="image-name">Wheel</div>\
					</div>\
					<div class="col-sm-3 text-center">\
						<div class="icon"><img src="images/icons/pipe_256.png" alt=""></div>\
						<div class="image-name">Pipes</div>\
					</div>\
					<div class="many-more">and many more ... Please <a href="http://aynicportal.herokuapp.com/#/page/signup"> Register</a> to explore further</div>\
				</div></div>'
			}
		})
	}
	
	$(window).load(function(){
		(function(){
			$('.masonry').masonry({
			  // options
			  itemSelector: '.masonry-child',
			  columnWidth: '.masonry-child'
			});
		})();

		magnifPopup();
		offCanvass();
		mobileMenuOutsideClick();
		animateBoxWayPoint();
		contractorHowItWorks();
		vendorHowItWorks();
		transporterHowItWorks();
		aboutUspopupOpener();
		whatWeDoOpener();
		manpower();
		machinery();
		material();
		spares();
		services();
	})
	
	// $(function(){
	// 	(function(){
	// 		$('.masonry').masonry({
	// 		  // options
	// 		  itemSelector: '.masonry-child',
	// 		  columnWidth: '.masonry-child'
	// 		});
	// 	})();

	// 	magnifPopup();
	// 	offCanvass();
	// 	mobileMenuOutsideClick();
	// 	animateBoxWayPoint();
	// 	contractorHowItWorks();
	// 	vendorHowItWorks();
	// 	transporterHowItWorks();
	// 	aboutUspopupOpener();
	// 	whatWeDoOpener();
	// });
	
}());