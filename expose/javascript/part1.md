![Code Block for Questions 1-3](../../assets/q1-3.png)
### What is printed by line 9? If the code returns an error, explain why.

On line 9, the following will be printed: 

`values added: 20`

### What is printed by line 13? If the code returns an error, explain why. 

`final result: 20`

### Why should you not use `var`? Explain why. 

The reason why you should refrain from using `var` is that it is no longer used in modern scripts for the following reasons:
1. `var` has no block scope, either being function-scoped or global-scoped. 
2. `var` tolerates redeclarations. Its modern counterpart, `let`, will raise an error should you redeclare a variable with the same name; `var` will not.
3. `var` declarations are processed at function start (for global variable declared with `var`, it'll get processed at the start of the script or .js file)

These differences make `var` worse than `let` most of the time.

---

![Code Block for Questions 1-3](../../assets/q4-5.png)

### What is printed by line 9? If the code returns an error, explain why. 



### What is printed by line 13? If the code returns an error, explain why. 