#include <bits/stdc++.h> 

#include<stack>

void sortIn(stack<int>&stack,int num) {
      
    if(stack.empty() ||  stack.top() < num)  {
        stack.push(num);
         return;
        
    }
    
    int x = stack.top();
    stack.pop();
    
    sortIn(stack,num);
    stack.push(x);
    
}
void sortStack(stack<int> &stack)
{
	// Write your code here
    if(stack.empty()) {
          return;
        
    }
    
    int n = stack.top();
    stack.pop();
    
    
    sortStack(stack);
    sortIn(stack,n);
    
}
