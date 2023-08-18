const DefaultCodes = {
    c: `#include <stdio.h>
  
  int main() {
    printf("Hi, I'm shvarshini :)");
    return 0;
  }`,
    cpp: `#include <bits/stdc++.h>
  #define ll long long
  #define ull unsigned long long
  using namespace std;
  
  int main() {
    cout << "Hi, I'm shvarshini :)" << endl;
    return 0;
  }`,
    rust: `fn main() {
    println!("Hi, I'm shvarshini :)");
  }`,
    javascript: `console.log("Hi, I'm shvarshini :));`,
    python: `print("Hi, I'm shvarshini :)")`,
    go: `package main
  
  import "fmt"
  
  func main() {
    fmt.Println!("Hi, I'm shvarshini :)")
  }`
  };
  
  export default DefaultCodes;