/*
A rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) are the coordinates of its bottom-left corner, and (x2, y2) are the coordinates of its top-right corner.

Two rectangles overlap if the area of their intersection is positive.  To be clear, two rectangles that only touch at the corner or edges do not overlap.

Given two (axis-aligned) rectangles, return whether they overlap.
*/
var isRectangleOverlap = function(rec1, rec2) {
    let result = 0;
    
    function compare(a1,a2,b1,b2){
        if(a1>b1){
            if(b2>a1){
                return true;
            }
        }else if(a1<b1){
            if(a2>b1){
                return true;
            }
        }else{
            if(a1-a2>0 && b1-b2>0){
            return true;}
            if(a1-a2<0 && b1-b2<0){
            return true;
            }
        }
        return false;
    }
    return compare(rec1[0],rec1[2],rec2[0],rec2[2]) && compare(rec1[1],rec1[3],rec2[1],rec2[3]);

};
