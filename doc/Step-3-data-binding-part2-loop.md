Data binding
============
Start with the step 2.
```bash
git checkout step-2-data-binding
```
 
```html
<div>
    <label>Name:</label>
    <input type="text" ng-model="yourName" placeholder="Enter a name here">
    <hr/>
    <h1>Hello {{yourName}}!</h1>
</div>
```

Now you can bind you input to any field, even it is not declared before. 
And you can output the value with just **{{prop}}**.