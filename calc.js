// Example 1
// Bid		Quality		Format Impaci	= 	Ad Rank
// $3.50	High		Low				= 	23
// $2		High		High			=	20
// $1		Medium		Medium			=	8
// $4		Low	No 		Formats			=	5

// Example 2
// Bid		Quality		Format Impaci	= 	Ad Rank
// $3		High		Low				= 	15
// $2		High		High			=	20
// $1		Medium		Medium			=	8
// $4		Low	 		No Formats		=	5

var bid,
	quality,
	format = [],
	data = [];



function calc(bid, qual, form){

	// Bids
	Object.keys(bid).forEach(function(keys){
		var b = bid[keys];

		// Quality
		Object.keys(qual).forEach(function(keys){
			var q = qual[keys];

			// Format
			Object.keys(form).forEach(function(keys){
				var f = form[keys],
					r;

				// Super Secret Formula
				r = b * q * f;

				if(r === 15 || r === 20 || r === 8 || r === 5){
					console.log('=======');
					console.log("Bid: "+b);
					console.log("Quality: "+q);
					console.log("Rank: "+r);
					console.log("Format: "+f);
					console.log('=======');

					data.push([b,q,f,r]);
				}
			});

		});
	})

	console.log(data);

}

bid = [3,2,1,4];
quality = [1,2,3,4,5,6,7,8,9,10];

for(var i = 0;i <= 100; i++){
	format.push(i/100);
}

calc(bid,quality,format);

$(document).ready(function() {
    $('#adrank').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="example"></table>' );
 
    $('#example').dataTable( {
        "data": data,
        "columns": [
            { "title": "Bid" },
            { "title": "Quality" },
            { "title": "Format" },
            { "title": "Rank", "class": "center" }
        ]
    } );   
} );