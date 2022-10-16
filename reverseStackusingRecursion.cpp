
void insertAtBtm(int num ,stack<int>&stack ) {
    
     if(stack.empty()) {
           stack.push(num);
         return;
     }
    
    int x = stack.top();
    stack.pop();
    
    insertAtBtm(num ,stack);
    
    stack.push(x);
    
    
    
}
void reverseStack(stack<int> &stack) {
    // Write your code here
    
    if(stack.empty()) {
         return;
        
    }
    
    int num = stack.top();
    stack.pop();
    
    reverseStack(stack);
    
    insertAtBtm(num,stack);
    
}
