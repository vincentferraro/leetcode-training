package javaExo;

public class RemoveDuplicateFromSortedArray {
    
    public int removeDuplicate(int [] nums){
        int k = 0;
        int length = nums.length;
        for(int i = 1 ; i <length; i++){
            if(nums[i] == nums[i-1]){
                int j = i;
                k +=1;
                while(j< nums.length-k){
                    System.out.println("Ici");
                    nums[j] = nums[j+1];
                    j +=1;
                }
                System.out.println("Ici");
                nums[j]='_';
                
            }
            length -= 1;
        }
       System.out.println(nums.toString());
        return k;

    }
    

}

class DemoRemove{
    public static void main(String[] args) {
        
        
        int [] arr = {0,0,1,1,1,2,2,3,3,4};
        RemoveDuplicateFromSortedArray r = new RemoveDuplicateFromSortedArray();
        int res = r.removeDuplicate(arr);

        System.out.println(res);
    }
}