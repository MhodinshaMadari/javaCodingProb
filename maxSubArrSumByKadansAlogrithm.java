public class maxSubArrSumByKadansAlogrithm {
    
    public static void main(String[] args) {
        
        int[] srcArray = { -2, -3, 4, -1, -2, 1, 5, -3};
        
        System.out.println("Maximum sub array sum : " + maxSubArrSum(srcArray));
        
    }
    
    public static int maxSubArrSum(int[] srcArr) {
        int maxEndingHere = srcArr[0];
        int maxSoFar = srcArr[0];
        
        for(int ind = 1; ind < srcArr.length; ind++) {
            maxEndingHere = Math.max(srcArr[ind], srcArr[ind] + maxEndingHere);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        return maxSoFar;
    }
    
}


// Output 
// Maximum sub array sum : 7
