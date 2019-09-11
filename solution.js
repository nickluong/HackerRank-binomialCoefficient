function binomialCoeff(N, K) { 
    let result = 1; 
  
    for (let i = 0; i < K; ++i) { 
      result *= (N - i); 
      result /= (i + 1); 
    } 
  
    if(K > N || res > Math.pow(10, 9))
       return -1;
        
    return result; 
  } 
  
  binomialCoeff(3,5) //-1