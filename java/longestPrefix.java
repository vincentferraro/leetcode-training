package java;

import java.util.ArrayList;

// 14 Longest-Prefix
public class longestPrefix {
    public String longestCommonPrefix(String[] strs) {
        ArrayList<Character> dynamicArray = new ArrayList<>();
        int maxLength = 32;
        boolean prefix= true;
        for(String word : strs){
            if(word.length() < maxLength){
                maxLength = word.length();
            }
        }
        for(int i=0; i<maxLength; i++){
            char res=' ';
            do{
                for(int j = 0; j<strs.length;j++){
                if(strs[0].charAt(i)==strs[j].charAt(i)){
                    res = strs[0].charAt(i);
                    
                }else{
                    res=' ';
                    prefix =false;
                    break;
                }
            }
            }while(prefix == true);
            
            if(res != ' '){
                dynamicArray.add(res);
            }
            
        }

        StringBuilder stringBuilder = new StringBuilder(dynamicArray.size());
        for (Character character : dynamicArray) {
            stringBuilder.append(character);
        }
        String result = stringBuilder.toString();
        return result;
    };
}
