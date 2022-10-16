#include <bits/stdc++.h> 
#include<stack>


void ans(stack<int>&s, int topush) {
      
      if(s.empty()) {
           s.push(topush);
          return;
      }
    
    int num = s.top();
    s.pop();
    
    ans(s,topush);
    s.push(num);
    
}
stack<int> pushAtBottom(stack<int>& myStack, int x) 
{
    // Write your code here.
    
    ans(myStack, x);
    return myStack;
    
}
