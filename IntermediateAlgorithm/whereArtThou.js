function where(collection, source) {
			var arr = new Array;
			for(let i of collection){
				var flag=0;
				for(let m in i){
					for(let j in source){
					if(j==m){
						if(source[j]==i[m]){
							flag++;
							}
						}
					}
					}if(flag==Object.keys(source).length){
						arr.push(i);
				}
				
			}
  			return arr;
}
