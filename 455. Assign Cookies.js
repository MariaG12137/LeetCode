/*
Assume you are an awesome parent and want to give your children some cookies. 
But, you should give each child at most one cookie. Each child i has a greed factor gi,
which is the minimum size of a cookie that the child will be content with; and each cookie 
j has a size sj. If sj >= gi, we can assign the cookie j to the child i, and the child i will
be content. Your goal is to maximize the number of your content children and output the maximum number.
*/
var findContentChildren = function(g, s) {
    g = g.sort((a,b)=>(a-b));
    s = s.sort((a,b)=>(a-b));
    let result = 0;
    let i = 0;
    let j = 0;
    
    while(i<g.length && j<s.length){
        if(g[i]<=s[j]){
            result++;
            i++;
            j++;
        }else{
            j++;
        }
    }
    return result
};
