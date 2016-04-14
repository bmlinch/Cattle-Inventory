app.factory('Models', function(DS){
	return {
		Customer: Customer(),
		Order: Order(),
		Product: Product(),
		Review: Review()
	}
	
	function Customer(){
		return DS.defineResource({
			name: 'customer',
			endpoint: 'customers',
			relations: {
				belongsTo:{
					user: {
						localField: 'user',
						foreignKey: 'userId'
					}
				},
				hasMany: {
					orders: {
						localField: 'orders',
						foreignKey: 'customerId'
					},
					reviews: {
						localField: 'reviews',
						foreignKey: 'reviewId'
					} 
				}
			}
		})
	}
	
	function Order(){
		return DS.defineResource({
			name: 'order',
			endpoint: 'orders',
			relations: {
				belongsTo:{
					customer: {
						localField: 'customer',
						localKey: 'customerId',
						parent: true
					}
				},
				hasMany: {
					products: {
						localField: 'products',
						foreignKey: 'productId'
					}
				}
			}
		});
	}
	
	function Product(){
		return DS.defineResource({
			name: 'product',
			endpoint: 'products',
			relations: {
				hasMany: {
					orders: {
						localField: 'orders',
						foreignKey: 'orderId'
					},
					reviews: {
						localField: 'reviews',
						foreignKey: 'reviewId'
					}
				}
			}
		})
	}
	
	function Review(){
		return DS.defineResource({
			name: 'review',
			endpoint: 'reviews',
			relations: {
				belongsTo:{
					customer: {
						localField: 'customer',
						localKey: 'customerId',
						parent: true
					},
					product: {
						localField: 'product',
						localKey: 'productId'
					}
				}
			}
		});
	}
	
});