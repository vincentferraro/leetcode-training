package javaExo;

public class RemoveVal {

        public int removeElement(int[] nums, int val) {
            int index = 0;
            for (int i = 0; i < nums.length; i++) {
                if (nums[i] != val) {
                    nums[index] = nums[i];
                    index++;
                }
            }
            return index;
        }
}

class DemoRemoveVal{
    public static void main(String[] args) {
        RemoveVal v = new RemoveVal();
        int [] nums = {0,1,2,2,3,0,4,2};
        int res = v.removeElement(nums, 2);
        System.out.println(res);
    }
}