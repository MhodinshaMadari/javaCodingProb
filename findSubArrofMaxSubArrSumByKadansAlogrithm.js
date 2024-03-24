// Online Java Compiler
// Use this editor to write, compile and run your Java code online
import java.util.*;

public class findSubArrofMaxSubArrSumByKadansAlogrithm {
    
    public static void main(String[] args) {
        
        int[] srcArray = { -2, -3, 4, -1, -2, 1, 5, -3};
        
        // System.out.println("Maximum sub array sum : " + findSubArrofMaxSum(srcArray));
        findSubArrofMaxSum(srcArray);
        
    }
    
    public static void findSubArrofMaxSum(int[] srcArr) {
        int maxEndingHere = 0;
        int maxSoFar = Integer.MIN_VALUE;
        int start = 0;
        int end = 0;
        int s = 0;
        
        for(int ind = 0; ind < srcArr.length; ind++) {
            maxEndingHere += srcArr[ind];
            
            if(maxEndingHere > maxSoFar) {
                maxSoFar = maxEndingHere;
                start = s;
                end = ind;
            }
            
            if(maxEndingHere < 0) {
                maxEndingHere = 0;
                s = ind + 1;
            }
        }
        System.out.println("Maximaum SubArray sum : " +  maxSoFar);
        System.out.print("Sub Array : [");
        for(int ind = start; ind <= end; ind++)
            System.out.print(srcArr[ind]+",");
         System.out.println("]");
    }
    
}
