package dataStructures;
import java.util.Arrays;

class ArrayTest {
    
    public static void main(String[] args) {
        int [] arr = {3,2,5,4};

        for(int a : arr){
            System.out.println(a);
        }
        System.out.println();
        Arrays.sort(arr);
        for(int a : arr){
            System.out.println(a);
        }
        
    }
}

