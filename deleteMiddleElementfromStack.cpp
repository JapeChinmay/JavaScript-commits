
void ans( stack<int>&inputStack, int N ,int c) {
      
    if(c == N/2) {
          inputStack.pop();
        return;
        
    }
    
    int num = inputStack.top();
    inputStack.pop();
    
    ans(inputStack, N, c+1);
    inputStack.push(num);
    
}
void deleteMiddle(stack<int>&inputStack, int N){
	
   // Write your code here
    
    int count = 0;
    
    
    ans(inputStack, N, count);
    
    
    
   
}
